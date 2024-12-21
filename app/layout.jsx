import { Reddit_Sans } from "next/font/google";
import "./globals.css";

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
        className={`${redditSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
