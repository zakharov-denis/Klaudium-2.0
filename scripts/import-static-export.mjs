import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const sourceDir =
  process.env.KLAUDIUM_SOURCE || "/Users/deniszakharov/Developer/Klaudium";
const projectDir = process.cwd();
const generatedDir = path.join(projectDir, "src", "generated", "pages");
const assetsDir = path.join(projectDir, "public", "assets", "framer");

const pageSources = [
  ["home", "index.html"],
  ["contact", "contact/page.html"],
  ["blog", "blog/page.html"],
  ["coursedemo", "coursedemo/page.html"],
  ["privacy-page", "privacy-page/page.html"],
  ["terms-of-use", "terms-of-use/page.html"],
  [
    "blog-the-future-of-ai-automation-how-it-s-changing-business-operations",
    "blog/the-future-of-ai-automation-how-it-s-changing-business-operations/page.html"
  ],
  [
    "blog-5-must-have-ai-tools-to-streamline-your-business",
    "blog/5-must-have-ai-tools-to-streamline-your-business/page.html"
  ],
  [
    "blog-ai-vs-manual-work-which-one-saves-more-time-money",
    "blog/ai-vs-manual-work-which-one-saves-more-time-money/page.html"
  ],
  [
    "blog-how-ai-is-transforming-workflow-automation-for-businesses",
    "blog/how-ai-is-transforming-workflow-automation-for-businesses/page.html"
  ]
];

const staticAssetPatterns = [
  /https:\/\/framerusercontent\.com\/(?:images|assets|third-party-assets)\/[^\s"'<>),]+/g,
  /https:\/\/fonts\.gstatic\.com\/[^\s"'<>),]+\.woff2/g
];

function sha(value) {
  return createHash("sha1").update(value).digest("hex").slice(0, 12);
}

function safeName(value) {
  return value
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-zA-Z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70);
}

function normalizeUrl(rawUrl) {
  return rawUrl.replaceAll("&amp;", "&");
}

function localAssetPath(url) {
  const parsed = new URL(url);
  const base = path.basename(parsed.pathname);
  const ext = path.extname(base) || ".bin";
  const stem = safeName(base) || "asset";
  return `/assets/framer/${stem}-${sha(url)}${ext}`;
}

function collectAssetUrls(html) {
  const urls = new Set();
  for (const pattern of staticAssetPatterns) {
    for (const match of html.matchAll(pattern)) {
      urls.add(normalizeUrl(match[0]));
    }
  }
  return urls;
}

function replaceAllAssetUrls(html, assetMap) {
  let next = html;
  for (const [remote, local] of Object.entries(assetMap)) {
    next = next.replaceAll(remote, local).replaceAll(remote.replaceAll("&", "&amp;"), local);
  }
  return next;
}

function decodeCfEmail(hex) {
  const key = Number.parseInt(hex.slice(0, 2), 16);
  let email = "";
  for (let index = 2; index < hex.length; index += 2) {
    email += String.fromCharCode(Number.parseInt(hex.slice(index, index + 2), 16) ^ key);
  }
  return email;
}

function decodeCloudflareEmails(html) {
  let next = html.replace(
    /<span\b([^>]*?)class="([^"]*\b__cf_email__\b[^"]*)"([^>]*?)data-cfemail="([a-f0-9]+)"([^>]*)>[\s\S]*?<\/span>/gi,
    (_match, before, className, middle, hex, after) => {
      const keep = `${before}class="${className.replace(/\b__cf_email__\b/g, "").trim()}"${middle}${after}`;
      return `<span${keep}>${decodeCfEmail(hex)}</span>`;
    }
  );

  next = next.replace(
    /href=(["'])\/cdn-cgi\/l\/email-protection#([a-f0-9]+)\1/gi,
    (_match, quote, hex) => `href=${quote}mailto:${decodeCfEmail(hex)}${quote}`
  );

  return next;
}

function applyBrandReplacement(html) {
  return html
    .replaceAll("VIBE FOUNDING STDIO", "Klaudium Studio")
    .replaceAll("VIBE FOUNDING STUDIO", "Klaudium Studio")
    .replaceAll("VIBE FOUNDING", "Klaudium Studio");
}

function rewriteInternalLinks(html) {
  return html
    .replaceAll('href="./"', 'href="/"')
    .replaceAll('href="./#', 'href="/#')
    .replaceAll('href="./about"', 'href="/about"')
    .replaceAll('href="./contact"', 'href="/contact"')
    .replaceAll('href="./blog"', 'href="/blog"')
    .replaceAll('href="./coursedemo"', 'href="/coursedemo"')
    .replaceAll('href="./privacy-page"', 'href="/privacy-page"')
    .replaceAll('href="./terms-of-use"', 'href="/terms-of-use"')
    .replaceAll('href="./blog/', 'href="/blog/')
    .replaceAll('href="./cdn-cgi/l/email-protection', 'href="/cdn-cgi/l/email-protection')
    .replaceAll('href="./terms"', 'href="/terms"')
    .replaceAll('href="./privacy"', 'href="/privacy"');
}

function sanitizeHtml(html, assetMap) {
  const styleTags = [...html.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/gi)].map(
    (match) => match[0]
  );
  const bodyMatch = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);
  let body = bodyMatch ? bodyMatch[1] : html;

  body = body
    .replace(/<script\b[\s\S]*?<\/script>/gi, "")
    .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<link\b[^>]*>/gi, "")
    .replace(/\sdata-framer-hydrate-v2="[^"]*"/gi, "")
    .replace(/\sdata-framer-ssr-released-at="[^"]*"/gi, "")
    .replace(/\sdata-framer-page-optimized-at="[^"]*"/gi, "")
    .replace(/\sdata-framer-generated-page\b/gi, "")
    .replace(/\sdata-framer-appear-id="[^"]*"/gi, "")
    .replace(/\sdata-framer-layout-hint-center-x="[^"]*"/gi, "")
    .replace(/\sdata-framer-original-sizes="[^"]*"/gi, "")
    .replace(/\sdata-framer-cursor="[^"]*"/gi, "");

  const styleBlock = styleTags.join("\n");
  let fragment = `${styleBlock}\n${body}`;
  fragment = applyBrandReplacement(fragment);
  fragment = decodeCloudflareEmails(fragment);
  fragment = rewriteInternalLinks(fragment);
  fragment = replaceAllAssetUrls(fragment, assetMap);

  return fragment.trim();
}

