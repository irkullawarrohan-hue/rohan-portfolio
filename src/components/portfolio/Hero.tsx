import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { PipelineDiagram } from "./PipelineDiagram";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-20"
    >
      {/* Blueprint Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-blueprint opacity-70 mask-fade"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-8">
        <div className="grid items-center gap-10 lg:min-h-[80svh] lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-muted-foreground"
            >
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 text-[34px] font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl xl:text-[80px]"           >
              Hi, I'm Rohan —
              <br />
              <span className="text-muted-foreground">
                DevOps &
                <br className="hidden sm:block" />
                Cloud Engineer.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.25,
              }}
              className="mt-5 max-w-md text-[15px] leading-7 text-muted-foreground md:mt-8 md:max-w-2xl md:text-lg"
            >
              Five plus end-to-end AWS projects: CI/CD pipelines,
              containerized deployments on ECS and EKS, and
              infrastructure as code with Terraform. Each one debugged
              through real failures — IAM misconfigurations, health
              check mismatches, broken rollouts — with fixes
              documented, not just working demos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.4,
              }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="https://drive.google.com/uc?export=download&id=1rOaoM2UHHFCLB8ARcoinKDchNGvxfmPW"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-muted"
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.9,
    delay: 0.35,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative hidden lg:flex justify-center"
>
  <PipelineDiagram />
</motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.2,
            duration: 1,
          }}
          className="mt-12 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground lg:mt-20"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2.2,
              ease: "easeInOut",
            }}
            className="inline-flex"
          >
            <ChevronDown size={0} />
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}