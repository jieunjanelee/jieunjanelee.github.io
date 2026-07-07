"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  // Lock scroll while the overlay menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="font-display text-xl tracking-tight text-foreground"
        >
          {siteConfig.name}
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[7px]"
        >
          <span
            className={`h-[2px] w-7 bg-foreground transition-transform duration-300 ${
              open ? "translate-y-[9px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-7 bg-foreground transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[2px] w-7 bg-foreground transition-transform duration-300 ${
              open ? "-translate-y-[9px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Full-screen overlay menu */}
      <nav
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-background px-6 transition-opacity duration-300 sm:px-10 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="mx-auto flex w-full max-w-6xl flex-col gap-2">
          {siteConfig.nav.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display block text-5xl leading-none text-foreground transition-colors hover:text-muted sm:text-7xl"
              >
                <span className="mr-4 align-top font-body text-base text-muted">
                  0{i + 1}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-16 flex w-full max-w-6xl gap-8 text-sm text-muted">
          <a href={siteConfig.links.email} className="hover:text-foreground">
            Email
          </a>
          <a href={siteConfig.links.linkedin} className="hover:text-foreground">
            LinkedIn
          </a>
        </div>
      </nav>
    </header>
  );
}
