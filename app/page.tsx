import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBrands from "@/components/TrustedBrands";
import Metrics from "@/components/Metrics";
import ValueProps from "@/components/ValueProps";
import Features from "@/components/Features";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import CaseStudy from "@/components/CaseStudy";
import CTA from "@/components/CTA";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBrands />
      <Metrics />
      <ValueProps />
      <Features />
      <Steps />
      {/* <Testimonials /> */}
      <CaseStudy />
      <CTA />
      <BlogPreview />
      <Footer />
    </>
  );
}
