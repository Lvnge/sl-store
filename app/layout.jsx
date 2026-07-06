import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Cormorant_Infant } from "next/font/google";

const cormorant = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata = {
  title: "silent lung — fotografía, zines y arte",
  description: "Portfolio y tienda de Román Montes. Fotografía, zines y arte.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "silent lung — fotografía, zines y arte",
    description:
      "Portfolio y tienda de Román Montes. Fotografía, zines y arte.",
    url: "https://sl-store-ashy.vercel.app",
    siteName: "silent lung",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "silent lung — fotografía, zines y arte",
    description:
      "Portfolio y tienda de Román Montes. Fotografía, zines y arte.",
    images: ["/images/og-image.jpg"],
  },
};

const themeScript = `
  (function() {
    const saved = localStorage.getItem('theme');
    if (saved) {
      document.documentElement.setAttribute('data-theme', saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={cormorant.variable}
    >
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=3" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      {""}
      <body>
        <ThemeProvider>
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
