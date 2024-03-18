import { Analytics } from "@vercel/analytics/react";
import ContactButton from "../components/ContactButton/ContactButton";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import TopButton from "../components/topButton/TopButton";
import "../styles/globals.css";

export async function generateMetadata() {
  return {
    title: {
      default: "Objectif Créa",
      template: `%s | Objectif Créa`,
    },
    icons: {
      icon: [
        {
          media: "(prefers-color-scheme: dark)",
          url: "/light-favicon.ico",
        },
        {
          media: "(prefers-color-scheme: light)",
          url: "/dark-favicon.ico",
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        <ContactButton />
        {children}
        <Footer />
        <TopButton />
      </body>
      <Analytics />
    </html>
  );
}
