import {
  Inter,
  Roboto_Condensed,
  Roboto_Slab,
  Poppins,
  Montserrat,
} from "next/font/google";
import "./globals.css";

import Footer from "./_components/layout/Footer/Footer";
import Header from "./_components/layout/Header/Header";
import { Toaster } from "sonner";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const roboto_Condensed = Roboto_Condensed({ subsets: ["latin"] });
const poppins = Poppins({ weight: "500", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "300", subsets: ["latin"] });

export const metadata = {
  title: "Perfumetrics",
  description: "Perfumetrics, a perfume review site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
