"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  MusicIcon,
  Youtube,
  Download,
  History,
  AudioWaveformIcon as Waveform,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8 w-full max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Welcome to RGMScooper! Convert YouTube videos to WAV files.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="overflow-hidden border-emerald-100 dark:border-emerald-900/50">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-bl-full opacity-50 dark:from-emerald-900/20 dark:to-teal-900/20"></div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Youtube className="h-5 w-5 text-red-500" />
              Convert YouTube to WAV
            </CardTitle>
            <CardDescription>
              Paste a YouTube URL below to convert it to a high-quality WAV file
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="youtube-url">YouTube URL</Label>
                <Input
                  id="youtube-url"
                  placeholder="https://www.youtube.com/watch?v=..."
                  type="url"
                  required
                  className="border-emerald-200 focus-visible:ring-emerald-500 dark:border-emerald-800"
                />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
              Convert to WAV
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="overflow-hidden border-emerald-100 dark:border-emerald-900/50">
            <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-br-full opacity-50 dark:from-emerald-900/20 dark:to-teal-900/20"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Recent Conversions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                12
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +2 from last week
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/dashboard/my-scoops" passHref>
                <Button
                  variant="ghost"
                  className="w-full text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-900/20"
                >
                  <History className="mr-2 h-4 w-4" />
                  View History
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="overflow-hidden border-emerald-100 dark:border-emerald-900/50">
            <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-br-full opacity-50 dark:from-emerald-900/20 dark:to-teal-900/20"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Available Storage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                80%
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800">
                <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="ghost"
                className="w-full text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-900/20"
              >
                <Download className="mr-2 h-4 w-4" />
                Manage Files
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="overflow-hidden border-emerald-100 dark:border-emerald-900/50">
            <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-br-full opacity-50 dark:from-emerald-900/20 dark:to-teal-900/20"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start border-emerald-200 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 dark:border-emerald-800 dark:text-emerald-400 dark:hover:bg-emerald-900/20"
              >
                <MusicIcon className="mr-2 h-4 w-4" />
                Browse Library
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start border-emerald-200 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 dark:border-emerald-800 dark:text-emerald-400 dark:hover:bg-emerald-900/20"
              >
                <Waveform className="mr-2 h-4 w-4" />
                Audio Editor
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
