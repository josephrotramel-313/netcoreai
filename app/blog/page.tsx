import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/sections/Navbar"
import Footer from "@/components/sections/Footer"
import { Clock, ArrowRight, Palette, Code2, Smartphone } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog — Net Core AI | Web Design & Development Insights",
  description:
    "Expert insights on web design psychology, custom development vs templates, mobile-first strategy, and conversion optimization from the Net Core AI team.",
  openGraph: {
    title: "Blog — Net Core AI",
    description:
      "Expert insights on web design, custom development, and digital strategy.",
    type: "website",
    url: "https://netcoreai.tech/blog",
    siteName: "Net Core AI",
    images: [
      {
        url: "https://netcoreai.tech/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Net Core AI Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://netcoreai.tech/blog",
  },
}

const posts = [
  {
    slug: "psychology-of-web-design",
    title: "The Psychology of Web Design: How Color, Layout & Typography Drive Conversions",
    excerpt:
      "The difference between a site that converts and one that doesn't isn't always the offer — it's often how the design speaks to the visitor's subconscious. Discover the science behind high-converting web design.",
    date: "November 15, 2024",
    readTime: "9 min read",
    author: "James Williams",
    authorTitle: "CMO",
    authorInitials: "JW",
    category: "Design Strategy",
    categoryColor: "text-purple-400",
    categoryBg: "bg-purple-400/10",
    Icon: Palette,
    IconColor: "text-purple-400",
    gradient: "from-purple-900/40 to-blue-900/40",
  },
  {
    slug: "custom-websites-vs-templates",
    title: "Why Custom Websites Outperform Templates: A Data-Driven Technical Analysis",
    excerpt:
      "WordPress templates and page builders feel cheap to build. But what do they cost you in performance, SEO rankings, and conversions? We ran the numbers — and the gap is bigger than most people realize.",
    date: "December 1, 2024",
    readTime: "11 min read",
    author: "Felix Odunayo",
    authorTitle: "CTO",
    authorInitials: "FO",
    category: "Technical Deep Dive",
    categoryColor: "text-blue-400",
    categoryBg: "bg-blue-400/10",
    Icon: Code2,
    IconColor: "text-blue-400",
    gradient: "from-blue-900/40 to-stone-900/40",
  },
  {
    slug: "mobile-first-roi",
    title: "Mobile-First Web Design: The ROI Every Business Owner Needs to Understand",
    excerpt:
      "67% of all web traffic now comes from mobile devices. But most business websites are still designed for desktop and adjusted for mobile — backwards. Here's what that costs you, and how to fix it.",
    date: "January 10, 2025",
    readTime: "8 min read",
    author: "Joseph Rotramel",
    authorTitle: "CEO",
    authorInitials: "JR",
    category: "Business Strategy",
    categoryColor: "text-green-400",
    categoryBg: "bg-green-400/10",
    Icon: Smartphone,
    IconColor: "text-green-400",
    gradient: "from-green-900/40 to-stone-900/40",
  },
]

export default function BlogPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0C0A09] text-stone-50">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 border-b border-stone-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-stone-800 text-accent text-xs font-semibold tracking-widest uppercase mb-6">
            The Net Core AI Blog
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Insights that actually
            <br />
            <span className="text-accent">move the needle.</span>
          </h1>
          <p className="text-stone-400 text-xl leading-relaxed max-w-2xl mx-auto">
            No fluff. No filler. Just the web design and development insights we wish
            we had when we were starting out — and that we still use every day.
          </p>
        </div>
      </section>

      {/* Blog posts */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-10">
            {posts.map((post) => {
              const Icon = post.Icon
              return (
                <article key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="rounded-2xl border border-stone-800 hover:border-accent/30 bg-stone-900/30 hover:bg-stone-900/60 transition-all duration-300 overflow-hidden">
                      {/* Featured image area */}
                      <div className={`h-56 bg-gradient-to-br ${post.gradient} flex items-center justify-center border-b border-stone-800 relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(100,181,246,0.05)_0%,transparent_70%)]" />
                        <div className="relative flex flex-col items-center gap-3">
                          <div className="w-16 h-16 rounded-2xl bg-stone-900/60 border border-stone-700/50 flex items-center justify-center">
                            <Icon size={28} className={post.IconColor} />
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${post.categoryBg} ${post.categoryColor}`}>
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${post.categoryBg} ${post.categoryColor}`}>
                            {post.category}
                          </span>
                          <div className="flex items-center gap-1.5 text-stone-500 text-xs">
                            <Clock size={12} />
                            {post.readTime}
                          </div>
                          <span className="text-stone-600 text-xs">{post.date}</span>
                        </div>

                        <h2 className="text-2xl font-bold text-stone-50 mb-3 group-hover:text-accent transition-colors duration-200 leading-snug">
                          {post.title}
                        </h2>

                        <p className="text-stone-400 text-sm leading-relaxed mb-6">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                              <span className="text-accent text-xs font-bold">{post.authorInitials}</span>
                            </div>
                            <div>
                              <p className="text-stone-300 text-sm font-medium">{post.author}</p>
                              <p className="text-stone-500 text-xs">{post.authorTitle}</p>
                            </div>
                          </div>
                          <span className="inline-flex items-center gap-1.5 text-accent text-sm font-medium group-hover:gap-3 transition-all duration-200">
                            Read article <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-6 border-t border-stone-800 bg-stone-900/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want insights delivered to your inbox?
          </h2>
          <p className="text-stone-400 mb-8 leading-relaxed">
            We publish new articles on web design strategy, performance optimization, and
            growth tactics every few weeks. No spam. Unsubscribe anytime.
          </p>
          <a
            href="mailto:netcoreaisolutions@gmail.com?subject=Blog Newsletter Signup"
            className="px-6 py-3 rounded-lg bg-accent hover:bg-accent/90 text-stone-950 font-semibold text-sm transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
          >
            Subscribe via email
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
