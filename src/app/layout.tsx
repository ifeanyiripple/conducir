import type { Metadata } from 'next';
import { Michroma, Orbitron, Poppins, Geist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import { cn } from "@/lib/utils";



// then on <html> or <body>:
// <html lang="en" className={michroma.variable}>
const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// Body copy: Poppins. Headings: Orbitron (closest match to the heavy extended
// headings in the company profile). Small labels: Michroma, as in the profile.
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });
const michroma = Michroma({ subsets: ['latin'], weight: '400', variable: '--font-michroma' });

export const metadata: Metadata = {
  title: {
    default: 'Conducir Engineering Limited | Tomorrow Built Today',
    template: '%s | Conducir Engineering Limited',
  },
  description:
    'Conducir Engineering Limited is an engineering, construction, infrastructure and real estate development company in Abuja, Nigeria, anchored on Real Estate, Infrastructure and Investments.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(poppins.variable, orbitron.variable, michroma.variable, "font-sans", geist.variable)}>
      <body className="font-sans antialiased">
        {/* <Navbar /> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
