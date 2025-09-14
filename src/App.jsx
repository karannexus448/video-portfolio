import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Mail, Instagram, Linkedin } from "lucide-react";

// Portfolio landing — single-file React component using Tailwind + Framer Motion
// Replace sampleVideos array with your own video files and thumbnails.

const sampleVideos = [
  {
    id: 1,
    title: "Cinematic Promo — Product Edit",
    thumb: "/images/thumb1.jpg", // replace with your thumbnail path
    src: "/videos/video1.mp4", // replace with your video path
    duration: "0:45",
    tags: ["Cinematic", "Promo"],
  },
  {
    id: 2,
    title: "Social Short — High Energy",
    thumb: "/images/thumb2.jpg",
    src: "/videos/video2.mp4",
    duration: "0:12",
    tags: ["Short", "Reels"],
  },
  {
    id: 3,
    title: "Story-driven Short",
    thumb: "/images/thumb3.jpg",
    src: "/videos/video3.mp4",
    duration: "1:08",
    tags: ["Story", "Drama"],
  },
  {
    id: 4,
    title: "Before / After Color Grade",
    thumb: "/images/thumb4.jpg",
    src: "/videos/video4.mp4",
    duration: "0:40",
    tags: ["Color", "Grading"],
  },
];

export default function PortfolioLanding() {
  const [active, setActive] = useState(null);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-black text-slate-100">
      {/* Nav */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-xl font-semibold">
            KB
          </div>
          <div>
            <h1 className="text-lg font-medium">Karan Bist — Video Editor</h1>
            <p className="text-xs text-slate-400">
              Short films, ads, social edits
            </p>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#work" className="text-sm hover:underline">
            Work
          </a>
          <a href="#about" className="text-sm hover:underline">
            About
          </a>
          <a
            href="#contact"
            className="text-sm px-4 py-2 bg-white/5 rounded-lg flex items-center gap-2"
          >
            <Mail size={14} /> Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h2
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Professional, modern video edits that sell stories — and clicks.
          </motion.h2>

          <motion.p
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-slate-300 max-w-xl"
          >
            I make fast-paced social shorts, cinematic promos and polished
            long-form edits — optimized for reels, ads and brand launches.
          </motion.p>

          <motion.div
            className="mt-6 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            <a
              href="#work"
              className="inline-flex items-center gap-3 bg-white/10 border border-white/8 px-5 py-3 rounded-xl hover:bg-white/6"
            >
              <Play size={16} /> View Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-pink-500 px-5 py-3 rounded-xl shadow-lg"
            >
              Hire me
            </a>
          </motion.div>

          <div className="mt-8 flex gap-4 items-center text-slate-400">
            <span className="text-xs">Featured on</span>
            <div className="flex gap-3">
              <div className="px-3 py-1 bg-white/3 rounded">BrandX</div>
              <div className="px-3 py-1 bg-white/3 rounded">Startup Y</div>
              <div className="px-3 py-1 bg-white/3 rounded">Agency Z</div>
            </div>
          </div>
        </div>

        {/* Hero visual: animated video collage */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-3">
            {sampleVideos.slice(0, 4).map((v, i) => (
              <motion.div
                key={v.id}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl overflow-hidden relative cursor-pointer"
                onClick={() => {
                  setActive(v);
                  setPlaying(true);
                }}
              >
                <img
                  alt={v.title}
                  src={v.thumb}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute left-3 top-3 bg-black/40 backdrop-blur-sm px-2 py-1 rounded text-xs">
                  {v.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Play size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="absolute -right-6 -bottom-6 w-36 h-36 rounded-2xl bg-white/3 blur-sm" />
        </div>
      </section>

      {/* Work grid */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-semibold">Selected edits</h3>
        <p className="text-slate-400 mt-2">
          A tight selection — click to preview. Replace thumbnails and video
          links with your finished exports.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sampleVideos.map((v) => (
            <motion.div
              key={v.id}
              whileHover={{ y: -6 }}
              className="bg-white/3 rounded-2xl overflow-hidden shadow-sm"
            >
              <div
                className="relative cursor-pointer"
                onClick={() => {
                  setActive(v);
                  setPlaying(true);
                }}
              >
                <img
                  src={v.thumb}
                  alt={v.title}
                  className="w-full h-44 object-cover"
                />
                <div className="absolute left-3 top-3 bg-black/40 px-2 py-1 rounded text-xs">
                  {v.tags.join(" • ")}
                </div>
                <div className="absolute right-3 bottom-3 bg-black/50 px-2 py-1 rounded text-xs">
                  {v.duration}
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-medium">{v.title}</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Quick description — pace, mood and any client note.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About / CTA */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white/3 rounded-2xl p-6 md:p-10 grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold">
              I'm Karan — I edit for impact
            </h3>
            <p className="mt-3 text-slate-300">
              I focus on attention-grabbing openings, strong pacing and clean
              sound design. I work with brands, creators and agencies to turn
              raw footage into polished content that performs.
            </p>

            <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-slate-300">
              <li>• Fast turnaround for socials</li>
              <li>• Color grading & LUTs</li>
              <li>• Ad-ready exports (16:9 / 9:16 / 1:1)</li>
              <li>• Subtitles and localized versions</li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-4">
            <div className="w-36 h-36 rounded-xl bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-xl font-bold">
              K B
            </div>
            <div className="text-sm text-slate-300">
              Available for freelance and long-term projects.
            </div>
            <a href="#contact" className="mt-2 px-4 py-2 bg-white/6 rounded-lg">
              Let's talk
            </a>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white/4 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-semibold">Work together</h4>
            <p className="text-slate-300 text-sm mt-1">
              Email me for rates, availability and briefs.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:karan@example.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/6 rounded"
            >
              {" "}
              <Mail size={14} /> karan@example.com
            </a>
            <div className="flex gap-2 text-slate-300">
              <a href="#" aria-label="instagram">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="linkedin">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-slate-500 text-sm mt-6">
          © {new Date().getFullYear()} Karan Bist — All rights reserved
        </div>
      </footer>

      {/* Video modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => {
            setActive(null);
            setPlaying(false);
          }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-3xl bg-black rounded-2xl overflow-hidden"
          >
            <div className="relative">
              <video
                controls
                autoPlay={playing}
                src={active.src}
                className="w-full h-[60vh] object-contain bg-black"
              />
              <button
                className="absolute right-3 top-3 bg-white/6 rounded px-3 py-1 text-sm"
                onClick={() => {
                  setActive(null);
                  setPlaying(false);
                }}
              >
                Close
              </button>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-lg">{active.title}</h4>
              <p className="text-sm text-slate-300 mt-2">
                Tags: {active.tags.join(", ")}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
