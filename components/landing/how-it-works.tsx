"use client";

import { motion } from "motion/react";
import { MusicIcon, Youtube, Download } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-semibold">
            Converting YouTube videos to WAV files has never been easier. Just
            three simple steps.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Paste YouTube URL",
              description:
                "Simply copy and paste the YouTube video URL you want to convert.",
              icon: Youtube,
              delay: 0.2,
            },
            {
              title: "Convert to WAV",
              description:
                "Our system automatically converts the video to a high-quality WAV file.",
              icon: MusicIcon,
              delay: 0.4,
            },
            {
              title: "Download & Share",
              description:
                "Download your WAV file or share it with collaborators via a secure link.",
              icon: Download,
              delay: 0.6,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-md dark:bg-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
            >
              <div className="mb-4 rounded-full bg-emerald-100 p-3 dark:bg-emerald-900/30">
                <item.icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400 font-semibold">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
