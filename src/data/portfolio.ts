export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export const SKILLS: {
  category: string;
  description: string;
  items: string[];
}[] = [
  {
    category: "Cloud",
    description: "Provisioning scalable AWS infrastructure with cost and reliability in mind.",
    items: ["AWS", "EC2", "ECS", "ECR", "IAM", "VPC", "CloudWatch", "ALB", "S3", "EKS"],
  },
  {
    category: "Infrastructure",
    description: "Infrastructure as Code using reusable, reviewable Terraform modules.",
    items: ["Terraform", "Terraform Modules", "Remote Backend", "State Management"],
  },
  {
    category: "Containers",
    description: "Containerization, image optimization, and orchestration at scale.",
    items: ["Docker", "Docker Compose", "Kubernetes"],
  },
  {
    category: "CI/CD",
    description: "Automated build, test, and deploy pipelines with safe rollouts.",
    items: ["GitHub Actions"],
  },
  {
    category: "Operating Systems",
    description: "Linux fundamentals, shell tooling, & system-lv debugging.",
    items: ["Linux"],
  },
  {
    category: "Programming",
    description: "Practical scripting and services in Python, and Bash.",
    items: ["Python", "Bash"],
  },
  {
    category: "Version Control",
    description: "Trunk-based workflows, reviewable diffs, and clean history.",
    items: ["Git", "GitHub"],
  },
];

export type ProjectKind = "cicd" | "terraform" | "docker" | "k8s" | "monitoring";

export type Project = {
  title: string;
  category: string;
  kind: ProjectKind;
  image: string;
  description: string;
  tech: string[];
  problem: string;
  challenges: string;
  learnings: string;
  github?: string;
  documentation?: string;
};



export const PROJECTS: Project[] = [
   {
    title: "GlobalMart CI/CD Pipeline on AWS",
    category: "CI/CD",
    kind: "cicd",
    image: "https://lwfiles.mycourse.app/67ed1067042dc73b07d76036-public/a55ddc67bd7170069dca2fd812acb9ac.png",
    description:
      "Built a production-inspired CI/CD pipeline using AWS CodePipeline and CodeDeploy to automate deployments from GitHub to Amazon EC2.",
    tech: [
      "AWS CodePipeline",
      "CodeDeploy",
      "EC2",
      "CloudWatch",
      "IAM",
      "S3",
      "GitHub",
    ],
    problem:
      "Deployment failures caused application downtime due to configuration issues.",
    challenges:
      "Configured IAM roles, deployment scripts, artifacts, and pipeline stages while troubleshooting deployment failures.",
    learnings:
      "CI/CD automation, deployment troubleshooting, CloudWatch, and AWS DevOps services.",
    github: "https://github.com/irkullawarrohan-hue/globalmart-cicd-pipeline-aws",
    documentation: "https://drive.google.com/file/d/1iZj2_hmiS1yh0esUS-ZnDexa-L1YEqwA/view?usp=sharing",
  },
  {
    title: "Infrastructure as Code with Terraform",
    category: "Infrastructure",
    kind: "terraform",
    image: "https://i.ibb.co/zTGFGyJY/terraform-image.png", //"https://uploads.teachablecdn.com/attachments/648cb5da07f449fb9cd62f5f7348775b.png",
    description:
      "Provisioned AWS infrastructure using reusable Terraform modules with remote state management through Amazon S3 and DynamoDB.",
    tech: [
      "Terraform",
      "AWS",
      "VPC",
      "EC2",
      "IAM",
      "S3",
      "DynamoDB",
    ],
    problem:
      "Manual infrastructure provisioning was difficult to maintain and reproduce.",
    challenges:
      "Designed reusable modules, configured remote state, and managed resource dependencies.",
    learnings:
      "Terraform, Infrastructure as Code, AWS networking, and state management.",
    github: "https://github.com/irkullawarrohan-hue/terraform-aws-infrastructure",
    documentation: "https://drive.google.com/file/d/14B0CNhXm1yypNGHoYUdfniqVQIkarqc6/view?usp=sharing",
  },
   {
    title: "Containerized LMS Migration on Amazon ECS",
    category: "Containers",
    kind: "docker",
    image: "https://uploads.teachablecdn.com/attachments/a411bfccfd594fa69464e9f12c5df801.png",
    description:
      "Containerized and deployed an LMS application on Amazon ECS Fargate using Amazon ECR, ALB, and CloudWatch.",
    tech: [
      "Docker",
      "Amazon ECS",
      "Fargate",
      "Amazon ECR",
      "ALB",
      "CloudWatch",
      "IAM",
    ],
    problem:
      "Container deployment issues prevented the application from running correctly.",
    challenges:
      "Resolved ECS deployment issues, ALB routing, security groups, and container configuration.",
    learnings:
      "Docker, ECS Fargate, ECR, ALB, CloudWatch, and container troubleshooting.",
    github: "https://github.com/irkullawarrohan-hue/containerized-lms-migration-and-troubleshooting",
    documentation: "https://drive.google.com/file/d/1Qh_wHqsdepwUn_FgzZA28IFqWr_xR8ne/view?usp=sharing",
  },
  {
    title: "Kubernetes Deployment on Amazon EKS",
    category: "Kubernetes",
    kind: "k8s",
    image: "https://i.ibb.co/23xPDk2Z/k8s-image.png", //"https://uploads.teachablecdn.com/attachments/a0971f7e76264207bbc00fb7ab695a98.png",
    description:
      "Containerized an application and deployed it on Amazon EKS using Kubernetes Deployments and Services.",
    tech: [
      "Amazon EKS",
      "Kubernetes",
      "Docker",
      "Amazon ECR",
      "EC2",
      "IAM",
      "kubectl",
    ],
    problem:
      "The application required a scalable and consistent deployment platform.",
    challenges:
      "Configured EKS clusters, Kubernetes resources, Docker images, and application networking.",
    learnings:
      "Kubernetes, Amazon EKS, Pods, Deployments, Services, and container orchestration.",
    github: "https://github.com/irkullawarrohan-hue/Kubernetes-Deployment-and-Autoscaling-on-Amazon-EKS",
    documentation: "https://drive.google.com/file/d/1USjDnwCgIlsnW1WIgG8BD_uQE9duPb9k/view?usp=sharing",
  },
   {
    title: "Proactive EC2 Monitoring & Auto-Remediation",
    category: "Monitoring",
    kind: "monitoring",
    image: "https://lwfiles.mycourse.app/67ed1067042dc73b07d76036-public/cd781f361c5b64d29af79cbdccee5498.png",
    description:
      "Built automated monitoring and remediation for EC2 using CloudWatch, Lambda, and GuardDuty.",
    tech: [
      "CloudWatch",
      "Lambda",
      "GuardDuty",
      "IAM",
      "EC2",
    ],
    problem:
      "Performance and security incidents required automated detection and response.",
    challenges:
      "Configured CloudWatch alarms, Lambda automation, GuardDuty, and custom monitoring metrics.",
    learnings:
      "CloudWatch, Lambda, GuardDuty, monitoring, and incident response.",
    github: "https://github.com/irkullawarrohan-hue/proactive-monitoring-and-security-auto-remediation-for-ec2-aws",
    documentation: "https://drive.google.com/file/d/170BY7fROXSaiXgaRyIeTIHQbPkHzFFh_/view?usp=sharing",
  },
   {
    title: "Production Infrastructure on AWS using Terraform & ECS Fargate",
category: "Infrastructure",
kind: "terraform",
image: "https://i.ibb.co/Df1mvV82/3a52a01a-4df4-4bd8-99b8-7f3bf6d8cbee.png",
description:
  "Provisioned a production-ready AWS infrastructure using Terraform and automated container deployments to Amazon ECS Fargate with GitHub Actions CI/CD.",
tech: [
  "Terraform",
  "Amazon ECS Fargate",
  "Amazon ECR",
  "GitHub Actions",
  "ALB",
  "Amazon VPC"
],
problem:
  "Manual infrastructure and deployments were slow, error-prone, and inconsistent.",
challenges:
  "Built modular Terraform, secure networking, and automated CI/CD with OIDC.",
learnings:
  "Terraform, ECS Fargate, CI/CD, OIDC, AWS networking, and Infrastructure as Code.",
    github: "https://github.com/irkullawarrohan-hue/terraform-aws-ecs-fargate-cicd",
    documentation: "https://drive.google.com/file/d/1eIAUO2NSzQoun0WC2CNvASU9iABXZrmZ/view?usp=sharing",
  },
];

