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
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const roboto_Condensed = Roboto_Condensed({ subsets: ["latin"] });
const poppins = Poppins({ weight: "500", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "300", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://perfumetrics.com"),
  keywords: ["Perfume", "Perfumetrics", "India", "UK", "US"],
  title: {
    default: "Perfumetrics",
    template: "%s | Perfumetrics",
  },
  description: "Perfumetrics, a perfume Review Site",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    description: "Perfumes World",
    images: [""],
  },
};
const GTM_ID = "GTM-5JSSKHQC";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
        />
        <meta
          name="google-site-verification"
          content="_u9qGtjoK7YSxFD2seZpXmiQb39522RLaXBDvlMs4YI"
        />
        <Script id="gtm-script" strategy="afterInteractive">
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}
        </Script>
        {/* <Script
          src="//cdn.runative-syndicate.com/sdk/v1/bi.js"
          data-ts-spot="3528e43bb06d4d9c80fc686714971e38"
          data-ts-width="300"
          data-ts-height="250"
          async
          defer
        /> */}
      </head>
      {/* Google Tag Manager (noscript) */}

      {/* End Google Tag Manager (noscript) */}
      <body className={`${poppins.className} h-screen`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Header />
        {children}
        <Footer />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
