import { useState, useEffect } from "react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { SKILLS } from "@/data/portfolio";

export function Skills() {
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const displayedSkills =
    isMobile && !showAllMobile ? SKILLS.slice(0, 4) : SKILLS;

  return (
    <Section
      id="skills"
      eyebrow="skills"
      centered
      title="A focused toolkit, used seriously."
      intro="These are the tools I've actually used across the projects on this page, not just listed"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {displayedSkills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.04}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold tracking-tight">
                  {group.category}
                </h3>

                <span
                  className="
                    h-7 w-7
                    rounded-full
                    border border-border
                    flex items-center justify-center
                    text-[10px]
                    tracking-widest
                    text-muted-foreground
                    transition-all
                    duration-300
                    group-hover:border-foreground/40
                  "
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-muted-foreground opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                {group.description}
              </p>

              <div className="mt-auto pt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-xs text-foreground transition-colors group-hover:border-foreground/40"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {isMobile && SKILLS.length > 4 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAllMobile((v) => !v)}
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            {showAllMobile ? "Show Less ↑" : "View More Skills ↓"}
          </button>
        </div>
      )}
    </Section>
  );
}