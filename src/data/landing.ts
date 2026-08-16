import {
  MessageCircle,
  Play,
  Headphones,
  Images,
  NotebookPen,
  Video,
} from "lucide-react";

export const APK_URL =
  "https://apkpure.net/soulsync/com.soulsync/download";

export const features = [
  {
    icon: MessageCircle,
    title: "Private Chat",
    text: "A room only the two of you can enter. Instant delivery, read ticks, and reactions that feel alive.",
  },
  {
    icon: Play,
    title: "Watch Together",
    text: "Perfectly synced YouTube playback with both faces on screen. Pause is a shared moment now.",
  },
  {
    icon: Headphones,
    title: "Listen Together",
    text: "One playlist, two hearts, zero lag. Every beat lands at the exact same second.",
  },
  {
    icon: Video,
    title: "Video & Audio Calls",
    text: "Crystal calls with a minimizer, so you can keep talking while you browse memories.",
  },
  {
    icon: Images,
    title: "Memories",
    text: "Photos, videos and voice notes collected into a private timeline of your story.",
  },
  {
    icon: NotebookPen,
    title: "Love Notes & Mood",
    text: "Leave a note for later, track moods, and keep the streak of showing up for each other.",
  },
];

export const stats = [
  { value: "10.0", label: "User rating" },
  { value: "3.1", label: "Latest version" },
  { value: "121 MB", label: "Download size" },
  { value: "7.0+", label: "Android OS" },
];

export const faqs = [
  {
    q: "Is SoulSync free?",
    a: "Yes. Every core feature — chat, calls, watch together and memories — is free to use.",
  },
  {
    q: "How do we connect as a couple?",
    a: "One partner creates a couple code, the other joins with it. Your space stays private to that pair.",
  },
  {
    q: "Does watch together really stay in sync?",
    a: "Playback state is shared in real time, so pause, seek and resume happen on both phones at once.",
  },
  {
    q: "Which devices are supported?",
    a: "Any Android phone running 7.0 or newer. The APK is 121 MB and updated regularly.",
  },
];
