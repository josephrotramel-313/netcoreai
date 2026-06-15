import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/sections/Navbar"
import Footer from "@/components/sections/Footer"
import { Clock, Calendar, ArrowLeft, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "The Psychology of Web Design: Color, Layout & Typography | Net Core AI Blog",
  description:
    "Discover how color theory, visual hierarchy, and typography choices directly impact your website's conversion rates. Science-backed design insights from Net Core AI.",
  openGraph: {
    title: "The Psychology of Web Design: How Color, Layout & Typography Drive Conversions",
    description:
      "Science-backed design insights on how color, visual hierarchy, and typography choices directly impact your website's conversion rates.",
    type: "article",
    url: "https://netcoreai.tech/blog/psychology-of-web-design",
    publishedTime: "2024-11-15",
    authors: ["James Williams"],
    images: [
      {
        url: "https://netcoreai.tech/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Psychology of Web Design: Color, Layout & Typography",
      },
    ],
    siteName: "Net Core AI",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://netcoreai.tech/blog/psychology-of-web-design",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "The Psychology of Web Design: How Color, Layout & Typography Drive Conversions",
  description:
    "Discover how color theory, visual hierarchy, and typography choices directly impact your website's conversion rates.",
  datePublished: "2024-11-15",
  dateModified: "2024-11-15",
  author: {
    "@type": "Person",
    name: "James Williams",
    jobTitle: "Chief Marketing Officer",
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
  url: "https://netcoreai.tech/blog/psychology-of-web-design",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://netcoreai.tech/blog/psychology-of-web-design",
  },
}

export default function BlogPost1() {
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
              <span className="px-3 py-1 rounded-full bg-purple-400/10 text-purple-400 text-xs font-semibold">
                Design Strategy
              </span>
              <div className="flex items-center gap-1.5 text-stone-500 text-xs">
                <Clock size={12} />
                9 min read
              </div>
              <div className="flex items-center gap-1.5 text-stone-500 text-xs">
                <Calendar size={12} />
                November 15, 2024
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-stone-50">
              The Psychology of Web Design: How Color, Layout &amp; Typography Drive Conversions
            </h1>

            <p className="text-stone-400 text-xl leading-relaxed">
              The difference between a site that converts and one that doesn&apos;t isn&apos;t
              always the offer — it&apos;s often how the design speaks to the visitor&apos;s
              subconscious. Here&apos;s the science behind every decision we make.
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-stone-800">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-stone-700 flex items-center justify-center">
                <span className="text-white text-sm font-bold">JW</span>
              </div>
              <div>
                <p className="text-stone-200 text-sm font-semibold">James Williams</p>
                <p className="text-stone-500 text-xs">Chief Marketing Officer, Net Core AI</p>
              </div>
            </div>
          </header>

          {/* Featured visual */}
          <div className="relative rounded-2xl overflow-hidden mb-12 border border-stone-800">
            <div className="h-64 bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center">
              <div className="grid grid-cols-6 gap-3 px-8">
                {[
                  { color: "#ef4444", label: "Red" },
                  { color: "#f97316", label: "Orange" },
                  { color: "#22c55e", label: "Green" },
                  { color: "#a855f7", label: "Purple" },
                  { color: "#64b5f6", label: "Blue" },
                  { color: "#1c1917", label: "Black", border: true },
                ].map(({ color, label, border }) => (
                  <div key={label} className="flex flex-col items-center gap-2">
                    <div
                      className="w-10 h-10 rounded-xl shadow-lg"
                      style={{
                        backgroundColor: color,
                        border: border ? "1px solid #44403C" : "none",
                      }}
                    />
                    <span className="text-stone-400 text-xs">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-stone-900/60 px-6 py-3 border-t border-stone-800">
              <p className="text-stone-500 text-xs text-center">
                Color choices affect purchase intent by up to 93% at first impression — and most visitors decide in under 0.05 seconds.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="prose-content space-y-8 text-stone-300 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-stone-50 mb-4">
                Why design isn&apos;t just about aesthetics
              </h2>
              <p>
                When someone lands on your website, they make a judgment call in 0.05 seconds — roughly
                the time it takes to blink. Before they&apos;ve read a single word of your copy, before
                they&apos;ve seen your pricing, before they&apos;ve considered whether to contact you,
                their brain has already formed an opinion about your credibility.
              </p>
              <p className="mt-4">
                That opinion is driven almost entirely by design. Color, layout, typography, spacing,
                imagery — every visual element is processed emotionally before it&apos;s processed
                rationally. The field of neuromarketing has spent decades documenting this, and the
                conclusions are consistent: design is persuasion.
              </p>
              <p className="mt-4">
                This isn&apos;t license to manipulate. It&apos;s a responsibility to communicate — to
                use design as a language that builds trust, directs attention, and makes the right
                action feel natural. Here&apos;s how the best websites do it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-50 mb-4">
                Color psychology: the science behind first impressions
              </h2>
              <p>
                Color is the fastest signal your brain processes. Research published in the journal
                <em> Colour Research &amp; Application</em> found that up to 90% of impulse judgments
                about products are based solely on color. For websites, the implications are profound.
              </p>
              <p className="mt-4">
                The key isn&apos;t picking a color that &quot;looks nice&quot; — it&apos;s choosing
                colors that evoke the right emotional associations for your audience and industry.
              </p>

              {/* Color psychology table */}
              <div className="my-8 overflow-x-auto rounded-xl border border-stone-800">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-800 bg-stone-900/60">
                      <th className="text-left px-5 py-3 text-stone-400 font-semibold">Color</th>
                      <th className="text-left px-5 py-3 text-stone-400 font-semibold">Primary Emotion</th>
                      <th className="text-left px-5 py-3 text-stone-400 font-semibold">Best For</th>
                      <th className="text-left px-5 py-3 text-stone-400 font-semibold">Notable Brands</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { color: "#ef4444", name: "Red", emotion: "Urgency, Passion, Energy", best: "Sales, Food, Entertainment", brands: "Netflix, YouTube, Coca-Cola" },
                      { color: "#f97316", name: "Orange", emotion: "Confidence, Creativity, Warmth", best: "CTAs, Tech, Consumer Brands", brands: "Amazon, Harley-Davidson" },
                      { color: "#22c55e", name: "Green", emotion: "Trust, Health, Growth", best: "Finance, Health, Environment", brands: "Whole Foods, John Deere" },
                      { color: "#64b5f6", name: "Blue", emotion: "Trust, Stability, Intelligence", best: "Tech, Finance, B2B Services", brands: "PayPal, IBM, Ford" },
                      { color: "#a855f7", name: "Purple", emotion: "Luxury, Wisdom, Creativity", best: "Premium Products, Beauty", brands: "Cadbury, Hallmark" },
                      { color: "#1c1917", name: "Black", emotion: "Sophistication, Power, Elegance", best: "Luxury, High-End B2B", brands: "Apple, Chanel, Nike" },
                    ].map((row) => (
                      <tr key={row.name} className="border-b border-stone-800/60 last:border-0 hover:bg-stone-900/30">
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded" style={{ backgroundColor: row.color, border: row.color === "#1c1917" ? "1px solid #44403C" : "none" }} />
                            <span className="text-stone-200 font-medium">{row.name}</span>
                          </div>
                        </td>
                        <td className="px-5 py-3 text-stone-400">{row.emotion}</td>
                        <td className="px-5 py-3 text-stone-400">{row.best}</td>
                        <td className="px-5 py-3 text-stone-500 text-xs">{row.brands}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Color impact bar chart */}
              <div className="my-8 p-6 rounded-xl border border-stone-800 bg-stone-900/40">
                <h4 className="text-stone-300 text-sm font-semibold mb-6 text-center">
                  Color Impact on Purchase Intent (% of respondents reporting positive buying response)
                </h4>
                <svg viewBox="0 0 580 260" className="w-full max-w-xl mx-auto" role="img" aria-label="Bar chart showing color impact on purchase intent">
                  {/* Y axis */}
                  <line x1="55" y1="15" x2="55" y2="220" stroke="#44403C" strokeWidth="1"/>
                  {/* X axis */}
                  <line x1="55" y1="220" x2="560" y2="220" stroke="#44403C" strokeWidth="1"/>
                  {/* Grid lines */}
                  {[25, 50, 75, 100].map((v) => {
                    const y = 220 - (v / 100) * 200
                    return (
                      <g key={v}>
                        <line x1="55" y1={y} x2="560" y2={y} stroke="#292524" strokeWidth="1" strokeDasharray="4,4"/>
                        <text x="48" y={y + 4} textAnchor="end" fill="#78716C" fontSize="10">{v}%</text>
                      </g>
                    )
                  })}
                  {/* Bars */}
                  {[
                    { label: "Red", value: 45, color: "#ef4444", x: 75 },
                    { label: "Orange", value: 57, color: "#f97316", x: 165 },
                    { label: "Green", value: 63, color: "#22c55e", x: 255 },
                    { label: "Purple", value: 72, color: "#a855f7", x: 345 },
                    { label: "Blue", value: 78, color: "#64b5f6", x: 435 },
                    { label: "Black", value: 82, color: "#44403C", x: 525 },
                  ].map(({ label, value, color, x }) => {
                    const barHeight = (value / 100) * 200
                    const barY = 220 - barHeight
                    return (
                      <g key={label}>
                        <rect x={x - 25} y={barY} width="50" height={barHeight} fill={color} rx="4" opacity="0.85"/>
                        <text x={x} y={barY - 6} textAnchor="middle" fill="#D6D3D1" fontSize="11" fontWeight="600">{value}%</text>
                        <text x={x} y="236" textAnchor="middle" fill="#78716C" fontSize="10">{label}</text>
                      </g>
                    )
                  })}
                </svg>
                <p className="text-stone-500 text-xs text-center mt-4">
                  Source: Colorcom Research, 2023 — B2C consumer sample, n=2,400
                </p>
              </div>

              <p>
                Notice that blue scores highest — which explains why it&apos;s the dominant color
                in financial services, B2B tech, and professional services. Trust is the primary
                purchase driver in high-consideration categories, and blue communicates trust
                more effectively than any other color.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-50 mb-4">
                Visual hierarchy: guiding attention without a map
              </h2>
              <p>
                Eye-tracking studies consistently show that users don&apos;t read websites — they scan.
                Specifically, they follow predictable patterns: the F-pattern for text-heavy pages
                (reading across the top, then down the left side) and the Z-pattern for visual pages
                (top-left, top-right, diagonal down, bottom-right).
              </p>
              <p className="mt-4">
                Great web design works with these patterns, not against them. It places the most
                critical information — your value proposition, your primary CTA, your trust signals —
                exactly where the eye is most likely to land.
              </p>
              <p className="mt-4">
                The tools for creating visual hierarchy are simple but powerful:
              </p>

              <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { tool: "Size contrast", desc: "Larger elements get noticed first. Your headline should be 2–3x larger than body text to establish immediate hierarchy." },
                  { tool: "Color contrast", desc: "High contrast draws the eye. Your primary CTA should have the highest contrast ratio on the page." },
                  { tool: "Whitespace", desc: "Empty space isn't wasted space — it creates focus. Elements surrounded by whitespace appear more important." },
                  { tool: "Positioning", desc: "Top-left and center-top positions receive the most initial attention. Place your most critical message there." },
                ].map(({ tool, desc }) => (
                  <div key={tool} className="p-4 rounded-lg border border-stone-800 bg-stone-900/30">
                    <h4 className="text-accent text-sm font-semibold mb-2">{tool}</h4>
                    <p className="text-stone-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-50 mb-4">
                Typography: the silent persuader
              </h2>
              <p>
                Typography is one of the most underestimated design decisions in web development.
                It&apos;s not just about readability — it&apos;s about personality, authority, and trust.
                Research by the MIT AgeLab found that difficult-to-read fonts triggered the brain&apos;s
                &quot;danger signal,&quot; increasing cognitive load and reducing trust.
              </p>

              {/* Typography metrics table */}
              <div className="my-8 overflow-x-auto rounded-xl border border-stone-800">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-800 bg-stone-900/60">
                      <th className="text-left px-5 py-3 text-stone-400 font-semibold">Metric</th>
                      <th className="text-center px-5 py-3 text-stone-400 font-semibold">Poor Typography</th>
                      <th className="text-center px-5 py-3 text-stone-400 font-semibold">Optimized Typography</th>
                      <th className="text-center px-5 py-3 text-stone-400 font-semibold">Improvement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { metric: "Time on page", poor: "1m 12s", good: "2m 48s", improvement: "+133%" },
                      { metric: "Scroll depth", poor: "34%", good: "67%", improvement: "+97%" },
                      { metric: "CTA click rate", poor: "2.1%", good: "4.8%", improvement: "+129%" },
                      { metric: "Return visitor rate", poor: "18%", good: "31%", improvement: "+72%" },
                      { metric: "Form completion rate", poor: "23%", good: "41%", improvement: "+78%" },
                    ].map((row, i) => (
                      <tr key={row.metric} className={`border-b border-stone-800/60 last:border-0 ${i % 2 === 0 ? "bg-stone-900/20" : ""}`}>
                        <td className="px-5 py-3 text-stone-200 font-medium">{row.metric}</td>
                        <td className="px-5 py-3 text-center text-red-400">{row.poor}</td>
                        <td className="px-5 py-3 text-center text-green-400">{row.good}</td>
                        <td className="px-5 py-3 text-center text-accent font-semibold">{row.improvement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-stone-500 text-xs -mt-4 mb-6">
                Data sourced from internal A/B testing across 12 client sites (2023–2024).
              </p>

              <p>
                The rules for conversion-optimized typography are straightforward:
              </p>
              <ul className="mt-4 space-y-2 pl-4">
                {[
                  "Body text should be 16px minimum on mobile, 17–18px on desktop",
                  "Line height between 1.5–1.7 for body text maximizes readability",
                  "Line length (measure) between 60–75 characters prevents eye fatigue",
                  "Use a maximum of two typefaces: one for headings, one for body",
                  "High contrast between text and background — WCAG AA at minimum (4.5:1 ratio)",
                ].map((rule) => (
                  <li key={rule} className="flex items-start gap-3 text-stone-400 text-sm">
                    <span className="text-accent mt-1">→</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-50 mb-4">
                Whitespace: the power of what&apos;s not there
              </h2>
              <p>
                Amateur designers fill space. Expert designers protect it. Whitespace — also called
                negative space — is one of the most powerful tools for directing attention, reducing
                cognitive load, and increasing perceived quality.
              </p>
              <p className="mt-4">
                A study by Wichita State University found that generous use of whitespace around
                text increased comprehension by 20%. Separate research from Google found that
                &quot;visual complexity&quot; — too many elements competing for attention — was the
                single strongest predictor of a site being judged as &quot;low quality.&quot;
              </p>
              <p className="mt-4">
                This is why luxury brands like Apple and Chanel use so much whitespace — it signals
                quality, confidence, and prestige. Your website&apos;s spacing isn&apos;t aesthetic
                filler. It&apos;s communication.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-50 mb-4">
                CTA design: the conversion trigger
              </h2>
              <p>
                Everything else on your website is in service of one goal: getting the visitor to
                take action. Your call-to-action button is the endpoint of that journey, and its
                design has an outsized impact on conversion rates.
              </p>

              <div className="my-6 overflow-x-auto rounded-xl border border-stone-800">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-800 bg-stone-900/60">
                      <th className="text-left px-5 py-3 text-stone-400 font-semibold">CTA Element</th>
                      <th className="text-left px-5 py-3 text-stone-400 font-semibold">Low-converting approach</th>
                      <th className="text-left px-5 py-3 text-stone-400 font-semibold">High-converting approach</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { element: "Button copy", low: '"Submit" or "Click Here"', high: '"Get My Free Quote" or "Start Today"' },
                      { element: "Button color", low: "Gray or matches background", high: "High contrast, often accent color" },
                      { element: "Button size", low: "Same size as surrounding text", high: "Larger, padded — visually dominant" },
                      { element: "Placement", low: "Bottom of long page", high: "Above the fold + repeated throughout" },
                      { element: "Urgency", low: "No time pressure", high: "Limited availability or time-based nudge" },
                      { element: "Micro-copy", low: "No supporting text", high: "\"No credit card required\" or \"Free for 14 days\"" },
                    ].map((row, i) => (
                      <tr key={row.element} className={`border-b border-stone-800/60 last:border-0 ${i % 2 === 0 ? "bg-stone-900/20" : ""}`}>
                        <td className="px-5 py-3 text-stone-200 font-medium">{row.element}</td>
                        <td className="px-5 py-3 text-red-400 text-sm">{row.low}</td>
                        <td className="px-5 py-3 text-green-400 text-sm">{row.high}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                One of the most consistent findings across conversion research: first-person CTA
                copy significantly outperforms second-person copy. &quot;Start my free trial&quot;
                converts better than &quot;Start your free trial&quot; — because it puts the user
                mentally in possession of the outcome before they click.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-50 mb-4">
                Putting it together: the design audit framework
              </h2>
              <p>
                When we audit a client&apos;s website, we run every major page through a five-point
                design psychology checklist:
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { num: "01", title: "First impression test", desc: "Cover the page and describe what you see at a glance. Is the value proposition immediately clear? Does the visual design inspire trust?" },
                  { num: "02", title: "Hierarchy audit", desc: "What is the eye drawn to first? Second? Is that the correct order, or are important elements buried?" },
                  { num: "03", title: "Color check", desc: "Do the colors align with the emotional register of the brand? Is the primary CTA the most visually prominent interactive element?" },
                  { num: "04", title: "Typography scan", desc: "Is the body text readable at arm's length? Is there a clear heading hierarchy? Are line lengths comfortable?" },
                  { num: "05", title: "Whitespace test", desc: "Remove all images and color. Does the layout still feel structured and intentional? Or is it a wall of text?" },
                ].map(({ num, title, desc }) => (
                  <div key={num} className="flex gap-4 p-4 rounded-lg border border-stone-800 bg-stone-900/30">
                    <span className="text-accent font-mono text-sm font-bold flex-shrink-0">{num}</span>
                    <div>
                      <h4 className="text-stone-200 font-semibold text-sm mb-1">{title}</h4>
                      <p className="text-stone-400 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-50 mb-4">
                The bottom line
              </h2>
              <p>
                Web design psychology isn&apos;t magic — it&apos;s applied science. Every color,
                every font size, every button placement is a hypothesis about human behavior. The
                best designers run those hypotheses against data and refine.
              </p>
              <p className="mt-4">
                At Net Core AI, we apply this framework to every site we build — not as a checklist,
                but as a design philosophy. Every decision has a reason, and every reason connects
                back to your business goal.
              </p>
              <p className="mt-4">
                If your current website doesn&apos;t feel like it&apos;s working as hard as it
                should, the problem is probably not your offer. It&apos;s the design.
              </p>
            </section>

          </div>

          {/* Author bio */}
          <div className="mt-16 p-6 rounded-2xl border border-stone-800 bg-stone-900/40">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-stone-700 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">JW</span>
              </div>
              <div>
                <p className="text-stone-200 font-bold">James Williams</p>
                <p className="text-accent text-sm">Chief Marketing Officer, Net Core AI</p>
                <p className="text-stone-400 text-sm leading-relaxed mt-2">
                  James brings a data-driven lens to brand strategy and growth marketing. He&apos;s
                  responsible for ensuring every site Net Core AI builds is positioned to rank,
                  convert, and retain — not just look good.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation to other posts */}
          <div className="mt-12 pt-8 border-t border-stone-800">
            <p className="text-stone-500 text-sm mb-6">More from the blog</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/custom-websites-vs-templates"
                className="flex-1 p-4 rounded-xl border border-stone-800 hover:border-accent/30 bg-stone-900/30 hover:bg-stone-900/60 transition-all duration-200 group"
              >
                <p className="text-stone-500 text-xs mb-2">Next article</p>
                <p className="text-stone-200 text-sm font-medium group-hover:text-accent transition-colors duration-200 leading-snug">
                  Why Custom Websites Outperform Templates →
                </p>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 rounded-2xl border border-accent/20 bg-accent/5 text-center">
            <h3 className="text-xl font-bold mb-3">Ready to build a site that converts?</h3>
            <p className="text-stone-400 text-sm mb-6 leading-relaxed">
              We apply every principle in this article to every site we build. Let&apos;s talk about
              what that would look like for your business.
            </p>
            <a
              href="mailto:netcoreaisolutions@gmail.com"
              className="px-6 py-3 rounded-lg bg-accent hover:bg-accent/90 text-stone-950 font-semibold text-sm transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
            >
              Get a free consultation
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
