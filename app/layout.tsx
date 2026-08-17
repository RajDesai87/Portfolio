import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raj Desai — Backend / Python Developer",
  description:
    "CS Engineering student building backend systems, REST APIs, and ML/RAG pipelines with Python, Django, and FastAPI. Open to Backend & Python Developer internships.",
  keywords: [
    "Raj Desai",
    "Backend Developer",
    "Python Developer",
    "Django",
    "FastAPI",
    "REST API",
    "Machine Learning",
    "RAG",
    "Internship",
    "Ahmedabad",
    "India",
  ],
  authors: [{ name: "Raj Desai" }],
  openGraph: {
    title: "Raj Desai — Backend / Python Developer",
    description:
      "CS Engineering student building backend systems, REST APIs, and ML/RAG pipelines with Python, Django, and FastAPI.",
    type: "website",
    locale: "en_IN",
    siteName: "Raj Desai Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Desai — Backend / Python Developer",
    description:
      "CS Engineering student building backend systems, REST APIs, and ML/RAG pipelines with Python, Django, and FastAPI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] antialiased transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
