import { Award, CheckCircle2, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { CERTIFICATIONS } from "@/data/portfolio";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="certifications"
      centered
      variant="alt"
      title="Credentials, current and upcoming."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {CERTIFICATIONS.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.05}>
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30">
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                    {c.issuer}
                  </div>

                  <h3 className="mt-1.5 text-sm md:text-base font-medium tracking-tight">
                    {c.name}
                  </h3>

                  <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-[9px] md:text-[10px] uppercase tracking-widest text-muted-foreground">
                    <CheckCircle2 size={11} /> {c.status}
                  </span>
                </div>

                <Award
                  size={22}
                  className="shrink-0 text-foreground/70 transition-transform duration-500 group-hover:rotate-6"
                />
              </div>

              {/* Desktop Hover */}
              <div className="mt-5 hidden max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 md:block">
                <div className="flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                  <span>Track: {c.issuer}</span>

                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[11px] text-foreground transition-colors hover:bg-muted"
                  >
                    <ExternalLink size={11} />
                    Verify
                  </a>
                </div>
              </div>

              {/* Mobile */}
              <div className="mt-5 border-t border-border pt-4 md:hidden">
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border py-2 text-xs font-medium transition-colors hover:bg-muted"
                >
                  <ExternalLink size={14} />
                  Verify Certificate
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}