export const EXPERIENCE = [
  {
    period: "Feb 2026 — May 2026",
    role: "Software Development Engineer Intern",
    org: "Revithalize Mobility Pvt. Ltd.",
    detail:
      "Developed REST APIs, JWT authentication, and backend services for an EV monitoring platform using Python and MongoDB.",
    tech: ["Python", "Flask", "MongoDB", "REST API", "JWT", "Linux"],
    outcome:
      "Delivered 10+ REST APIs and resolved critical backend issues before project delivery.",
  },
  {
    period: "2026 — Present",
    role: "Cloud & DevOps Projects",
    org: "Independent Projects",
    detail:
      "Built AWS cloud infrastructure, CI/CD pipelines, container platforms, Kubernetes deployments, and monitoring solutions.",
    tech: ["AWS", "Terraform", "Docker", "Kubernetes", "CloudWatch"],
    outcome:
      "Completed five production-inspired end-to-end cloud projects.",
  },
  {
    period: "2022 — 2026",
    role: "Bachelor of Technology",
    org: "SR University, Warangal",
    detail:
      "Computer Science Engineering with a focus on cloud computing, networking, operating systems, and software engineering.",
    tech: ["Python", "Linux", "Networking"],
    outcome:
      "Built a strong foundation for Cloud and DevOps engineering.",
  },
];

export const CERTIFICATIONS = [
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
  },
];

export const GITHUB_STATS = [
  { label: "Major Projects", value: "5+" },
  { label: "AWS Services", value: "10+" },
  { label: "Core Technologies", value: "10+" },
  { label: "Internship", value: "1" },
];

export const REPOS = [
  {
    name: "globalmart-catalog",
    desc: "AWS CodePipeline & CodeDeploy CI/CD pipeline with deployment troubleshooting.",
    lang: "JavaScript",
  },
  {
    name: "terraform-aws-infrastructure",
    desc: "Terraform modules for AWS infrastructure with S3 remote state and DynamoDB locking.",
    lang: "HCL",
  },
  {
    name: "containerized-lms-ecs",
    desc: "React LMS deployed on Amazon ECS Fargate with ECR, ALB, and CloudWatch.",
    lang: "Dockerfile",
  },
  {
    name: "amazon-eks-deployment",
    desc: "Dockerized application deployed on Amazon EKS using Kubernetes.",
    lang: "YAML",
  },
  {
    name: "monitoring-auto-remediation",
    desc: "EC2 monitoring and auto-remediation using CloudWatch, Lambda, and GuardDuty.",
    lang: "Python",
  },
];
