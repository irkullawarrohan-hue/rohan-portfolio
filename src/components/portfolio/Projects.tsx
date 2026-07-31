import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink} from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { PROJECTS } from "@/data/portfolio";

export function Projects() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))],
    [],
  );
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <Section
      id="projects"
      eyebrow="projects"
      variant="alt"
      centered
      title="Selected work."
      intro="Production-shaped projects — not tutorials. Each one solved a concrete problem end-to-end."
    >
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full border px-3.5 py-1.5 text-xs transition-all duration-200 ${
              filter === c
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div
              layout
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Reveal>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/40 hover:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)]">
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-muted/40">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-contain bg-white p-3 transition-transform duration-500 group-hover:scale-105"/>
                    <span className="absolute left-4 top-4 rounded-full border border-border bg-background/80 px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-border px-2 py-0.5 text-[11px] text-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <dl className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
                      <Row label="Problem" value={p.problem} />
                      <Row label="Challenges" value={p.challenges} />
                      <Row label="Learnings" value={p.learnings} />
                    </dl>

                    <div className="mt-10 flex items-center gap-2">
                      {p.github && (
                        <a
                          href={p.github}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs transition-all hover:-translate-y-0.5 hover:bg-muted"
                        >
                          <Github size={13} /> GitHub
                        </a>
                      )}
                      {p.documentation && (
                        <a
                          href={p.documentation}
                          className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-1.5 text-xs text-background transition-transform hover:-translate-y-0.5"
                        >
                          <ExternalLink size={13} /> Documentation
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[100px_1fr] gap-4 items-baseline">
      <dt className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
        {label}
      </dt>
      <dd className="text-sm leading-relaxed text-foreground/80">{value}</dd>
    </div>
  );
}
