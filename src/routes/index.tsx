import { createFileRoute } from "@tanstack/react-router";
import heroDashboard from "@/assets/hero-dashboard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Northbeam — Every signal, one calm screen" },
      {
        name: "description",
        content:
          "Northbeam folds your metrics, alerts, and team status into a single frosted command surface — the whole picture visible at a glance.",
      },
      { property: "og:title", content: "Northbeam — Every signal, one calm screen" },
      {
        property: "og:description",
        content:
          "Northbeam folds your metrics, alerts, and team status into a single frosted command surface — the whole picture visible at a glance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: "◐",
    iconClass: "bg-brand/10 text-brand",
    title: "Live pulse",
    body: "Real-time metrics stream in and settle into a single readable line.",
  },
  {
    icon: "▲",
    iconClass: "bg-coral/10 text-coral",
    title: "Smart alerts",
    body: "Thresholds that learn your baseline and only surface what matters.",
  },
  {
    icon: "◷",
    iconClass: "bg-sky-400/15 text-sky-600",
    title: "On-call roster",
    body: "Who's watching, right now, with escalation paths one tap away.",
  },
  {
    icon: "◇",
    iconClass: "bg-emerald-500/10 text-emerald-600",
    title: "Shared context",
    body: "Notes and runbooks pinned to each incident, visible to the team.",
  },
];

