import { useEffect, useState, useRef, type ReactNode } from 'react'
import {
  ArrowRight,
  ArrowUp,
  Check,
  Code2,
  Search,
  TrendingUp,
  Palette,
  Sparkles,
  Layers,
  BarChart3,
  Users,
  Rocket,
  Target,
  Star,
  Menu,
  X,
  Moon,
  Sun,
  ExternalLink,
  Link,
  Share,
  Globe,
} from 'lucide-react'
// import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
// import { ArrowRight } from 'lucide-react'
import logoJpg from './assets/logo1.png'
import logo2 from './assets/logo2.png'
import teamImg from './assets/team.svg'
import finedgeImg from './assets/finedge.png'
import nexusImg from './assets/nexus.jpg'
import auraImg from './assets/aura.png'

function Logo({ theme }: { theme?: 'light' | 'dark' }) {
  if (theme === 'dark') {
    return <img src={logoJpg} alt="Makist" className="h-20 w-auto md:h-24 object-contain" />
  }

  if (theme === 'light') {
    return <img src={logo2} alt="Makist" className="h-20 w-auto md:h-24 object-contain" />
  }

  return (
    <div className="flex items-center gap-2">
      <div className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/40">
        <div className="h-3 w-3 rotate-45 bg-primary" />
      </div>
      <span className="text-lg font-bold tracking-tight text-content">Makist</span>
    </div>
  )
}

function PillBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
      {children}
    </span>
  )
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
      {children}
    </div>
  )
}

