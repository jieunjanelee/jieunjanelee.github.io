import { works } from "@/lib/works";

export function WorkTeaser() {
  return (
    <section id="work" className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 flex items-baseline justify-between border-b border-line pb-6">
          <h2 className="font-display text-2xl text-foreground sm:text-3xl">
            Selected Work
          </h2>
          <span className="font-body text-sm text-muted">
            {String(works.length).padStart(2, "0")}
          </span>
        </div>

        <ul className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2">
          {works.map((work, i) => (
            <li key={work.slug}>
              <a href={`#${work.slug}`} className="group block">
                {/* Flat solid-colour placeholder — a cover image drops in here later. */}
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden"
                  style={{ backgroundColor: work.color }}
                >
                  <span className="absolute left-4 top-4 font-body text-xs text-white/50">
                    0{i + 1}
                  </span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-display text-2xl text-foreground transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                      {work.title}
                    </h3>
                    <p className="mt-2 max-w-sm font-body text-sm text-muted">
                      {work.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 font-body text-xs uppercase tracking-wider text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
