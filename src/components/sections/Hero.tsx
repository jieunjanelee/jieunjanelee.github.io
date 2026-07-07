import { siteConfig } from "@/lib/site";
import { Particles } from "@/components/ui/particles";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-end overflow-hidden px-6 pb-20 pt-32 sm:px-10"
    >
      <Particles
        className="absolute inset-0"
        quantity={40}
        ease={80}
        staticity={40}
        color="#eef1f5"
        refresh
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <p className="mb-8 max-w-md font-body text-sm uppercase tracking-[0.2em] text-muted">
          {siteConfig.role} · 13 years
        </p>
        <h1 className="font-display max-w-[14ch] text-[13vw] text-foreground sm:text-[12vw] lg:text-[9rem]">
          Design that gets out of the way.
        </h1>
        <p className="mt-8 max-w-md font-body text-xs leading-relaxed text-muted">
          I&apos;m {siteConfig.name} — a product designer who turns tangled,
          high-stakes software into something people actually want to use.
        </p>
      </div>
    </section>
  );
}
