import Link from "next/link";
import { MusicIcon, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-8 md:py-12 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <Link href="/" className="flex items-center gap-2">
            <MusicIcon className="h-6 w-6 text-emerald-600" />
            <span className="text-lg font-bold">RGMScooper</span>
          </Link>
          <p className="text-gray-500 dark:text-gray-400 max-w-md font-semibold">
            Convert YouTube videos to high-quality WAV files for your music
            production needs.
          </p>

          <div className="flex flex-col items-center space-y-2 pt-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
              &copy; {new Date().getFullYear()} RGMScooper. All rights reserved.
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
              A{" "}
              <Link
                href="https://www.newrgm.com"
                className="text-emerald-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                NEWRGM INDUSTRIES
              </Link>{" "}
              product
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold flex items-center gap-1">
              Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" />{" "}
              & nicotine by{" "}
              <Link
                href="https://www.cgstewart.dev"
                className="text-emerald-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                CG Stewart
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