async function downloadAsset(remote, local) {
  const localFile = path.join(projectDir, "public", local);
  if (existsSync(localFile)) return;

  await mkdir(path.dirname(localFile), { recursive: true });
  const response = await fetch(remote);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${remote}: ${response.status} ${response.statusText}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(localFile, buffer);
}

async function runWithConcurrency(items, limit, worker) {
  let index = 0;
  const runners = Array.from({ length: limit }, async () => {
    while (index < items.length) {
      const current = items[index];
      index += 1;
      await worker(current);
    }
  });
  await Promise.all(runners);
}

async function main() {
  await mkdir(generatedDir, { recursive: true });
  await mkdir(assetsDir, { recursive: true });

  const rawPages = [];
  const assetUrls = new Set();

  for (const [key, relativePath] of pageSources) {
    const absolutePath = path.join(sourceDir, relativePath);
    const html = await readFile(absolutePath, "utf8");
    rawPages.push([key, html]);
    for (const url of collectAssetUrls(html)) assetUrls.add(url);
  }

  const assetMap = {};
  for (const remote of assetUrls) assetMap[remote] = localAssetPath(remote);

  const assets = Object.entries(assetMap);
  await runWithConcurrency(assets, 8, async ([remote, local]) => {
    await downloadAsset(remote, local);
  });

  for (const [key, html] of rawPages) {
    const fragment = sanitizeHtml(html, assetMap);
    await writeFile(path.join(generatedDir, `${key}.html`), fragment, "utf8");
  }

  await writeFile(
    path.join(projectDir, "src", "generated", "asset-manifest.json"),
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        count: assets.length,
        assets: assetMap
      },
      null,
      2
    ),
    "utf8"
  );

  console.log(`Imported ${rawPages.length} pages and localized ${assets.length} assets.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
