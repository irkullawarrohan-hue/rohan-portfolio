type Kind = "cicd" | "terraform" | "docker" | "k8s" | "monitoring";

const stroke = "currentColor";

export function ProjectDiagram({ kind }: { kind: Kind }) {
  switch (kind) {
    case "cicd":
      return <CICD />;
    case "terraform":
      return <Terraform />;
    case "docker":
      return <Docker />;
    case "k8s":
      return <K8s />;
    case "monitoring":
      return <MONITORING />;
  }
}

const svgClass =
  "h-full w-full text-foreground/70 transition-transform duration-500 group-hover:scale-[1.03]";

function Frame({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <svg viewBox="0 0 400 225" className={svgClass} fill="none" stroke={stroke} strokeWidth="1">
      <defs>
        <pattern id={`grid-${id}`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" strokeWidth="0.5" opacity="0.15" />
        </pattern>
      </defs>
      <rect width="400" height="225" fill={`url(#grid-${id})`} />
      {children}
    </svg>
  );
}

function Node({
  x,
  y,
  w = 78,
  h = 30,
  label,
  sub,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  label: string;
  sub?: string;
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="5" fill="var(--color-card)" />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 1 : y + h / 2 + 3}
        textAnchor="middle"
        fontSize="8"
        fontFamily="ui-sans-serif, system-ui"
        fill="currentColor"
        stroke="none"
        fontWeight="600"
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 8}
          textAnchor="middle"
          fontSize="6"
          fontFamily="ui-sans-serif, system-ui"
          fill="var(--color-muted-foreground)"
          stroke="none"
          letterSpacing="1"
        >
          {sub.toUpperCase()}
        </text>
      )}
    </g>
  );
}

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} strokeDasharray="3 3" opacity="0.7" />;
}

function CICD() {
  const y = 100;
  const nodes = [
    { x: 10, label: "git", sub: "push" },
    { x: 98, label: "actions", sub: "ci" },
    { x: 186, label: "docker", sub: "build" },
    { x: 274, label: "ECR", sub: "registry" },
  ];
  return (
    <Frame id="cicd">
      {nodes.map((n, i) => (
        <g key={n.label}>
          <Node x={n.x} y={y} label={n.label} sub={n.sub} />
          {i < nodes.length - 1 && <Arrow x1={n.x + 78} y1={y + 15} x2={n.x + 98} y2={y + 15} />}
        </g>
      ))}
      <Node x={310} y={40} w={78} h={30} label="deploy" sub="ecs" />
      <path d="M 313 100 Q 340 88 349 70" strokeDasharray="3 3" opacity="0.7" />
      <rect x="4" y="4" width="392" height="217" rx="10" opacity="0.35" />
    </Frame>
  );
}

function Terraform() {
  return (
    <Frame id="tf">
      <Node x={161} y={20} w={78} h={30} label="root" sub="main.tf" />
      <Node x={30} y={95} w={78} h={30} label="vpc" sub="module" />
      <Node x={161} y={95} w={78} h={30} label="iam" sub="module" />
      <Node x={292} y={95} w={78} h={30} label="ecs" sub="module" />
      <Node x={30} y={170} w={78} h={30} label="subnets" />
      <Node x={161} y={170} w={78} h={30} label="roles" />
      <Node x={292} y={170} w={78} h={30} label="alb" />
      {[
        [200, 50, 69, 95],
        [200, 50, 200, 95],
        [200, 50, 331, 95],
        [69, 125, 69, 170],
        [200, 125, 200, 170],
        [331, 125, 331, 170],
      ].map(([x1, y1, x2, y2], i) => (
        <Arrow key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
      ))}
    </Frame>
  );
}

