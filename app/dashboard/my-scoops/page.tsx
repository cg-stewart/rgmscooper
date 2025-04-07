"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  MoreVertical,
  Share2,
  Trash2,
  RefreshCw,
} from "lucide-react";

// Sample data based on the provided JSON structure
const initialScoops = [
  {
    requestId: "a1b2c3d4-e5f6-7890-1234-abcdef123456",
    status: "COMPLETED",
    videoTitle: "Awesome Beat Instrumental (Prod. By Metro)",
    youtubeUrl: "https://www.youtube.com/watch?v=your_video_id_1",
    createdAt: "2023-10-27T10:00:00.000Z",
    updatedAt: "2023-10-27T10:05:30.123Z",
    errorMessage: null,
  },
  {
    requestId: "b2c3d4e5-f6a7-8901-2345-bcdefa123457",
    status: "PROCESSING",
    videoTitle: "Another Lo-fi Track",
    youtubeUrl: "https://www.youtube.com/watch?v=your_video_id_2",
    createdAt: "2023-10-27T11:00:00.000Z",
    updatedAt: "2023-10-27T11:01:15.456Z",
    errorMessage: null,
  },
  {
    requestId: "c3d4e5f6-a7b8-9012-3456-cdefab123458",
    status: "FAILED",
    videoTitle: "Video That Failed",
    youtubeUrl: "https://www.youtube.com/watch?v=your_video_id_3",
    createdAt: "2023-10-27T12:00:00.000Z",
    updatedAt: "2023-10-27T12:01:00.000Z",
    errorMessage: "FFmpeg conversion failed: Invalid data found...",
  },
  {
    requestId: "d4e5f6a7-b8c9-0123-4567-defabc123459",
    status: "QUEUED",
    videoTitle: "Waiting in Queue",
    youtubeUrl: "https://www.youtube.com/watch?v=your_video_id_4",
    createdAt: "2023-10-27T13:00:00.000Z",
    updatedAt: "2023-10-27T13:00:00.000Z",
    errorMessage: null,
  },
  {
    requestId: "e5f6a7b8-c9d0-1234-5678-efabcd12345a",
    status: "COMPLETED",
    videoTitle: "Chill Beats to Study To",
    youtubeUrl: "https://www.youtube.com/watch?v=your_video_id_5",
    createdAt: "2023-10-26T10:00:00.000Z",
    updatedAt: "2023-10-26T10:07:45.789Z",
    errorMessage: null,
  },
];

export default function MyScoopsPage() {
  const [scoops, setScoops] = useState(initialScoops);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter scoops based on search term
  const filteredScoops = scoops.filter((scoop) =>
    scoop.videoTitle.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Get status badge color
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return (
          <Badge className="bg-emerald-500 hover:bg-emerald-600">
            Completed
          </Badge>
        );
      case "PROCESSING":
        return (
          <Badge className="bg-blue-500 hover:bg-blue-600">Processing</Badge>
        );
      case "QUEUED":
        return (
          <Badge className="bg-yellow-500 hover:bg-yellow-600">Queued</Badge>
        );
      case "FAILED":
        return <Badge className="bg-red-500 hover:bg-red-600">Failed</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold tracking-tight">My Scoops</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Manage your converted YouTube videos
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="w-full sm:w-auto">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <Input
            id="search"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-[300px] border-emerald-200 focus-visible:ring-emerald-500 dark:border-emerald-800"
          />
        </div>
        <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 w-full sm:w-auto">
          New Conversion
        </Button>
      </motion.div>

      <motion.div
        className="rounded-md border border-emerald-100 dark:border-emerald-900/50 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Table>
          <TableHeader>
            <TableRow className="bg-emerald-50 dark:bg-emerald-900/20">
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Created</TableHead>
              <TableHead className="hidden lg:table-cell">Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredScoops.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center py-8 text-gray-500"
                >
                  No scoops found. Try a different search or convert a new
                  YouTube video.
                </TableCell>
              </TableRow>
            ) : (
              filteredScoops.map((scoop) => (
                <TableRow
                  key={scoop.requestId}
                  className="hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10"
                >
                  <TableCell className="font-medium">
                    <div>
                      <div className="truncate max-w-[200px] sm:max-w-[300px] md:max-w-none">
                        {scoop.videoTitle}
                      </div>
                      <div className="text-xs text-gray-500 truncate max-w-[200px] sm:max-w-[300px] md:max-w-none">
                        {scoop.youtubeUrl}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(scoop.status)}
                    {scoop.errorMessage && (
                      <div
                        className="text-xs text-red-500 mt-1 max-w-[150px] truncate"
                        title={scoop.errorMessage}
                      >
                        {scoop.errorMessage}
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {formatDate(scoop.createdAt)}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    {formatDate(scoop.updatedAt)}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          disabled={scoop.status !== "COMPLETED"}
                          className="flex items-center cursor-pointer"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          disabled={scoop.status !== "COMPLETED"}
                          className="flex items-center cursor-pointer"
                        >
                          <Share2 className="mr-2 h-4 w-4" />
                          Share
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          disabled={scoop.status === "PROCESSING"}
                          className="flex items-center cursor-pointer"
                        >
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Retry
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="flex items-center text-red-600 cursor-pointer">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </motion.div>

      <div className="flex justify-center">
        <Button
          variant="outline"
          className="border-emerald-200 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 dark:border-emerald-800 dark:text-emerald-400 dark:hover:bg-emerald-900/20"
        >
          Load More
        </Button>
      </div>
    </div>
  );
}
