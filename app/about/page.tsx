import type { Metadata } from "next"
import Navbar from "@/components/sections/Navbar"
import Footer from "@/components/sections/Footer"
import { Mail, Phone, Target, Zap, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us — Net Core AI | Premium Web Development Agency",
  description:
    "Meet the team behind Net Core AI — Joseph Rotramel, Felix Odunayo, and James Williams. Three specialists united by a mission to build exceptional digital experiences.",
  openGraph: {
    title: "About Net Core AI — Meet the Team",
    description:
      "Three specialists. One mission: build digital experiences that move the needle for your business.",
    type: "website",
    url: "https://netcoreai.tech/about",
    siteName: "Net Core AI",
    images: [
      {
        url: "https://netcoreai.tech/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Net Core AI — Meet the Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://netcoreai.tech/about",
  },
}

const personSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joseph Rotramel",
    jobTitle: "Chief Executive Officer",
    worksFor: {
      "@type": "Organization",
      name: "Net Core AI",
      url: "https://netcoreai.tech",
    },
    telephone: "+1-469-442-5018",
    email: "netcoreaisolutions@gmail.com",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Felix Odunayo",
    jobTitle: "Chief Technology Officer",
    worksFor: {
      "@type": "Organization",
      name: "Net Core AI",
      url: "https://netcoreai.tech",
    },
    telephone: "+1-214-962-7439",
    email: "netcoreaisolutions@gmail.com",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "James Williams",
    jobTitle: "Chief Marketing Officer",
    worksFor: {
      "@type": "Organization",
      name: "Net Core AI",
      url: "https://netcoreai.tech",
    },
    telephone: "+1-214-636-4709",
    email: "netcoreaisolutions@gmail.com",
  },
]

const team = [
  {
    name: "Joseph Rotramel",
    initials: "JR",
    title: "Chief Executive Officer",
    phone: "(469) 442-5018",
    tel: "+14694425018",
    email: "netcoreaisolutions@gmail.com",
    gradient: "from-blue-500 to-blue-700",
    accentColor: "#64b5f6",
    story: `Joseph didn't start Net Core AI because he saw a market opportunity — he started it because he was fed up. Fed up with agencies selling WordPress templates dressed up as "custom" work. Fed up with businesses spending thousands of dollars on websites that loaded slowly, ranked poorly, and converted nobody.`,
    mission: `With over three years of full-stack development experience, Joseph had seen firsthand what separates a $500 template from a $50,000-a-year revenue driver. The difference wasn't budget — it was intent, craft, and accountability. Net Core AI was built on that belief.`,
    philosophy: `"A website is your most valuable salesperson. It works 24/7, never calls in sick, and scales without a salary. It deserves to be built right."`,
    skills: ["Full-Stack Development", "Client Strategy", "Business Architecture", "Product Vision"],
    focus: "Leads company vision, client relationships, and ensures every project delivers measurable outcomes — not just deliverables.",
  },
  {
    name: "Felix Odunayo",
    initials: "FO",
    title: "Chief Technology Officer",
    phone: "(214) 962-7439",
    tel: "+12149627439",
    email: "netcoreaisolutions@gmail.com",
    gradient: "from-stone-500 to-stone-700",
    accentColor: "#a8a29e",
    story: `Felix came up through systems engineering before falling in love with the web. What drew him wasn't the ease of web development — it was the complexity hidden beneath the surface. How a 50ms difference in time-to-first-byte can cascade into millions in lost revenue. How the right database schema can make a platform ten times more scalable.`,
    mission: `He approaches every codebase the same way: assume someone else will maintain this, assume it will need to scale, assume security will be tested. That mindset has produced systems that haven't just survived — they've thrived under pressure.`,
    philosophy: `"Great code is invisible. Users don't think about the architecture — they just feel that everything works. That's the goal."`,
    skills: ["Next.js & React", "TypeScript", "Database Architecture", "System Design", "Security Engineering"],
    focus: "Architects the technical foundation for every project — from database schema to deployment pipeline — with a bias toward performance and longevity.",
  },
  {
    name: "James Williams",
    initials: "JW",
    title: "Chief Marketing Officer",
    phone: "(214) 636-4709",
    tel: "+12146364709",
    email: "netcoreaisolutions@gmail.com",
    gradient: "from-blue-600 to-stone-700",
    accentColor: "#93c5fd",
    story: `James has always been at the intersection of data and storytelling. Early in his career he realized that most marketing was either too creative (pretty but unmeasurable) or too analytical (effective but forgettable). The best brands found the balance — and he made it his job to find that balance for every client.`,
    mission: `At Net Core AI, James ensures that every website we build isn't just technically excellent — it's a growth engine. Copy, structure, SEO, and conversion flow are all part of his jurisdiction. Because the best code in the world is wasted if nobody finds the site, or if they leave without taking action.`,
    philosophy: `"Design without strategy is just decoration. Strategy without design is invisible. We do both, simultaneously."`,
    skills: ["SEO & Content Strategy", "Conversion Rate Optimization", "Brand Positioning", "Growth Marketing", "Analytics"],
    focus: "Drives growth strategy, brand positioning, and ensures every site we launch is built to rank, convert, and retain.",
  },
]

