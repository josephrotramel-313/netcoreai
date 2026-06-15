import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import Workflow from "@/components/sections/Workflow";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Net Core AI",
  url: "https://netcoreai.tech",
  logo: "https://netcoreai.tech/favicon.svg",
  description:
    "Net Core AI is a premium custom web development agency building high-performance websites and web applications for businesses that demand the best.",
  foundingDate: "2022",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-469-442-5018",
    contactType: "customer service",
    email: "netcoreaisolutions@gmail.com",
    areaServed: "US",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dallas",
    addressRegion: "TX",
    addressCountry: "US",
  },
  sameAs: ["https://netcoreai.tech"],
  employee: [
    {
      "@type": "Person",
      name: "Joseph Rotramel",
      jobTitle: "Chief Executive Officer",
    },
    {
      "@type": "Person",
      name: "Felix Odunayo",
      jobTitle: "Chief Technology Officer",
    },
    {
      "@type": "Person",
      name: "James Williams",
      jobTitle: "Chief Marketing Officer",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Net Core AI",
  url: "https://netcoreai.tech",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://netcoreai.tech/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0C0A09]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Workflow />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
