"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Great_Vibes } from "next/font/google";

const scriptFont = Great_Vibes({ subsets: ["latin"], weight: "400" });

/* 🔴 TWILIO DETAILS – YOU ARE RESPONSIBLE */
const TWILIO_ACCOUNT_SID = "AC600b4b37bcf3f7bf9fa1697ed422bfea";
const TWILIO_AUTH_TOKEN = "e42399497e61b0bb09cf85e3e74db91f";
const TWILIO_FROM_NUMBER = "+18483472601";
const ALERT_PHONE_NUMBER = "+918639284518";

export default function Forever() {
  const [saidYes, setSaidYes] = useState(false);
  const [noOffset, setNoOffset] = useState({ x: 0, y: 0 });

  const dodgeNo = () => {
    const x = Math.random() * 120 - 60;
    const y = Math.random() * 40 - 20;
    setNoOffset({ x, y });
  };

  const sendSMS = async () => {
    const body = new URLSearchParams({
      To: ALERT_PHONE_NUMBER,
      From: TWILIO_FROM_NUMBER,
      Body:
        "💖 SHE SAID YES 💖\n\nYour forever just clicked YES.\nGo love her.",
    });

    await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`,
      {
        method: "POST",
        headers: {
          Authorization:
            "Basic " +
            btoa(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      }
    );
  };

  return (
    <main className="relative min-h-screen love-background px-5 py-8">
      <div className="relative z-10 max-w-md mx-auto space-y-6">
        <Link
          href="/chapters"
          className="text-[11px] text-pink-900 underline"
        >
          ◀ back to chapters
        </Link>

        <h1 className={`${scriptFont.className} text-2xl text-center`}>
          Final chapter — Forever?
        </h1>

        <motion.div className="rounded-3xl bg-white/90 px-5 py-6 shadow-xl">
          <p className={`${scriptFont.className} text-xl text-center`}>
            Will you be my forever?
          </p>

          <p className="mt-3 text-center text-sm">
            Think carefully before you answer… 🥺
          </p>

          <div className="mt-6 flex justify-center gap-4">
            {/* YES */}
            <button
              onClick={async () => {
                setSaidYes(true);
                await sendSMS();
              }}
              className="rounded-full bg-pink-600 px-8 py-2 text-white font-semibold"
            >
              Yes, forever 💗
            </button>

            {/* NO (runs away) */}
            <button
              className="rounded-full bg-white px-6 py-1.5 text-sm"
              style={{
                transform: `translate(${noOffset.x}px, ${noOffset.y}px)`,
              }}
              onMouseEnter={dodgeNo}
              onMouseDown={dodgeNo}
              onTouchStart={(e) => {
                e.preventDefault();
                dodgeNo();
              }}
            >
              No 😈
            </button>
          </div>
        </motion.div>

        {saidYes && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl bg-pink-100 px-5 py-4 text-sm leading-relaxed space-y-2"
          >
            <p>
              You said <b>Yes</b>. I&apos;m saving that answer in my heart
              forever.
            </p>

            <p>
              Mardhala, you know I&apos;m a boring guy… if I&apos;ve ever done
              anything wrong or annoyed you, I&apos;m really sorry for that.
            </p>

            <p>
              This boring guy actually cares a lot about you. I&apos;m not a
              book worm — I&apos;m just completely addicted to my girl.
            </p>

            <p>
              I promise I&apos;ll be loyal to you, to us, and to this feeling
              for as long as you&apos;ll let me. I want to be there in your good
              days, bad days, lazy days, overthinking days… all of it.
            </p>

            <p>
              One more thing: when can we meet? I want to see this “yes” not
              just on the screen, but in your eyes too.
            </p>

            <p
              className={`${scriptFont.className} mt-3 text-center text-[18px] text-pink-700 font-semibold`}
            >
              Mardhala, can we be together forever?  
              I really, really love you. 💗
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
}