const values = [
  {
    icon: Target,
    title: "Precision Over Shortcuts",
    description:
      "We don't use templates, page builders, or off-the-shelf themes. Every pixel and every line of code is deliberate — because your business deserves a solution, not a starting point.",
  },
  {
    icon: Zap,
    title: "Performance Is Non-Negotiable",
    description:
      "Slow websites lose rankings, lose customers, and lose revenue. We architect for speed from day one — sub-2-second load times, optimal Core Web Vitals, and clean code that doesn't bloat.",
  },
  {
    icon: Shield,
    title: "Built to Last",
    description:
      "Security, scalability, and maintainability aren't afterthoughts. We build with the next three years in mind — so your investment compounds instead of depreciating.",
  },
]

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0C0A09] text-stone-50">
      {personSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 border-b border-stone-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-stone-800 text-accent text-xs font-semibold tracking-widest uppercase mb-6">
            About Us
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Three specialists.
            <br />
            <span className="text-accent">One obsession.</span>
          </h1>
          <p className="text-stone-400 text-xl leading-relaxed max-w-2xl mx-auto">
            Net Core AI exists because we believe small and mid-sized businesses deserve the
            same quality of digital presence that Fortune 500 companies pay millions for.
            We make that possible — without the agency markup.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-6 border-b border-stone-800">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Why we built{" "}
                <span className="text-accent">Net Core AI</span>
              </h2>
              <div className="space-y-4 text-stone-400 leading-relaxed">
                <p>
                  The web development industry has a problem. Most agencies sell templates
                  disguised as custom work. They charge premium prices for cookie-cutter
                  solutions that don&apos;t perform, don&apos;t scale, and don&apos;t convert.
                </p>
                <p>
                  We started Net Core AI to be the alternative. A small, focused team with
                  the skills of a large agency and the accountability of a partner invested
                  in your success.
                </p>
                <p>
                  Every project we take on gets our full attention. We don&apos;t farm out work
                  offshore. We don&apos;t spin up junior developers to hit deadlines. You work
                  directly with the people building your site — from first call to final handoff.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "3+", label: "Years of experience" },
                { value: "100%", label: "Custom code" },
                { value: "0", label: "Templates used" },
                { value: "∞", label: "Commitment to craft" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-stone-900/50 border border-stone-800 text-center"
                >
                  <div className="text-3xl font-extrabold text-accent mb-2">{stat.value}</div>
                  <div className="text-stone-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 border-b border-stone-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What we stand for
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="p-6 rounded-2xl bg-stone-900/50 border border-stone-800 hover:border-accent/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-stone-50 font-bold mb-3">{value.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">
              Meet the team behind{" "}
              <span className="text-accent">every great build</span>
            </h2>
            <p className="text-stone-400 text-lg max-w-xl mx-auto">
              We don&apos;t scale by adding headcount. We scale by getting better.
              Small on purpose. Exceptional by design.
            </p>
          </div>

          <div className="space-y-20">
            {team.map((member, i) => (
              <article
                key={member.name}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-start ${
                  i % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Profile card */}
                <div className={i % 2 === 1 ? "md:col-start-2" : ""}>
                  <div className="p-8 rounded-2xl bg-stone-900/60 border border-stone-800 hover:border-accent/30 transition-all duration-300">
                    <div className="flex items-start gap-5 mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center flex-shrink-0`}
                      >
                        <span className="text-white font-bold text-xl">{member.initials}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-stone-50">{member.name}</h3>
                        <p className="text-accent text-sm font-semibold">{member.title}</p>
                      </div>
                    </div>

                    <p className="text-stone-400 text-sm leading-relaxed mb-6">{member.focus}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-stone-800 text-stone-300 text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col gap-2 pt-4 border-t border-stone-800">
                      <a
                        href={`tel:${member.tel}`}
                        className="inline-flex items-center gap-2 text-stone-400 hover:text-accent text-sm transition-colors duration-200"
                      >
                        <Phone size={14} />
                        {member.phone}
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-2 text-stone-400 hover:text-accent text-sm transition-colors duration-200"
                      >
                        <Mail size={14} />
                        {member.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Story */}
                <div className={i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                  <div className="space-y-4 text-stone-400 leading-relaxed">
                    <p>{member.story}</p>
                    <p>{member.mission}</p>
                    <blockquote className="border-l-2 border-accent pl-4 mt-6">
                      <p className="text-stone-300 italic text-sm">{member.philosophy}</p>
                    </blockquote>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-stone-800 bg-stone-900/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to work with us?
          </h2>
          <p className="text-stone-400 mb-8 leading-relaxed">
            Every project starts with a conversation. Tell us what you&apos;re building
            and we&apos;ll tell you how we can make it exceptional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:netcoreaisolutions@gmail.com"
              className="px-6 py-3 rounded-lg bg-accent hover:bg-accent/90 text-stone-950 font-semibold text-sm transition-all duration-200 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Mail size={16} />
              Send us a message
            </a>
            <a
              href="/#contact"
              className="px-6 py-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-50 font-semibold text-sm transition-all duration-200 inline-flex items-center justify-center"
            >
              Get a free quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
