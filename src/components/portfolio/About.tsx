import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Cloud, Cpu, GitBranch, Sparkles, ShieldCheck } from "lucide-react";

const pillars = [
  { icon: Cloud, title: "Cloud", text: "Design cloud infrastructure that is scalable, reliable, and easy to manage." },
  { icon: Cpu, title: "Automation", text: "If a task is repeated, automate it using scripts, Infrastructure as Code, or CI/CD pipelines." },
  { icon: GitBranch, title: "Infrastructure", text: "Build reproducible infrastructure using Terraform and version-controlled configurations." },
  { icon: ShieldCheck, title: "Problem Solving", text: "Break complex problems into smaller, manageable components before optimizing solutions." },
  { icon: Sparkles, title: "Continuous Learning", text: "Learn new technologies by building complete projects that simulate real production environments." },
];

export function About() {
  return (
    <Section
  id="about"
  eyebrow="about"
  centered
  variant="alt"
  title="DevOps Engineer, Building Cloud Systems That Actually Ship"
  intro="I'm a Computer Science graduate focused on Cloud and DevOps Engineering. I enjoy building production-inspired systems that automate infrastructure, deployments, monitoring, and container orchestration. Every project helps me better understand how modern cloud platforms operate and how reliable systems are built."
>
      <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
        <span className="h-px w-8 bg-border" />
        Engineering Principles
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                <p.icon size={16} strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 text-lg font-medium tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              <span
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full border border-border opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
