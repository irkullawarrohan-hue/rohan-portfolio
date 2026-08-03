import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { EXPERIENCE } from "@/data/portfolio";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="experience"
      centered
      title="A short, honest timeline."
      intro="Education, self-directed work, and the projects that shaped how I think about production systems."
    >
      <ol className="relative border-l border-border/40 pl-8 md:pl-10">
        {EXPERIENCE.map((e, i) => (
          <Reveal key={e.period + e.role} delay={i * 0.08}>
            <li className="relative">
              {/* Timeline Dot */}
              <span className="absolute -left-[37px] top-2 md:-left-[41px]">
                <span className="block h-3 w-3 rounded-full border-2 border-foreground bg-background" />
              </span>

              {/* Card */}
              <div className="mb-10 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg">

                {/* Title + Date */}
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight">
                    {e.role}
                  </h3>

                  <div className="whitespace-nowrap text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:text-right">
                    {e.period}
                  </div>
                </div>

                {/* Organization */}
                <div className="mt-1 text-xs md:text-sm text-muted-foreground">
                  {e.org}
                </div>

                {/* Description */}
                <p className="mt-4 text-xs md:text-sm leading-6 md:leading-7 text-foreground/80">
                  {e.detail}
                </p>

                {/* Tech Stack */}
                {e.tech && e.tech.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-3 py-1 text-[10px] md:text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Outcome */}
                {e.outcome && (
                  <div className="mt-5 flex items-center gap-2">
                    <span className="text-sm leading-none text-green-500">
                      ✓
                    </span>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {e.outcome}
                    </p>
                  </div>
                )}
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}