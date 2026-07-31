import { Github } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { GITHUB_STATS } from "@/data/portfolio";

export function GitHubSection() {
  return (
    <Section
      id="github"
      eyebrow="github"
      centered
      title="Building in the open."
      intro="A snapshot of my projects, technologies, and learning journey through GitHub."
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full border border-border">
                  <Github size={18} />
                </div>

                <div>
                  <div className="text-base font-semibold">
                    @irkullawarrohan-hue
                  </div>

                  <div className="text-sm text-muted-foreground">
                    github.com/irkullawarrohan-hue
                  </div>
                </div>
              </div>

              <a
                href="https://github.com/irkullawarrohan-hue"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:bg-muted"
              >
                View Profile
              </a>
            </div>

            {/* Contribution Graph */}
            <div className="mt-8 rounded-xl border border-border bg-background p-5">
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                Contributions
              </div>

              <div className="mt-5 flex justify-center">
  <div className="overflow-hidden rounded-xl">
  <img
    src="https://ghchart.rshah.org/irkullawarrohan-hue"
    alt="GitHub Contribution Graph"
    className="max-w-none w-[165%] -translate-x-[39%]"
  />
</div>
</div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {GITHUB_STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border p-5"
                >
                  <div className="text-3xl font-semibold tracking-tight">
                    {s.value}
                  </div>

                  <div className="mt-2 text-[11px] uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}