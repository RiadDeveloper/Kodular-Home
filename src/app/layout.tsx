import type { Metadata, Viewport } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ClientBody from "./ClientBody";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });

// SEO metadata
export const metadata: Metadata = {
  title: {
    default: "Kodular | Much more than a modern app creator without coding",
    template: "%s | Kodular"
  },
  description: "Create Android apps without coding with Kodular Creator, a free drag-and-drop app builder. Build professional mobile applications without programming skills.",
  keywords: [
    "app builder",
    "no-code platform",
    "android app creator",
    "mobile app development",
    "drag and drop app builder",
    "kodular",
    "app maker",
    "no coding",
    "free app builder"
  ],
  authors: [{ name: "Kodular" }],
  creator: "Kodular Team",
  publisher: "Kodular",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.kodular.io/",
    title: "Kodular | Modern App Creator Without Coding",
    description: "Create Android apps without coding with Kodular Creator, a free drag-and-drop app builder.",
    siteName: "Kodular",
    images: [
      {
        url: "https://ext.same-assets.com/2645679348/1649404679.png",
        width: 512,
        height: 512,
        alt: "Kodular Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    creator: "@KodularIO",
    title: "Kodular | Modern App Creator Without Coding",
    description: "Create Android apps without coding with Kodular Creator, a free drag-and-drop app builder."
  }
};

export const viewport: Viewport = {
  themeColor: "#3c2f77",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jost.variable} font-sans antialiased`}>
      <body suppressHydrationWarning className="antialiased font-roboto">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClientBody>{children}</ClientBody>
        </ThemeProvider>
      </body>
    </html>
  );
}
