import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/sections/Navbar"
import Footer from "@/components/sections/Footer"
import { Clock, Calendar, ArrowLeft, ArrowRight, Smartphone } from "lucide-react"

export const metadata: Metadata = {
  title: "Mobile-First Web Design: ROI Every Business Owner Needs to Know | Net Core AI",
  description:
    "67% of web traffic is mobile. Yet most websites are still designed desktop-first. Here's what that backwards approach costs you in traffic, leads, and revenue.",
  openGraph: {
    title: "Mobile-First Web Design: The ROI Every Business Owner Needs to Understand",
    description:
      "67% of web traffic comes from mobile. Here's what a desktop-first approach costs you — and how to fix it.",
    type: "article",
    url: "https://netcoreai.tech/blog/mobile-first-roi",
    publishedTime: "2025-01-10",
    authors: ["Joseph Rotramel"],
    images: [
      {
        url: "https://netcoreai.tech/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile-First Web Design: The ROI Every Business Owner Needs to Understand",
      },
    ],
    siteName: "Net Core AI",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://netcoreai.tech/blog/mobile-first-roi",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Mobile-First Web Design: The ROI Every Business Owner Needs to Understand",
  description:
    "67% of web traffic is mobile. Yet most websites are still designed desktop-first. Here's what that backwards approach costs you.",
  datePublished: "2025-01-10",
  dateModified: "2025-01-10",
  author: {
    "@type": "Person",
    name: "Joseph Rotramel",
    jobTitle: "Chief Executive Officer",
  },
  publisher: {
    "@type": "Organization",
    name: "Net Core AI",
    url: "https://netcoreai.tech",
    logo: {
      "@type": "ImageObject",
      url: "https://netcoreai.tech/favicon.svg",
    },
  },
  url: "https://netcoreai.tech/blog/mobile-first-roi",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://netcoreai.tech/blog/mobile-first-roi",
  },
}

