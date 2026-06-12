import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/sections/Navbar"
import Footer from "@/components/sections/Footer"

export const metadata: Metadata = {
  title: "Terms of Service — Net Core AI",
  description:
    "Net Core AI's Terms of Service. Review the terms governing our web development services, payment policies, and client responsibilities.",
  openGraph: {
    title: "Terms of Service — Net Core AI",
    type: "website",
    url: "https://netcoreai.tech/tos",
  },
  alternates: {
    canonical: "https://netcoreai.tech/tos",
  },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = "June 12, 2025"
const COMPANY = "Net Core AI"
const EMAIL = "netcoreaisolutions@gmail.com"
const SITE = "netcoreai.tech"

export default function TosPage() {
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
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Terms of Service</h1>
            <p className="text-stone-400">Last updated: {LAST_UPDATED}</p>
            <p className="text-stone-400 mt-3 leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) govern your use of the{" "}
              <span className="text-stone-300">{SITE}</span> website and any services provided
              by {COMPANY} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing
              our website or engaging our services, you agree to these Terms.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="mb-12 p-6 rounded-xl border border-stone-800 bg-stone-900/40">
            <p className="text-stone-300 text-sm font-semibold mb-4">Contents</p>
            <ol className="space-y-2">
              {[
                "Services",
                "Project Agreements and Scope",
                "Payment Terms",
                "Revisions and Change Orders",
                "Client Responsibilities",
                "Intellectual Property",
                "Warranties and Representations",
                "Limitation of Liability",
                "Indemnification",
                "Confidentiality",
                "Term and Termination",
                "Dispute Resolution",
                "General Provisions",
                "Contact",
              ].map((item, i) => (
                <li key={item}>
                  <a
                    href={`#tos-${i + 1}`}
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

            <section id="tos-1">
              <h2 className="text-xl font-bold text-stone-50 mb-4">1. Services</h2>
              <p className="text-sm mb-4">
                {COMPANY} provides custom web development, web design, UI/UX design, AI chatbot
                integration, analytics dashboards, and related digital services (collectively,
                &quot;Services&quot;). The specific scope, deliverables, timeline, and pricing
                for each engagement are defined in a separate written agreement, proposal, or
                statement of work (&quot;Project Agreement&quot;) provided to you before work begins.
              </p>
              <p className="text-sm text-stone-400">
                These Terms apply to all Services unless otherwise specified in a Project Agreement.
                In the event of a conflict between these Terms and a Project Agreement, the Project
                Agreement governs.
              </p>
            </section>

            <section id="tos-2">
              <h2 className="text-xl font-bold text-stone-50 mb-4">2. Project Agreements and Scope</h2>
              <p className="text-sm mb-4">
                All projects require a signed Project Agreement before work commences. The Project
                Agreement will specify:
              </p>
              <ul className="space-y-2 text-sm mb-4">
                {[
                  "Deliverables and project scope",
                  "Timeline and milestones",
                  "Total fee and payment schedule",
                  "Number of included revision rounds",
                  "Post-launch support period",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-stone-400">
                    <span className="text-accent mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-stone-400">
                Work outside the agreed scope (&quot;Out-of-Scope Work&quot;) will be quoted
                separately and requires written approval before execution. We reserve the right
                to decline out-of-scope requests that conflict with the project timeline or
                resource availability.
              </p>
            </section>

            <section id="tos-3">
              <h2 className="text-xl font-bold text-stone-50 mb-4">3. Payment Terms</h2>
              <div className="overflow-x-auto rounded-xl border border-stone-800 mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-stone-800 bg-stone-900/60">
                      <th className="text-left px-4 py-3 text-stone-400 font-semibold">Payment Type</th>
                      <th className="text-left px-4 py-3 text-stone-400 font-semibold">Amount</th>
                      <th className="text-left px-4 py-3 text-stone-400 font-semibold">Timing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: "Deposit (all projects)", amount: "50% of total project fee", timing: "Due before work begins" },
                      { type: "Final payment (all projects)", amount: "Remaining 50%", timing: "Due at final handoff, before site goes live" },
                      { type: "Monthly retainer", amount: "As specified in agreement", timing: "Billed on the 1st of each month" },
                      { type: "Add-on products", amount: "As specified in agreement", timing: "Due before delivery or activation" },
                    ].map((row, i) => (
                      <tr key={row.type} className={`border-b border-stone-800/60 last:border-0 ${i % 2 === 0 ? "bg-stone-900/20" : ""}`}>
                        <td className="px-4 py-3 text-stone-200 font-medium">{row.type}</td>
                        <td className="px-4 py-3 text-stone-400">{row.amount}</td>
                        <td className="px-4 py-3 text-stone-400 text-xs">{row.timing}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-stone-400 mb-3">
                All fees are in USD. Invoices are due upon receipt unless otherwise stated.
                Overdue invoices accrue interest at 1.5% per month (or the maximum rate permitted
                by law, whichever is lower) after 30 days past due.
              </p>
              <p className="text-sm text-stone-400">
                We reserve the right to pause or suspend work on a project if payment is more
                than 14 days overdue. Work will resume within 2 business days of payment receipt.
              </p>
            </section>

            <section id="tos-4">
              <h2 className="text-xl font-bold text-stone-50 mb-4">4. Revisions and Change Orders</h2>
              <p className="text-sm mb-4">
                Each project tier includes a defined number of revision rounds. A &quot;revision
                round&quot; means a single consolidated list of feedback submitted after reviewing
                a deliverable. The following principles apply:
              </p>
              <ul className="space-y-2 text-sm mb-4">
                {[
                  "Revision rounds must be used within 30 days of the deliverable being presented",
                  "Unused revision rounds do not carry forward to future projects",
                  "Feedback that expands the scope beyond the original agreement is treated as a change order",
                  "Change orders are quoted separately and require written approval before implementation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-stone-400">
                    <span className="text-accent mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-stone-400">
                We will notify you in writing before performing any work that would trigger a
                change order. We will never execute out-of-scope work without prior written consent.
              </p>
            </section>

            <section id="tos-5">
              <h2 className="text-xl font-bold text-stone-50 mb-4">5. Client Responsibilities</h2>
              <p className="text-sm mb-4">
                Successful project delivery depends on timely and complete input from you. You agree to:
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "Provide all required content, assets, credentials, and approvals within 7 business days of request",
                  "Designate a single point of contact with authority to approve decisions",
                  "Provide consolidated, non-contradictory feedback within each revision round",
                  "Ensure all content and materials you provide are lawfully owned or licensed",
                  "Not use our services for unlawful, harmful, or deceptive purposes",
                  "Maintain reasonable availability for scheduled check-ins and approval milestones",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-stone-400">
                    <span className="text-accent mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-stone-400">
                Delays caused by late content or approvals from the client side may extend the
                project timeline and do not entitle the client to a fee reduction.
              </p>
            </section>

            <section id="tos-6">
              <h2 className="text-xl font-bold text-stone-50 mb-4">6. Intellectual Property</h2>
              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-lg border border-stone-800 bg-stone-900/30">
                  <h3 className="text-stone-200 font-semibold mb-2">Upon Full Payment</h3>
                  <p className="text-stone-400">
                    Upon receipt of full payment, {COMPANY} assigns to you all rights, title, and
                    interest in the custom code and design created specifically for your project
                    (&quot;Deliverables&quot;). You own your website outright.
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-stone-800 bg-stone-900/30">
                  <h3 className="text-stone-200 font-semibold mb-2">Our Retained Rights</h3>
                  <p className="text-stone-400">
                    {COMPANY} retains ownership of all pre-existing tools, frameworks, libraries,
                    and proprietary methodologies used in the delivery of services. We retain the
                    right to display your project in our portfolio unless you request otherwise
                    in writing before project completion.
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-stone-800 bg-stone-900/30">
                  <h3 className="text-stone-200 font-semibold mb-2">Third-Party Components</h3>
                  <p className="text-stone-400">
                    Your deliverables may include open-source components licensed under MIT, Apache,
                    or similar permissive licenses. We will document any such dependencies.
                    Third-party components remain subject to their respective licenses.
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-stone-800 bg-stone-900/30">
                  <h3 className="text-stone-200 font-semibold mb-2">Before Full Payment</h3>
                  <p className="text-stone-400">
                    Until full payment is received, all deliverables remain the property of
                    {COMPANY}. We may take down or withhold access to any deliverable for
                    non-payment without liability.
                  </p>
                </div>
              </div>
            </section>

            <section id="tos-7">
              <h2 className="text-xl font-bold text-stone-50 mb-4">7. Warranties and Representations</h2>
              <p className="text-sm mb-4">
                <span className="text-stone-200 font-semibold">{COMPANY} warrants that:</span>
              </p>
              <ul className="space-y-2 text-sm mb-6">
                {[
                  "Services will be performed in a professional and workmanlike manner",
                  "Deliverables will materially conform to the specifications in the Project Agreement",
                  "We have the right to enter into these Terms and perform the Services",
                  "Deliverables will not knowingly infringe any third-party intellectual property rights",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-stone-400">
                    <span className="text-accent mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm mb-4">
                <span className="text-stone-200 font-semibold">Disclaimer of Other Warranties:</span>
              </p>
              <p className="text-sm text-stone-400">
                EXCEPT AS EXPRESSLY SET FORTH ABOVE, THE SERVICES ARE PROVIDED &quot;AS IS&quot;
                WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL IMPLIED WARRANTIES INCLUDING
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE ERROR-FREE OR
                THAT YOUR WEBSITE WILL ACHIEVE ANY PARTICULAR BUSINESS OUTCOME.
              </p>
            </section>

            <section id="tos-8">
              <h2 className="text-xl font-bold text-stone-50 mb-4">8. Limitation of Liability</h2>
              <p className="text-sm mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  "NEITHER PARTY SHALL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
                  "NET CORE AI'S TOTAL CUMULATIVE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS SHALL NOT EXCEED THE TOTAL FEES PAID BY YOU IN THE THREE (3) MONTHS PRECEDING THE CLAIM.",
                  "THESE LIMITATIONS APPLY REGARDLESS OF THE FORM OF ACTION (CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE).",
                ].map((item, i) => (
                  <li key={i} className="p-4 rounded-lg border border-stone-800 bg-stone-900/20 text-stone-400 text-xs leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-stone-400">
                Some jurisdictions do not allow the exclusion of certain warranties or limitation
                of liability. In such jurisdictions, our liability is limited to the maximum
                extent permitted by law.
              </p>
            </section>

            <section id="tos-9">
              <h2 className="text-xl font-bold text-stone-50 mb-4">9. Indemnification</h2>
              <p className="text-sm">
                You agree to indemnify, defend, and hold harmless {COMPANY} and its officers,
                employees, and agents from any claims, damages, losses, liabilities, costs, and
                expenses (including reasonable attorneys&apos; fees) arising from: (a) your use
                of our Services; (b) content or materials you provide to us; (c) your breach of
                these Terms; or (d) your violation of any applicable law or third-party rights.
              </p>
            </section>

            <section id="tos-10">
              <h2 className="text-xl font-bold text-stone-50 mb-4">10. Confidentiality</h2>
              <p className="text-sm mb-4">
                Both parties may receive confidential information during the engagement.
                &quot;Confidential Information&quot; means any non-public information disclosed
                by one party to the other that is designated as confidential or that reasonably
                should be understood to be confidential given the nature of the information.
              </p>
              <p className="text-sm mb-4 text-stone-400">
                Each party agrees to: (a) hold the other&apos;s Confidential Information in
                strict confidence; (b) not disclose it to third parties without prior written
                consent; and (c) use it only in connection with the performance of the Services.
              </p>
              <p className="text-sm text-stone-400">
                These obligations survive termination for 3 years. Exceptions apply for
                information that is publicly known, independently developed, or required to
                be disclosed by law.
              </p>
            </section>

            <section id="tos-11">
              <h2 className="text-xl font-bold text-stone-50 mb-4">11. Term and Termination</h2>
              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-lg border border-stone-800 bg-stone-900/30">
                  <h3 className="text-stone-200 font-semibold mb-2">Project Engagements</h3>
                  <p className="text-stone-400">
                    Either party may terminate a project engagement with 14 days written notice.
                    Upon termination: (a) client owes payment for all work completed to the date
                    of termination; (b) {COMPANY} will deliver all completed work product; and
                    (c) the deposit is non-refundable if termination occurs after work has begun.
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-stone-800 bg-stone-900/30">
                  <h3 className="text-stone-200 font-semibold mb-2">Monthly Retainers</h3>
                  <p className="text-stone-400">
                    Either party may cancel a monthly retainer with 30 days written notice.
                    The final month&apos;s invoice will be prorated if cancellation occurs
                    mid-cycle, unless otherwise specified.
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-stone-800 bg-stone-900/30">
                  <h3 className="text-stone-200 font-semibold mb-2">Termination for Cause</h3>
                  <p className="text-stone-400">
                    Either party may terminate immediately for material breach if the breach
                    remains uncured for 7 days after written notice. {COMPANY} may also
                    immediately terminate for non-payment or abusive conduct toward team members.
                  </p>
                </div>
              </div>
            </section>

            <section id="tos-12">
              <h2 className="text-xl font-bold text-stone-50 mb-4">12. Dispute Resolution</h2>
              <p className="text-sm mb-4">
                In the event of any dispute arising from these Terms or the Services, the parties
                agree to the following process:
              </p>
              <div className="flex flex-col gap-3 text-sm">
                {[
                  { step: "1", title: "Good-faith negotiation", desc: "Parties must attempt to resolve the dispute through direct negotiation for at least 30 days before initiating formal proceedings." },
                  { step: "2", title: "Mediation", desc: "If negotiation fails, parties agree to non-binding mediation through a mutually agreed mediator before pursuing arbitration or litigation." },
                  { step: "3", title: "Governing law", desc: "These Terms are governed by the laws of the State of Texas, without regard to conflict of law provisions. Any legal proceedings shall be brought in Dallas County, Texas." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4 p-4 rounded-lg border border-stone-800 bg-stone-900/30">
                    <span className="text-accent font-mono font-bold text-sm flex-shrink-0">{step}</span>
                    <div>
                      <h4 className="text-stone-200 font-semibold mb-1">{title}</h4>
                      <p className="text-stone-400">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="tos-13">
              <h2 className="text-xl font-bold text-stone-50 mb-4">13. General Provisions</h2>
              <div className="space-y-3 text-sm">
                {[
                  { title: "Entire Agreement", desc: "These Terms, together with any Project Agreement, constitute the entire agreement between the parties and supersede all prior negotiations, representations, and agreements." },
                  { title: "Modifications", desc: "We may update these Terms at any time. We will post the updated Terms on our website with a revised date. Continued use of our Services after the effective date constitutes acceptance." },
                  { title: "Severability", desc: "If any provision of these Terms is found unenforceable, the remaining provisions continue in full force and effect." },
                  { title: "Waiver", desc: "Failure to enforce any provision of these Terms does not constitute a waiver of our right to enforce it in the future." },
                  { title: "Assignment", desc: "You may not assign your rights under these Terms without our written consent. We may assign our rights to a successor entity." },
                  { title: "Force Majeure", desc: "Neither party is liable for delays caused by circumstances beyond their reasonable control, including natural disasters, government actions, labor disputes, or widespread internet outages." },
                  { title: "No Agency", desc: "Nothing in these Terms creates an employment, partnership, joint venture, or agency relationship between the parties." },
                ].map(({ title, desc }) => (
                  <div key={title} className="p-4 rounded-lg border border-stone-800 bg-stone-900/20">
                    <span className="text-stone-200 font-semibold">{title}: </span>
                    <span className="text-stone-400">{desc}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="tos-14">
              <h2 className="text-xl font-bold text-stone-50 mb-4">14. Contact</h2>
              <p className="text-sm mb-4">
                Questions about these Terms? Contact us:
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
            <Link href="/privacy" className="text-stone-400 hover:text-accent transition-colors duration-200">
              Privacy Policy
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
