"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Great_Vibes } from "next/font/google";

const scriptFont = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Smile() {
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
          The Smile That Found Me
        </h1>

        {/* Photo frame */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-sm rounded-[28px] border-[4px] border-rose-300 bg-white/95 shadow-[0_24px_50px_rgba(190,24,93,0.55)] p-2"
        >
          <div className="relative rounded-[22px] overflow-hidden bg-pink-100">
            <Image
              src="/photos/her2.jpg"
              alt="Your smile"
              width={340}
              height={440}
              sizes="(max-width: 768px) 90vw, 340px"
              quality={100}
              className="w-full h-auto object-contain max-h-[420px]"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="rounded-3xl bg-white/85 backdrop-blur px-5 py-4 shadow-[0_20px_38px_rgba(148,27,89,0.4)] text-sm leading-relaxed text-pink-900 space-y-3"
        >
          <p>
            There&apos;s a lot of smiles in the world… but this one feels like it
            was designed just to ruin my self-control in the cutest way
            possible.
          </p>

          <p>
            The way your eyes curve, the way your cheeks lift, the way your whole
            face lights up –{" "}
            <span className="font-semibold">
              you don&apos;t just smile, you glow,
            </span>{" "}
            and everything around you becomes a little softer, a little better.
          </p>

          <p>
            Every time I see this photo, I&apos;m reminded how lucky I am that
            out of everyone, <em>this</em> is the smile I get to wait for and
            think about. And honestly, there is nothing wrong with falling for
            you… again and again.
          </p>
        </motion.div>
      </div>

      {/* Bottom animated heart */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-2xl opacity-80"
        >
          ❤️
        </motion.div>
      </div>
    </main>
  );
}
