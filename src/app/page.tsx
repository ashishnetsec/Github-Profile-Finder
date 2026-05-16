"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

export default function HomePage() {
  const [username, setUsername] = useState("");

  const router = useRouter();

  const handleSearch = () => {
    if (!username.trim()) return;

    router.push(`/user/${username}`);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030308] text-white flex items-center justify-center px-4 sm:px-6">

      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-37.5 -left-37.5 w-87.5 sm:w-125 h-87.5 sm:h-125 bg-purple-900/20 blur-3xl rounded-full" />

      <div className="absolute -bottom-50 -right-37.5 w-87.5 sm:w-125 h-87.5 sm:h-125 bg-fuchsia-800/10 blur-3xl rounded-full" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,60,255,0.08),transparent_40%)]" />

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-5xl w-full text-center">

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-900/40 bg-[#0d0717]/80 backdrop-blur-xl text-xs sm:text-sm text-purple-300 mb-6 sm:mb-8 shadow-lg">

          <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />

          Developer Intelligence Dashboard

        </div>

        {/* HEADING */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6 px-2">

          Explore GitHub

          <span className="block bg-linear-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">

            Like Never Before

          </span>

        </h1>

        {/* SUBTITLE */}
        <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12 px-4">

          Analyze developer profiles, repositories, activity,
          and coding insights through a modern midnight dashboard.

        </p>

        {/* SEARCH SECTION */}
        <div className="max-w-2xl mx-auto w-full">

          <div className="group flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-[#0b0613]/80 border border-purple-900/30 rounded-3xl p-3 backdrop-blur-2xl shadow-[0_0_50px_rgba(88,28,135,0.15)] hover:border-purple-700/40 transition-all duration-300">

            {/* INPUT */}
            <input
              type="text"
              placeholder="Enter GitHub username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="flex-1 bg-transparent outline-none px-4 py-3 text-base sm:text-lg text-white placeholder:text-zinc-500 min-w-0"
            />

            {/* BUTTON */}
            <button
              onClick={handleSearch}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-linear-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 transition-all duration-300 shadow-lg shadow-purple-900/40 font-medium whitespace-nowrap"
            >

              Search

              <FaArrowRight className="text-sm" />

            </button>

          </div>

          {/* HINT */}
          <p className="text-zinc-600 text-xs sm:text-sm mt-4 px-2">

            Try searching for: torvalds, gaearon, vercel...

          </p>

        </div>
      </div>
    </main>
  );
}