"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

const appIcons = [
  { name: "OpenAI", mark: "AI", color: "#10a37f", glow: "rgba(16, 163, 127, 0.55)" },
  { name: "Claude", mark: "Cl", color: "#d97745", glow: "rgba(217, 119, 69, 0.5)" },
  { name: "Gemini", mark: "G", color: "#8ab4f8", glow: "rgba(138, 180, 248, 0.58)" },
  { name: "LangChain", mark: "LC", color: "#2dd4bf", glow: "rgba(45, 212, 191, 0.52)" },
  { name: "LangGraph", mark: "LG", color: "#22c55e", glow: "rgba(34, 197, 94, 0.52)" },
  { name: "CrewAI", mark: "Cr", color: "#a78bfa", glow: "rgba(167, 139, 250, 0.55)" },
  { name: "n8n", mark: "n8n", color: "#ff6d5a", glow: "rgba(255, 109, 90, 0.52)" },
  { name: "Supabase", mark: "S", color: "#3ecf8e", glow: "rgba(62, 207, 142, 0.52)" },
  { name: "Firebase", mark: "Fb", color: "#ffca28", glow: "rgba(255, 202, 40, 0.48)" },
  { name: "PostgreSQL", mark: "Pg", color: "#7dd3fc", glow: "rgba(125, 211, 252, 0.5)" },
  { name: "Redis", mark: "Rd", color: "#ef4444", glow: "rgba(239, 68, 68, 0.5)" },
  { name: "Notion", mark: "N", color: "#f8fafc", glow: "rgba(248, 250, 252, 0.48)" },
  { name: "Google Drive", mark: "Dr", color: "#34a853", glow: "rgba(52, 168, 83, 0.5)" },
  { name: "Slack", mark: "Sl", color: "#ec4899", glow: "rgba(236, 72, 153, 0.5)" },
  { name: "Gmail", mark: "Gm", color: "#ea4335", glow: "rgba(234, 67, 53, 0.5)" },
  { name: "Google Calendar", mark: "Cal", color: "#4285f4", glow: "rgba(66, 133, 244, 0.52)" },
  { name: "Linear", mark: "Ln", color: "#a855f7", glow: "rgba(168, 85, 247, 0.54)" },
  { name: "Jira", mark: "J", color: "#2684ff", glow: "rgba(38, 132, 255, 0.54)" },
  { name: "Confluence", mark: "Cf", color: "#0052cc", glow: "rgba(0, 82, 204, 0.52)" },
  { name: "Stripe", mark: "St", color: "#635bff", glow: "rgba(99, 91, 255, 0.55)" },
  { name: "HubSpot", mark: "Hs", color: "#ff7a59", glow: "rgba(255, 122, 89, 0.52)" },
  { name: "Salesforce", mark: "Sf", color: "#00a1e0", glow: "rgba(0, 161, 224, 0.52)" },
  { name: "Shopify", mark: "Sh", color: "#95bf47", glow: "rgba(149, 191, 71, 0.52)" },
  { name: "Calendly", mark: "Cy", color: "#006bff", glow: "rgba(0, 107, 255, 0.52)" },
  { name: "Typeform", mark: "Tf", color: "#facc15", glow: "rgba(250, 204, 21, 0.48)" },
  { name: "GitHub", mark: "Gh", color: "#f8fafc", glow: "rgba(248, 250, 252, 0.45)" },
  { name: "Docker", mark: "D", color: "#2496ed", glow: "rgba(36, 150, 237, 0.54)" },
  { name: "AWS", mark: "AWS", color: "#ff9900", glow: "rgba(255, 153, 0, 0.5)" },
  { name: "Oracle", mark: "Or", color: "#f80000", glow: "rgba(248, 0, 0, 0.5)" }
];

const cycleDuration = 5000;

function HumanHand() {
  return (
    <img
      className="home-human-hand"
      src="/assets/hero/human-hand-reference.webp"
      alt=""
      aria-hidden="true"
      decoding="async"
      draggable={false}
    />
  );
}

