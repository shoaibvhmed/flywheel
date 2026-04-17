"use client";

import Script from "next/script";

export default function CTA() {
  return (
    <section
  id="book-call"
  className="bg-[#FF6A2A] py-28 scroll-mt-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading Section */}
        <div className="text-white text-center mb-16">
          <h2 className="text-[56px] font-extrabold leading-tight">
            Book a Strategy Call
          </h2>

          <p className="mt-6 text-lg opacity-90">
            No contracts. No commitments. Guaranteed results.*
          </p>
        </div>

        {/* Calendly Embed */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-[8px_8px_0px_#000]">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/shoaib-hackgrowth/30min"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-xs text-white opacity-80">
          * for qualified brands with over $1m annual Shopify revenue.
        </p>

      </div>

      {/* Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
