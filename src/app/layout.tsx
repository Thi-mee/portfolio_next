import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Timilehin Adenuga | The Umbrella Dev",
  description:
    "Portfolio website of Timilehin Adenuga, Full-Stack Developer and Cloud Architect.",
  authors: [
    { name: "Timilehin Adenuga", url: "https://linkedin.com/in/timiadenuga" },
  ],
  keywords: ["Timilehin Adenuga", "Full-Stack Developer", "Cloud Architect"],
  // TODO: Add more metadata
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-deepBlue text-white`}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
