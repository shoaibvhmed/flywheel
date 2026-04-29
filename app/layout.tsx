import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI-first Marketing That Drives Revenue - Flywheel Media",
  description:
    "Flywheel is an AI-first marketing agency helping orthodontic practices, real estate firms, and interior design brands generate leads and predictable growth.",

  openGraph: {
    title: "Flywheel Media",
    description:
      "AI-powered marketing that drives leads, pipelines, and revenue.",
    url: "https://www.flyweel.media",
    siteName: "Flywheel Media",
    images: [
      {
        url: "/company/banner.png", // 👈 your image
        width: 1200,
        height: 630,
        alt: "Flywheel Marketing Banner image",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Flywheel Media",
    description:
      "AI-first marketing agency for predictable growth.",
    images: ["/assets/company/banner.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