export default function BlogPost3() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0C0A09] text-stone-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />

      <article className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-10" aria-label="Breadcrumb">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-stone-400 hover:text-accent text-sm transition-colors duration-200"
            >
              <ArrowLeft size={14} />
              Back to Blog
            </Link>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-green-400/10 text-green-400 text-xs font-semibold">
                Business Strategy
              </span>
              <div className="flex items-center gap-1.5 text-stone-500 text-xs">
                <Clock size={12} />
                8 min read
              </div>
              <div className="flex items-center gap-1.5 text-stone-500 text-xs">
                <Calendar size={12} />
                January 10, 2025
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-stone-50">
              Mobile-First Web Design: The ROI Every Business Owner Needs to Understand
            </h1>

            <p className="text-stone-400 text-xl leading-relaxed">
              67% of all web traffic now comes from mobile devices. But most business websites are
              still designed for desktop and &quot;adjusted&quot; for mobile — backwards. Here&apos;s
              what that costs you, and how mobile-first development changes the math.
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-stone-800">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <span className="text-white text-sm font-bold">JR</span>
              </div>
              <div>
                <p className="text-stone-200 text-sm font-semibold">Joseph Rotramel</p>
                <p className="text-stone-500 text-xs">Chief Executive Officer, Net Core AI</p>
              </div>
            </div>
          </header>

          {/* Featured visual — mobile device + stats */}
          <div className="relative rounded-2xl overflow-hidden mb-12 border border-stone-800">
            <div className="h-64 bg-gradient-to-br from-green-900/40 to-stone-900/60 flex items-center justify-center gap-12 px-8">
              {/* Mobile icon */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-20 h-36 rounded-2xl border-2 border-stone-600 bg-stone-900/80 flex flex-col items-center justify-center gap-2 p-2">
                    <div className="w-8 h-1.5 rounded-full bg-stone-700 mb-1" />
                    <div className="w-full space-y-1.5">
                      <div className="h-1.5 bg-accent/40 rounded w-full" />
                      <div className="h-1.5 bg-accent/25 rounded w-4/5" />
                      <div className="h-4 bg-stone-800 rounded" />
                      <div className="h-1.5 bg-stone-700/50 rounded" />
                      <div className="h-1.5 bg-stone-700/50 rounded w-3/4" />
                    </div>
                    <div className="w-4 h-4 rounded-full border border-stone-600" />
                  </div>
                  <Smartphone size={16} className="text-accent absolute -top-2 -right-2" />
                </div>
              </div>
              {/* Stats */}
              <div className="space-y-4">
                <div>
                  <div className="text-4xl font-extrabold text-accent">67%</div>
                  <div className="text-stone-400 text-sm">of all web traffic is mobile</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-orange-400">3×</div>
                  <div className="text-stone-400 text-sm">higher bounce rate on poor mobile sites</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-green-400">+35%</div>
                  <div className="text-stone-400 text-sm">conversion lift from mobile-first redesigns</div>
                </div>
              </div>
            </div>
            <div className="bg-stone-900/60 px-6 py-3 border-t border-stone-800">
              <p className="text-stone-500 text-xs text-center">
                Mobile traffic has grown 29% in five years — and Google indexes your mobile site first.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="prose-content space-y-8 text-stone-300 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-stone-50 mb-4">
                The mobile reality in 2025
              </h2>
              <p>
                In 2019, mobile accounted for about 52% of global web traffic. By 2025, that
                figure sits at 67% — and it&apos;s still climbing. For most businesses, the
                majority of their potential customers are encountering their website on a 6-inch
                screen, with a cellular connection, while doing something else simultaneously.
              </p>
              <p className="mt-4">
                The design implications of that reality are significant. But many businesses
                haven&apos;t updated their mental model. They still think of their website as
                a desktop experience that &quot;also works on mobile.&quot; That assumption is
                expensive.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-50 mb-4">
                Mobile traffic growth: the numbers
              </h2>

              {/* Line chart */}
              <div className="my-8 p-6 rounded-xl border border-stone-800 bg-stone-900/40">
                <h4 className="text-stone-300 text-sm font-semibold mb-6 text-center">
                  Global Mobile Traffic Share (% of total web traffic)
                </h4>
                <svg viewBox="0 0 600 260" className="w-full max-w-2xl mx-auto" role="img" aria-label="Line chart showing mobile traffic growth from 2019 to 2024">
                  {/* Y axis */}
                  <line x1="60" y1="20" x2="60" y2="220" stroke="#44403C" strokeWidth="1"/>
                  {/* X axis */}
                  <line x1="60" y1="220" x2="570" y2="220" stroke="#44403C" strokeWidth="1"/>
                  {/* Grid lines */}
                  {[40, 50, 60, 70, 80].map((v) => {
                    const y = 220 - ((v - 35) / 50) * 190
                    return (
                      <g key={v}>
                        <line x1="60" y1={y} x2="570" y2={y} stroke="#292524" strokeWidth="1" strokeDasharray="4,4"/>
                        <text x="53" y={y + 4} textAnchor="end" fill="#78716C" fontSize="10">{v}%</text>
                      </g>
                    )
                  })}
                  {/* Data points */}
                  {(() => {
                    const data = [
                      { year: "2019", value: 52, x: 100 },
                      { year: "2020", value: 55, x: 198 },
                      { year: "2021", value: 58, x: 296 },
                      { year: "2022", value: 61, x: 394 },
                      { year: "2023", value: 63, x: 492 },
                      { year: "2024", value: 67, x: 540 },
                    ]
                    const getY = (v: number) => 220 - ((v - 35) / 50) * 190
                    const points = data.map(d => `${d.x},${getY(d.value)}`).join(' ')
                    const areaPoints = `60,220 ${points} 540,220`
                    return (
                      <>
                        {/* Area fill */}
                        <polygon
                          points={areaPoints}
                          fill="#64b5f6"
                          opacity="0.08"
                        />
                        {/* Line */}
                        <polyline
                          points={points}
                          fill="none"
                          stroke="#64b5f6"
                          strokeWidth="2.5"
                          strokeLinejoin="round"
                        />
                        {/* Data points */}
                        {data.map(d => (
                          <g key={d.year}>
                            <circle cx={d.x} cy={getY(d.value)} r="5" fill="#64b5f6" />
                            <circle cx={d.x} cy={getY(d.value)} r="2" fill="#0C0A09" />
                            <text x={d.x} y={getY(d.value) - 12} textAnchor="middle" fill="#D6D3D1" fontSize="11" fontWeight="600">{d.value}%</text>
                            <text x={d.x} y="237" textAnchor="middle" fill="#78716C" fontSize="10">{d.year}</text>
                          </g>
                        ))}
                      </>
                    )
                  })()}
                </svg>
                <p className="text-stone-500 text-xs text-center mt-4">
                  Source: Statcounter Global Stats, StatMobile Index 2024 — global aggregate
                </p>
              </div>

              <p>
                This isn&apos;t evenly distributed across all industries, which matters for how
                you prioritize. E-commerce, local services, and media properties skew even
                higher toward mobile. B2B software and professional services tend to see more
                desktop usage — but even there, mobile is often where the first touchpoint happens.
              </p>

              {/* Industry breakdown table */}
              <div className="my-8 overflow-x-auto rounded-xl border border-stone-800">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-800 bg-stone-900/60">
                      <th className="text-left px-5 py-3 text-stone-400 font-semibold">Industry</th>
                      <th className="text-center px-5 py-3 text-stone-400 font-semibold">Mobile Traffic %</th>
                      <th className="text-center px-5 py-3 text-stone-400 font-semibold">Mobile Conversion Rate</th>
                      <th className="text-left px-5 py-3 text-stone-400 font-semibold">Priority Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { industry: "E-commerce / Retail", mobile: "78%", conv: "2.1%", priority: "Critical", pColor: "text-red-400" },
                      { industry: "Local Services", mobile: "74%", conv: "3.8%", priority: "Critical", pColor: "text-red-400" },
                      { industry: "Food & Restaurant", mobile: "81%", conv: "4.2%", priority: "Critical", pColor: "text-red-400" },
                      { industry: "Healthcare", mobile: "67%", conv: "2.9%", priority: "High", pColor: "text-orange-400" },
                      { industry: "Real Estate", mobile: "65%", conv: "1.7%", priority: "High", pColor: "text-orange-400" },
                      { industry: "B2B Services", mobile: "52%", conv: "1.1%", priority: "Medium", pColor: "text-yellow-400" },
                      { industry: "SaaS / Tech", mobile: "48%", conv: "0.9%", priority: "Medium", pColor: "text-yellow-400" },
                    ].map((row, i) => (
                      <tr key={row.industry} className={`border-b border-stone-800/60 last:border-0 ${i % 2 === 0 ? "bg-stone-900/20" : ""}`}>
                        <td className="px-5 py-3 text-stone-200">{row.industry}</td>
                        <td className="px-5 py-3 text-center text-accent font-semibold">{row.mobile}</td>
                        <td className="px-5 py-3 text-center text-stone-300">{row.conv}</td>
                        <td className={`px-5 py-3 text-sm font-medium ${row.pColor}`}>{row.priority}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-50 mb-4">
                Google&apos;s mobile-first indexing: what it means for your rankings
              </h2>
              <p>
                In 2019, Google announced it would transition to mobile-first indexing — meaning
                Google&apos;s crawler would evaluate your website as a mobile user, not a desktop
                user, when determining where to rank it in search results. By 2024, this is now
                the default for all websites.
              </p>
              <p className="mt-4">
                The practical implication: if your mobile experience is poor, your rankings
                suffer — even if your desktop site is flawless. Google doesn&apos;t rank the
                desktop site it sees when previewing your URL in Chrome. It ranks the experience
                a mobile crawler experiences.
              </p>
              <p className="mt-4">
                Specifically, Google evaluates:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Mobile Core Web Vitals (LCP, CLS, INP) — not desktop",
                  "Mobile page speed — not desktop load time",
                  "Touch target sizes — are buttons large enough to tap?",
                  "Viewport configuration — is the site scaled correctly?",
                  "Mobile-specific structured data — schema must render on mobile",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-stone-400 text-sm">
                    <span className="text-accent mt-1">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-50 mb-4">
                The revenue impact of poor mobile UX
              </h2>
              <p>
                Google has published research showing that 53% of mobile users abandon a site
                that takes longer than 3 seconds to load. Each additional second of load time
                reduces conversions by approximately 4.42%. But load time is just one dimension.
              </p>

              {/* Bounce rate comparison */}
              <div className="my-8 overflow-x-auto rounded-xl border border-stone-800">
                <p className="px-5 py-3 text-stone-400 text-xs border-b border-stone-800 bg-stone-900/60">
                  Mobile UX quality impact on key metrics — average across 200 business websites (2024 study)
                </p>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-800 bg-stone-900/40">
                      <th className="text-left px-5 py-3 text-stone-400 font-semibold">Metric</th>
                      <th className="text-center px-5 py-3 text-stone-400 font-semibold">Poor Mobile UX</th>
                      <th className="text-center px-5 py-3 text-stone-400 font-semibold">Good Mobile UX</th>
                      <th className="text-center px-5 py-3 text-stone-400 font-semibold">Delta</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { metric: "Bounce rate", poor: "72%", good: "38%", delta: "-47%", dColor: "text-green-400" },
                      { metric: "Pages per session", poor: "1.3", good: "3.2", delta: "+146%", dColor: "text-green-400" },
                      { metric: "Session duration", poor: "0m 52s", good: "2m 47s", delta: "+221%", dColor: "text-green-400" },
                      { metric: "Form completion rate", poor: "9%", good: "27%", delta: "+200%", dColor: "text-green-400" },
                      { metric: "Mobile conversion rate", poor: "0.6%", good: "2.3%", delta: "+283%", dColor: "text-green-400" },
                      { metric: "Return visitor rate (30 days)", poor: "11%", good: "28%", delta: "+155%", dColor: "text-green-400" },
                    ].map((row, i) => (
                      <tr key={row.metric} className={`border-b border-stone-800/60 last:border-0 ${i % 2 === 0 ? "bg-stone-900/20" : ""}`}>
                        <td className="px-5 py-3 text-stone-200 font-medium">{row.metric}</td>
                        <td className="px-5 py-3 text-center text-red-400">{row.poor}</td>
                        <td className="px-5 py-3 text-center text-green-400">{row.good}</td>
                        <td className={`px-5 py-3 text-center font-semibold ${row.dColor}`}>{row.delta}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Notice that mobile conversion rate improves by 283% between poor and good mobile UX.
                For a business generating 100 monthly leads, that&apos;s the difference between
                recovering 6 leads vs 23 leads from mobile traffic alone. At even a $1,000 average
                customer value, that gap compounds quickly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-50 mb-4">
                What &quot;mobile-first&quot; actually means in development
              </h2>
              <p>
                Mobile-first is a development philosophy, not just a design preference. It
                means writing CSS for the smallest screen first, then using media queries to
                scale up — rather than starting with a full desktop layout and collapsing it
                down. The difference seems subtle but has massive performance implications.
              </p>
              <p className="mt-4">
                Desktop-first design often results in:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Downloading full-resolution desktop images even on mobile connections",
                  "Loading desktop JavaScript modules that mobile users never interact with",
                  "CSS overrides piling on top of each other, creating technical debt",
                  "Touch targets too small for fingers, breaking usability on the primary device",
                  "Navigation menus that collapse improperly or obscure content",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-stone-400 text-sm">
                    <span className="text-red-400 mt-1">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6">
                Mobile-first development forces clarity. When you start with the smallest
                screen and the slowest connection, you&apos;re forced to prioritize ruthlessly.
                What&apos;s essential? What can be removed without losing value? The desktop
                version then enhances that core experience — rather than the mobile version
                degrading from it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-50 mb-4">
                Core Web Vitals: the mobile performance standard
              </h2>

              <div className="my-6 overflow-x-auto rounded-xl border border-stone-800">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-800 bg-stone-900/60">
                      <th className="text-left px-5 py-3 text-stone-400 font-semibold">Metric</th>
                      <th className="text-left px-5 py-3 text-stone-400 font-semibold">What it measures</th>
                      <th className="text-center px-5 py-3 text-stone-400 font-semibold">Good</th>
                      <th className="text-center px-5 py-3 text-stone-400 font-semibold">Needs Work</th>
                      <th className="text-center px-5 py-3 text-stone-400 font-semibold">Poor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { metric: "LCP", what: "How fast the main content loads", good: "< 2.5s", needs: "2.5–4s", poor: "> 4s" },
                      { metric: "CLS", what: "How much the layout shifts while loading", good: "< 0.1", needs: "0.1–0.25", poor: "> 0.25" },
                      { metric: "INP", what: "How quickly the page responds to taps", good: "< 200ms", needs: "200–500ms", poor: "> 500ms" },
                    ].map((row, i) => (
                      <tr key={row.metric} className={`border-b border-stone-800/60 last:border-0 ${i % 2 === 0 ? "bg-stone-900/20" : ""}`}>
                        <td className="px-5 py-3 text-accent font-mono font-semibold">{row.metric}</td>
                        <td className="px-5 py-3 text-stone-400 text-xs">{row.what}</td>
                        <td className="px-5 py-3 text-center text-green-400 text-xs">{row.good}</td>
                        <td className="px-5 py-3 text-center text-yellow-400 text-xs">{row.needs}</td>
                        <td className="px-5 py-3 text-center text-red-400 text-xs">{row.poor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Every site we build passes Core Web Vitals on mobile. We treat this as a baseline
                requirement, not a bonus — because a site that fails these standards is, by
                definition, failing its users and falling behind in search.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-50 mb-4">
                Calculating the ROI of a mobile-first redesign
              </h2>
              <p>
                Let&apos;s do the math with a realistic example. Imagine a local service business
                with the following baseline:
              </p>
              <div className="my-6 p-5 rounded-xl border border-stone-800 bg-stone-900/30 space-y-2 text-sm">
                <div className="flex justify-between text-stone-400">
                  <span>Monthly website visitors</span>
                  <span className="text-stone-300">2,000</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Mobile traffic share</span>
                  <span className="text-stone-300">65% (1,300 mobile visitors)</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Current mobile conversion rate (poor UX)</span>
                  <span className="text-red-400">0.6% → 8 monthly leads</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Average customer value</span>
                  <span className="text-stone-300">$1,200</span>
                </div>
                <div className="flex justify-between text-stone-400 border-t border-stone-800 pt-2">
                  <span>Current monthly mobile revenue contribution</span>
                  <span className="text-stone-300">$9,600</span>
                </div>
              </div>

              <p>After a mobile-first redesign:</p>
              <div className="my-6 p-5 rounded-xl border border-accent/20 bg-accent/5 space-y-2 text-sm">
                <div className="flex justify-between text-stone-400">
                  <span>New mobile conversion rate (good UX)</span>
                  <span className="text-green-400">2.3% → 30 monthly leads</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Additional leads per month</span>
                  <span className="text-accent">+22 leads</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Additional monthly revenue (at $1,200/customer)</span>
                  <span className="text-accent">+$26,400/month</span>
                </div>
                <div className="flex justify-between text-stone-50 font-bold border-t border-accent/20 pt-2">
                  <span>Net Core AI Professional site cost</span>
                  <span className="text-accent">$1,100</span>
                </div>
                <div className="flex justify-between text-stone-50 font-bold">
                  <span>Payback period</span>
                  <span className="text-green-400">~1.2 days</span>
                </div>
              </div>

              <p>
                The numbers are illustrative, but the direction is consistent. Mobile-first
                redesigns have produced the highest ROI of any web investment we&apos;ve seen
                — because they address the largest, most neglected segment of a site&apos;s traffic.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-50 mb-4">
                How to audit your mobile experience right now
              </h2>
              <p>
                Before spending anything, run this quick audit on your existing site:
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { step: "01", title: "Google PageSpeed Insights", desc: "Visit pagespeed.web.dev and run your URL. Look specifically at the Mobile tab. A score below 70 is a significant problem." },
                  { step: "02", title: "Google Search Console", desc: "Check Core Web Vitals under 'Experience' → 'Page Experience.' Any red or orange items are active ranking suppressors." },
                  { step: "03", title: "Real-device test", desc: "View your site on an actual phone (not just browser dev tools) on a 4G connection. Notice the load time, the tap targets, the navigation. Would you stay?" },
                  { step: "04", title: "GA4 mobile metrics", desc: "In Google Analytics, compare mobile vs desktop bounce rate and session duration. A mobile bounce rate above 60% signals a UX problem." },
                  { step: "05", title: "Heatmap tool", desc: "Tools like Hotjar or Microsoft Clarity show where mobile users actually tap and scroll — often revealing friction points that aren't obvious from the desktop." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4 p-4 rounded-lg border border-stone-800 bg-stone-900/30">
                    <span className="text-accent font-mono text-sm font-bold flex-shrink-0">{step}</span>
                    <div>
                      <h4 className="text-stone-200 font-semibold text-sm mb-1">{title}</h4>
                      <p className="text-stone-400 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-50 mb-4">The bottom line</h2>
              <p>
                Mobile-first web design isn&apos;t a trend or a preference — it&apos;s a business
                requirement. When the majority of your potential customers are encountering your
                brand on a mobile device, their experience on that device determines whether they
                convert, whether they return, and whether they recommend you.
              </p>
              <p className="mt-4">
                We build every Net Core AI site mobile-first by default. It&apos;s not an add-on
                or a premium feature — it&apos;s the only way we know how to build. Because in
                2025, designing for desktop first isn&apos;t designing for your users. It&apos;s
                designing for yourself.
              </p>
            </section>

          </div>

          {/* Author bio */}
          <div className="mt-16 p-6 rounded-2xl border border-stone-800 bg-stone-900/40">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">JR</span>
              </div>
              <div>
                <p className="text-stone-200 font-bold">Joseph Rotramel</p>
                <p className="text-accent text-sm">Chief Executive Officer, Net Core AI</p>
                <p className="text-stone-400 text-sm leading-relaxed mt-2">
                  Joseph founded Net Core AI with a belief that every business deserves a website
                  that works as hard as they do. He leads client strategy and ensures every project
                  delivers outcomes — not just deliverables.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-stone-800">
            <p className="text-stone-500 text-sm mb-6">More from the blog</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/custom-websites-vs-templates"
                className="flex-1 p-4 rounded-xl border border-stone-800 hover:border-accent/30 bg-stone-900/30 hover:bg-stone-900/60 transition-all duration-200 group"
              >
                <p className="text-stone-500 text-xs mb-2">Previous article</p>
                <p className="text-stone-200 text-sm font-medium group-hover:text-accent transition-colors duration-200 leading-snug">
                  ← Custom Websites vs Templates
                </p>
              </Link>
              <Link
                href="/blog/psychology-of-web-design"
                className="flex-1 p-4 rounded-xl border border-stone-800 hover:border-accent/30 bg-stone-900/30 hover:bg-stone-900/60 transition-all duration-200 group"
              >
                <p className="text-stone-500 text-xs mb-2">Also worth reading</p>
                <p className="text-stone-200 text-sm font-medium group-hover:text-accent transition-colors duration-200 leading-snug">
                  The Psychology of Web Design →
                </p>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 rounded-2xl border border-accent/20 bg-accent/5 text-center">
            <h3 className="text-xl font-bold mb-3">Is your site ready for mobile-first traffic?</h3>
            <p className="text-stone-400 text-sm mb-6 leading-relaxed">
              We&apos;ll audit your mobile performance for free and tell you exactly what&apos;s
              costing you leads. No obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:netcoreaisolutions@gmail.com?subject=Mobile Audit Request"
                className="px-6 py-3 rounded-lg bg-accent hover:bg-accent/90 text-stone-950 font-semibold text-sm transition-all duration-200 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Request free audit
                <ArrowRight size={14} />
              </a>
              <a
                href="/pricing"
                className="px-6 py-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-50 font-semibold text-sm transition-all duration-200 inline-flex items-center justify-center"
              >
                View pricing
              </a>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
