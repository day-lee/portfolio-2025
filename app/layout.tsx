import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dayeon Lee",
  description: "Software Engineer portfolio website for Dayeon Lee 2025",
  openGraph: {
    title: 'Dayeon Lee',
    description: 'Software Engineer portfolio website for Dayeon Lee 2025',
    url: 'https://portfolio-2025-rho-rouge.vercel.app/',
    siteName: 'Dayeon Lee',
    images: [
      {
        url: 'http://github.com/day-lee/portfolio-2025/blob/main/public/apple.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio Preview',
      },
    ],
    type: 'website',
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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
