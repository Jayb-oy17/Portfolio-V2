import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Abdullateef Mujahid | Front End Web Developer",
  description: "Portfolio of Abdullateef Mujahid, a Front End Developer specializing in user experience optimization and responsive web design.",
};

/**
 * Root Layout component.
 * Layout Choice: Standard wrapper with Navbar and Footer to ensure consistency across all pages.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased bg-slate-950 text-slate-50 selection:bg-blue-500/30">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
