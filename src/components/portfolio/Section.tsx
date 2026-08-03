import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  variant = "default",
  centered = false,
}: {
  id: string;
  eyebrow: ReactNode;
  title: string;
  intro?: string;
  children: ReactNode;
  variant?: "default" | "alt";
  centered?: boolean;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-border py-16 md:py-20"
      style={
        variant === "alt"
          ? { backgroundColor: "var(--color-surface-alt)" }
          : undefined
      }
    >
      <div className="container-x">
       {centered ? (
  <div className="mb-14 md:mb-20">
    <div className="mb-4 hidden text-xs uppercase tracking-[0.2em] text-muted-foreground md:block">
  <span className="text-foreground">/{eyebrow}</span>
</div>
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-balance text-[2rem] font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
      {intro && (
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-lg">{intro}</p>
      )}
    </div>
  </div>
) : (
          <div className="mb-10 grid gap-6 md:mb-14 md:grid-cols-[140px_1fr] md:gap-16">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="mr-3 text-foreground">/{eyebrow}</span>
            </div>
            <div className="md:pl-10">
              <h2 className="text-balance text-3xl font-semibold tracking-tight leading-[0.95] md:text-5xl">
                {title}
              </h2>
              {intro && (
                <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">{intro}</p>
              )}
            </div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}