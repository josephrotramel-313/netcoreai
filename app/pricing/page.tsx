import type { Metadata } from "next"
import Navbar from "@/components/sections/Navbar"
import Footer from "@/components/sections/Footer"
import { Check, Zap, Bot, BarChart3, Globe, Mail, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing — Net Core AI | Transparent Web Development Pricing",
  description:
    "Transparent, no-surprise pricing for custom web development, monthly retainers, AI chatbots, and analytics dashboards. Starting at $800 for a fully custom website.",
  keywords: [
    "web development pricing",
    "custom website cost",
    "web design agency pricing",
    "AI chatbot pricing",
    "website retainer cost",
    "analytics dashboard pricing",
    "Dallas web development cost",
  ],
  openGraph: {
    title: "Pricing — Net Core AI",
    description:
      "Transparent pricing for custom websites, retainers, AI chatbots, and dashboards. No templates. No surprises.",
    type: "website",
    url: "https://netcoreai.tech/pricing",
  },
  alternates: {
    canonical: "https://netcoreai.tech/pricing",
  },
}

const websiteTiers = [
  {
    name: "Starter",
    price: "$800",
    description: "Perfect for small businesses and solopreneurs who need a professional, fast, and conversion-ready web presence.",
    highlight: false,
    features: [
      "Up to 5 pages (Home, About, Services, Contact, + 1 custom)",
      "Fully custom design — no templates",
      "Mobile-first & fully responsive",
      "On-page SEO foundation (meta tags, Open Graph, sitemap)",
      "Contact form with email notifications",
      "Google Analytics integration",
      "SSL & basic security hardening",
      "2 rounds of revision",
      "30-day post-launch support",
    ],
    deliveryTime: "2–3 weeks",
  },
  {
    name: "Professional",
    price: "$1,100",
    description: "For growing businesses that need more pages, advanced features, and a site built to rank and convert.",
    highlight: true,
    features: [
      "Up to 10 pages",
      "Fully custom design with motion & micro-interactions",
      "CMS integration (manage content without a developer)",
      "Advanced on-page SEO + structured data markup",
      "Blog section with up to 3 starter articles",
      "Google Analytics 4 + event tracking",
      "Performance optimization (Core Web Vitals pass guaranteed)",
      "SSL, security headers & rate limiting",
      "4 rounds of revision",
      "60-day post-launch support",
    ],
    deliveryTime: "3–5 weeks",
  },
  {
    name: "Premium",
    price: "$1,500",
    description: "For businesses that demand the best — unlimited scope, custom integrations, and white-glove delivery.",
    highlight: false,
    features: [
      "Unlimited pages",
      "Custom design system + brand guideline document",
      "Full CMS with admin dashboard",
      "E-commerce ready (Stripe integration available)",
      "API integrations (CRMs, booking systems, etc.)",
      "Advanced SEO + competitor keyword analysis",
      "Full blog with SEO-optimized launch articles",
      "A/B testing setup",
      "Unlimited revisions",
      "90-day priority support",
      "Handoff training session (recorded)",
    ],
    deliveryTime: "5–8 weeks",
  },
]

const retainerTiers = [
  {
    name: "Basic",
    price: "$50",
    period: "/month",
    description: "Keep your site healthy and secure with minimal overhead.",
    features: [
      "Monthly uptime monitoring",
      "Security patches & dependency updates",
      "Monthly performance report",
      "Emergency contact (48-hr response)",
    ],
  },
  {
    name: "Standard",
    price: "$150",
    period: "/month",
    description: "Active maintenance with content updates and strategic insights.",
    highlight: true,
    features: [
      "Everything in Basic",
      "Up to 5 content updates per month",
      "SEO rank tracking report",
      "Monthly analytics review",
      "Minor bug fixes (< 1hr)",
      "24-hr emergency response",
    ],
  },
  {
    name: "Growth",
    price: "$250",
    period: "/month",
    description: "Ongoing partnership with strategy, testing, and priority access.",
    features: [
      "Everything in Standard",
      "Unlimited content updates",
      "Monthly strategy call (30 min)",
      "A/B testing execution",
      "Conversion rate monitoring",
      "Priority support (4-hr response)",
      "Quarterly design refresh",
    ],
  },
]

