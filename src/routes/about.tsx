import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Radio,
  Sparkles,
  Trophy,
} from "lucide-react";

// local portrait asset in public/bibhab-talukdar-portrait.jpg

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Bibhab Talukdar | Full-Stack Engineer" },
      {
        name: "description",
        content:
          "Meet Bibhab Talukdar, a full-stack engineer building production-ready React, Node.js, Django, and AI-powered products.",
      },
      { property: "og:title", content: "Bibhab Talukdar | Full-Stack Engineer" },
      {
        property: "og:description",
        content:
          "Full-stack engineer and final-year IT student shipping complete products across frontend, backend, databases, and AI.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const links = {
  github: "https://github.com/bibhab2005",
  linkedin: "https://linkedin.com/in/bibhab",
  email: "mailto:bibhabtalukdar2005@gmail.com",
};

const projects = [
  {
    title: "FairShare",
    category: "Expense technology",
    stack: "MERN · OAuth · Recharts",
    accent: "bg-butter-soft",
    url: "https://fair-share-sand.vercel.app",
    summary:
      "A three-tier expense-splitting app with dual authentication, live expense logging, and a debt engine that simplifies peer-to-peer settlements.",
    application: "Helps groups record shared expenses, understand balances, and settle debts with fewer peer-to-peer payments.",
    engineering: "Built with React, Node.js, Express, MongoDB/Mongoose, Passport.js, Google OAuth 2.0, JWT, and bcryptjs across independently deployed services.",
    proof: "10+ REST endpoints · 4 core modules · automated balance settlement",
  },
  {
    title: "WanderMate",
    category: "Travel matching",
    stack: "React · Django · Gemini",
    accent: "bg-mint-soft",
    summary:
      "A companion-matching platform using spatial indexing and Jaccard similarity, with structured AI itinerary generation.",
    application: "Pairs nearby travelers around shared interests and turns their preferences into a practical itinerary.",
    engineering: "Decoupled React SPA and Django REST API with spatial indexing, Jaccard similarity, Gemini 2.5 Flash, structured JSON, CSRF validation, and strict CORS.",
    proof: "Dynamic matching · reliable JSON output · secured client/API boundary",
  },
  {
    title: "SkillScan-AI",
    category: "Privacy-first NLP",
    stack: "MERN · Local NLP",
    accent: "bg-sky-soft",
    summary:
      "A resume analysis platform that runs on local NLP, protects user data, and returns practical skill-gap insights.",
    application: "Lets candidates identify missing skills without sending resume data to an external AI provider.",
    engineering: "MERN architecture with local NLP, tested through Postman across the upload, analysis, and database flow.",
    proof: "100% local processing · 10+ integration issues resolved",
  },
  {
    title: "TravelLoop AI",
    category: "Applied AI",
    stack: "Django · PostgreSQL · NLP",
    accent: "bg-lava-soft",
    summary:
      "An NLP travel engine that extracts destinations, budgets, and dates from natural language and structures them for planning.",
    application: "Converts an unstructured trip request into reusable, structured travel parameters for itinerary planning.",
    engineering: "Django and PostgreSQL with a custom spaCy/NLTK pipeline, Gemini integration, retry logic, and rate-limit handling.",
    proof: "Entity extraction · relational persistence · resilient AI requests",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    tone: "text-lava-strong",
    copy: "React, JavaScript, HTML/CSS, Tailwind CSS, responsive interfaces, and clear component architecture.",
  },
  {
    title: "Backend & data",
    tone: "text-sky-strong",
    copy: "Node.js, Express, Django, REST APIs, PostgreSQL, MongoDB, MySQL, SQLite, and authentication flows.",
  },
  {
    title: "AI & engineering",
    tone: "text-mint-strong",
    copy: "Python, Gemini API, prompt engineering, spaCy, NLTK, Java DSA, Postman, Git, Vercel, and Render.",
  },
];

