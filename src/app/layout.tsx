import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import {HeaderComponent} from "@/components/components-header";
import {FooterComponent} from "@/components/components-footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'MXRidee - Get a Ride in Minna, Anytime, Anywhere!',
  description: 'MXRidee is a Nigerian-based ride-hailing service operating within Minna city. Book your ride now!',

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <HeaderComponent/>
      {children}
      <FooterComponent/>
      </body>
    </html>
  );
}
