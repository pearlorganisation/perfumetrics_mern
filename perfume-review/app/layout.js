import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./_components/layout/Footer/Footer";
import Header from "./_components/layout/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Perfumetrics",
  description: "Perfumetrics, a perfume review site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
