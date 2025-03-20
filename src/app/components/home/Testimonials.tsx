"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    company: "PerfectServe",
    logo: "https://via.placeholder.com/40",
    quote:
      "If we didn’t have Upwork... the quality of talent wouldn’t be as easy to measure, and we wouldn’t have the incredible support we get from the Upwork team.",
    author: "Jessica Khawaja, VP of People Operations",
    results: [
      { title: "11 days", desc: "to post a job, hire, classify, and onboard selected talent" },
      { title: "Nearly Doubled", desc: "the support hours for a project" },
    ],
    bgColor: "bg-green-700",
  },
  {
    company: "Microsoft",
    logo: "https://via.placeholder.com/40",
    quote:
      "One of the advantages of utilizing freelancers is finding talent with different skills quickly as our needs change.",
    author: "Carol Taylor, Director of Content Experience",
    results: [
      { title: "50% Faster", desc: "launch of projects" },
      { title: "10,000", desc: "projects completed" },
    ],
    bgColor: "bg-orange-700",
  },
  {
    company: "Google",
    logo: "https://via.placeholder.com/40",
    quote:
      "We’ve found incredible developers and designers through Upwork that have transformed our business.",
    author: "Alex Smith, Head of Product",
    results: [
      { title: "3x Growth", desc: "in project completion rate" },
      { title: "25%", desc: "increase in efficiency" },
    ],
    bgColor: "bg-blue-700",
  },
];

export default function FeaturedReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 3 saniyede bir otomatik geçiş
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
        Trusted by leading brands and startups
      </h2>

      <div className="relative flex items-center justify-center">
        {/* Kartlar */}
        <div className="overflow-hidden relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col gap-y-2 p-6 rounded-lg text-white ${reviews[currentIndex].bgColor} w-full h-[420px]`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={reviews[currentIndex].logo}
                  alt={reviews[currentIndex].company}
                  className="h-8 w-8 mr-2"
                />
                <span className="text-lg font-semibold">{reviews[currentIndex].company}</span>
              </div>
              <p className="text-lg font-semibold italic mb-4">"{reviews[currentIndex].quote}"</p>
              <p className="text-sm">{reviews[currentIndex].author}</p>
              <hr className="my-4 opacity-50" />
              {reviews[currentIndex].results.map((result, index) => (
                <div key={index} className="mb-2">
                  <p className="text-lg font-bold">{result.title}</p>
                  <p className="text-sm">{result.desc}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Pagination Bullet Points */}
      <div className="flex justify-center mt-4">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`mx-1 h-3 w-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-green-700 w-6" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}