import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FileTreeSidebar from "@/components/FileTreeSidebar";
import GitHubActivityWidget from "@/components/GitHubActivityWidget";
import MatrixGutterBackground from "@/components/MatrixGutterBackground";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col w-full selection:bg-[var(--accent-from)]/30 selection:text-[var(--text-primary)]">
      {/* Background Matrix Rain in Side Gutters */}
      <MatrixGutterBackground />

      {/* Desktop Left File Tree Navigation */}
      <FileTreeSidebar />

      {/* Desktop Right GitHub Activity Feed */}
      <GitHubActivityWidget />

      {/* Top Navbar */}
      <Nav />

      {/* Main Content Sections */}
      <main className="flex-1 w-full flex flex-col items-center justify-center relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