function RobotHand() {
  return (
    <svg
      className="home-robot-hand"
      viewBox="0 0 780 380"
      role="img"
      aria-label=""
      focusable="false"
    >
      <defs>
        <linearGradient id="robotWhite" x1="6%" y1="100%" x2="92%" y2="0%">
          <stop offset="0%" stopColor="#b7c3d7" />
          <stop offset="45%" stopColor="#f9fbff" />
          <stop offset="100%" stopColor="#dfe7f4" />
        </linearGradient>
        <linearGradient id="robotBlue" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#053d93" />
          <stop offset="55%" stopColor="#0b78ff" />
          <stop offset="100%" stopColor="#7dd3fc" />
        </linearGradient>
        <filter id="robotShadow" x="-25%" y="-30%" width="150%" height="170%">
          <feDropShadow dx="0" dy="24" stdDeviation="20" floodColor="#020817" floodOpacity="0.36" />
        </filter>
      </defs>
      <g filter="url(#robotShadow)">
        <path
          className="robot-arm"
          d="M425 206 C526 192 632 177 815 151 L815 289 C632 295 529 294 422 281 C388 277 374 219 425 206 Z"
          fill="url(#robotWhite)"
        />
        <path
          className="robot-arm-highlight"
          d="M455 221 C566 207 664 194 800 179 L800 210 C654 221 554 231 450 243 C431 245 429 224 455 221 Z"
        />
        <ellipse cx="422" cy="242" rx="44" ry="66" fill="#091326" transform="rotate(-82 422 242)" />
        <ellipse cx="416" cy="241" rx="31" ry="49" fill="url(#robotBlue)" transform="rotate(-82 416 241)" />
        <path
          className="robot-palm"
          d="M246 187 C299 154 389 166 430 217 C463 257 436 310 366 318 C303 326 234 300 214 256 C200 225 214 206 246 187 Z"
          fill="url(#robotWhite)"
        />
        <path
          className="robot-knuckle-bar"
          d="M236 183 C281 150 380 160 424 205 C400 206 263 203 232 218 C224 205 225 193 236 183 Z"
        />
        <g className="robot-fingers">
          <g className="robot-finger robot-finger-one">
            <rect x="244" y="74" width="64" height="145" rx="28" fill="url(#robotWhite)" />
            <rect x="254" y="91" width="44" height="40" rx="18" fill="rgba(255,255,255,0.72)" />
            <circle cx="276" cy="210" r="17" fill="url(#robotBlue)" />
          </g>
          <g className="robot-finger robot-finger-two">
            <rect x="309" y="64" width="66" height="152" rx="29" fill="url(#robotWhite)" />
            <rect x="320" y="82" width="45" height="42" rx="18" fill="rgba(255,255,255,0.72)" />
            <circle cx="342" cy="208" r="17" fill="url(#robotBlue)" />
          </g>
          <g className="robot-finger robot-finger-three">
            <rect x="375" y="80" width="63" height="143" rx="27" fill="url(#robotWhite)" />
            <rect x="385" y="96" width="43" height="39" rx="18" fill="rgba(255,255,255,0.72)" />
            <circle cx="406" cy="214" r="16" fill="url(#robotBlue)" />
          </g>
          <g className="robot-finger robot-finger-four">
            <rect x="432" y="115" width="55" height="112" rx="24" fill="url(#robotWhite)" />
            <rect x="441" y="129" width="37" height="31" rx="15" fill="rgba(255,255,255,0.72)" />
            <circle cx="460" cy="218" r="15" fill="url(#robotBlue)" />
          </g>
        </g>
        <g className="robot-thumb">
          <rect x="186" y="216" width="118" height="55" rx="24" fill="url(#robotWhite)" transform="rotate(24 245 244)" />
          <circle cx="263" cy="260" r="16" fill="url(#robotBlue)" />
        </g>
        <path
          className="robot-seam"
          d="M273 284 C321 303 384 299 415 270"
        />
      </g>
    </svg>
  );
}

export function HomeHero() {
  const [iconIndex, setIconIndex] = useState(0);
  const activeIcon = appIcons[iconIndex];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIconIndex((current) => (current + 1) % appIcons.length);
    }, cycleDuration);

    return () => window.clearInterval(intervalId);
  }, []);

  const iconStyle = {
    "--hero-icon-color": activeIcon.color,
    "--hero-icon-glow": activeIcon.glow
  } as CSSProperties;

  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-hero-bg" aria-hidden="true" />
      <div className="home-hero-grid" aria-hidden="true" />
      <div className="home-hero-geometry" aria-hidden="true" />
      <div className="home-hero-content">
        <h1 id="home-hero-title">Never Miss Leads Again</h1>
        <p>
          We build AI operational and voice systems that answer your calls,
          <br />
          {" "}qualify leads, and handle follow-ups automatically.
        </p>
        <div className="home-hero-actions">
          <Link className="home-hero-primary" href="/contact">
            Get in touch <span aria-hidden="true">→</span>
          </Link>
          <Link className="home-hero-secondary" href="/#services">
            View services
          </Link>
        </div>
      </div>
      <div className="home-hero-visual" aria-hidden="true">
        <div className="home-human-stage">
          <HumanHand />
        </div>
        <div className="home-icon-stage" key={activeIcon.name} style={iconStyle}>
          <div className="home-app-icon">
            <span>{activeIcon.mark}</span>
          </div>
        </div>
        <div className="home-robot-stage">
          <div className="home-robot-glow" />
          <RobotHand />
        </div>
      </div>
    </section>
  );
}
