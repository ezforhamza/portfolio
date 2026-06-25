import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Archivo } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import { SITE } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: "%s — Hamza Tanveer",
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.title,
    title: SITE.title,
    description: SITE.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/opengraph-image"],
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
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE.url}/#person`,
      name: SITE.name,
      url: SITE.url,
      image: `${SITE.url}/about-portrait-v2.webp`,
      description: SITE.description,
      jobTitle: SITE.jobTitle,
      email: `mailto:${SITE.email}`,
      nationality: { "@type": "Country", name: SITE.country },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: SITE.university,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.locality,
        addressCountry: SITE.country,
      },
      sameAs: [
        SITE.social.github,
        SITE.social.upwork,
        SITE.social.linkedin,
        SITE.social.instagram,
      ],
      knowsAbout: [
        "Flutter",
        "React",
        "Next.js",
        "Node.js",
        "Mobile App Development",
        "AI Integration",
        "Full-Stack Development",
      ],
      worksFor: { "@type": "Organization", name: "Freelance" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
      publisher: { "@id": `${SITE.url}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE.url}/#profilepage`,
      url: SITE.url,
      name: SITE.title,
      isPartOf: { "@id": `${SITE.url}/#website` },
      about: { "@id": `${SITE.url}/#person` },
      primaryImageOfPage: `${SITE.url}/about-portrait-v2.webp`,
      inLanguage: "en",
    },
    ...SITE.projects.map((p) => ({
      "@type": "SoftwareApplication",
      name: p.name,
      url: p.url,
      applicationCategory: "SocialNetworkingApplication",
      operatingSystem: "iOS, Android, Web",
      author: { "@id": `${SITE.url}/#person` },
    })),
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${archivo.variable} antialiased`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        <Nav />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
