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
  const noscriptContent = `<iframe
        src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
        height="0"
        width="0"
        style="display: none; visibility: hidden;">
      </iframe>`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://perfumetrics.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Write Reviews",
        item: "https://perfumetrics.com/reviews/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Men's Style",
        item: "https://perfumetrics.com/category/MEN'S-STYLE",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Women's Style",
        item: "https://perfumetrics.com/category/WOMEN'S-STYLE",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Blogs",
        item: "https://blog.perfumetrics.com",
      },
    ],
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cloudinary.com" />
        <meta
          name="google-site-verification"
          content="_u9qGtjoK7YSxFD2seZpXmiQb39522RLaXBDvlMs4YI"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      {/* Google Tag Manager (noscript) */}

      {/* End Google Tag Manager (noscript) */}
      <body className={`${poppins.className} h-screen`}>
        <noscript dangerouslySetInnerHTML={{ __html: noscriptContent }} />
        <Header />
        {children}
        <Footer />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
