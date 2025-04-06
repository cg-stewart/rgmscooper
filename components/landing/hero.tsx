"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { MusicIcon, Download, Youtube } from "lucide-react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"></div>

      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-emerald-300 opacity-20 dark:bg-emerald-700 dark:opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-teal-300 opacity-20 dark:bg-teal-700 dark:opacity-10"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container relative px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
              Introducing RGMScooper
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
              <span className="text-emerald-600 dark:text-emerald-400">
                Convert
              </span>{" "}
              YouTube to WAV{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                Effortlessly
              </span>
            </h1>
            <p className="max-w-[600px] text-gray-600 md:text-xl font-semibold dark:text-gray-400">
              Download high-quality WAV files from YouTube videos for your music
              production. Fast, simple, and reliable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup" passHref>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white border-0 font-semibold"
                >
                  Get Started Free
                </Button>
              </Link>
              <Link href="/login" passHref>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-950 font-semibold"
                >
                  Log In
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto lg:mr-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative mx-auto w-full max-w-[500px] overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-gray-900">
              <div className="flex items-center gap-2 border-b px-4 py-3 dark:border-gray-800">
                <div className="flex gap-1">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center text-sm font-medium">
                  RGMScooper App
                </div>
              </div>
              <div className="aspect-[16/9] w-full bg-gray-100 dark:bg-gray-800">
                <video
                  ref={videoRef}
                  className="h-full w-full object-cover"
                  loop
                  muted
                  playsInline
                >
                  <source src="/placeholder.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-4 rounded-lg border p-4 dark:border-gray-800">
                  <Youtube className="h-8 w-8 text-red-500" />
                  <div className="flex-1">
                    <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <motion.div
                        className="h-full rounded-full bg-emerald-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 2, delay: 0.5 }}
                      />
                    </div>
                    <div className="mt-2 text-sm font-semibold">
                      Converting to WAV...
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -right-6 -top-6 rounded-xl bg-white p-3 shadow-lg dark:bg-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <MusicIcon className="h-6 w-6 text-emerald-500" />
            </motion.div>
            <motion.div
              className="absolute -left-6 bottom-1/3 rounded-xl bg-white p-3 shadow-lg dark:bg-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Download className="h-6 w-6 text-emerald-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