const addOns = [
  {
    icon: Bot,
    name: "AI Lead Conversion Chatbot",
    price: "$500",
    period: "one-time setup",
    description:
      "A custom-trained AI chatbot deployed on your site to qualify visitors, answer questions, and capture leads — 24/7, without a human in the loop.",
    includes: [
      "Custom training on your services, FAQs, and brand voice",
      "Lead capture with name, email, and intent qualification",
      "Calendly or booking system integration",
      "Handoff to human (email or CRM notification)",
      "Dashboard to view conversation logs",
      "Monthly chatbot performance report",
    ],
    note: "Optional $50/month for continued AI model updates & conversation analytics.",
  },
  {
    icon: BarChart3,
    name: "Analytics & Management Dashboard",
    price: "$100",
    period: "/month",
    description:
      "A private dashboard giving you real-time visibility into site performance, traffic sources, and the ability to make lightweight content edits — without needing a developer.",
    includes: [
      "Real-time traffic & conversion analytics",
      "Top pages, traffic sources, and user behavior reports",
      "Lightweight CMS: edit text, images, and CTAs",
      "Monthly performance summary delivered to your inbox",
      "Goal tracking (form submissions, clicks, purchases)",
      "Accessible from any device — mobile, tablet, desktop",
    ],
    note: "Requires an existing Net Core AI website. Setup is included at no extra cost.",
  },
]

const comparisonData = [
  { feature: "Custom design (no templates)", starter: true, pro: true, premium: true },
  { feature: "Mobile-first & responsive", starter: true, pro: true, premium: true },
  { feature: "On-page SEO", starter: true, pro: true, premium: true },
  { feature: "CMS integration", starter: false, pro: true, premium: true },
  { feature: "Advanced animations", starter: false, pro: true, premium: true },
  { feature: "Blog section", starter: false, pro: true, premium: true },
  { feature: "E-commerce ready", starter: false, pro: false, premium: true },
  { feature: "API integrations", starter: false, pro: false, premium: true },
  { feature: "Design system doc", starter: false, pro: false, premium: true },
  { feature: "Unlimited revisions", starter: false, pro: false, premium: true },
  { feature: "90-day support", starter: false, pro: false, premium: true },
]