function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background font-body text-foreground selection:bg-lava selection:text-foreground">
      <CosmicSignals />
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-6 sm:px-8 sm:py-9 lg:px-10">
        <header className="reveal-in flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="group flex w-fit items-center gap-3" aria-label="Back to top">
            <span>
              <span className="block font-display text-3xl font-extrabold leading-none tracking-tight sm:text-4xl lg:text-5xl">Bibhab Talukdar</span>
              <span className="mt-1.5 block text-sm font-semibold text-muted-foreground sm:text-base">Full-Stack Engineer · About</span>
            </span>
          </a>
          <nav className="flex flex-wrap gap-2" aria-label="Profile links">
            <ProfileLink href={links.github} icon={Github} label="GitHub" external />
            <ProfileLink href={links.linkedin} icon={Linkedin} label="LinkedIn" external />
            <ProfileLink href={links.email} icon={Mail} label="Email" mint />
          </nav>
        </header>

        <section id="top" className="grid min-h-[680px] grid-cols-1 items-center gap-12 py-16 lg:grid-cols-12 lg:gap-14 lg:py-20">
          <div className="lg:col-span-8">
            <div className="reveal-in reveal-delay-1 inline-flex items-center gap-2 rounded-full bg-butter px-3 py-1.5 text-xs font-extrabold shadow-clay-sm">
              <span className="signal-dot size-2 rounded-full bg-lava-strong" />
              Open to full-stack roles · Graduating 2027
            </div>
            <h1 className="reveal-in reveal-delay-2 mt-6 max-w-[13ch] font-display text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
              I build full-stack products that work end to end.
            </h1>
            <p className="reveal-in reveal-delay-3 mt-6 max-w-[62ch] text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl">
              I’m a final-year IT student who turns ideas into deployed products—connecting thoughtful interfaces, reliable APIs, practical databases, and useful AI features.
            </p>
            <div className="reveal-in reveal-delay-4 mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="action-primary">
                <ArrowDown size={18} aria-hidden="true" /> See my work
              </a>
            </div>
            <div className="reveal-in reveal-delay-4 mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-muted-foreground">
              <span className="inline-flex items-center gap-2"><MapPin size={16} /> Vadodara · Open to relocation</span>
              <span className="inline-flex items-center gap-2"><Radio size={16} className="text-mint-strong" /> Available for opportunities</span>
            </div>
          </div>

          <div className="reveal-in reveal-delay-3 mx-auto w-full max-w-xs lg:col-span-4">
            <div className="portrait-orbit relative">
              <div className="absolute -inset-5 rounded-[2rem] border border-mint/50" />
              <div className="absolute -inset-9 rounded-[2.5rem] border border-dashed border-sky/50" />
              <span className="orbit-node absolute -right-10 top-1/4 size-4 rounded-full bg-lava shadow-clay-sm" />
              <span className="orbit-node orbit-node-alt absolute -left-8 bottom-1/4 size-3 rounded-full bg-mint shadow-clay-sm" />
              <div className="relative overflow-hidden rounded-[1.75rem] bg-mint-soft p-2.5 shadow-clay">
                <div className="relative overflow-hidden rounded-[1.25rem] bg-card">
                  <img
                    src="/bibhab-talukdar-portrait.jpg"
                    alt="Bibhab Talukdar, full-stack engineer"
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <RevealSection className="pt-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Capabilities</p>
              <h2 className="section-title">What I work with</h2>
            </div>
            <p className="hidden max-w-sm text-right text-sm font-semibold text-muted-foreground sm:block">A practical stack for designing, building, debugging, and shipping complete products.</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {skillGroups.map((skill, index) => (
              <article key={skill.title} className="skill-card group">
                <div className="flex items-center justify-between">
                  <h3 className={`font-display text-lg font-bold ${skill.tone}`}>{skill.title}</h3>
                  <span className="font-display text-sm font-bold text-muted-foreground">0{index + 1}</span>
                </div>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-muted-foreground">{skill.copy}</p>
              </article>
            ))}
          </div>
        </RevealSection>



        <RevealSection id="projects" className="scroll-mt-8 py-8">
          <p className="eyebrow">Selected projects</p>
          <h2 className="section-title">Proof through products</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.title} className="project-card group">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${project.accent}`}>{project.category}</span>
                  <span className="text-xs font-extrabold text-muted-foreground">{project.stack}</span>
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold">{project.title}</h3>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-secondary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"><ArrowUpRight size={16} /></span>
                </div>
                <p className="mt-3 max-w-[55ch] text-sm font-semibold leading-relaxed text-muted-foreground">{project.summary}</p>
                <dl className="mt-5 space-y-3 border-t border-border/70 pt-5 text-sm">
                  <div>
                    <dt className="font-display font-bold text-foreground">Application</dt>
                    <dd className="mt-1 font-semibold leading-relaxed text-muted-foreground">{project.application}</dd>
                  </div>
                  <div>
                    <dt className="font-display font-bold text-foreground">How it works</dt>
                    <dd className="mt-1 font-semibold leading-relaxed text-muted-foreground">{project.engineering}</dd>
                  </div>
                </dl>
                <p className="mt-5 rounded-xl bg-secondary px-3 py-2 text-xs font-extrabold text-muted-foreground">{project.proof}</p>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-lava px-4 py-2 text-xs font-extrabold text-lava-foreground shadow-clay-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                    <ExternalLink size={14} aria-hidden="true" /> View live demo
                  </a>
                )}
              </article>
            ))}
          </div>
        </RevealSection>

        <RevealSection className="grid grid-cols-1 gap-4 py-12 lg:grid-cols-12">
          <article className="rounded-3xl bg-card p-7 shadow-clay lg:col-span-5 sm:p-9">
            <GraduationCap className="text-sky-strong" size={28} />
            <p className="eyebrow mt-5">Education</p>
            <h2 className="mt-2 font-display text-2xl font-bold">B.Tech in Information Technology</h2>
            <p className="mt-2 font-bold text-muted-foreground">Parul University · 2023–2027</p>
            <p className="mt-1 text-sm font-semibold text-muted-foreground">Gujarat, India · CGPA 7.37/10</p>
          </article>
          <article className="rounded-3xl bg-card p-7 shadow-clay lg:col-span-7 sm:p-9">
            <Trophy className="text-lava-strong" size={28} />
            <p className="eyebrow mt-5">Momentum</p>
            <h2 className="mt-2 font-display text-2xl font-bold">Learning backed by practice</h2>
            <ul className="mt-5 space-y-3 text-sm font-semibold leading-relaxed text-muted-foreground">
              <li>100+ LeetCode problems solved in Java across core data structures and algorithms.</li>
              <li>62-hour full-stack development certification and NPTEL Computer Networks certification.</li>
              <li>Presented CashWise at Ideathon 4.0 and participated in the 2026 Environment Hackathon.</li>
            </ul>
          </article>
        </RevealSection>

        <RevealSection className="my-8 flex flex-col items-start justify-between gap-6 rounded-3xl bg-primary px-7 py-9 text-primary-foreground shadow-clay sm:flex-row sm:items-center sm:px-10">
          <div>
            <p className="text-sm font-bold text-primary-foreground/60">Available for full-time roles and meaningful collaborations</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Let’s build something useful.</h2>
          </div>
          <a href={links.email} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-card px-5 py-3 font-display text-sm font-bold text-foreground transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-card">
            <Mail size={17} /> Email me
          </a>
        </RevealSection>

        <footer className="flex flex-col gap-2 py-8 text-xs font-bold text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>Bibhab Talukdar · Full-Stack Engineer</span>
          <span>Vadodara, India · Open to relocation</span>
        </footer>
      </div>
    </main>
  );
}

function ProfileLink({ href, icon: Icon, label, external = false, primary = false, mint = false }: { href: string; icon: typeof Mail; label: string; external?: boolean; primary?: boolean; mint?: boolean }) {
  const tone = primary ? "bg-primary text-primary-foreground" : mint ? "bg-mint text-foreground" : "bg-card text-foreground";
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold shadow-clay-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${tone}`}>
      <Icon size={15} aria-hidden="true" /> {label}
    </a>
  );
}

function Proof({ color, value, label }: { color: string; value: string; label: string }) {
  return <li className="flex items-center gap-4"><span className={`size-3 shrink-0 rounded-full ${color}`} /><span className="font-display text-2xl">{value}</span><span className="text-sm text-muted-foreground">{label}</span></li>;
}

function RevealSection({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return <section id={id} className={`scroll-reveal ${className}`}>{children}</section>;
}

function CosmicSignals() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="signal-arc absolute -right-40 top-24 size-[34rem] rounded-full border border-mint/30" />
      <div className="signal-arc signal-arc-reverse absolute -left-52 top-[45rem] size-[30rem] rounded-full border border-sky/30" />
      {[12, 27, 44, 63, 78, 91].map((left, index) => (
        <span key={left} className="signal-particle absolute size-1.5 rounded-full bg-lava/60" style={{ left: `${left}%`, top: `${12 + index * 14}%`, animationDelay: `${index * 0.8}s` }} />
      ))}
    </div>
  );
}