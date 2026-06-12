import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/sections/Navbar"
import Footer from "@/components/sections/Footer"

export const metadata: Metadata = {
  title: "Privacy Policy — Net Core AI",
  description:
    "Net Core AI's privacy policy. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy — Net Core AI",
    type: "website",
    url: "https://netcoreai.tech/privacy",
  },
  alternates: {
    canonical: "https://netcoreai.tech/privacy",
  },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = "June 12, 2025"
const COMPANY = "Net Core AI"
const EMAIL = "netcoreaisolutions@gmail.com"
const SITE = "netcoreai.tech"

export default function PrivacyPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0C0A09] text-stone-50">
      <Navbar />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <header className="mb-12 border-b border-stone-800 pb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-stone-800 text-accent text-xs font-semibold tracking-widest uppercase mb-5">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Privacy Policy</h1>
            <p className="text-stone-400">Last updated: {LAST_UPDATED}</p>
            <p className="text-stone-400 mt-3 leading-relaxed">
              {COMPANY} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates{" "}
              <span className="text-stone-300">{SITE}</span>. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you visit our website or
              engage our services. Please read it carefully.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-12 p-6 rounded-xl border border-stone-800 bg-stone-900/40">
            <p className="text-stone-300 text-sm font-semibold mb-4">Contents</p>
            <ol className="space-y-2">
              {[
                "Information We Collect",
                "How We Use Your Information",
                "Legal Basis for Processing",
                "Sharing Your Information",
                "Cookies and Tracking Technologies",
                "Data Retention",
                "Your Rights",
                "Security",
                "Third-Party Links",
                "Children's Privacy",
                "Changes to This Policy",
                "Contact Us",
              ].map((item, i) => (
                <li key={item}>
                  <a
                    href={`#section-${i + 1}`}
                    className="text-stone-400 hover:text-accent text-sm transition-colors duration-200"
                  >
                    {i + 1}. {item}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          <div className="space-y-12 text-stone-300 leading-relaxed">

            <section id="section-1">
              <h2 className="text-xl font-bold text-stone-50 mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                We collect information you provide directly to us and information collected
                automatically when you use our website.
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-stone-800 bg-stone-900/30">
                  <h3 className="text-stone-200 font-semibold text-sm mb-2">Information You Provide</h3>
                  <ul className="space-y-1.5 text-sm text-stone-400">
                    <li className="flex items-start gap-2"><span className="text-accent mt-1">→</span> Name, email address, and phone number submitted via contact forms</li>
                    <li className="flex items-start gap-2"><span className="text-accent mt-1">→</span> Project details, business information, and messages you send us</li>
                    <li className="flex items-start gap-2"><span className="text-accent mt-1">→</span> Any files or materials you voluntarily share during our engagement</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-stone-800 bg-stone-900/30">
                  <h3 className="text-stone-200 font-semibold text-sm mb-2">Information Collected Automatically</h3>
                  <ul className="space-y-1.5 text-sm text-stone-400">
                    <li className="flex items-start gap-2"><span className="text-accent mt-1">→</span> IP address, browser type, operating system, and referring URLs</li>
                    <li className="flex items-start gap-2"><span className="text-accent mt-1">→</span> Pages visited, time spent on pages, and click interactions</li>
                    <li className="flex items-start gap-2"><span className="text-accent mt-1">→</span> Device identifiers and general geographic location (country/city level)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="section-2">
              <h2 className="text-xl font-bold text-stone-50 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="space-y-2 text-sm">
                {[
                  "Respond to inquiries and provide the services you request",
                  "Send project updates, invoices, and service-related communications",
                  "Improve our website, services, and user experience",
                  "Analyze website traffic and usage patterns (aggregated, not individual profiling)",
                  "Comply with legal obligations and protect our legal rights",
                  "Detect and prevent fraud, abuse, or security incidents",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-stone-400">
                    <span className="text-accent mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-stone-400">
                We do <span className="text-stone-300 font-medium">not</span> sell your personal
                information to third parties. We do not use your information for automated
                decision-making or profiling that produces legal or similarly significant effects.
              </p>
            </section>

            <section id="section-3">
              <h2 className="text-xl font-bold text-stone-50 mb-4">3. Legal Basis for Processing</h2>
              <p className="mb-4 text-sm">
                Where applicable under GDPR or similar laws, our legal bases for processing
                personal data include:
              </p>
              <div className="overflow-x-auto rounded-xl border border-stone-800">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-800 bg-stone-900/60">
                      <th className="text-left px-4 py-3 text-stone-400 font-semibold">Processing Activity</th>
                      <th className="text-left px-4 py-3 text-stone-400 font-semibold">Legal Basis</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { activity: "Responding to contact form submissions", basis: "Legitimate interest / Pre-contractual steps" },
                      { activity: "Delivering contracted services", basis: "Contract performance" },
                      { activity: "Sending service-related emails", basis: "Contract performance" },
                      { activity: "Website analytics (aggregated)", basis: "Legitimate interest" },
                      { activity: "Security and fraud prevention", basis: "Legitimate interest" },
                      { activity: "Legal compliance", basis: "Legal obligation" },
                    ].map((row, i) => (
                      <tr key={row.activity} className={`border-b border-stone-800/60 last:border-0 ${i % 2 === 0 ? "bg-stone-900/20" : ""}`}>
                        <td className="px-4 py-3 text-stone-300">{row.activity}</td>
                        <td className="px-4 py-3 text-stone-400 text-xs">{row.basis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="section-4">
              <h2 className="text-xl font-bold text-stone-50 mb-4">4. Sharing Your Information</h2>
              <p className="mb-4 text-sm">
                We do not sell or rent your personal information. We may share it in the
                following limited circumstances:
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  { heading: "Service providers", desc: "We may share information with third-party vendors that help us operate our business (e.g., email delivery, analytics, cloud hosting). These vendors are contractually bound to protect your data and use it only as directed by us." },
                  { heading: "Legal requirements", desc: "We may disclose your information if required by law, court order, or governmental authority, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others." },
                  { heading: "Business transfers", desc: "If Net Core AI is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you before your information becomes subject to a different privacy policy." },
                ].map(({ heading, desc }) => (
                  <li key={heading} className="p-4 rounded-lg border border-stone-800 bg-stone-900/30">
                    <span className="text-stone-200 font-semibold">{heading}: </span>
                    <span className="text-stone-400">{desc}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="section-5">
              <h2 className="text-xl font-bold text-stone-50 mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="mb-4 text-sm">
                Our website may use cookies and similar tracking technologies to enhance your
                experience and collect usage data.
              </p>
              <div className="overflow-x-auto rounded-xl border border-stone-800">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-800 bg-stone-900/60">
                      <th className="text-left px-4 py-3 text-stone-400 font-semibold">Cookie Type</th>
                      <th className="text-left px-4 py-3 text-stone-400 font-semibold">Purpose</th>
                      <th className="text-left px-4 py-3 text-stone-400 font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "Essential", purpose: "Required for core site functionality", duration: "Session" },
                      { type: "Analytics", purpose: "Aggregate usage statistics (Google Analytics)", duration: "Up to 2 years" },
                      { type: "Preference", purpose: "Remember display preferences", duration: "1 year" },
                    ].map((row, i) => (
                      <tr key={row.type} className={`border-b border-stone-800/60 last:border-0 ${i % 2 === 0 ? "bg-stone-900/20" : ""}`}>
                        <td className="px-4 py-3 text-stone-200 font-medium">{row.type}</td>
                        <td className="px-4 py-3 text-stone-400">{row.purpose}</td>
                        <td className="px-4 py-3 text-stone-500 text-xs">{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-stone-400">
                You can control cookies through your browser settings. Disabling certain cookies
                may affect site functionality. We honor Do Not Track signals where technically feasible.
              </p>
            </section>

            <section id="section-6">
              <h2 className="text-xl font-bold text-stone-50 mb-4">6. Data Retention</h2>
              <p className="text-sm">
                We retain personal information only as long as necessary for the purposes described
                in this policy or as required by law:
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  "Contact form submissions: up to 24 months, unless you request earlier deletion",
                  "Client project data: duration of engagement plus up to 3 years for legal compliance",
                  "Website analytics: aggregated data retained indefinitely; raw logs deleted after 90 days",
                  "Marketing communications: until you unsubscribe or request deletion",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-stone-400">
                    <span className="text-accent mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="section-7">
              <h2 className="text-xl font-bold text-stone-50 mb-4">7. Your Rights</h2>
              <p className="mb-4 text-sm">
                Depending on your location, you may have the following rights regarding your
                personal information:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {[
                  { right: "Access", desc: "Request a copy of the data we hold about you" },
                  { right: "Correction", desc: "Request correction of inaccurate or incomplete data" },
                  { right: "Deletion", desc: "Request erasure of your personal data (\"right to be forgotten\")" },
                  { right: "Portability", desc: "Receive your data in a structured, machine-readable format" },
                  { right: "Objection", desc: "Object to processing based on legitimate interests" },
                  { right: "Restriction", desc: "Request that we limit processing of your data" },
                ].map(({ right, desc }) => (
                  <div key={right} className="p-3 rounded-lg border border-stone-800 bg-stone-900/30">
                    <p className="text-accent font-semibold mb-1">{right}</p>
                    <p className="text-stone-400 text-xs">{desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-stone-400">
                To exercise any of these rights, contact us at{" "}
                <a href={`mailto:${EMAIL}`} className="text-accent hover:underline">{EMAIL}</a>.
                We will respond within 30 days. We may need to verify your identity before
                fulfilling your request.
              </p>
            </section>

            <section id="section-8">
              <h2 className="text-xl font-bold text-stone-50 mb-4">8. Security</h2>
              <p className="text-sm">
                We implement industry-standard technical and organizational measures to protect
                your personal information against unauthorized access, alteration, disclosure,
                or destruction. These include:
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  "TLS/HTTPS encryption for all data in transit",
                  "Access controls limiting who can view personal data",
                  "Regular security patches and dependency audits",
                  "No storage of payment card data (we use third-party payment processors)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-stone-400">
                    <span className="text-accent mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-stone-400">
                No method of transmission over the internet is 100% secure. While we strive to
                protect your data, we cannot guarantee absolute security.
              </p>
            </section>

            <section id="section-9">
              <h2 className="text-xl font-bold text-stone-50 mb-4">9. Third-Party Links</h2>
              <p className="text-sm">
                Our website may contain links to third-party websites (e.g., Calendly for
                scheduling). We are not responsible for the privacy practices of those sites.
                We encourage you to review their privacy policies before providing any personal
                information. Links to third-party sites do not constitute endorsement.
              </p>
            </section>

            <section id="section-10">
              <h2 className="text-xl font-bold text-stone-50 mb-4">10. Children&apos;s Privacy</h2>
              <p className="text-sm">
                Our website and services are not directed to individuals under the age of 16.
                We do not knowingly collect personal information from children. If you believe
                a child has provided us personal information, please contact us at{" "}
                <a href={`mailto:${EMAIL}`} className="text-accent hover:underline">{EMAIL}</a>{" "}
                and we will promptly delete it.
              </p>
            </section>

            <section id="section-11">
              <h2 className="text-xl font-bold text-stone-50 mb-4">11. Changes to This Policy</h2>
              <p className="text-sm">
                We may update this Privacy Policy from time to time. When we do, we will update
                the &quot;Last updated&quot; date at the top of this page. For significant changes,
                we will provide more prominent notice (e.g., email notification to active clients).
                Your continued use of the website after any changes constitutes acceptance of the
                updated policy.
              </p>
            </section>

            <section id="section-12">
              <h2 className="text-xl font-bold text-stone-50 mb-4">12. Contact Us</h2>
              <p className="text-sm mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy,
                please contact us:
              </p>
              <div className="p-5 rounded-xl border border-stone-800 bg-stone-900/40 text-sm space-y-1.5">
                <p className="text-stone-200 font-semibold">{COMPANY}</p>
                <p className="text-stone-400">Email: <a href={`mailto:${EMAIL}`} className="text-accent hover:underline">{EMAIL}</a></p>
                <p className="text-stone-400">Website: <span className="text-stone-300">{SITE}</span></p>
              </div>
            </section>

          </div>

          {/* Footer links */}
          <div className="mt-16 pt-8 border-t border-stone-800 flex flex-wrap gap-6 text-sm">
            <Link href="/tos" className="text-stone-400 hover:text-accent transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/" className="text-stone-400 hover:text-accent transition-colors duration-200">
              ← Back to home
            </Link>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  )
}