export default function PricingPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0C0A09] text-stone-50">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 border-b border-stone-800">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-stone-800 text-accent text-xs font-semibold tracking-widest uppercase mb-6">
            Transparent Pricing
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            No surprises.
            <br />
            <span className="text-accent">Just results.</span>
          </h1>
          <p className="text-stone-400 text-xl leading-relaxed">
            Every price you see below is what you pay. No hidden fees, no scope creep
            charges, no gotchas. We believe in earning your business through transparency
            and outcomes — not fine print.
          </p>
        </div>
      </section>

      {/* Website Development */}
      <section className="py-20 px-6 border-b border-stone-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-800 mb-4">
              <Globe size={16} className="text-accent" />
              <span className="text-stone-300 text-sm font-semibold">Website Development</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
              Custom websites from{" "}
              <span className="text-accent">$800 – $1,500</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Every tier includes fully custom code — no WordPress, no Wix, no page builders.
              Each site is built from scratch for your brand and your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {websiteTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-8 flex flex-col transition-all duration-300 ${
                  tier.highlight
                    ? "border-accent/50 bg-stone-900/80 shadow-lg shadow-accent/10"
                    : "border-stone-800 bg-stone-900/40 hover:border-stone-700"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-stone-950 text-xs font-bold">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-stone-50 mb-1">{tier.name}</h3>
                  <div className="flex items-end gap-1 mb-3">
                    <span className="text-4xl font-extrabold text-stone-50">{tier.price}</span>
                    <span className="text-stone-400 text-sm mb-1">one-time</span>
                  </div>
                  <p className="text-stone-400 text-sm leading-relaxed">{tier.description}</p>
                  <div className="mt-3 text-xs text-stone-500">
                    Delivery: <span className="text-stone-400">{tier.deliveryTime}</span>
                  </div>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={15} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-stone-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:netcoreaisolutions@gmail.com"
                  className={`w-full py-3 rounded-lg text-sm font-semibold text-center transition-all duration-200 inline-flex items-center justify-center gap-2 ${
                    tier.highlight
                      ? "bg-accent hover:bg-accent/90 text-stone-950"
                      : "bg-stone-800 hover:bg-stone-700 text-stone-50"
                  }`}
                >
                  Get started
                  <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>

          {/* Feature comparison table */}
          <div className="overflow-x-auto rounded-2xl border border-stone-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-800 bg-stone-900/60">
                  <th className="text-left px-6 py-4 text-stone-400 font-semibold">Feature</th>
                  <th className="text-center px-4 py-4 text-stone-300 font-semibold">Starter</th>
                  <th className="text-center px-4 py-4 text-accent font-semibold">Professional</th>
                  <th className="text-center px-4 py-4 text-stone-300 font-semibold">Premium</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-stone-800/60 ${
                      i % 2 === 0 ? "bg-stone-900/20" : "bg-transparent"
                    }`}
                  >
                    <td className="px-6 py-3 text-stone-300">{row.feature}</td>
                    <td className="px-4 py-3 text-center">
                      {row.starter ? (
                        <Check size={16} className="text-accent mx-auto" />
                      ) : (
                        <span className="text-stone-700">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {row.pro ? (
                        <Check size={16} className="text-accent mx-auto" />
                      ) : (
                        <span className="text-stone-700">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {row.premium ? (
                        <Check size={16} className="text-accent mx-auto" />
                      ) : (
                        <span className="text-stone-700">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Monthly Retainer */}
      <section className="py-20 px-6 border-b border-stone-800 bg-stone-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-800 mb-4">
              <Zap size={16} className="text-accent" />
              <span className="text-stone-300 text-sm font-semibold">Monthly Retainer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
              Keep your site running at{" "}
              <span className="text-accent">peak performance</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              A website isn&apos;t a one-time investment — it&apos;s a living asset. Our retainer
              plans keep it secure, fast, and growing month over month.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {retainerTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-8 flex flex-col transition-all duration-300 ${
                  tier.highlight
                    ? "border-accent/50 bg-stone-900/80 shadow-lg shadow-accent/10"
                    : "border-stone-800 bg-stone-900/40 hover:border-stone-700"
                }`}
              >
                {tier.highlight && (
                  <div className="inline-block px-3 py-0.5 rounded-full bg-accent text-stone-950 text-xs font-bold mb-4 self-start">
                    Best Value
                  </div>
                )}
                <h3 className="text-lg font-bold text-stone-50 mb-1">{tier.name}</h3>
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-4xl font-extrabold text-stone-50">{tier.price}</span>
                  <span className="text-stone-400 text-sm mb-1">{tier.period}</span>
                </div>
                <p className="text-stone-400 text-sm leading-relaxed mb-6">{tier.description}</p>
                <ul className="space-y-3 flex-1 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={15} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-stone-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:netcoreaisolutions@gmail.com"
                  className={`w-full py-3 rounded-lg text-sm font-semibold text-center transition-all duration-200 ${
                    tier.highlight
                      ? "bg-accent hover:bg-accent/90 text-stone-950"
                      : "bg-stone-800 hover:bg-stone-700 text-stone-50"
                  }`}
                >
                  Get started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-6 border-b border-stone-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
              Power-ups for your{" "}
              <span className="text-accent">digital presence</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Standalone products that integrate seamlessly with any Net Core AI website —
              or any existing site you have.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOns.map((addon) => {
              const Icon = addon.icon
              return (
                <div
                  key={addon.name}
                  className="rounded-2xl border border-stone-800 bg-stone-900/40 p-8 hover:border-accent/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-50 mb-1">{addon.name}</h3>
                      <div className="flex items-end gap-1">
                        <span className="text-3xl font-extrabold text-accent">{addon.price}</span>
                        <span className="text-stone-400 text-sm mb-1">{addon.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-stone-400 text-sm leading-relaxed mb-6">{addon.description}</p>

                  <div className="mb-4">
                    <p className="text-stone-300 text-xs font-semibold uppercase tracking-widest mb-3">What&apos;s included:</p>
                    <ul className="space-y-2">
                      {addon.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check size={14} className="text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-stone-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {addon.note && (
                    <p className="text-stone-500 text-xs border-t border-stone-800 pt-4 mt-4">{addon.note}</p>
                  )}

                  <a
                    href="mailto:netcoreaisolutions@gmail.com"
                    className="mt-6 w-full py-3 rounded-lg text-sm font-semibold text-center bg-stone-800 hover:bg-stone-700 text-stone-50 transition-all duration-200 inline-flex items-center justify-center gap-2"
                  >
                    Learn more
                    <ArrowRight size={14} />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Investment summary table */}
      <section className="py-20 px-6 border-b border-stone-800 bg-stone-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            At a glance
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-stone-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-800 bg-stone-900/60">
                  <th className="text-left px-6 py-4 text-stone-400 font-semibold">Service</th>
                  <th className="text-left px-6 py-4 text-stone-400 font-semibold">Type</th>
                  <th className="text-right px-6 py-4 text-stone-400 font-semibold">Starting at</th>
                  <th className="text-right px-6 py-4 text-stone-400 font-semibold">Up to</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { service: "Custom Website", type: "One-time", from: "$800", to: "$1,500" },
                  { service: "Monthly Retainer", type: "Recurring", from: "$50/mo", to: "$250/mo" },
                  { service: "AI Lead Chatbot", type: "One-time + optional $50/mo", from: "$500", to: "$500" },
                  { service: "Analytics Dashboard", type: "Recurring", from: "$100/mo", to: "$100/mo" },
                ].map((row, i) => (
                  <tr
                    key={row.service}
                    className={`border-b border-stone-800/60 last:border-0 ${
                      i % 2 === 0 ? "bg-stone-900/20" : "bg-transparent"
                    }`}
                  >
                    <td className="px-6 py-4 text-stone-200 font-medium">{row.service}</td>
                    <td className="px-6 py-4 text-stone-400">{row.type}</td>
                    <td className="px-6 py-4 text-right text-accent font-semibold">{row.from}</td>
                    <td className="px-6 py-4 text-right text-stone-300">{row.to}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-stone-500 text-xs text-center mt-4">
            All prices in USD. Custom quotes available for enterprise or complex projects.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 border-b border-stone-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Common questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Do you require payment upfront?",
                a: "We collect a 50% deposit before work begins, with the remaining 50% due at final handoff before the site goes live. This protects both parties and aligns our incentives.",
              },
              {
                q: "What if I need something beyond the tier I choose?",
                a: "Scope changes are handled transparently. If you want to add something mid-project, we'll quote the additional cost before doing any work. No surprise invoices.",
              },
              {
                q: "Do you offer discounts for bundling services?",
                a: "Yes — clients who bundle a website with a retainer plan receive a 10% discount on the retainer. Clients who add the analytics dashboard at time of website purchase get the first month free.",
              },
              {
                q: "How long does a typical project take?",
                a: "Starter sites typically take 2–3 weeks. Professional builds run 3–5 weeks. Premium projects 5–8 weeks. Timeline depends heavily on how quickly we receive assets and feedback from your side.",
              },
              {
                q: "Can you work with an existing website?",
                a: "Absolutely. The retainer, chatbot, and dashboard products work with any site. We also offer redesign and migration services — reach out for a custom quote.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="p-6 rounded-xl border border-stone-800 bg-stone-900/30">
                <h3 className="text-stone-50 font-semibold mb-3">{q}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Not sure which tier is right?
          </h2>
          <p className="text-stone-400 mb-8 leading-relaxed">
            Tell us about your business and your goals. We&apos;ll recommend the package
            that makes the most sense — and be honest if you don&apos;t need the most expensive option.
          </p>
          <a
            href="mailto:netcoreaisolutions@gmail.com"
            className="px-8 py-4 rounded-lg bg-accent hover:bg-accent/90 text-stone-950 font-bold text-sm transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
          >
            <Mail size={16} />
            Get a free consultation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
