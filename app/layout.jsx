import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import  PageTransition  from "@/components/PageTransition";
import  StairTransition  from "@/components/StairTransition";

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

export const metadata = {
  title: "Amir Vosooghi",
  description: "Amir Vosooghi Resume",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-900 text-white`}
      >
        <Header />
        <StairTransition />
        <PageTransition >
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
