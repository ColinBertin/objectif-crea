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
    description:
      "écouvrez des photos époustouflantes par Adam Kring : portraits, mariages, nouveau-nés, maternité, événements et bébés. Réservez dès aujourd'hui en Belgique, desservant Bruxelles.",
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
    openGraph: {
      title: "Objectif Créa",
      description:
        "Découvrez des photos époustouflantes par Adam Kring : portraits, mariages, nouveau-nés, maternité, événements et bébés. Réservez dès aujourd'hui en Belgique, desservant Bruxelles.",
      url: "https://www.objectifcrea.be",
      siteName: "Objectif Créa",
      images: [
        {
          url: "https://www.objectifcrea.be/images/logos/logoW.png",
          width: 1700,
          height: 1700,
          alt: "Logo",
        },
      ],
      locale: "fr_FR",
      type: "website",
    },
    alternates: {
      canonical: "https://www.objectifcrea.be",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
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
