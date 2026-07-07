import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer
      id="contact"
      className="mt-auto border-t border-line px-6 py-20 sm:px-10"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <h2 className="font-display text-4xl text-foreground sm:text-6xl">
          Let&apos;s make
          <br />
          something good.
        </h2>
        <div className="flex flex-wrap items-center justify-between gap-6">
          <a
            href={siteConfig.links.email}
            className="font-body text-lg text-foreground underline decoration-line underline-offset-8 transition-colors hover:decoration-foreground"
          >
            jieun.jane.lee@gmail.com
          </a>
          <div className="flex gap-6 font-body text-sm text-muted">
            <a href={siteConfig.links.linkedin} className="hover:text-foreground">
              LinkedIn
            </a>
            <a href={siteConfig.links.github} className="hover:text-foreground">
              GitHub
            </a>
          </div>
        </div>
        <p className="font-body text-xs text-muted">
          © {siteConfig.name}. Built with intent.
        </p>
      </div>
    </footer>
  );
}
