"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#F4F4F4] pt-24 pb-12">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-16">

          {/* Left – Eco Badge */}
          <div>
            <div className="mb-6">
              <Image
                src="/assets/company/logo.svg"
                alt="Flywheel Media Chennai logo"
                width={150}
                height={150}
              />
            </div>

            <p className="text-sm text-[#4A4A4A] leading-relaxed max-w-[260px]">
              Get more starts, drive more qualified people down the design stage, and make more revenue without having to worry about where the next lead is coming from.
            </p>
          </div>

          {/* Middle – Company Links */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-[#2E2E2E] mb-6">
              COMPANY
            </p>

            <div className="grid grid-cols-2 gap-y-4 text-[#4A4A4A]">
              <a href="steps" className="hover:text-black transition">Company</a>
              <a href="features" className="hover:text-black transition">Services</a>

              <a href="case-studies" className="hover:text-black transition">
                Success Stories
              </a>
              <a href="https://hackgrowth.beehiiv.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition">Newsletter ↗</a>

              <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
                Privacy Policy ↗
              </a>
              <a href="/terms" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
                Terms of Service ↗
              </a>
            </div>
          </div>

          {/* Right – Contact */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-[#2E2E2E] mb-6">
              CONTACT
            </p>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-lg">✉️</span>
              <span className="text-[#2E2E2E]">
                cusstard.marketing@gmail.com
              </span>
            </div>

            <p className="text-sm text-[#4A4A4A] leading-relaxed max-w-[260px]">
              Built with ❤️ from India, for the World.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-[#DDDDDD]" />

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left */}
          <div className="flex items-center gap-4">
            <p className="text-sm text-[#4A4A4A]">
              © 2026 Cusstard Marketing Private Limited. All rights reserved.
            </p>
          </div>

          {/* Right Buttons
          <div className="flex items-center gap-4">

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2.5 rounded-xl border-2 border-black font-semibold shadow-[4px_4px_0px_#000]"
            >
              Login
            </motion.button>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2.5 rounded-xl bg-[#FF6A2A] text-white font-semibold shadow-[4px_4px_0px_#000]"
            >
              Try it for free
            </motion.button>

          </div> */}

        </div>

      </div>
    </footer>
  );
}
