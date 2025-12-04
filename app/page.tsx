"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Great_Vibes } from "next/font/google";

const scriptFont = Great_Vibes({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden love-background px-4 py-8">
      {/* floating hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="heart">
            ❤️
          </div>
        ))}
      </div>

      {/* subtle glows */}
      <motion.div
        className="pointer-events-none absolute -top-24 -left-10 h-44 w-44 rounded-full bg-pink-300/40 blur-3xl"
        animate={{ y: [0, 16, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 9, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-32 right-0 h-56 w-56 rounded-full bg-rose-300/40 blur-3xl"
        animate={{ y: [0, -18, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 11, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="relative z-10 w-full max-w-sm">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-pink-800/80"
        >
          welcome to my heart
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto flex items-center justify-center"
        >
          <motion.div
            className="big-heart-wrapper"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="big-heart-shape" />
            <div className="big-heart-inner text-pink-50">
              <h1
                className={`${scriptFont.className} text-3xl leading-snug drop-shadow-[0_2px_6px_rgba(190,24,93,0.65)]`}
              >
                Welcome
                <br />
                to my heart
              </h1>

              <p
                className={`${scriptFont.className} mt-1 text-[15px] leading-relaxed text-pink-100 drop-shadow-[0_1px_4px_rgba(190,24,93,0.6)]`}
              >
                Are you excited to see
                <br />
                what&apos;s there in this heart?
              </p>

              <button
                className="button-tap mt-3 rounded-full bg-white/95 px-6 py-1.5 text-xs font-semibold text-pink-700 shadow-[0_12px_25px_rgba(190,24,93,0.65)]"
                onClick={() => router.push("/chapters")}
              >
                Yes 💗
              </button>
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-5 text-center text-[11px] text-pink-900/80"
        >
          (Tap “Yes” when you&apos;re ready to step inside.)
        </motion.p>
      </div>
    </main>
  );
}
