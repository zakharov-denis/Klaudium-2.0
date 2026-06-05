"use client";

import Link from "next/link";

export function Navigation() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-red-500/20 bg-black/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center lg:h-20">
          <Link className="text-lg font-semibold tracking-tight text-white" href="/">
            Klaudium Studio
          </Link>
        </div>
      </div>
    </nav>
  );
}