function Nav({ theme, toggleTheme }: { theme: 'light' | 'dark'; toggleTheme: () => void }) {
  const [open, setOpen] = useState(false)
  const links = [
    ['Services', '#services'],
    ['Work', '#work'],
    ['Testimonials', '#testimonials'],
    ['Pricing', '#pricing'],
  ] as const

  return (
    <header className="sticky top-0 z-50 border-b border-surface header-bg backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Logo theme={theme} />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="text-sm text-muted transition-colors hover:text-content">
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="grid h-11 w-11 place-items-center rounded-lg border border-surface text-content transition hover:border-primary/40 hover:text-primary"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <a href="#contact" className="inline-flex min-h-11 items-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
            Get Started
          </a>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-lg border border-surface text-content md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-surface md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3">
            {links.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm text-subtle hover:bg-panel">
                {label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                toggleTheme()
                setOpen(false)
              }}
              className="mt-2 inline-flex min-h-11 items-center justify-center rounded-lg border border-surface bg-panel px-4 text-sm font-semibold text-content transition hover:border-primary/40 hover:text-primary"
            >
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground">
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-primary/25 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-16 sm:px-8 md:pt-24 lg:grid-cols-2 lg:gap-10">
        <div className="max-w-xl">
          <PillBadge>
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Makist© is Live
          </PillBadge>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            We Engineer
            <br />
            <span className="text-primary">Digital Dominance</span>
          </h1>
          <p className="mt-6 max-w-lg text-base text-white/60 sm:text-lg">
            Partner with the high-end agency that scales ambitious startups and Fortune
            500s through brutal tech, relentless design, and data-driven marketing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
              Start a Project <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#work" className="inline-flex min-h-12 items-center rounded-lg border border-white/15 bg-white/5 px-5 text-sm font-semibold text-white transition hover:bg-white/10">
              View Our Work
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/60">
            {['Award-winning', 'Data-driven', 'Global reach'].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <span className="grid h-4 w-4 place-items-center rounded-full bg-primary/20 text-primary">
                  <Check className="h-3 w-3" />
                </span>
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex h-[420px] w-full max-w-[520px] items-center justify-center lg:h-auto">
          <div className="absolute inset-0 -z-10 mx-auto my-auto h-[340px] w-[340px] rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute left-0 top-4 w-[70%] rotate-[-4deg] card-surface p-5 shadow-2xl">
            <div className="flex items-center justify-between text-xs text-white/60">
              <span className="inline-flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" /> Conversion
              </span>
              <ArrowUp className="h-4 w-4 text-primary" />
            </div>
            <div className="mt-2 text-3xl font-bold text-white">+148%</div>
            <div className="mt-4 flex h-14 items-end gap-1.5">
              {[30, 45, 38, 60, 52, 78, 66, 92, 84, 100].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%`, animationDelay: `${i * 80}ms` }}
                  className="flex-1 rounded-sm bg-gradient-to-t from-primary/40 to-primary origin-bottom transform-gpu scale-y-0 animate-bar"
                />
              ))}
            </div>
          </div>

          <div className="absolute bottom-2 right-0 w-[68%] rotate-[3deg] card-surface p-5 shadow-2xl">
            <div className="flex items-center gap-2 text-xs text-white/60">
              <Users className="h-4 w-4 text-primary" /> Active Users
            </div>
            <div className="mt-1 text-2xl font-bold text-white">2.4M</div>
            <div className="mt-3 rounded-md border border-white/10 bg-black/40 p-3 font-mono text-[10px] leading-relaxed text-white/70">
              <div className="flex gap-1.5 pb-2">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-400" />
              </div>
              <div>
                <span className="text-primary">$</span> deploy --prod
              </div>
              <div className="text-green-400">✓ live · 42ms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Advantage() {
  const stats = [
    ['500+', 'Clients Worldwide'],
    ['1.2K+', 'Projects Shipped'],
    ['10+', 'Years Experience'],
    ['99%', 'Satisfaction Rate'],
  ] as const

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow>The Difference</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Not just an agency.
            <br />
            <span className="text-primary">Your unfair advantage.</span>
          </h2>
          <p className="mt-6 text-white/60">
            We started Makist with a simple thesis: most agencies are slow, bloated, and
            more focused on billable hours than measurable outcomes. That model is
            broken.
          </p>
          <p className="mt-4 text-white/60">
            We are a tactical strike team of elite developers, designers, and growth
            marketers who partner with founders and executives to ship product that
            moves the needle — fast.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6">
            {stats.map(([n, l]) => (
              <div key={l}>
                <div className="text-3xl font-bold text-white sm:text-4xl">
                  <span className="text-primary">{n}</span>
                </div>
                <div className="mt-1 text-sm text-white/55">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img src={teamImg} alt="Makist team collaborating" loading="lazy" width={1200} height={900} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Capabilities() {
  const items = [
    {
      icon: Code2,
      title: 'Web Engineering',
      desc: 'High-performance web apps built with React, Next.js, and modern tech stacks that scale from day one.',
    },
    {
      icon: Search,
      title: 'Technical SEO',
      desc: 'Data-driven search optimization that dominates SERPs and drives high-intent organic traffic.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Marketing',
      desc: 'Aggressive, ROI-focused performance marketing campaigns across paid social and search channels.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      desc: 'Interfaces that feel alive; we craft user experiences that reduce friction and maximize conversion.',
    },
    {
      icon: Sparkles,
      title: 'Brand Identity',
      desc: 'Visual systems and brand narratives that command authority and differentiate you from noise.',
    },
  ]

  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Capabilities</Eyebrow>
        <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
          Everything you need to
          <br />
          <span className="text-primary">dominate your market</span>
        </h2>
        <p className="mt-5 text-white/60">
          A comprehensive suite of services from world-class specialists — designed to
          launch, scale, and grow.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="card-surface p-6 transition hover:border-primary/40 hover:shadow-[0_0_0_1px_oklch(0.63_0.19_260/0.4)]">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-white/60">{desc}</p>
          </div>
        ))}
        <div className="glow-blue relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/70 p-6 text-white">
          <div className="text-lg font-semibold">Need a custom stack?</div>
          <p className="mt-2 text-sm text-white/80">Let's map out your architecture.</p>
          <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
            Talk to an Architect <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

function TrustSection() {
  const rows = [
    {
      icon: BarChart3,
      title: 'Data-Driven Decisions',
      desc: 'We don\'t guess; every design choice, code control, and marketing dollar spent is backed by hard data and rigorous testing.',
    },
    {
      icon: Users,
      title: 'Elite Expert Team',
      desc: 'No juniors or outsourced B-teams; you work directly with senior engineers, designers, and strategists who\'ve scaled massive products.',
    },
    {
      icon: Rocket,
      title: 'Cutting-Edge Tech Stack',
      desc: 'We build on the modern web: React, Next.js, edge computing — delivering sub-second load times that keep users engaged.',
    },
    {
      icon: Target,
      title: 'Proven ROI Focus',
      desc: 'We aren\'t here to just make things look pretty; we\'re here to increase conversion rates, reduce churn, and drive revenue.',
    },
  ]

  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
      <div className="pointer-events-none absolute left-1/4 top-10 h-[400px] w-[400px] rounded-full bg-primary/15 blur-3xl" />
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Why top brands
            <br />
            <span className="text-primary">trust Makist</span>
          </h2>
          <p className="mt-5 max-w-lg text-white/60">
            The digital landscape is ruthless. Here's why category leaders choose us to
            build, scale, and defend their advantage.
          </p>
          <div className="mt-10 space-y-6">
            {rows.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm text-white/60">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card-surface glow-blue p-6">
          <div className="flex items-center justify-between text-xs text-white/60">
            <span>Performance Overview</span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> Live
            </span>
          </div>
          <div className="mt-6 flex h-48 items-end gap-2">
            {[35, 52, 44, 68, 60, 78, 72, 88, 82, 95, 90, 100].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%`, animationDelay: `${i * 60}ms` }}
                className="flex-1 rounded-sm bg-gradient-to-t from-primary/30 to-primary origin-bottom transform-gpu scale-y-0 animate-bar"
              />
            ))}
          </div>
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-xs text-white/60">
              <span>Goal Progress</span>
              <span className="text-white">87%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-primary/70 to-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CaseStudies() {
  const items = [
    { img: finedgeImg, name: 'FinEdge Dashboard', result: '+200% User Retention' },
    { img: nexusImg, name: 'Nexus Mobile App', result: '4.9 App Store Rating' },
    { img: auraImg, name: 'Aura Commerce', result: '$2.4M Q1 Revenue' },
  ]

  return (
    <section id="work" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-xl">
          <Eyebrow>Our Work</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Selected Case Studies
          </h2>
          <p className="mt-4 text-white/60">
            We've partnered with disruptors to build category-defining products. Here's
            a small slice of the work.
          </p>
        </div>
        <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          View All Projects <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((c) => (
          <a key={c.name} href="#" className="group card-surface overflow-hidden transition hover:border-primary/40">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <div className="font-semibold text-white">{c.name}</div>
              <div className="mt-1 text-sm text-primary">Result: {c.result}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function Testimonials() {
  const items = [
    {
      quote:
        'Makist rebuilt our web platform in ten weeks. Page speed tripled, sign-ups doubled, and our engineering team finally has a foundation they can trust.',
      name: 'Elena Marsh',
      role: 'CEO, Lumenwave',
    },
    {
      quote:
        'The Makist team plugged in like senior operators from day one. Their strategic clarity and shipping cadence reset our expectations for what an agency can be.',
      name: 'Marcus Tran',
      role: 'VP Product, Corevault',
    },
    {
      quote:
        'The rebrand and rebuild paid for itself in a single quarter. We look sharper, load faster, and convert higher than any competitor in our space.',
      name: 'Priya Balsara',
      role: 'Founder, Northline',
    },
  ]

  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Don't take our word for it.</h2>
        <p className="mt-4 text-white/60">
          Hear from the founders and executives who trusted us to scale their vision.
        </p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {items.map((t) => (
          <div key={t.name} className="card-surface p-6">
            <div className="flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-5 text-sm italic leading-relaxed text-white/75">"{t.quote}"</p>
            <div className="mt-6 border-t border-white/10 pt-4">
              <div className="font-semibold text-white">{t.name}</div>
              <div className="text-sm text-primary">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '$4,500',
      per: '/mo',
      desc: 'For early-stage startups ready to establish their digital presence.',
      features: ['Landing Page Development', 'Basic SEO Setup', 'UI/UX Audit', 'Monthly Performance Report', 'Email Support'],
      cta: 'Start Scaling',
      featured: false,
    },
    {
      name: 'Growth',
      price: '$9,500',
      per: '/mo',
      desc: 'For scaling companies that need powerful, custom technology.',
      features: ['Custom Web App Development', 'Advanced Technical SEO', 'Full UI/UX Redesign', 'Conversion Rate Optimization', 'Weekly Strategy Calls', 'Priority Slack Support'],
      cta: 'Accelerate Growth',
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      per: '',
      desc: 'For industry leaders demanding unparalleled scale and security.',
      features: ['Enterprise Infrastructure', 'Dedicated Engineering Pod', 'Global CDN & Performance', 'C-Level Strategy Consulting', '24/7 Dedicated Support', 'Custom Security Audits'],
      cta: 'Contact Sales',
      featured: false,
    },
  ]

  return (
    <section id="pricing" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Investment</Eyebrow>
        <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
          Simple pricing.
          <br />
          <span className="text-primary">Massive leverage.</span>
        </h2>
        <p className="mt-5 text-white/60">
          We don't bill by the hour, we bill by impact — choose the partnership tier
          that matches your ambition.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-start">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={
              (t.featured ? 'relative card-surface glow-blue p-8 lg:-mt-4 lg:mb-4 border-primary/50' : 'card-surface p-8') +
              ' transform-gpu transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20'
            }
          >
            {t.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                  Most Popular
                </span>
              </div>
            )}
            <div className="text-lg font-semibold text-white">{t.name}</div>
            <p className="mt-2 min-h-[48px] text-sm text-white/60">{t.desc}</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-white sm:text-5xl">{t.price}</span>
              {t.per && <span className="text-sm text-white/50">{t.per}</span>}
            </div>
            <ul className="mt-6 space-y-3 text-sm text-white/75">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={
                'mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-lg px-4 text-sm font-semibold transition ' +
                (t.featured ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'border border-white/15 bg-white/5 text-white hover:bg-white/10')
              }
            >
              {t.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

function Insights() {
  const posts = [
    {
      tag: 'Engineering',
      date: 'Mar 12, 2025',
      title: 'Why We Abandoned Traditional REST APIs for GraphQL',
      excerpt: 'A deep dive into a client migration that reduced load times by 80% and doubled development speed.',
    },
    {
      tag: 'Design',
      date: 'Feb 28, 2025',
      title: 'The Death of \'Clean\' Design: Why Maximalism Converts',
      excerpt: 'Pushback against minimalism — making bold, energetic typography and rich color actually raises conversion.',
    },
    {
      tag: 'SEO',
      date: 'Feb 14, 2025',
      title: 'SEO Is Dead. Long Live Technical SEO.',
      excerpt: 'Keyword stuffing isn\'t enough anymore; site speed, schema markup, and programmatic content are the new game.',
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Agency Insights</h2>
          <p className="mt-4 text-white/60">
            Thoughts on shipping, design, and marketing from the Makist team.
          </p>
        </div>
        <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          View All Articles <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <article key={p.title} className="card-surface p-6">
            <div className="text-xs text-white/50">
              <span className="text-primary">{p.tag}</span> · {p.date}
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-snug text-white">{p.title}</h3>
            <p className="mt-3 text-sm text-white/60">{p.excerpt}</p>
            <a href="#" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
              Read Article <ArrowRight className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

// function Contact() {
//   const formRef = useRef<HTMLFormElement>(null)
//   const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!formRef.current) return
//     setStatus('sending')

//     emailjs
//       .sendForm(
//         'YOUR_SERVICE_ID',
//         'YOUR_TEMPLATE_ID',
//         formRef.current,
//         'YOUR_PUBLIC_KEY'
//       )
//       .then(() => {
//         setStatus('sent')
//         formRef.current?.reset()
//       })
//       .catch(() => setStatus('error'))
//   }

//   return (
//     // ...
//     <form ref={formRef} onSubmit={handleSubmit} className="card-surface p-6 sm:p-8">
//       <div className="grid gap-4 sm:grid-cols-2">
//         <Field label="Name" name="from_name" placeholder="Ada Lovelace" />
//         <Field label="Company" name="company" placeholder="Analytical Engines" />
//       </div>
//       <div className="mt-4">
//         <Field label="Email" name="from_email" type="email" placeholder="ada@company.com" />
//       </div>
//       <div className="mt-4">
//         <label className="block text-xs font-medium text-white/70">Project Details</label>
//         <textarea
//           name="message"
//           rows={5}
//           placeholder="Tell us what you're building…"
//           className="mt-2 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none"
//         />
//       </div>
//       <button
//         type="submit"
//         disabled={status === 'sending'}
//         className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60"
//       >
//         {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent!' : 'Send Transmission'}
//         <ArrowRight className="h-4 w-4" />
//       </button>
//       {status === 'error' && (
//         <p className="mt-3 text-sm text-red-400">Something went wrong — please try again.</p>
//       )}
//     </form>
//   )
// }

function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(() => {
        setStatus('sent')
        formRef.current?.reset()
      })
      .catch(() => setStatus('error'))
  }
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-primary/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <PillBadge>
              <Globe className="h-3.5 w-3.5" /> Global Reach
            </PillBadge>
            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Ready to break the
              <br />
              <span className="text-primary">status quo?</span>
            </h2>
            <p className="mt-5 max-w-lg text-white/60">
              Drop us a line. Whether you have a defined spec or just a wild idea, we're
              ready to engineer it into reality.
            </p>
            <div className="mt-10 space-y-6">
              <div>
                <div className="text-sm font-semibold text-white">San Francisco HQ</div>
                <div className="mt-1 text-sm text-white/60">100 Market Street, San Francisco, CA 94105</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">General Inquiries</div>
                <a href="mailto:hello@makist.co" className="mt-1 block text-sm text-primary">
                  hello@makist.co
                </a>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="card-surface p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="from_name" placeholder="Ada Lovelace" />
              <Field label="Company" name="company" placeholder="Analytical Engines" />
            </div>
            <div className="mt-4">
              <Field label="Email" name="from_email" type="email" placeholder="ada@company.com" />
            </div>
            <div className="mt-4">
              <label className="block text-xs font-medium text-white/70">Project Details</label>
              <textarea
                rows={5}
                placeholder="Tell us what you're building…"
                className="mt-2 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent!' : 'Send Transmission'}
              Send Transmission <ArrowRight className="h-4 w-4" />
            </button>
            {status === 'error' && (
              <p className="mt-3 text-sm text-red-400">Something went wrong — please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

// function Field({
//   label,
//   name,
//   type = 'text',
//   placeholder,
// }: {
//   label: string
//   name: string
//   type?: string
//   placeholder?: string
// }) {
//   return (
//     <div>
//       <label className="block text-xs font-medium text-white/70">{label}</label>
//       <input
//         name={name}
//         type={type}
//         placeholder={placeholder}
//         className="mt-2 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none"
//       />
//     </div>
//   )
// }

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-white/70">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none"
      />
    </div>
  )
}

function Footer({ theme }: { theme?: 'light' | 'dark' }) {
  const cols = [
    {
      title: 'Services',
      links: ['Web Engineering', 'Technical SEO', 'Growth Marketing', 'UI/UX Design', 'Brand Identity'],
    },
    { title: 'Company', links: ['About Us', 'Case Studies', 'Careers', 'Blog'] },
    { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'] },
  ]

  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
          <div>
          <Logo theme={theme} />
          <p className="mt-4 max-w-xs text-sm text-white/55">
            Engineering digital dominance for ambitious brands, category leaders, and
            founders who refuse to blend in.
          </p>
          <div className="mt-5 flex gap-3">
            {[ExternalLink, Link, Share, Globe].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="grid h-9 w-9 place-items-center rounded-md border border-white/10 text-white/60 transition hover:border-primary/40 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-sm font-semibold text-white">{c.title}</div>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-xs text-white/45 sm:px-8">
          <div>© {new Date().getFullYear()} Makist. All rights reserved.</div>
          <div className="inline-flex items-center gap-2">
            <Layers className="h-3.5 w-3.5" /> Built with brutal tech.
          </div>
        </div>
      </div>
    </footer>
  )
}

function MakistLanding() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const stored = window.localStorage.getItem('makist-theme') as 'light' | 'dark' | null
    const initialTheme = stored ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(initialTheme)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('theme-light', theme === 'light')
    document.documentElement.classList.toggle('theme-dark', theme === 'dark')
    window.localStorage.setItem('makist-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))

  return (
    <div className="min-h-screen bg-page text-content">
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Advantage />
        <Capabilities />
        <TrustSection />
        <CaseStudies />
        <Testimonials />
        <Pricing />
        <Insights />
        <Contact />
      </main>
      <Footer theme={theme} />
    </div>
  )
}

function App() {
  return <MakistLanding />
}

export default App