function Docker() {
  return (
    <Frame id="dk">
      <rect x="20" y="40" width="360" height="150" rx="8" opacity="0.4" />
      <text
        x="30"
        y="30"
        fontSize="8"
        fontFamily="ui-sans-serif"
        fill="var(--color-muted-foreground)"
        stroke="none"
        letterSpacing="1"
      >
        DOCKER HOST
      </text>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x={40 + i * 115}
            y={70}
            width={95}
            height={90}
            rx="6"
            fill="var(--color-card)"
          />
          <rect x={50 + i * 115} y={82} width={75} height={4} rx="2" opacity="0.6" />
          <rect x={50 + i * 115} y={92} width={55} height={3} rx="1.5" opacity="0.3" />
          <rect x={50 + i * 115} y={99} width={65} height={3} rx="1.5" opacity="0.3" />
          <text
            x={87.5 + i * 115}
            y={140}
            textAnchor="middle"
            fontSize="7"
            fontFamily="ui-sans-serif"
            fill="var(--color-muted-foreground)"
            stroke="none"
            letterSpacing="1"
          >
            {["WEB", "API", "DB"][i]}
          </text>
        </g>
      ))}
      <line x1="135" y1="115" x2="155" y2="115" strokeDasharray="3 3" opacity="0.7" />
      <line x1="250" y1="115" x2="270" y2="115" strokeDasharray="3 3" opacity="0.7" />
    </Frame>
  );
}

function K8s() {
  return (
    <Frame id="k8s">
      <rect x="20" y="30" width="360" height="170" rx="10" opacity="0.4" />
      <text
        x="30"
        y="22"
        fontSize="8"
        fontFamily="ui-sans-serif"
        fill="var(--color-muted-foreground)"
        stroke="none"
        letterSpacing="1"
      >
        CLUSTER
      </text>
      <Node x={161} y={45} w={78} h={26} label="ingress" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x={40 + i * 115}
            y={100}
            width={95}
            height={80}
            rx="6"
            fill="var(--color-card)"
            opacity="0.9"
          />
          <text
            x={87.5 + i * 115}
            y={116}
            textAnchor="middle"
            fontSize="7"
            fontFamily="ui-sans-serif"
            fill="var(--color-muted-foreground)"
            stroke="none"
            letterSpacing="1"
          >
            NODE {i + 1}
          </text>
          <circle cx={62 + i * 115} cy={140} r="6" fill="currentColor" opacity="0.7" />
          <circle cx={87 + i * 115} cy={140} r="6" fill="currentColor" opacity="0.7" />
          <circle cx={112 + i * 115} cy={140} r="6" fill="currentColor" opacity="0.7" />
          <text
            x={87.5 + i * 115}
            y={168}
            textAnchor="middle"
            fontSize="6"
            fontFamily="ui-sans-serif"
            fill="var(--color-muted-foreground)"
            stroke="none"
            letterSpacing="1"
          >
            PODS
          </text>
          <line
            x1={200}
            y1={71}
            x2={87.5 + i * 115}
            y2={100}
            strokeDasharray="3 3"
            opacity="0.6"
          />
        </g>
      ))}
    </Frame>
  );
}

function MONITORING() {
  return (
    <Frame id="ecs">
      <Node x={20} y={98} w={70} h={30} label="users" />
      <Arrow x1={90} y1={113} x2={115} y2={113} />
      <Node x={115} y={98} w={70} h={30} label="ALB" sub="listener" />
      <Arrow x1={185} y1={113} x2={210} y2={113} />
      <rect x="210" y="40" width="170" height="150" rx="8" opacity="0.4" />
      <text
        x="220"
        y="32"
        fontSize="8"
        fontFamily="ui-sans-serif"
        fill="var(--color-muted-foreground)"
        stroke="none"
        letterSpacing="1"
      >
        ECS FARGATE
      </text>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x={225}
            y={55 + i * 45}
            width={150}
            height={32}
            rx="5"
            fill="var(--color-card)"
          />
          <circle cx={240} cy={71 + i * 45} r="3" fill="currentColor" />
          <text
            x={252}
            y={74 + i * 45}
            fontSize="7"
            fontFamily="ui-sans-serif"
            fill="currentColor"
            stroke="none"
            fontWeight="600"
          >
            task {i + 1}.web
          </text>
          <text
            x={252}
            y={82 + i * 45}
            fontSize="6"
            fontFamily="ui-sans-serif"
            fill="var(--color-muted-foreground)"
            stroke="none"
            letterSpacing="1"
          >
            RUNNING
          </text>
        </g>
      ))}
    </Frame>
  );
}
