export const metadata = {
  title: 'Cybersecurity Content Examples',
  description: '30 content ideas for cybersecurity companies.',
};


export default function ContentExamples() {
  // Define the full sections array for all 30 items
  const sections = [
    // 1. Comparison Pages (examples)
    {
      id: "sentinelone",
      icon: "📘",
      title: "SentinelOne vs. CrowdStrike",
      description: "Direct head-to-head comparison with clear tables.",
      url: "https://www.sentinelone.com/vs/crowdstrike/",
    },
    {
      id: "palo-alto",
      icon: "📘",
      title: "Palo Alto Networks – Prisma SASE vs. Zscaler",
      description: "Uses “alternative to” phrasing, focuses on competitor pain points, strong visuals and comparisons.",
      url: "https://www.paloaltonetworks.com/sase/sase-vs-zscaler",
    },
    {
      id: "nordlayer",
      icon: "📘",
      title: "NordLayer vs. Perimeter 81",
      description: "Friendly tone, simple UX, downloadable toolkit.",
      url: "https://nordlayer.com/blog/perimeter-81-competitors-and-alternative/",
    },
    {
      id: "tailscale",
      icon: "📘",
      title: "Tailscale vs. OpenVPN",
      description: "Dev-friendly language, strong branding.",
      url: "https://tailscale.com/compare/openvpn",
    },
    {
      id: "1password",
      icon: "📘",
      title: "1Password vs. LastPass",
      description: "At-a-glance comparison, includes reviews and links to similar posts.",
      url: "https://1password.com/compare/1password-vs-lastpass",
    },
    // 2. BOFU Blog Posts
    {
      id: "bofu-phishing",
      icon: "✉️",
      title: "Phishing simulation pricing",
      description: "Answer specific pricing questions like “Phishing simulation pricing”.",
    },
    {
      id: "bofu-clinic",
      icon: "🏥",
      title: "Best ransomware protection for small clinic",
      description: "Target niche purchases such as small clinics.",
    },
    {
      id: "bofu-mdr",
      icon: "💡",
      title: "Top MDR providers for healthcare startups",
      description: "Guide buyers towards managed detection and response options.",
    },
    {
      id: "bofu-siem",
      icon: "🔒",
      title: "SIEM vs XDR: Which is better for hybrid environments?",
      description: "Compare security information and event management to extended detection and response.",
    },
    // 3. Product Release Spotlights
    {
      id: "product-release",
      icon: "🚀",
      title: "Product Release Spotlights",
      description: "Highlight new features or updates to your cybersecurity products. Example: “Introducing AI-driven threat detection in our latest release.”",
    },
    // 4. Case Studies
    {
      id: "case-studies",
      icon: "📚",
      title: "Case Studies",
      description: "Showcase customer success stories to build trust. Example: “How Acme Corp reduced breaches by 40% using our platform.”",
    },
    // 5. Whitepapers
    {
      id: "whitepapers",
      icon: "📄",
      title: "Whitepapers",
      description: "In-depth reports on cybersecurity topics. Example: “The future of zero trust security models.”",
    },
    // 6. Webinars
    {
      id: "webinars",
      icon: "🎥",
      title: "Webinars",
      description: "Live or recorded sessions educating your audience. Example: “Protecting your cloud infrastructure: Best practices.”",
    },
    // 7. Infographics
    {
      id: "infographics",
      icon: "📊",
      title: "Infographics",
      description: "Visual content summarizing complex cybersecurity data. Example: “2024 cybersecurity threat landscape.”",
    },
    // 8. E-books
    {
      id: "ebooks",
      icon: "📕",
      title: "E-books",
      description: "Comprehensive guides on relevant topics. Example: “Complete guide to ransomware prevention.”",
    },
    // 9. How-to Guides
    {
      id: "howto-guides",
      icon: "🛠️",
      title: "How-to Guides",
      description: "Step-by-step tutorials for users. Example: “How to configure multi-factor authentication.”",
    },
    // 10. Industry Reports
    {
      id: "industry-reports",
      icon: "📑",
      title: "Industry Reports",
      description: "Share research and insights. Example: “Annual cybersecurity trends report 2024.”",
    },
    // 11. FAQ Pages
    {
      id: "faq-pages",
      icon: "❓",
      title: "FAQ Pages",
      description: "Answer common questions about your products or industry. Example: “What is endpoint detection and response?”",
    },
    // 12. Video Tutorials
    {
      id: "video-tutorials",
      icon: "🎬",
      title: "Video Tutorials",
      description: "Short videos demonstrating product features or cybersecurity concepts. Example: “Setting up VPN on your device.”",
    },
    // 13. Podcasts
    {
      id: "podcasts",
      icon: "🎙️",
      title: "Podcasts",
      description: "Audio content discussing cybersecurity trends. Example: “Weekly cyber threat roundup.”",
    },
    // 14. Newsletters
    {
      id: "newsletters",
      icon: "📰",
      title: "Newsletters",
      description: "Regular updates and curated content for subscribers. Example: “Monthly cybersecurity insights.”",
    },
    // 15. Checklists
    {
      id: "checklists",
      icon: "✅",
      title: "Checklists",
      description: "Practical lists to help users stay secure. Example: “Cybersecurity audit checklist.”",
    },
    // 16. Templates
    {
      id: "templates",
      icon: "📋",
      title: "Templates",
      description: "Downloadable resources like policy templates. Example: “Incident response plan template.”",
    },
    // 17. Interactive Tools
    {
      id: "interactive-tools",
      icon: "🧮",
      title: "Interactive Tools",
      description: "Calculators or quizzes engaging users. Example: “Cyber risk assessment tool.”",
    },
    // 18. Guest Posts
    {
      id: "guest-posts",
      icon: "✍️",
      title: "Guest Posts",
      description: "Articles from industry experts. Example: “Emerging threats in IoT security.”",
    },
    // 19. Analyst Quotes
    {
      id: "analyst-quotes",
      icon: "💬",
      title: "Analyst Quotes",
      description: "Incorporate expert opinions to add credibility. Example: Gartner insights on cloud security.",
    },
    // 20. Social Media Campaigns
    {
      id: "social-media-campaigns",
      icon: "📱",
      title: "Social Media Campaigns",
      description: "Targeted posts to raise brand awareness. Example: “#CybersecurityAwarenessMonth tips.”",
    },
    // 21. Customer Testimonials
    {
      id: "customer-testimonials",
      icon: "👍",
      title: "Customer Testimonials",
      description: "Quotes from satisfied customers. Example: “Our data has never been safer.”",
    },
    // 22. Comparison Videos
    {
      id: "comparison-videos",
      icon: "🎞️",
      title: "Comparison Videos",
      description: "Visual side-by-side product comparisons. Example: “Firewall A vs Firewall B.”",
    },
    // 23. Event Recaps
    {
      id: "event-recaps",
      icon: "📝",
      title: "Event Recaps",
      description: "Summaries of industry conferences or webinars. Example: “Highlights from Black Hat 2024.”",
    },
    // 24. Security Alerts
    {
      id: "security-alerts",
      icon: "⚠️",
      title: "Security Alerts",
      description: "Timely warnings about new vulnerabilities. Example: “Critical patch update for XYZ software.”",
    },
    // 25. Behind-the-Scenes Content
    {
      id: "behind-the-scenes",
      icon: "🏢",
      title: "Behind-the-Scenes Content",
      description: "Show your team and culture. Example: “Meet the engineers behind our threat detection.”",
    },
    // 26. Glossaries
    {
      id: "glossaries",
      icon: "📖",
      title: "Glossaries",
      description: "Define cybersecurity terms for beginners. Example: “Cybersecurity glossary for non-technical users.”",
    },
    // 27. Security Tips
    {
      id: "security-tips",
      icon: "💡",
      title: "Security Tips",
      description: "Quick actionable advice. Example: “5 ways to secure your home network.”",
    },
    // 28. Research Summaries
    {
      id: "research-summaries",
      icon: "🔬",
      title: "Research Summaries",
      description: "Break down complex studies. Example: “Summary of the latest malware research.”",
    },
    // 29. Opinion Pieces
    {
      id: "opinion-pieces",
      icon: "🗣️",
      title: "Opinion Pieces",
      description: "Thought leadership articles. Example: “The future of cybersecurity regulation.”",
    },
    // 30. Product Demos
    {
      id: "product-demos",
      icon: "🖥️",
      title: "Product Demos",
      description: "Walkthroughs showing product capabilities. Example: “Demo of our new SIEM platform.”",
    },
  ];

  return (
      <main className="w-full p-0 space-y-8">
        <div className="hero">
          <h1 className="text-3xl font-bold mb-8 text-left">
            30 content ideas for cybersecurity companies (with examples)
          </h1>
          <div className="card mb-16">
            <h2 className="text-2xl font-semibold mb-6 leading-relaxed text-center">
              What are some good content ideas for cybersecurity marketers?
            </h2>
            <p className="mb-6 leading-relaxed text-center">
              To help you break away from the bland and get inspiration for your cybersecurity content marketing campaigns, we put together this list of content ideas built for cybersecurity marketers, packed with real examples from leading cybersecurity service providers and solution vendors.
            </p>
          </div>
        </div>

        <div className="h-12"></div>

        <section className="mb-12">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-5xl w-full px-8">
              {sections.map((item, index) => (
                <div
                  key={item.id}
                  className="writer-card flex flex-col items-start min-h-[260px]"
                >
                  <span className="block text-gray-500 text-xs mb-1">#{index + 1}</span>
                  <span className="block text-7xl mb-4">{item.icon}</span>
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="mb-4">{item.description}</p>
                  {item.url && (
                    <a href={item.url} target="_blank" className="text-blue-200 underline">
                      See example
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section mt-16">
          <h2 className="text-2xl font-bold mb-4">Need help turning these ideas into high‑performing assets?</h2>
          <a
            href="https://www.contentvisit.com"
            target="_blank"
            rel="noopener"
            className="cta-button"
          >
            Talk to Content Visit
          </a>
        </section>
      </main>
  );
}