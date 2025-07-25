'use client';
import React, { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    { text: 'Working with Laura was great for us at Element Security. She knew how to address our needs and didn’t take much time until she could create the needed content.', author: 'Omer Cohen', role: 'Co-Founder and COO, Element Security' },
    { text: 'Laura is a talented and conscientious content creator. When I joined the Randori team as part of its acquisition by IBM, she was instrumental in helping me get up to speed on its SEO strategy and cybersecurity content program.', author: 'Tracy Sullivan', role: 'IBM X-Force Applied Research' },
    { text: 'Laura is an exceptional marketing and content strategist. I’ve had the opportunity to work with her to distill complex topics into digestible, awareness-level blogs and web pages.', author: 'Bruce Chen', role: 'Director of Product Marketing, Cyera' },
    { text: 'I have been an entrepreneur and venture investor for 20 years and have worked with hundreds of companies. The team at Content Visit can change content quality and bring any organization’s output up to a high bar.', author: 'Rob Shavell', role: 'Founder, DeleteMe' }
  ];

  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[idx];
  return (
    <section className="testimonial-section max-w-4xl mx-auto my-12 px-4">
      <h3 className="text-xl font-semibold mb-6 text-center text-blue-800">What our clients say</h3>
      <div className="testimonial-card bg-white shadow-md rounded-xl p-8 text-center min-h-[200px] flex flex-col justify-center">
        <p className="italic text-lg mb-4">&ldquo;{t.text}&rdquo;</p>
        <div className="font-semibold text-blue-700 mb-1">{t.author}</div>
        <div className="text-gray-500 text-sm">{t.role}</div>
      </div>
    </section>
  );
}