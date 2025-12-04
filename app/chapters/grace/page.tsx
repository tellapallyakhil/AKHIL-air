"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Great_Vibes } from "next/font/google";

const scriptFont = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Grace() {
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
          Growing Into Grace
        </h1>

        {/* Photo frame */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-sm rounded-[28px] border-[4px] border-pink-300 bg-white/95 shadow-[0_24px_50px_rgba(190,24,93,0.55)] p-2"
        >
          <div className="relative rounded-[22px] overflow-hidden bg-pink-50">
            <Image
              src="/photos/her3.jpg"
              alt="You growing softer and prettier"
              width={360}
              height={480}
              sizes="(max-width: 768px) 90vw, 360px"
              quality={100}
              className="w-full h-auto object-contain"
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
            Somewhere between the little you and the you I know now, you turned
            into this – still cute, but now also elegant, calm, and so
            unbelievably beautiful.
          </p>

          <p>
            <span className="font-semibold">
              Every year added something to you,
            </span>{" "}
            not just on the outside, but in your heart too – more kindness, more
            softness, more strength. You didn&apos;t just grow up, you{" "}
            <em>grew into grace</em>.
          </p>

          <p>
            When I look at this picture, I feel proud of you in a way that&apos;s
            hard to explain. It makes me want to be there for all the future
            versions of you you&apos;re still becoming.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
