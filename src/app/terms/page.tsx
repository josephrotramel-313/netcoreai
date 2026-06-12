import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Net Core",
  description: "Terms and conditions governing your use of Net Core services.",
};

const EFFECTIVE_DATE = "June 11, 2026";
const CONTACT_EMAIL = "legal@netcoreai.tech";

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-slate-500 text-sm">
            Effective date: {EFFECTIVE_DATE}
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-10 text-slate-300 leading-relaxed">
          <section aria-labelledby="intro-heading">
            <p className="text-lg">
              These Terms of Service (&quot;Terms&quot;) govern your access to
              and use of the Net Core website at{" "}
              <strong className="text-white">netcoreai.tech</strong> and any
              related services (collectively, the &quot;Service&quot;) operated
              by Net Core (&quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;). By accessing or using the Service, you agree to
              be bound by these Terms. If you do not agree, do not use the
              Service.
            </p>
          </section>

          <Section id="use-of-service" title="1. Use of the Service">
            <p>You agree to use the Service only for lawful purposes and in a manner consistent with all applicable laws and regulations. You must not:</p>
            <ul>
              <li>Attempt to gain unauthorized access to any part of the Service or its infrastructure.</li>
              <li>Submit false, misleading, or fraudulent information through any contact form.</li>
              <li>Use automated tools, scrapers, or bots to interact with the Service without our written permission.</li>
              <li>Engage in any activity that disrupts, overloads, or impairs the Service (including denial-of-service attacks).</li>
              <li>Upload or transmit malware, viruses, or any malicious code.</li>
            </ul>
          </Section>

          <Section id="intellectual-property" title="2. Intellectual Property">
            <p>
              All content on this website — including text, graphics, logos,
              icons, images, and code — is the property of Net Core or its
              licensors and is protected by applicable copyright, trademark, and
              other intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, or create derivative
              works from any content on this site without our express written
              consent.
            </p>
          </Section>

          <Section id="contact-form" title="3. Contact Form & Communications">
            <p>
              By submitting your email address through our contact form, you
              consent to receive a reply from Net Core regarding your
              inquiry. We will not add you to a marketing list without your
              explicit opt-in consent.
            </p>
            <p>
              You represent that any information you submit is accurate and
              that you have the right to provide it. You are solely responsible
              for the content of any messages you send to us.
            </p>
          </Section>

          <Section id="rate-limiting" title="4. Rate Limiting & Fair Use">
            <p>
              To protect the integrity of our Service, we apply automated rate
              limits on requests to our platform, including contact form
              submissions. Repeated abuse of the Service may result in
              temporary or permanent restrictions on your access.
            </p>
          </Section>

          <Section id="disclaimers" title="5. Disclaimers">
            <p>
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
              AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE
              UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.
            </p>
          </Section>

          <Section id="limitation-of-liability" title="6. Limitation of Liability">
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, NET CORE AI AND ITS
              MEMBERS, EMPLOYEES, AND CONTRACTORS SHALL NOT BE LIABLE FOR ANY
              INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
              DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE,
              EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p>
              OUR TOTAL LIABILITY TO YOU FOR ANY CLAIM ARISING UNDER THESE
              TERMS SHALL NOT EXCEED ONE HUNDRED US DOLLARS ($100).
            </p>
          </Section>

          <Section id="third-party-links" title="7. Third-Party Links">
            <p>
              The Service may contain links to third-party websites. These
              links are provided for convenience only. We have no control over
              the content of those sites and accept no responsibility for them
              or for any loss or damage that may arise from your use of them.
            </p>
          </Section>

          <Section id="privacy" title="8. Privacy">
            <p>
              Your use of the Service is also governed by our{" "}
              <Link
                href="/privacy"
                className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
              >
                Privacy Policy
              </Link>
              , which is incorporated into these Terms by reference.
            </p>
          </Section>

          <Section id="modifications" title="9. Modifications to Terms">
            <p>
              We reserve the right to modify these Terms at any time. Changes
              will be posted on this page with an updated effective date.
              Continued use of the Service after any changes constitutes your
              acceptance of the revised Terms.
            </p>
          </Section>

          <Section id="governing-law" title="10. Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the United States, without regard to its conflict of
              law provisions. Any dispute arising under these Terms shall be
              subject to the exclusive jurisdiction of the courts located in the
              applicable jurisdiction.
            </p>
          </Section>

          <Section id="contact-us" title="11. Contact Us">
            <p>
              If you have questions about these Terms, please contact:
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
