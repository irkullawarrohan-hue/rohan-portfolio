import { o as __toESM } from "../_runtime.mjs";
import { n as V, r as require_react, t as J } from "../_libs/@formspree/react+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as AnimatePresence, n as useScroll, r as motion, t as useSpring } from "../_libs/framer-motion.mjs";
import { C as ArrowUp, S as Award, T as Activity, _ as Cloud, a as Moon, b as ChevronDown, c as Mail, d as Github, f as GitBranch, g as Container, h as Cpu, i as ShieldCheck, l as Linkedin, m as Download, n as Sun, o as Menu, p as ExternalLink, r as Sparkles, s as MapPin, t as X, u as Layers, v as CirclePlay, w as ArrowRight, x as Box, y as CircleCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CjJnsF1O.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV_LINKS = [
	{
		href: "#home",
		label: "Home"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#skills",
		label: "Skills"
	},
	{
		href: "#projects",
		label: "Projects"
	},
	{
		href: "#experience",
		label: "Experience"
	},
	{
		href: "#certifications",
		label: "Certifications"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
var SKILLS = [
	{
		category: "Cloud",
		description: "Provisioning scalable AWS infrastructure with cost and reliability in mind.",
		items: [
			"AWS",
			"EC2",
			"ECS",
			"ECR",
			"IAM",
			"VPC",
			"CloudWatch",
			"ALB",
			"S3",
			"EKS"
		]
	},
	{
		category: "Infrastructure",
		description: "Infrastructure as Code using reusable, reviewable Terraform modules.",
		items: [
			"Terraform",
			"Terraform Modules",
			"Remote Backend",
			"State Management"
		]
	},
	{
		category: "Containers",
		description: "Containerization, image optimization, and orchestration at scale.",
		items: [
			"Docker",
			"Docker Compose",
			"Kubernetes"
		]
	},
	{
		category: "CI/CD",
		description: "Automated build, test, and deploy pipelines with safe rollouts.",
		items: ["GitHub Actions"]
	},
	{
		category: "Operating Systems",
		description: "Linux fundamentals, shell tooling, & system-lv debugging.",
		items: ["Linux"]
	},
	{
		category: "Programming",
		description: "Practical scripting and services in Python, and Bash.",
		items: ["Python", "Bash"]
	},
	{
		category: "Version Control",
		description: "Trunk-based workflows, reviewable diffs, and clean history.",
		items: ["Git", "GitHub"]
	}
];
var PROJECTS = [
	{
		title: "GlobalMart CI/CD Pipeline on AWS",
		category: "CI/CD",
		kind: "cicd",
		image: "https://lwfiles.mycourse.app/67ed1067042dc73b07d76036-public/a55ddc67bd7170069dca2fd812acb9ac.png",
		description: "Built a production-inspired CI/CD pipeline using AWS CodePipeline and CodeDeploy to automate deployments from GitHub to Amazon EC2.",
		tech: [
			"AWS CodePipeline",
			"CodeDeploy",
			"EC2",
			"CloudWatch",
			"IAM",
			"S3",
			"GitHub"
		],
		problem: "Deployment failures caused application downtime due to configuration issues.",
		challenges: "Configured IAM roles, deployment scripts, artifacts, and pipeline stages while troubleshooting deployment failures.",
		learnings: "CI/CD automation, deployment troubleshooting, CloudWatch, and AWS DevOps services.",
		github: "https://github.com/irkullawarrohan-hue/globalmart-cicd-pipeline-aws",
		documentation: "https://drive.google.com/file/d/1iZj2_hmiS1yh0esUS-ZnDexa-L1YEqwA/view?usp=sharing"
	},
	{
		title: "Infrastructure as Code with Terraform",
		category: "Infrastructure",
		kind: "terraform",
		image: "https://i.ibb.co/zTGFGyJY/terraform-image.png",
		description: "Provisioned AWS infrastructure using reusable Terraform modules with remote state management through Amazon S3 and DynamoDB.",
		tech: [
			"Terraform",
			"AWS",
			"VPC",
			"EC2",
			"IAM",
			"S3",
			"DynamoDB"
		],
		problem: "Manual infrastructure provisioning was difficult to maintain and reproduce.",
		challenges: "Designed reusable modules, configured remote state, and managed resource dependencies.",
		learnings: "Terraform, Infrastructure as Code, AWS networking, and state management.",
		github: "https://github.com/irkullawarrohan-hue/terraform-aws-infrastructure",
		documentation: "https://drive.google.com/file/d/14B0CNhXm1yypNGHoYUdfniqVQIkarqc6/view?usp=sharing"
	},
	{
		title: "Containerized LMS Migration on Amazon ECS",
		category: "Containers",
		kind: "docker",
		image: "https://uploads.teachablecdn.com/attachments/a411bfccfd594fa69464e9f12c5df801.png",
		description: "Containerized and deployed an LMS application on Amazon ECS Fargate using Amazon ECR, ALB, and CloudWatch.",
		tech: [
			"Docker",
			"Amazon ECS",
			"Fargate",
			"Amazon ECR",
			"ALB",
			"CloudWatch",
			"IAM"
		],
		problem: "Container deployment issues prevented the application from running correctly.",
		challenges: "Resolved ECS deployment issues, ALB routing, security groups, and container configuration.",
		learnings: "Docker, ECS Fargate, ECR, ALB, CloudWatch, and container troubleshooting.",
		github: "https://github.com/irkullawarrohan-hue/containerized-lms-migration-and-troubleshooting",
		documentation: "https://drive.google.com/file/d/1Qh_wHqsdepwUn_FgzZA28IFqWr_xR8ne/view?usp=sharing"
	},
	{
		title: "Kubernetes Deployment on Amazon EKS",
		category: "Kubernetes",
		kind: "k8s",
		image: "https://i.ibb.co/23xPDk2Z/k8s-image.png",
		description: "Containerized an application and deployed it on Amazon EKS using Kubernetes Deployments and Services.",
		tech: [
			"Amazon EKS",
			"Kubernetes",
			"Docker",
			"Amazon ECR",
			"EC2",
			"IAM",
			"kubectl"
		],
		problem: "The application required a scalable and consistent deployment platform.",
		challenges: "Configured EKS clusters, Kubernetes resources, Docker images, and application networking.",
		learnings: "Kubernetes, Amazon EKS, Pods, Deployments, Services, and container orchestration.",
		github: "https://github.com/irkullawarrohan-hue/Kubernetes-Deployment-and-Autoscaling-on-Amazon-EKS",
		documentation: "https://drive.google.com/file/d/1USjDnwCgIlsnW1WIgG8BD_uQE9duPb9k/view?usp=sharing"
	},
	{
		title: "Proactive EC2 Monitoring & Auto-Remediation",
		category: "Monitoring",
		kind: "monitoring",
		image: "https://lwfiles.mycourse.app/67ed1067042dc73b07d76036-public/cd781f361c5b64d29af79cbdccee5498.png",
		description: "Built automated monitoring and remediation for EC2 using CloudWatch, Lambda, and GuardDuty.",
		tech: [
			"CloudWatch",
			"Lambda",
			"GuardDuty",
			"IAM",
			"EC2"
		],
		problem: "Performance and security incidents required automated detection and response.",
		challenges: "Configured CloudWatch alarms, Lambda automation, GuardDuty, and custom monitoring metrics.",
		learnings: "CloudWatch, Lambda, GuardDuty, monitoring, and incident response.",
		github: "https://github.com/irkullawarrohan-hue/proactive-monitoring-and-security-auto-remediation-for-ec2-aws",
		documentation: "https://drive.google.com/file/d/170BY7fROXSaiXgaRyIeTIHQbPkHzFFh_/view?usp=sharing"
	}
];
var EXPERIENCE = [
	{
		period: "Feb 2026 — May 2026",
		role: "Software Development Engineer Intern",
		org: "Revithalize Mobility Pvt. Ltd.",
		detail: "Developed REST APIs, JWT authentication, and backend services for an EV monitoring platform using Python and MongoDB.",
		tech: [
			"Python",
			"Flask",
			"MongoDB",
			"REST API",
			"JWT",
			"Linux"
		],
		outcome: "Delivered 10+ REST APIs and resolved critical backend issues before project delivery."
	},
	{
		period: "2026 — Present",
		role: "Cloud & DevOps Projects",
		org: "Independent Projects",
		detail: "Built AWS cloud infrastructure, CI/CD pipelines, container platforms, Kubernetes deployments, and monitoring solutions.",
		tech: [
			"AWS",
			"Terraform",
			"Docker",
			"Kubernetes",
			"CloudWatch"
		],
		outcome: "Completed five production-inspired end-to-end cloud projects."
	},
	{
		period: "2022 — 2026",
		role: "Bachelor of Technology",
		org: "SR University, Warangal",
		detail: "Computer Science Engineering with a focus on cloud computing, networking, operating systems, and software engineering.",
		tech: [
			"Python",
			"Linux",
			"Networking"
		],
		outcome: "Built a strong foundation for Cloud and DevOps engineering."
	}
];
var CERTIFICATIONS = [
	{
		name: "AWS Solutions Architect – Associate",
		issuer: "Udemy",
		status: "Completed Training",
		link: "https://www.udemy.com/certificate/UC-a5b6b729-dddf-42bc-ae45-4ac9056c6c7c/"
	},
	{
		name: "AWS Cloud Practitioner Essentials",
		issuer: "Amazon Web Services",
		status: "Completed Training",
		link: "https://drive.google.com/file/d/1zHwaXj50rGY9x2DX679WHIRxoZANGWwn/view"
	},
	{
		name: "AWS Foundations",
		issuer: "Amazon Web Services",
		status: "Completed",
		link: "https://www.credly.com/badges/124cbf6a-dfc7-4841-bf0e-365e7d4a8e23/print"
	}
];
var GITHUB_STATS = [
	{
		label: "Major Projects",
		value: "5+"
	},
	{
		label: "AWS Services",
		value: "10+"
	},
	{
		label: "Core Technologies",
		value: "10+"
	},
	{
		label: "Internship",
		value: "1"
	}
];
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("#home");
	const [dark, setDark] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 8);
			const y = window.scrollY + 120;
			for (const l of [...NAV_LINKS].reverse()) {
				const el = document.querySelector(l.href);
				if (el && el.offsetTop <= y) {
					setActive(l.href);
					break;
				}
			}
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", dark);
	}, [dark]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "border-b border-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x flex h-16 items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "flex items-center gap-2 text-sm font-semibold tracking-tight",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-2 w-2 rounded-full bg-foreground" }),
						"Rohan",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: ".devops"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: l.href,
						className: `relative text-sm transition-colors ${active === l.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`,
						children: [l.label, active === l.href && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							layoutId: "nav-underline",
							className: "absolute -bottom-1 left-0 right-0 h-px bg-foreground"
						})]
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "Toggle theme",
							onClick: () => setDark((v) => !v),
							className: "hidden h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted md:inline-flex",
							children: dark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { size: 15 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { size: 15 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://drive.google.com/uc?export=download&id=1QViXUZsZ7v-yC3iRD-bu4yhMC1YHIQGj",
							className: "hidden items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:-translate-y-0.5 md:inline-flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 14 }), " Resume"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "Menu",
							className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden",
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 16 })
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				height: 0
			},
			animate: {
				opacity: 1,
				height: "auto"
			},
			exit: {
				opacity: 0,
				height: 0
			},
			className: "overflow-hidden border-t border-border bg-background md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x flex flex-col gap-1 py-4",
				children: [NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground",
					children: l.label
				}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#resume",
					onClick: () => setOpen(false),
					className: "mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm text-background",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 14 }), " Resume"]
				})]
			})
		}) })]
	});
}
function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: .001
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: { scaleX },
		className: "fixed inset-x-0 top-0 z-[60] h-px origin-left bg-foreground"
	});
}
var NODES = [
	{
		icon: GitBranch,
		label: "git push",
		sub: "main"
	},
	{
		icon: CirclePlay,
		label: "GitHub Actions",
		sub: "workflow"
	},
	{
		icon: CircleCheck,
		label: "Tests + Scan",
		sub: "quality gate"
	},
	{
		icon: Container,
		label: "Docker build",
		sub: "multi-stage"
	},
	{
		icon: Box,
		label: "Amazon ECR",
		sub: "image registry"
	},
	{
		icon: Layers,
		label: "Terraform",
		sub: "plan / apply"
	},
	{
		icon: Cloud,
		label: "ECS Fargate",
		sub: "rolling deploy"
	},
	{
		icon: Activity,
		label: "Live",
		sub: "CloudWatch"
	}
];
function PipelineDiagram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-2xl border border-border bg-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-blueprint opacity-60" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border px-4 py-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-foreground/20" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-foreground/20" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-foreground/20" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "deploy.pipeline" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									animate: { opacity: [
										.3,
										1,
										.3
									] },
									transition: {
										duration: 1.8,
										repeat: Infinity
									},
									className: "h-1.5 w-1.5 rounded-full bg-emerald-500"
								}), "running"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative px-5 py-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2.5",
							children: NODES.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
								initial: {
									opacity: 0,
									x: -8
								},
								animate: {
									opacity: 1,
									x: 0
								},
								transition: {
									duration: .5,
									delay: .5 + i * .08,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								className: "group relative flex items-center gap-3.5 rounded-xl border border-border bg-background/70 px-3.5 py-2.5 backdrop-blur-sm transition-colors hover:border-foreground/30",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-border bg-card text-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n.icon, {
											size: 13,
											strokeWidth: 1.75
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "truncate text-xs font-medium tracking-tight",
											children: n.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "truncate text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
											children: n.sub
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowDot, { delay: .6 + i * .15 }),
									i < NODES.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": true,
										className: "absolute -bottom-2.5 left-[27px] block h-2.5 w-px bg-border"
									})
								]
							}, n.label))
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tick, { className: "left-[-4px] top-[-4px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tick, { className: "right-[-4px] top-[-4px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tick, { className: "left-[-4px] bottom-[-4px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tick, { className: "right-[-4px] bottom-[-4px]" })
		]
	});
}
function FlowDot({ delay }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
		className: "h-1.5 w-1.5 rounded-full bg-foreground",
		animate: {
			opacity: [
				.25,
				1,
				.25
			],
			scale: [
				1,
				1.3,
				1
			]
		},
		transition: {
			duration: 2.4,
			repeat: Infinity,
			delay
		}
	});
}
function Tick({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": true,
		className: `pointer-events-none absolute h-2 w-2 border border-foreground/40 ${className}`
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative overflow-hidden pt-20 md:pt-22",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 bg-blueprint opacity-70 mask-fade"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative inline-flex h-2 w-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 animate-ping rounded-full bg-emerald-500/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-emerald-500" })]
						}), "Available for opportunities"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .9,
							delay: .1,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "mt-8 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-[80px]",
						children: [
							"Hi, I'm Rohan —",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground",
								children: [
									"DevOps &",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
									" Cloud Engineer."
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .9,
							delay: .25
						},
						className: "mt-8 max-w-4xl text-base leading-relaxed text-muted-foreground md:text-lg",
						children: "Five end-to-end AWS projects: CI/CD pipelines, containerized deployments on ECS and EKS, and infrastructure as code with Terraform. Each one debugged through real failures — IAM misconfigurations, health check mismatches, broken rollouts — with fixes documented, not just working demos."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .9,
							delay: .4
						},
						className: "mt-10 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#projects",
							className: "group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5",
							children: ["View Projects", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								size: 16,
								className: "transition-transform group-hover:translate-x-0.5"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#resume",
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 16 }), " Download Resume"]
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .9,
						delay: .35,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PipelineDiagram, {})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: 1.2,
					duration: 1
				},
				className: "mt-20 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground md:mt-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					animate: { y: [
						0,
						6,
						0
					] },
					transition: {
						repeat: Infinity,
						duration: 2.2,
						ease: "easeInOut"
					},
					className: "inline-flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 0 })
				})
			})]
		})]
	});
}
function Section({ id, eyebrow, title, intro, children, variant = "default", centered = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: "scroll-mt-24 border-t border-border py-16 md:py-20",
		style: variant === "alt" ? { backgroundColor: "var(--color-surface-alt)" } : void 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [centered ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-14 md:mb-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-foreground",
						children: ["/", eyebrow]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-balance text-3xl font-semibold tracking-tight md:text-5xl",
						children: title
					}), intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg",
						children: intro
					})]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10 grid gap-6 md:mb-14 md:grid-cols-[140px_1fr] md:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.2em] text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mr-3 text-foreground",
						children: ["/", eyebrow]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:pl-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-balance text-3xl font-semibold tracking-tight md:text-5xl",
						children: title
					}), intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-base text-muted-foreground md:text-lg",
						children: intro
					})]
				})]
			}), children]
		})
	});
}
var variants = {
	hidden: {
		opacity: 0,
		y: 24
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .7,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	}
};
function Reveal({ children, delay = 0, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-80px"
		},
		variants,
		transition: { delay },
		children
	});
}
var pillars = [
	{
		icon: Cloud,
		title: "Cloud",
		text: "Design cloud infrastructure that is scalable, reliable, and easy to manage."
	},
	{
		icon: Cpu,
		title: "Automation",
		text: "If a task is repeated, automate it using scripts, Infrastructure as Code, or CI/CD pipelines."
	},
	{
		icon: GitBranch,
		title: "Infrastructure",
		text: "Build reproducible infrastructure using Terraform and version-controlled configurations."
	},
	{
		icon: ShieldCheck,
		title: "Problem Solving",
		text: "Break complex problems into smaller, manageable components before optimizing solutions."
	},
	{
		icon: Sparkles,
		title: "Continuous Learning",
		text: "Learn new technologies by building complete projects that simulate real production environments."
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "about",
		eyebrow: "about",
		centered: true,
		variant: "alt",
		title: "DevOps Engineer, Building Cloud Systems That Actually Ship",
		intro: "I'm a Computer Science graduate focused on Cloud and DevOps Engineering. I enjoy building production-inspired systems that automate infrastructure, deployments, monitoring, and container orchestration. Every project helps me better understand how modern cloud platforms operate and how reliable systems are built.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-border" }), "Engineering Principles"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
			children: pillars.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground transition-colors group-hover:bg-foreground group-hover:text-background",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, {
								size: 16,
								strokeWidth: 1.75
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 text-lg font-medium tracking-tight",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: p.text
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full border border-border opacity-0 transition-opacity duration-500 group-hover:opacity-100"
						})
					]
				})
			}, p.title))
		})]
	});
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "skills",
		eyebrow: "skills",
		centered: true,
		title: "A focused toolkit, used seriously.",
		intro: "These are the tools I've actually used across the projects on this page, not just listed",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
			children: SKILLS.map((group, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .04,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-semibold tracking-tight",
								children: group.category
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "\r\n      h-7 w-7\r\n      rounded-full\r\n      border border-border\r\n      flex items-center justify-center\r\n      text-[10px]\r\n      tracking-widest\r\n      text-muted-foreground\r\n      transition-all\r\n      duration-300\r\n      group-hover:border-foreground/40\r\n    ",
								children: String(i + 1).padStart(2, "0")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs leading-relaxed text-muted-foreground opacity-70 transition-opacity duration-300 group-hover:opacity-100",
							children: group.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex flex-wrap gap-2",
							children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-border px-3 py-1 text-xs text-foreground transition-colors group-hover:border-foreground/40",
								children: item
							}, item))
						})
					]
				})
			}, group.category))
		})
	});
}
function Projects() {
	const categories = (0, import_react.useMemo)(() => ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))], []);
	const [filter, setFilter] = (0, import_react.useState)("All");
	const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "projects",
		eyebrow: "projects",
		variant: "alt",
		centered: true,
		title: "Selected work.",
		intro: "Production-shaped projects — not tutorials. Each one solved a concrete problem end-to-end.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-10 flex flex-wrap gap-2",
			children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setFilter(c),
				className: `rounded-full border px-3.5 py-1.5 text-xs transition-all duration-200 ${filter === c ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"}`,
				children: c
			}, c))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:grid-cols-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "popLayout",
				children: filtered.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					layout: true,
					initial: {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: -8
					},
					transition: {
						duration: .4,
						delay: i * .04
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/40 hover:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[16/9] overflow-hidden border-b border-border bg-muted/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.title,
								className: "h-full w-full object-contain bg-white p-3 transition-transform duration-500 group-hover:scale-105"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute left-4 top-4 rounded-full border border-border bg-background/80 px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur",
								children: p.category
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-start justify-between gap-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-semibold tracking-tight",
										children: p.title
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: p.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 flex flex-wrap gap-1.5",
									children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-md border border-border px-2 py-0.5 text-[11px] text-foreground",
										children: t
									}, t))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-6 space-y-3 border-t border-border pt-5 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
											label: "Problem",
											value: p.problem
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
											label: "Challenges",
											value: p.challenges
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
											label: "Learnings",
											value: p.learnings
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 flex items-center gap-2",
									children: [p.github && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: p.github,
										className: "inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs transition-all hover:-translate-y-0.5 hover:bg-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 13 }), " GitHub"]
									}), p.documentation && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: p.documentation,
										className: "inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-1.5 text-xs text-background transition-transform hover:-translate-y-0.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 13 }), " Documentation"]
									})]
								})
							]
						})]
					}) })
				}, p.title))
			})
		})]
	});
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-[100px_1fr] gap-4 items-baseline",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] font-bold uppercase tracking-widest text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-sm leading-relaxed text-foreground/80",
			children: value
		})]
	});
}
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "experience",
		eyebrow: "experience",
		centered: true,
		title: "A short, honest timeline.",
		intro: "Education, self-directed work, and the projects that shaped how I think about production systems.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "relative border-l border-border/40 pl-8 md:pl-10",
			children: EXPERIENCE.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute -left-[37px] top-2 md:-left-[41px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-3 w-3 rounded-full border-2 border-foreground bg-background" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-10 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-semibold tracking-tight",
									children: e.role
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-right leading-none text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
									children: e.period
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-sm text-muted-foreground",
								children: e.org
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-7 text-foreground/80",
								children: e.detail
							}),
							e.tech && e.tech.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: e.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground",
									children: t
								}, t))
							}),
							e.outcome && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-green-500 text-sm leading-none",
									children: "✓"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: e.outcome
								})]
							})
						]
					})]
				})
			}, e.period + e.role))
		})
	});
}
function Certifications() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "certifications",
		eyebrow: "certifications",
		centered: true,
		variant: "alt",
		title: "Credentials, current and upcoming.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: CERTIFICATIONS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] uppercase tracking-widest text-muted-foreground",
									children: c.issuer
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1.5 text-base font-medium tracking-tight",
									children: c.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-4 inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { size: 11 }),
										" ",
										c.status
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, {
							size: 22,
							className: "shrink-0 text-foreground/70 transition-transform duration-500 group-hover:rotate-6"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Track: ", c.issuer] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: c.link,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[11px] text-foreground transition-colors hover:bg-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 11 }), " Verify"]
							})]
						})
					})]
				})
			}, c.name))
		})
	});
}
function GitHubSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "github",
		eyebrow: "github",
		centered: true,
		title: "Building in the open.",
		intro: "A snapshot of my projects, technologies, and learning journey through GitHub.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-5xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-6 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-11 w-11 place-items-center rounded-full border border-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 18 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-base font-semibold",
								children: "@irkullawarrohan-hue"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-muted-foreground",
								children: "github.com/irkullawarrohan-hue"
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://github.com/irkullawarrohan-hue",
							target: "_blank",
							rel: "noreferrer",
							className: "rounded-full border border-border px-4 py-2 text-sm transition-colors hover:bg-muted",
							children: "View Profile"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-xl border border-border bg-background p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase tracking-widest text-muted-foreground",
							children: "Contributions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "https://ghchart.rshah.org/irkullawarrohan-hue",
									alt: "GitHub Contribution Graph",
									className: "max-w-none w-[165%] -translate-x-[39%]"
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: GITHUB_STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl font-semibold tracking-tight",
								children: s.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-[11px] uppercase tracking-widest text-muted-foreground",
								children: s.label
							})]
						}, s.label))
					})
				]
			}) })
		})
	});
}
function Resume() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "resume",
		className: "scroll-mt-24 border-t border-border py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border bg-card p-10 text-center md:p-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] uppercase tracking-[0.24em] text-muted-foreground",
						children: "/resume"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 text-balance text-3xl font-semibold tracking-tight md:text-5xl",
						children: "The one-page version."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-xl text-muted-foreground",
						children: "A concise, recruiter-friendly PDF with skills, projects, and contact — refreshed with every meaningful update."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://drive.google.com/uc?export=download&id=1QViXUZsZ7v-yC3iRD-bu4yhMC1YHIQGj",
						className: "mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 16 }), " Download Resume"]
					})
				]
			}) })
		})
	});
}
var contacts = [
	{
		icon: Mail,
		label: "Email",
		value: "irkullawarrohan@gmail.com",
		href: "https://mail.google.com/mail/?view=cm&fs=1&to=irkullawarrohan@gmail.com"
	},
	{
		icon: Linkedin,
		label: "LinkedIn",
		value: "linkedin.com/in/rohan",
		href: "https://www.linkedin.com/in/rohan-irkullawar-393484297/"
	},
	{
		icon: Github,
		label: "GitHub",
		value: "github.com/rohan",
		href: "https://github.com/irkullawarrohan-hue"
	},
	{
		icon: MapPin,
		label: "Location",
		value: "Hyderabad, Telangana — India"
	}
];
function Contact() {
	const [state, handleSubmit] = J("xvzenbke");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "contact",
		eyebrow: "contact",
		centered: true,
		title: "Let's connect.",
		intro: "Currently seeking DevOps and Cloud Engineer roles. Feel free to reach out for opportunities, collaborations, or technical discussions.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-stretch gap-6 lg:grid-cols-[1fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-full flex-col gap-3",
				children: contacts.map((c) => c.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: c.href,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "group flex flex-1 items-center justify-between rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-foreground/30",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 place-items-center rounded-full border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { size: 15 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-widest text-muted-foreground",
							children: c.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm",
							children: c.value
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						size: 16,
						className: "text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
					})]
				}, c.label) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group flex flex-1 items-center justify-between rounded-2xl border border-border bg-card p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 place-items-center rounded-full border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { size: 15 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-widest text-muted-foreground",
							children: c.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm",
							children: c.value
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						size: 16,
						className: "text-muted-foreground"
					})]
				}, c.label))
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "flex h-full flex-col rounded-2xl border border-border bg-card p-6 md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Name",
								name: "name",
								required: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								name: "email",
								type: "email",
								required: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, {
								prefix: "Email",
								field: "email",
								errors: state.errors
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Subject",
								name: "subject"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-[10px] uppercase tracking-widest text-muted-foreground",
									children: "Message"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "message",
									required: true,
									rows: 5,
									className: "mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground",
									placeholder: "Tell me about the role or project…"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, {
									prefix: "Message",
									field: "message",
									errors: state.errors
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: state.submitting,
								className: "inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 disabled:opacity-60",
								children: [state.submitting ? "Sending..." : state.succeeded ? "Message Sent ✓" : "Send message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
							})
						})
					]
				})
			})]
		})
	});
}
function Field({ label, name, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[10px] uppercase tracking-widest text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			required,
			className: "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start justify-between gap-10 md:flex-row md:items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#home",
						className: "flex items-center gap-2 text-sm font-semibold tracking-tight",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-2 w-2 rounded-full bg-foreground" }),
							"Rohan",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: ".devops"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-sm text-xs text-muted-foreground",
						children: "DevOps & Cloud Engineer — designing quiet, production-ready systems."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground",
						children: NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "hover:text-foreground",
							children: l.label
						}, l.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-2",
						children: [
							{
								icon: Github,
								href: "https://github.com/irkullawarrohan-hue",
								label: "GitHub"
							},
							{
								icon: Linkedin,
								href: "https://www.linkedin.com/in/rohan-irkullawar-393484297/",
								label: "LinkedIn"
							},
							{
								icon: Mail,
								href: "https://mail.google.com/mail/?view=cm&fs=1&to=irkullawarrohan@gmail.com",
								label: "Email"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: s.href,
							"aria-label": s.label,
							className: "grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { size: 14 })
						}, s.label))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-col-reverse items-start justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Rohan. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tracking-widest",
					children: "— designed & built with intent —"
				})]
			})]
		})
	});
}
function BackToTop() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShow(window.scrollY > 600);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
		initial: {
			opacity: 0,
			y: 12
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			y: 12
		},
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		"aria-label": "Back to top",
		className: "fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur transition-colors hover:bg-foreground hover:text-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { size: 16 })
	}) });
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Certifications, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitHubSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Resume, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackToTop, {})
		]
	});
}
//#endregion
export { Index as component };
