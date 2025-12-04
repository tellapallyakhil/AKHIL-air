"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Great_Vibes } from "next/font/google";

const scriptFont = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Chapters() {
  // 👇 Slugs match your folder names exactly
  const chapters = [
    {
      slug: "little-you",
      title: "Once, There Was You",
      subtitle: "Where your very first magic quietly began.",
    },
    {
      slug: "smile",
      title: "The Smile That Found Me",
      subtitle: "The one smile that makes everything else fade away.",
    },
    {
      slug: "grace",
      title: "Growing Into Grace",
      subtitle: "Every year, a little gentler… and somehow even more beautiful.",
    },
    {
      slug: "my-today",
      title: "My Favorite Version of You",
      subtitle: "The you I get to love — right here, right now.",
    },
  ];

  return (
    <main className="relative min-h-screen love-background px-5 py-8">
      {/* floating hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="heart">
            ❤️
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-md mx-auto space-y-5">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-2xl text-pink-900"
        >
          Chapters of You 💗
        </motion.h1>

        {/* Love note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-3xl bg-white/85 px-4 py-3 shadow-[0_14px_32px_rgba(148,27,89,0.35)] backdrop-blur"
        >
          <p
            className={`${scriptFont.className} text-center text-[15px] leading-relaxed text-pink-900`}
          >
            Please read every chapter carefully… I put a lot of work, time, and{" "}
            <span className="font-semibold">so much love</span> into this, just
            for you. 💖
          </p>
        </motion.div>

        {/* Chapter cards */}
        <div className="space-y-5 pt-1">
          {chapters.map((ch, idx) => (
            <Link key={ch.slug} href={`/chapters/${ch.slug}`} className="no-underline">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.06 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-3xl bg-white/80 backdrop-blur px-4 py-4 shadow-[0_16px_40px_rgba(148,27,89,0.35)]"
              >
                <h2
                  className={`${scriptFont.className} text-[20px] text-rose-700 tracking-wide`}
                >
                  ✨ {ch.title}
                </h2>
                <p className="mt-1 text-sm text-rose-500">{ch.subtitle}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
