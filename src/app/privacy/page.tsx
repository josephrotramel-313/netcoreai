import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Net Core",
  description: "How Net Core collects, uses, and protects your information.",
};

const EFFECTIVE_DATE = "June 11, 2026";
const CONTACT_EMAIL = "privacy@netcoreai.tech";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100">
      {/* Nav */}
      <header className="border-b border-slate-800 px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 cursor-pointer"
            aria-label="Net Core home"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <svg
                className="w-3.5 h-3.5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </div>
            <span className="font-bold text-base tracking-tight text-white">
              Net Core
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer inline-flex items-center gap-1.5"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-white mb-3">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-sm">
            Effective date: {EFFECTIVE_DATE}
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-10 text-slate-300 leading-relaxed">
          <section aria-labelledby="intro-heading">
            <p className="text-lg">
              Net Core (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              is committed to protecting your personal information. This Privacy
              Policy explains what data we collect, how we use it, and your
              rights regarding that data when you use our website at{" "}
              <strong className="text-white">netcoreai.tech</strong>.
            </p>
          </section>

          <Section id="information-we-collect" title="1. Information We Collect">
            <p>We collect only what is necessary to respond to your inquiries:</p>
            <ul>
              <li>
                <strong className="text-white">Email address</strong> — when
                you submit our contact form, we collect your email address so
                we can respond to your inquiry.
              </li>
              <li>
                <strong className="text-white">Usage data</strong> — standard
                web server logs may include your IP address, browser type,
                referring URL, and pages visited. This data is used solely for
                security monitoring and aggregate analytics.
              </li>
            </ul>
            <p>
              We do not use tracking pixels, third-party advertising trackers,
              or fingerprinting technologies.
            </p>
          </Section>

          <Section id="how-we-use" title="2. How We Use Your Information">
            <p>We use the information collected to:</p>
            <ul>
              <li>Respond to your project inquiry or question.</li>
              <li>
                Protect the security and integrity of our systems (e.g.,
                rate-limiting abusive requests).
              </li>
              <li>Improve our website based on aggregate, anonymized usage data.</li>
            </ul>
            <p>
              We will never sell, rent, or share your personal information with
              third parties for marketing purposes.
            </p>
          </Section>

          <Section id="data-retention" title="3. Data Retention">
            <p>
              Contact inquiry emails are retained for up to 24 months from the
              date of receipt, after which they are permanently deleted. Server
              logs are rotated and deleted after 90 days.
            </p>
          </Section>

          <Section id="cookies" title="4. Cookies">
            <p>
              Our website does not use cookies for tracking or advertising. We
              may set a strictly necessary session cookie if interactive
              features require server-side state. No cookie consent banner is
              required for strictly necessary cookies under applicable law.
            </p>
          </Section>

          <Section id="third-parties" title="5. Third-Party Services">
            <p>
              Our website may be hosted on cloud infrastructure (e.g., AWS,
              Azure, or a VPS provider). These providers process data on our
              behalf under their own privacy and security standards. We do not
              embed third-party analytics scripts (e.g., Google Analytics) on
              this site.
            </p>
          </Section>

          <Section id="security" title="6. Security">
            <p>
              We implement industry-standard security measures including TLS
              encryption in transit, rate limiting on all form submissions, and
              server-side input validation. No method of transmission over the
              Internet is 100% secure; we cannot guarantee absolute security
              but will notify affected users promptly in the event of a breach.
            </p>
          </Section>

          <Section id="your-rights" title="7. Your Rights">
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul>
              <li>
                <strong className="text-white">Access</strong> the personal
                data we hold about you.
              </li>
              <li>
                <strong className="text-white">Correct</strong> inaccurate
                data.
              </li>
              <li>
                <strong className="text-white">Delete</strong> your personal
                data (right to erasure).
              </li>
              <li>
                <strong className="text-white">Object</strong> to or restrict
                certain processing.
              </li>
            </ul>
            <p>
              To exercise any of these rights, email us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
              >
                {CONTACT_EMAIL}
              </a>
              . We will respond within 30 days.
            </p>
          </Section>

          <Section id="children" title="8. Children's Privacy">
            <p>
              Our services are not directed to individuals under the age of 13.
              We do not knowingly collect personal data from children. If you
              believe a child has submitted personal information to us, please
              contact us immediately so we can delete it.
            </p>
          </Section>

          <Section id="changes" title="9. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. The
              &quot;Effective date&quot; at the top of this page indicates when
              the policy was last revised. Continued use of the site after
              changes constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section id="contact-us" title="10. Contact Us">
            <p>
              If you have questions or concerns about this Privacy Policy,
              please contact:
            </p>
            <div className="mt-3 p-5 rounded-xl bg-slate-900/60 border border-slate-700/50 text-sm">
              <p className="font-semibold text-white">Net Core</p>
              <p className="mt-1">
                Email:{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id}>
      <h2
        id={id}
        className="text-xl font-bold text-white mb-4 pb-2 border-b border-slate-800"
      >
        {title}
      </h2>
      <div className="space-y-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">
        {children}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-sm">
          &copy; 2026 Net Core. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="/privacy"
            className="text-slate-500 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-slate-500 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
