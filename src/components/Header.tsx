"use client";

import Link from "next/link";
import {
    FaGithub,
    FaLinkedin,
    FaMoon,
    FaGlobe,
    FaBars,
} from "react-icons/fa";

import { VscGithub } from "react-icons/vsc";

import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-purple-950/40 bg-[#05010d]/95 backdrop-blur-xl overflow-hidden">

            {/* Ambient Glow */}
            <div className="absolute -top-25 left-1/3 w-80 h-80 bg-purple-900/10 blur-3xl rounded-full pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-4">

                {/* TOP BAR */}
                <div className="flex items-center justify-between">

                    <Link href="/">
                        {/* LEFT */}
                        <div className="flex items-center gap-3">

                            {/* Logo */}
                            <div className="w-11 h-11 rounded-2xl bg-[#12071f] border border-purple-800/30 flex items-center justify-center shadow-[0_0_25px_rgba(88,28,135,0.25)]">

                                <VscGithub className="text-purple-300 text-2xl" />

                            </div>

                            {/* Branding */}
                            <div>
                                <h1 className="text-zinc-100 text-lg sm:text-xl font-semibold tracking-wide">
                                    GitHub Portfolio
                                </h1>

                                <p className="text-zinc-500 text-[10px] sm:text-xs tracking-[0.2em] uppercase">
                                    Dashboard
                                </p>
                            </div>
                        </div>
                    </Link>



                    {/* DESKTOP ACTIONS */}
                    <div className="hidden md:flex items-center gap-3">

                        <ActionButton
                            href="https://github.com/ashishnetsec"
                            icon={<FaGithub />}
                        />

                        <ActionButton
                            href="https://linkedin.com"
                            icon={<FaLinkedin />}
                        />

                        <ActionButton
                            href="#"
                            icon={<FaGlobe />}
                        />

                        <button className="w-11 h-11 cursor-pointer rounded-2xl border border-purple-900/20 bg-[#0f0718] hover:bg-[#161022] transition-all duration-300 flex items-center justify-center text-zinc-400 hover:text-yellow-200 hover:border-purple-700/40">

                            <FaMoon className="text-sm" />

                        </button>

                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden w-10 h-10 rounded-xl border border-purple-900/20 bg-[#0f0718] flex items-center justify-center text-zinc-300"
                    >

                        <FaBars />

                    </button>

                </div>

                {/* MOBILE MENU */}
                {menuOpen && (
                    <div className="md:hidden mt-4 flex items-center gap-3 border-t border-purple-950/30 pt-4">

                        <ActionButton
                            href="https://github.com/ashishnetsec"
                            icon={<FaGithub />}
                        />

                        <ActionButton
                            href="https://linkedin.com"
                            icon={<FaLinkedin />}
                        />

                        <ActionButton
                            href="#"
                            icon={<FaGlobe />}
                        />

                        <button className="w-11 h-11 rounded-2xl border border-purple-900/20 bg-[#0f0718] flex items-center justify-center text-zinc-400">

                            <FaMoon className="text-sm" />

                        </button>

                    </div>
                )}

            </div>
        </header>
    );
}

/* ACTION BUTTON */
function ActionButton({
    href,
    icon,
}: {
    href: string;
    icon: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            target="_blank"
            className="w-11 h-11 rounded-2xl border border-purple-900/20 bg-[#0f0718] hover:bg-[#161022] transition-all duration-300 flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-700/40"
        >
            {icon}
        </Link>
    );
}