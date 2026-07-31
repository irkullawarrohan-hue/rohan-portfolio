import { motion } from "framer-motion";
import {
  GitBranch,
  PlayCircle,
  CheckCircle2,
  Container,
  Box,
  Layers,
  Cloud,
  Activity,
} from "lucide-react";

const NODES = [
  { icon: GitBranch, label: "git push", sub: "main" },
  { icon: PlayCircle, label: "GitHub Actions", sub: "workflow" },
  { icon: CheckCircle2, label: "Tests + Scan", sub: "quality gate" },
  { icon: Container, label: "Docker build", sub: "multi-stage" },
  { icon: Box, label: "Amazon ECR", sub: "image registry" },
  { icon: Layers, label: "Terraform", sub: "plan / apply" },
  { icon: Cloud, label: "ECS Fargate", sub: "rolling deploy" },
  { icon: Activity, label: "Live", sub: "CloudWatch" },
];

export function PipelineDiagram() {
  return (
    <div className="relative w-full">
      {/* frame */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
        {/* subtle blueprint texture inside the frame */}
        <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-60" />
        {/* header bar */}
        <div className="flex items-center justify-between border-b border-border px-4 py-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
          </div>
          <span>deploy.pipeline</span>
          <span className="inline-flex items-center gap-1.5">
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-emerald-500"
            />
            running
          </span>
        </div>

        <div className="relative px-5 py-6">
          <ul className="space-y-2.5">
            {NODES.map((n, i) => (
              <motion.li
                key={n.label}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex items-center gap-3.5 rounded-xl border border-border bg-background/70 px-3.5 py-2.5 backdrop-blur-sm transition-colors hover:border-foreground/30"
              >
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-border bg-card text-foreground">
                  <n.icon size={13} strokeWidth={1.75} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-xs font-medium tracking-tight">{n.label}</div>
                  <div className="truncate text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {n.sub}
                  </div>
                </div>
                <FlowDot delay={0.6 + i * 0.15} />
                {i < NODES.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute -bottom-2.5 left-[27px] block h-2.5 w-px bg-border"
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* corner ticks */}
      <Tick className="left-[-4px] top-[-4px]" />
      <Tick className="right-[-4px] top-[-4px]" />
      <Tick className="left-[-4px] bottom-[-4px]" />
      <Tick className="right-[-4px] bottom-[-4px]" />
    </div>
  );
}

function FlowDot({ delay }: { delay: number }) {
  return (
    <motion.span
      className="h-1.5 w-1.5 rounded-full bg-foreground"
      animate={{ opacity: [0.25, 1, 0.25], scale: [1, 1.3, 1] }}
      transition={{ duration: 2.4, repeat: Infinity, delay }}
    />
  );
}

function Tick({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute h-2 w-2 border border-foreground/40 ${className}`}
    />
  );
}
