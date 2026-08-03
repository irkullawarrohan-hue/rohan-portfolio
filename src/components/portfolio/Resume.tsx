import { Download } from "lucide-react";
import { Reveal } from "./Reveal";

export function Resume() {
  return (
    <section
      id="resume"
      className="scroll-mt-24 border-t border-border py-24 md:py-32"
    >
      <div className="container-x">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-10 text-center md:p-20">
            <div className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              /resume
            </div>

            <h2 className="mt-6 text-balance text-[2rem] font-semibold tracking-tight md:text-5xl">
              The one-page version.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground md:text-lg">
              A concise, recruiter-friendly PDF with skills, projects, and
              contact — refreshed with every meaningful update.
            </p>

            <a
              href="https://drive.google.com/uc?export=download&id=1QViXUZsZ7v-yC3iRD-bu4yhMC1YHIQGj"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}