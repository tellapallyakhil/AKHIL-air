"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Great_Vibes } from "next/font/google";

const scriptFont = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function LittleYou() {
  return (
    <main className="relative min-h-screen love-background px-5 py-8">
      {/* Floating hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="heart">
            ❤️
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-md mx-auto space-y-6">
        {/* Back */}
        <Link
          href="/chapters"
          className="text-[11px] text-pink-900/80 underline-offset-2 hover:underline"
        >
          ◀ back to chapters
        </Link>

        {/* Title */}
        <h1
          className={`${scriptFont.className} text-2xl text-center text-pink-900`}
        >
          Chapter 1 — Little You
        </h1>

        {/* Image frame */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-sm rounded-[28px] border-[4px] border-pink-300 bg-white/90 shadow-[0_22px_45px_rgba(190,24,93,0.45)] p-2"
        >
          <div className="relative rounded-[22px] overflow-hidden bg-pink-100">
            <Image
              src="/photos/her1.jpg"
              alt="Little you"
              width={340}
              height={440}
              sizes="(max-width: 768px) 90vw, 340px"
              quality={100}
              priority
              className="w-full h-auto object-contain max-h-[420px]"
            />
          </div>
        </motion.div>

        {/* Story text */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="rounded-3xl bg-white/85 backdrop-blur px-5 py-4 shadow-[0_20px_38px_rgba(148,27,89,0.4)] text-sm leading-relaxed text-pink-900 space-y-3"
        >
          <p>
            Look at you… this tiny, soft little version of you. The same eyes,
            the same little spark, the same quiet sweetness that now makes
            everything around you feel a little warmer, a little softer.
          </p>

          <p>
            It&apos;s crazy to think that this little you had no idea how beautiful
            she would grow to be — not just in the way you look, but in the way
            you care, the way you talk, the way you make people feel without
            even trying.
          </p>

          <p className="font-semibold">
            And this is just the first chapter.  
            If little you already feels this precious, imagine how the next
            chapters will feel when we walk through all the versions of you I’ve
            fallen for, one by one.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
