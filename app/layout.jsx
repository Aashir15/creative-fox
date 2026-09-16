import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://creativefox.io";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Creative Fox | Creative Digital Agency",
    template: "%s | Creative Fox",
  },

  description:
    "Creative Fox is a creative digital agency helping businesses grow through web design, development, branding, UI/UX, eCommerce, SEO, and digital marketing.",

  keywords: [
    "creative agency",
    "digital agency",
    "web design agency",
    "web development agency",
    "branding agency",
    "UI UX design",
    "eCommerce development",
    "SEO services",
    "digital marketing agency",
    "Creative Fox",
  ],

  authors: [
    {
      name: "Creative Fox",
    },
  ],

  creator: "Creative Fox",
  publisher: "Creative Fox",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Creative Fox",
    title: "Creative Fox | Creative Digital Agency",
    description:
      "Creative digital experiences built through strategy, design, development, branding, and marketing.",
    images: [
      {
        url: "/assets/hero.png",
        width: 1200,
        height: 630,
        alt: "Creative Fox Digital Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Creative Fox | Creative Digital Agency",
    description:
      "Creative digital experiences built through strategy, design, development, branding, and marketing.",
    images: ["/assets/hero.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white font-sans text-black">
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}