const plans = [
  {
    name: "Squad",
    price: "$0",
    detail: "for up to 5 operators",
    items: ["3 live dashboards", "7-day history", "Email alerts"],
    cta: "Get started",
    featured: false,
  },
  {
    name: "Command",
    price: "$49",
    detail: "per operator / month",
    items: [
      "Unlimited dashboards",
      "90-day history",
      "Smart alerts + on-call",
      "Shared runbooks",
    ],
    cta: "Start 14-day trial",
    featured: true,
  },
  {
    name: "Fleet",
    price: "$199",
    detail: "per operator / month",
    items: ["Everything in Command", "SSO + audit log", "Dedicated support"],
    cta: "Talk to sales",
    featured: false,
  },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-paper font-sans text-ink antialiased">
      {/* ambient light */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="glow -top-40 -left-24 size-[520px] bg-brand/25" />
        <div className="glow top-1/3 -right-28 size-[460px] bg-coral/20" />
        <div className="glow bottom-0 left-1/3 size-[420px] bg-sky-300/40" />
      </div>

      {/* NAV */}
      <header className="relative z-20">
        <div className="mx-auto max-w-6xl px-5 pt-5 sm:px-8">
          <nav className="glass-strong flex items-center justify-between rounded-2xl px-4 py-3 ring-1 ring-black/5 sm:px-6">
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-lg bg-ink font-display text-sm font-semibold text-primary-foreground">
                N
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                Northbeam
              </span>
            </div>
            <div className="hidden items-center gap-8 text-sm text-ink-soft md:flex">
              <a href="#features" className="hover:text-ink">
                Product
              </a>
              <a href="#proof" className="hover:text-ink">
                Customers
              </a>
              <a href="#pricing" className="hover:text-ink">
                Pricing
              </a>
            </div>
            <a
              href="#pricing"
              className="rounded-lg bg-ink px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-ink/90"
            >
              Open console
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-ink-soft ring-1 ring-black/5">
                <span className="size-1.5 rounded-full bg-coral" /> Live operations
                console
              </span>
              <h1 className="mt-6 max-w-[20ch] font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl">
                Every signal, one calm screen.
              </h1>
              <p className="mt-5 max-w-[46ch] text-pretty text-base leading-relaxed text-ink-soft">
                Northbeam folds your metrics, alerts, and team status into a single
                frosted command surface — so the whole picture is visible at a
                glance, with nothing extra.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-medium text-primary-foreground ring-1 ring-brand/40 hover:bg-brand/90"
                >
                  Start free
                  <span aria-hidden="true" className="text-base leading-none">
                    →
                  </span>
                </a>
                <a
                  href="#features"
                  className="glass-strong inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium ring-1 ring-black/5 hover:bg-white/80"
                >
                  Watch the tour
                </a>
              </div>
              <p className="mt-5 text-xs text-ink-soft/80">
                No card required · 14-day trial · Cancel anytime
              </p>
            </div>

            {/* product visual */}
            <div className="lg:col-span-7">
              <div className="glass-strong rounded-3xl p-3 shadow-[0_30px_60px_-30px_rgba(23,26,31,0.35)] ring-1 ring-black/5">
                <div className="overflow-hidden rounded-2xl ring-1 ring-black/5">
                  <img
                    src={heroDashboard}
                    alt="Northbeam live operations console showing uptime, latency, incidents, and traffic at a glance"
                    width={1280}
                    height={800}
                    className="aspect-[16/10] w-full object-cover"
                  />
                </div>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  <div className="glass rounded-xl p-3 ring-1 ring-black/5">
                    <p className="text-[11px] uppercase tracking-wide text-ink-soft/70">
                      Uptime
                    </p>
                    <p className="mt-1 font-display text-xl font-semibold">99.98%</p>
                  </div>
                  <div className="glass rounded-xl p-3 ring-1 ring-black/5">
                    <p className="text-[11px] uppercase tracking-wide text-ink-soft/70">
                      Alerts
                    </p>
                    <p className="mt-1 font-display text-xl font-semibold text-coral">
                      3 open
                    </p>
                  </div>
                  <div className="glass rounded-xl p-3 ring-1 ring-black/5">
                    <p className="text-[11px] uppercase tracking-wide text-ink-soft/70">
                      Team
                    </p>
                    <p className="mt-1 font-display text-xl font-semibold">12 on</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF STRIP */}
      <section id="proof" className="relative z-10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="glass flex flex-col items-center gap-4 rounded-2xl px-6 py-5 ring-1 ring-black/5 sm:flex-row sm:gap-8">
            <span className="shrink-0 text-xs uppercase tracking-[0.15em] text-ink-soft/70">
              Trusted on-call by
            </span>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 font-display font-semibold text-ink-soft/70">
              <span>Halcyon</span>
              <span>Driftline</span>
              <span>Meridian</span>
              <span>Octave</span>
              <span>Northwind</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative z-10">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="max-w-[40ch]">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              A console that reads like a calm dashboard.
            </h2>
            <p className="mt-4 text-pretty text-base text-ink-soft">
              Four surfaces, one glass layer. Each panel is a focused view of the
              same live data.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="glass rounded-2xl p-6 ring-1 ring-black/5">
                <span
                  className={`inline-grid size-9 place-items-center rounded-lg text-lg ${feature.iconClass}`}
                >
                  {feature.icon}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-2 text-pretty text-sm text-ink-soft">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative z-10">
        <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-24">
          <div className="max-w-[40ch]">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Pricing that scales with the team, not the noise.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={
                  plan.featured
                    ? "glass-strong relative rounded-3xl p-7 ring-1 ring-brand/30"
                    : "glass rounded-3xl p-7 ring-1 ring-black/5"
                }
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-7 rounded-full bg-brand px-3 py-1 text-xs font-medium text-primary-foreground">
                    Most chosen
                  </span>
                )}
                <p className="font-display text-lg font-semibold">{plan.name}</p>
                <p className="mt-4 font-display text-4xl font-semibold tracking-tight">
                  {plan.price}
                </p>
                <p className="mt-1 text-sm text-ink-soft">{plan.detail}</p>
                <ul className="mt-6 space-y-3 text-sm text-ink-soft">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-brand">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={
                    plan.featured
                      ? "mt-8 block rounded-xl bg-brand py-2.5 text-center text-sm font-medium text-primary-foreground ring-1 ring-brand/40 hover:bg-brand/90"
                      : "glass-strong mt-8 block rounded-xl py-2.5 text-center text-sm font-medium ring-1 ring-black/5 hover:bg-white/80"
                  }
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
          <div className="glass-strong rounded-3xl px-8 py-14 text-center ring-1 ring-black/5 sm:px-14">
            <h2 className="mx-auto max-w-[24ch] font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Bring your whole operation into one clear view.
            </h2>
            <p className="mx-auto mt-4 max-w-[48ch] text-pretty text-base text-ink-soft">
              Set up your first console in minutes. Your team will feel the calm on
              day one.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-medium text-primary-foreground ring-1 ring-brand/40 hover:bg-brand/90"
              >
                Open your console
                <span aria-hidden="true" className="text-base leading-none">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10">
        <div className="mx-auto max-w-6xl px-5 pb-10 sm:px-8">
          <div className="glass flex flex-col items-center justify-between gap-4 rounded-2xl px-6 py-5 ring-1 ring-black/5 sm:flex-row">
            <div className="flex items-center gap-2.5">
              <span className="grid size-7 place-items-center rounded-md bg-ink font-display text-xs font-semibold text-primary-foreground">
                N
              </span>
              <span className="font-display text-sm font-semibold">Northbeam</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-ink-soft">
              <a href="#" className="hover:text-ink">
                Docs
              </a>
              <a href="#" className="hover:text-ink">
                Status
              </a>
              <a href="#" className="hover:text-ink">
                Privacy
              </a>
            </div>
            <p className="text-xs text-ink-soft/70">© 2026 Northbeam</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
