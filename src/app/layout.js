import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Two Shoulder Demo App",
  description: "Demo App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
