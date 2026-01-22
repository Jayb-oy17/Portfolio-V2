import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
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
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased selection:bg-blue-500/30 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
