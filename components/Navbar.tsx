"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false); // ✅ moved inside

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b transition ${
        scrolled
          ? "bg-white shadow-md border-transparent"
          : "bg-white border-[#EAEAEA]"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <a href="https://www.flyweel.media/" className="flex items-center">
          <Image
            src="/assets/company/logo.svg"
            alt="Flywheel"
            width={240}
            height={80}
            priority
          />
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-[#2E2E2E]">
          <a href="#steps" className="hover:opacity-70 transition">Company</a>
          <a href="#features" className="hover:opacity-70 transition">Services</a>
          <a href="#case-studies" className="hover:opacity-70 transition">Success Stories</a>
          <a
            href="https://hackgrowth.beehiiv.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
          >
            Newsletter
          </a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#book-call"
            className="inline-block bg-[#FF6A2A] text-white px-10 py-4 rounded-xl font-semibold shadow-[6px_6px_0px_#000] hover:-translate-y-1 transition"
          >
            Free Marketing Audit
          </a>
        </div>

      </div>
    </nav>
  );
}