import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

const racingSansOne = localFont({
  src: "../fonts/racingsansone-regular.ttf",
  variable: "--font-racing",
  display: "swap",
});

const michroma = localFont({
  src: "../fonts/Michroma-Regular.ttf",
  variable: "--font-michroma",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MRM Racing",
  description: "Kid Kart Racer",
  openGraph: {
    url: "https://www.manciasracing.com/",
    title: "Mancias Racing",
    description: "Kid Kart Racer",
    images: ["https://www.manciasracing.com/img/bg_hero.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mancias Racing",
    description: "Kid Kart Racer",
    images: ["https://www.manciasracing.com/img/bg_hero.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${racingSansOne.variable} ${michroma.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

