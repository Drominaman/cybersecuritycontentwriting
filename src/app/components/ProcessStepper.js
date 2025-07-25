'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function ProcessStepper({ steps = [] }) {
  return (
    <section className="process-stepper w-full max-w-4xl mx-auto my-12 px-4 flex flex-col items-center">
      <h3 className="text-xl font-semibold mb-6 text-center text-blue-800">Our Process</h3>
      <div className="w-full flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="step bg-white shadow-md rounded-lg p-6 text-center flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="text-2xl font-bold text-blue-700 mb-2">{i + 1}</div>
            <div className="text-gray-700">{step}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}