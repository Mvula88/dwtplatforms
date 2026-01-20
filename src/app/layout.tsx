import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "DWT Websites & Software | Web Design & Software Development in Namibia",
  description: "Professional website design, custom software development, and business systems for Namibian businesses. If you can dream it, we can build it. Based in Oshakati, serving all of Namibia.",
  keywords: ["web design Namibia", "software development Namibia", "website design Oshakati", "custom software Namibia", "DWT Platforms", "Digital Wave Technologies", "business systems Namibia"],
  authors: [{ name: "Digital Wave Technologies" }],
  creator: "Digital Wave Technologies",
  openGraph: {
    title: "DWT Websites & Software | Web Design & Software Development in Namibia",
    description: "Professional website design, custom software development, and business systems for Namibian businesses. If you can dream it, we can build it.",
    url: "https://www.dwtplatforms.com",
    siteName: "DWT Platforms",
    locale: "en_NA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DWT Websites & Software",
    description: "Professional website design, custom software development, and business systems for Namibian businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0d4f4f" />
      </head>
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased`}
        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
