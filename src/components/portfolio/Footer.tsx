import { Github, Linkedin, Mail } from "lucide-react";
import { NAV_LINKS } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="container-x">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-foreground" />
              Rohan
              <span className="text-muted-foreground">.devops</span>
            </a>

            <p className="mx-auto mt-3 max-w-sm text-xs text-muted-foreground md:mx-0">
              DevOps & Cloud Engineer — designing quiet, production-ready
              systems.
            </p>
          </div>

          {/* Navigation */}
          <nav className="grid grid-cols-2 gap-x-8 gap-y-3 text-center text-xs text-muted-foreground md:flex md:flex-wrap md:gap-x-6 md:gap-y-2">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex justify-center gap-2 md:justify-start">
            {[
              {
                icon: Github,
                href: "https://github.com/irkullawarrohan-hue",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/rohan-irkullawar-393484297/",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "https://mail.google.com/mail/?view=cm&fs=1&to=irkullawarrohan@gmail.com",
                label: "Email",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background"
              >
                <s.icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center gap-2 border-t border-border pt-6 text-center text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:text-left">
          <span>© {new Date().getFullYear()} Rohan. All rights reserved.</span>
          <span className="tracking-widest">
            — designed & built with intent —
          </span>
        </div>
      </div>
    </footer>
  );
}