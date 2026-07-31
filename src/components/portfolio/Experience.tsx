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

                <div className="flex items-baseline justify-between">
  <h3 className="text-xl font-semibold tracking-tight">{e.role}</h3>
  <div className="text-right leading-none text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
    {e.period}
  </div>
</div>

                {/* Organization */}
                <div className="mt-1 text-sm text-muted-foreground">
                  {e.org}
                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-foreground/80">
                  {e.detail}
                </p>

                {/* Tech Stack */}
                {e.tech && e.tech.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                {/* Outcome */}
                {e.outcome && (
                <div className="mt-5 flex items-center gap-2">
                <span className="text-green-500 text-sm leading-none">✓</span>
                <p className="text-sm text-muted-foreground">
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