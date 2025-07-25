'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TrustedByCarousel() {
  const logos = [
    { src: '/Double_Secret_Octopus.png', alt: 'Double Secret Octopus' },
    { src: '/Morphisec.jfif.jpeg',     alt: 'Morphisec'              },
    { src: '/Deleteme.png',            alt: 'DeleteMe'               },
    { src: '/Zz1hODJkMjIxOGU1YTgxMWVjYWM2YzI2MjNiMTY1ZDY4Nw__.png.webp', alt: 'Partner Logo' }
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % logos.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center py-12">
      <div className="card max-w-3xl w-full bg-white shadow-lg rounded-xl p-12 flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-6 text-center text-blue-800">Trusted by</h3>
        <div className="relative flex items-center justify-center w-full max-w-xl mx-auto min-h-[100px]">
          {logos.map((logo, i) => (
            <motion.img
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: i === idx ? 1 : 0, scale: i === idx ? 1 : 0.9 }}
              transition={{ duration: 0.7 }}
              className="absolute h-28 object-contain"
              style={{ left: 0, right: 0 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}