// @ts-ignore: CSS module declarations may not be present in this project setup
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.flyweel.media"),

  title: "Flywheel Media - Best Digital Marketing Agency in Chennai",
  description:
    "AI-powered marketing that drives leads, pipelines, and revenue. Get a free marketing audit today",

  openGraph: {
    title: "Flywheel Media",
    description:
      "AI-powered marketing that drives leads, pipelines, and revenue.",
    url: "https://www.flyweel.media",
    siteName: "Flywheel Media",
    images: [
      {
        url: "/assets/company/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Flywheel Media",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Flywheel Media",
    description:
      "AI-powered marketing that drives leads, pipelines, and revenue.",
    images: ["/assets/company/banner.jpg"],
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