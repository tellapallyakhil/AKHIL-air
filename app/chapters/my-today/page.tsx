"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Great_Vibes } from "next/font/google";

const scriptFont = Great_Vibes({ subsets: ["latin"], weight: "400" });

export default function MyToday() {
  return (
    <main className="relative min-h-screen love-background px-5 py-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="heart">
            ❤️
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-md mx-auto space-y-5">
        <Link
          href="/chapters"
          className="text-[11px] text-pink-900/80 underline-offset-2 hover:underline"
        >
          ◀ back to chapters
        </Link>

        <h1
          className={`${scriptFont.className} text-2xl text-center text-pink-900`}
        >
          Chapter 4 — Right Now
        </h1>

        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-xs rounded-[30px] border-[4px] border-fuchsia-300 bg-white/95 shadow-[0_24px_50px_rgba(162,28,175,0.45)] p-2"
        >
          <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden">
            <Image
              src="/photos/her4.jpg"
              alt="You today"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="rounded-3xl bg-white/85 backdrop-blur p-4 shadow-[0_20px_40px_rgba(162,28,175,0.45)] text-sm leading-relaxed text-pink-900 space-y-3"
        >
          <p>
            And then there&apos;s you now. The you I actually get to talk to,
            laugh with, annoy, care about, and fall for again and again.
          </p>

          <p>
            <span className="font-semibold">
              All the versions of you brought you here,
            </span>{" "}
            to this exact person in this exact moment — and somehow I&apos;m the
            one who gets to see you like this.
          </p>

          <p>
            If your childhood was cute and your smile is dangerous,{" "}
            <strong>this version of you is my favorite one so far.</strong> And
            I can&apos;t wait to see all the future versions of you I&apos;ll
            get to love.
          </p>

          <div className="pt-3 flex justify-center">
            <Link href="/forever">
              <button className="button-tap rounded-full bg-pink-600 px-8 py-2 text-sm font-semibold text-pink-50 shadow-[0_14px_30px_rgba(190,24,93,0.7)]">
                Go to the final question 💌
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
