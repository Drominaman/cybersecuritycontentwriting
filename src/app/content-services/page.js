"use client";
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Link from "next/link";

const processSteps = [
  {
    icon: "🔎",
    title: "Find Your Real Story",
    desc: "We focus on what only you can say—proprietary data, sharp insights, and real opinions."
  },
  {
    icon: "✂️",
    title: "Prune & Sharpen",
    desc: "Redirect effort into content that moves buyers, not just fills a calendar."
  },
  {
    icon: "🎯",
    title: "Own Your Problem",
    desc: "Make your main pain point the thread through all your assets."
  },
  {
    icon: "🛠️",
    title: "Build for Conversion",
    desc: "We find your best BOFU angles and create assets that actually convert."
  },
  {
    icon: "🌐",
    title: "Surface Your Brand",
    desc: "Campaigns always include links and mentions to boost your presence—across classic and AI search."
  },
  {
    icon: "🚀",
    title: "Grow Your Results",
    desc: "From GTM messaging to organic traffic, we help early-stage vendors punch above their weight."
  }
];

const pluginSupportContent = [
  "You don’t need a full-time content team on day one (or 100). You need content that gets results.",
  "Content Visit plugs into your existing setup to support GTM, sharpen founder-led marketing, and build organic growth engines.",
  "We deliver practical, senior-level support with no bloated retainers, no hand-holding.",
  "Stand out in a market flooded with AI noise and thousands of vendors by publishing content that actually moves buyers.",
  "Skip the risky full-time hire. Get a flexible, proven content team at a fraction of the cost."
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Cybersecurity Content Writing Services</title>
        <meta name="description" content="Go beyond blogging—7 proven cybersecurity content writer use cases, FAQs, and why Content Visit is the top choice." />
        <link rel="canonical" href="https://www.cybersecuritycontentwriting.com/content-services" />
      </Head>

      {/* HERO / INTRO */}
      <div className="hero">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Hire the best cybersecurity content writing service on the market
        </h1>
      </div>

      <TrustedByCarousel />


      {/* SERVICE SECTIONS */}
      <main className="w-full flex flex-col gap-12 items-center">
        

    

        {/* Content Visit Pitch */}
        <section className="writer-card featured max-w-3xl w-full text-left p-8 shadow-lg border-2 border-blue-300 bg-gradient-to-br from-blue-50 via-white to-blue-100 transition-transform duration-300 hover:scale-105 my-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">
            Your cybersecurity content writing offer
          </h2>
          <div className="h-6"></div>
          <ul className="space-y-4 mb-6 text-lg">
            <li>
              <span className="font-semibold text-blue-700">No generic fluff:</span> Every asset is built on proprietary data, real insight, and sharp opinion aligned tightly to your product narrative.
            </li>
            <div className="h-4"></div>
            <li>
              <span className="font-semibold text-blue-700">Cut through the noise:</span> We prune, sharpen, and redirect wasted “SEO blog” effort into conversion focused content that actually moves buyers.
            </li>
            <div className="h-4"></div>
            <li>
              <span className="font-semibold text-blue-700">Own your solution category:</span> We help you build a consistent, channel-ready story around the problems you solve better than anyone.
            </li>
            <div className="h-4"></div>
            <li>
              <span className="font-semibold text-blue-700">BOFU content for growth:</span> We find 3 to 6 bottom-of-funnel angles and build out assets that drive conversions, not just impressions.
            </li>
            <div className="h-4"></div>
            <li>
              <span className="font-semibold text-blue-700">Surface your brand in search:</span> Every campaign comes with external backlinks, brand mentions, and a focus on in-market visibility including AI search engines.
            </li>
          </ul>
          <div className="flex justify-center mt-6">
            <a
              href="https://www.contentvisit.com/contact"
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk to Content Visit
            </a>
          </div>
           <div className="h-6"></div>
          <p className="mb-3 text-base mt-6 text-center">
            <span className="font-bold text-blue-700">Perfect for early-stage cybersecurity vendors:</span> Get your story straight, generate demand, and launch campaigns that work whether you’re launching, pivoting, or just stuck.
          </p>
        </section>
        <div className="my-8 text-center">
          <h3 className="text-2xl font-semibold">We can help you</h3>
        </div>

        

        {/* Use Cases / Card List */}
        <section className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-8 my-8">
          <div className="writer-card">
            <h4 className="font-bold mb-2">1. Develop SEO Content that converts</h4>
            <p>
              Forget AI. If you want real people to find and engage with your brand on search engines (including AI powered search engines like Perplexity) you need expert driven content. <a href="https://www.contentvisit.com" className="text-blue-700 font-semibold">Learn more</a>
            </p>
          </div>
          <div className="writer-card">
            <h4 className="font-bold mb-2">2. Write cybersecurity whitepapers and solution briefs</h4>
            <p>To convert leads, your organization needs target audience-focused sales collateral throughout the buyer journey from prospect to MQL to SQL and into contract with your company. <a href="https://www.contentvisit.com" className="text-blue-700 font-semibold">Learn more</a></p>
          </div>
          <div className="writer-card">
            <h4 className="font-bold mb-2">3. Copywrite security product or service landing pages</h4>
            <p>A cybersecurity marketing writer with copywriting experience should be able to take a brief and work with you to craft copy that is clear, easy to read and feature the right CTAs. <a href="https://www.contentvisit.com" className="text-blue-700 font-semibold">Learn more</a></p>
          </div>
          <div className="writer-card">
            <h4 className="font-bold mb-2">4. Own your audience with a newsletter</h4>
            <p>Newsletters are one of the highest ROI digital marketing investments. A cybersecurity marketing writer is key to making them work for your business. <a href="https://www.contentvisit.com" className="text-blue-700 font-semibold">Learn more</a></p>
          </div>
          <div className="writer-card">
            <h4 className="font-bold mb-2">5. Ghostwrite Cybersecurity Guest Posts</h4>
            <p>Guest posting can boost your domain authority and put your business in front of decision-makers. A skilled writer can ghostwrite for your SMEs. <a href="https://www.contentvisit.com" className="text-blue-700 font-semibold">Learn more</a></p>
          </div>
          <div className="writer-card">
            <h4 className="font-bold mb-2">6. Repurpose marketing content and protect your investment</h4>
            <p>Quality marketing content can be updated or repurposed. A writer can transform your insights into new content formats for greater ROI. <a href="https://www.contentvisit.com" className="text-blue-700 font-semibold">Learn more</a></p>
          </div>
          <div className="writer-card">
            <h4 className="font-bold mb-2">7. Create cybersecurity sales scripts and webinars</h4>
            <p>Keep webinars and sales scripts sharp. A cyber security writer can combine research and your talking points to create outlines and scripts. <a href="https://www.contentvisit.com" className="text-blue-700 font-semibold">Learn more</a></p>
          </div>
        </section>


        {/* TESTIMONIALS SECTION */}
        <TestimonialsSection />

        <ProcessStepper steps={processSteps} />

        {/* Cybersecurity content writing and strategy support across the entire marketing funnel */}
        <FunnelSupportSection
          image="/Screenshot 2025-04-22 at 14.32.33.png"
          alt="Cybersecurity content support across the marketing funnel"
        />

        {/* Plug-in Content Support Section */}
        <PluginSupportSection points={pluginSupportContent} />
        <p className="text-center text-base mt-10 mb-10">
          Want to see real-world cybersecurity content in action? Check out our{' '}
          <Link href="/content-examples" className="text-blue-800 underline hover:text-blue-600 transition">
            30 Cybersecurity Content Examples
          </Link>
          {' '}or return to the{' '}
          <Link href="/" className="text-blue-800 underline hover:text-blue-600 transition">
            main guide
          </Link>
          .
        </p>

        {/* FAQ */}
        <section className="card max-w-4xl w-full my-8">
          <h3 className="text-xl font-semibold mb-3">Cybersecurity Content Writing Service F.A.Q</h3>
          <ul className="list-disc ml-6">
            <li>
              <b>How are cybersecurity content writers working in 2025?</b>
              <div>
                Companies producing large volumes of AI content are seeing mixed results. The best writing still happens when companies pair skilled writers with SMEs to produce engaging content.
              </div>
            </li>
            <li>
              <b>How much does your cybersecurity content writing service cost?</b>
              <div>
                Pricing varies and we are flexable. Retainer pricing for full content marketing starts from as little as $500 per month. 
              </div>
            </li>
            <li>
              <b>What kind of content can a cybersecurity content writer create?</b>
              <div>
                White-papers, blogs, case studies, infographics, solution briefs, reports, social posts, ads, thought-leadership articles, landing pages and more.
              </div>
            </li>
            <li>
              <b>Will a cybersecurity content writer also do design for assets like white papers?</b>
              <div>
               Content Visit can also cover design and production as a full service agency.
              </div>
            </li>
            <li>
              <b>Can I use AI instead of a cybersecurity content writer?</b>
              <div>
                Not really. AI can generate text but can’t write convincing cybersecurity content or copy. There’s no replacement for a market-oriented cybersecurity content writer at the moment.
              </div>
            </li>
            <li>
              <b>Does a cybersecurity content writer need to be a practitioner?</b>
              <div>
                They need strong foundational technical knowledge but, more importantly, can interview true experts and help tell their stories.
              </div>
            </li>
          </ul>
        </section>
      </main>

      {/* CTA SECTION */}
      <div className="cta-section w-full px-6 py-20" id="contact">
        <div className="max-w-xl mx-auto text-center space-y-10">
          <div>
            <h2 className="text-4xl font-extrabold mb-2 text-white">Get best of breed cybersecurity content writing</h2>
          </div>

          <form action="mailto:contact@contentvisit.com" method="POST" encType="text/plain" className="space-y-4 w-full text-center">
            <input type="text" name="who" placeholder="Wh " className="w-full border border-white bg-transparent p-3 rounded-xl text-white placeholder-white/60" />
            <input type="email" name="email" placeholder="Your Email" className="w-full border border-white bg-transparent p-3 rounded-xl text-white placeholder-white/60" />
            <textarea name="message" placeholder="Tell us about your project..." rows="4" className="w-full border border-white bg-transparent p-3 rounded-xl text-white placeholder-white/60"></textarea>
            <button type="submit" className="cta-button w-full">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Testimonials component with rotation
function TestimonialsSection() {
  const testimonials = [
    {
      text: "Working with Laura was great for us at Element Security. She knew how to address our needs and didn't take much time until she could create the needed content.",
      author: "Omer Cohen",
      role: "Co-Founder and COO, Element Security"
    },
    {
      text: "Laura is a talented and conscientious content creator. When I joined the Randori team as part of its acquisition by IBM, she was instrumental in helping me get up to speed on its SEO strategy and cybersecurity content program. In particular, Laura conducted a detailed audit of content published on the Randori website to help me determine what should be migrated as part of its transition to IBM digital properties. She also continued to ghostwrite blog posts for Randori thought leaders throughout the transition, which now appear on the IBM Blog and Security Intelligence sites.",
      author: "Tracy Sullivan",
      role: "IBM X-Force Applied Research"
    },
    {
      text: "Laura is an exceptional marketing and content strategist. I’ve had the opportunity to work with her to distill complex topics into digestible, awareness-level blogs and web pages. She’s been a great partner to brainstorm upcoming content pieces, strategize about SEO, and execute on polished pieces suitable for security buyers.",
      author: "Bruce Chen",
      role: "Director of Product Marketing, Cyera"
    },
    {
      text: "I have been an entrepreneur and venture investor for 20 years and have worked with 100's of companies from startups to publicly-traded enterprises and I can say with confidence that most content from most companies is of blindingly average quality. The team at Content Visit can change that, and bring any organization's content up to high quality - that drives both visitors and revenues. Further, their ability to grow your domain and to quickly position you as an expert is unparalleled.",
      author: "Rob Shavell",
      role: "Founder, DeleteMe"
    }
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(c => (c + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="testimonial-section max-w-4xl mx-auto my-12 px-4">
      <h3 className="text-xl font-semibold mb-6 text-center text-blue-800">What our clients say</h3>
      <div className="testimonial-card bg-white shadow-md rounded-xl p-8 text-center transition-all duration-500 min-h-[200px] flex flex-col justify-center">
        <p className="italic text-lg mb-4">&ldquo;{testimonials[current].text}&rdquo;</p>
        <div className="font-semibold text-blue-700 mb-1">{testimonials[current].author}</div>
        <div className="text-gray-500 text-sm">{testimonials[current].role}</div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`w-2.5 h-2.5 rounded-full ${idx === current ? 'bg-blue-500' : 'bg-blue-200'}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

// Trusted By Carousel component
function TrustedByCarousel() {
  const logos = [
    {
      src: "/Double_Secret_Octopus.png",
      alt: "Double Secret Octopus"
    },
    {
      src: "/Morphisec.jfif.jpeg",
      alt: "Morphisec"
    },
    {
      src: "/Deleteme.png",
      alt: "DeleteMe"
    },
    {
      src: "/Zz1hODJkMjIxOGU1YTgxMWVjYWM2YzI2MjNiMTY1ZDY4Nw__.png.webp",
      alt: "Partner Logo"
    }
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % logos.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [logos.length]);
  return (
    <section className="w-full flex flex-col items-center justify-center py-12">
      <div className="card max-w-3xl w-full bg-white shadow-lg rounded-xl p-12 flex flex-col items-center justify-center">
        <h3 className="text-xl font-semibold mb-6 text-center text-blue-800">Trusted by</h3>
        <div className="relative flex items-center justify-center w-full max-w-xl mx-auto min-h-[100px]">
          {logos.map((logo, idx) => (
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              className={`absolute transition-all duration-700 ease-in-out mx-auto ${
                idx === current ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-90 z-0'
              } h-28 object-contain`}
              style={{ left: 0, right: 0 }}
            />
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {logos.map((_, idx) => (
            <button
              key={idx}
              className={`w-2.5 h-2.5 rounded-full ${idx === current ? 'bg-blue-500' : 'bg-blue-200'}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to logo ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Process Stepper component
function ProcessStepper({ steps }) {
  const defaultSteps = [
    {
      icon: "🔎",
      title: "Find Your Real Story",
      desc: "We focus on what only you can say—proprietary data, sharp insights, and real opinions."
    },
    {
      icon: "✂️",
      title: "Prune & Sharpen",
      desc: "Redirect effort into content that moves buyers, not just fills a calendar."
    },
    {
      icon: "🎯",
      title: "Own Your Problem",
      desc: "Make your main pain point the thread through all your assets."
    },
    {
      icon: "🛠️",
      title: "Build for Conversion",
      desc: "We find your best BOFU angles and create assets that actually convert."
    },
    {
      icon: "🌐",
      title: "Surface Your Brand",
      desc: "Campaigns always include links and mentions to boost your presence—across classic and AI search."
    },
    {
      icon: "🚀",
      title: "Grow Your Results",
      desc: "From GTM messaging to organic traffic, we help early-stage vendors punch above their weight."
    }
  ];
  const stepsToShow = steps && Array.isArray(steps) && steps.length > 0 ? steps : defaultSteps;
  return (
    <section className="w-full py-32 flex flex-col items-center">
      <div className="max-w-2xl w-full flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-center mb-20 text-blue-800">Our Process</h2>
        <div className="relative flex flex-col items-center w-full">
          {/* Vertical ladder line */}
          <div className="absolute left-1/2 top-8 bottom-8 w-1 -translate-x-1/2 bg-blue-200 z-0" />
          {stepsToShow.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px 0px' }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="relative flex flex-col items-center mb-24 last:mb-0 w-full z-10"
            >
              {/* Icon bubble overlaps ladder */}
              <div className="bg-blue-100 border-4 border-blue-400 rounded-full w-14 h-14 flex items-center justify-center text-3xl shadow-lg z-20 mb-6">
                {step.icon}
              </div>
              <div className="bg-white shadow-md rounded-xl p-10 flex flex-col items-center text-center w-full border border-blue-100 z-20">
                <div className="font-semibold text-blue-700 mb-1">{step.title}</div>
                <div className="text-gray-600 text-sm">{step.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
function PluginSupportSection({ points }) {
  return (
    <section className="w-full py-36 flex flex-col items-center">
      <div className="max-w-2xl w-full flex flex-col items-center justify-center p-2 mt-8">
        <h2 className="text-2xl font-bold text-blue-800 text-center">
          Plug-in content support for GTM, growth, and getting unstuck
        </h2>
        <div className="h-6"></div>
        <ul className="list-disc list-inside text-center text-lg text-gray-900 flex flex-col items-center gap-10 md:gap-5">
          {points.map((pt, idx) => (
            <li key={idx} className="max-w-xl">
              {pt}
            </li>
          ))}
        </ul>
        <div className="h-12 md:h-21"></div>
        <div className="mt-10 flex justify-center w-full">
          <a
            href="https://www.contentvisit.com"
            className="bg-blue-50 border border-blue-300 text-blue-800 font-semibold rounded-lg px-8 py-4 shadow transition hover:bg-blue-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more at Content Visit
          </a>
        </div>
      </div>
    </section>
  );
}
function FunnelSupportSection({ image, alt }) {
  return (
    <section className="w-full flex flex-col items-center py-24">
      <h2 className="text-2xl font-bold text-blue-800 text-center mb-24">
        Cybersecurity content writing and strategy support across the entire marketing funnel
      </h2>
      <div className="h-6"></div>
      <div className="max-w-3xl w-full flex flex-col items-center gap-8">
        <p className="text-center text-lg text-gray-900 mb-2">
          Whether you need thought leadership, demand gen, SEO, sales enablement, or post-sale content, Content Visit covers the entire cybersecurity buyer journey.
        </p>
        <div className="flex justify-center">
          <motion.img
            src={image}
            alt={alt}
            className="rounded-xl shadow-md max-h-[380px] w-auto border border-blue-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
}