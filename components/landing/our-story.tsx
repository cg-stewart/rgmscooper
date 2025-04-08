"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OurStory() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container px-4 md:px-6">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 mb-4 font-semibold">
            Our Story
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            A Tool Built By Musicians, For Musicians
          </h2>
          <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg font-semibold">
            RGMScooper was born out of necessity. As rap and pop musicians, we
            needed a reliable way to download audio from YouTube for our own
            projects. We built this tool to solve our own problem, and now
            we&apos;re {/* Changed ' to &apos; */}
            sharing it with fellow creators.
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg font-semibold">
            No more dealing with low-quality MP3s or unreliable conversion
            services. RGMScooper gives you pristine WAV files every time, so you
            can focus on making great music.
          </p>
          <div className="mt-8">
            <Link href="/signup" passHref>
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 font-semibold"
              >
                Start Converting Now
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
