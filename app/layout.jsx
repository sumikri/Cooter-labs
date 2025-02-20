import { Reddit_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

const redditSans = Reddit_Sans({
  variable: "--font-reddit-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cooter Labs",
  description: "Cooter Labs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${redditSans.variable} font-reddit-sans`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
