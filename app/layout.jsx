import { Inter } from "next/font/google";
import "./globals.css";
import "./animations.css";

import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Careers | Acgile",
  description:
    "Join Acgile to elevate your accounting career and reach new hieghts. ",
  applicationName: "Acgile",
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
