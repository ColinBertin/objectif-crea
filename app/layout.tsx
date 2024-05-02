import { Analytics } from "@vercel/analytics/react";
import ContactButton from "../components/ContactButton/ContactButton";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import TopButton from "../components/topButton/TopButton";
import "../styles/globals.css";
import Script from "next/script";
import { FAQPage, WithContext } from "schema-dts";

const jsonLd: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quels services proposez-vous?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous proposons une gamme de services de photographie, notamment la photographie de portrait, la photographie de mariage, la photographie de nouveau-nés, la photographie de maternité, la photographie d'événements et la photographie de bébés. Notre objectif est de capturer des moments magnifiques et mémorables pour nos clients.",
      },
    },
    {
      "@type": "Question",
      name: "Où êtes-vous situé?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous sommes basés en Belgique et servons des clients à Bruxelles et dans les environs.",
      },
    },
    {
      "@type": "Question",
      name: "Comment puis-je réserver une séance photo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vous pouvez réserver une séance photo en nous contactant via notre site web ou par téléphone. Nous discuterons de vos besoins et fixerons un horaire pratique pour la séance.",
      },
    },
    {
      "@type": "Question",
      name: "Proposez-vous des copies numériques des photos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, nous fournissons des copies numériques haute résolution des photos de votre séance. Celles-ci peuvent être téléchargées depuis notre site web ou fournies sur une clé USB.",
      },
    },
  ],
  headline: "Foire aux questions",
  description:
    "Trouvez des réponses aux questions fréquemment posées sur nos services de photographie.",
  author: {
    "@type": "Person",
    name: "Adam Krings",
    url: "https://www.objectifcrea.be",
  },
  datePublished: "2023-12-10",
  dateModified: "2023-12-28",
};

export async function generateMetadata() {
  return {
    title: {
      default: "Objectif Créa",
      template: `%s | Objectif Créa`,
    },
    description:
      "Photos époustouflantes par Adam Kring : portraits, mariages, nouveau-nés, maternité, événements et bébés. Réservez en Belgique, desservant Bruxelles.",
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
        "Photos époustouflantes par Adam Kring : portraits, mariages, nouveau-nés, maternité, événements et bébés. Réservez en Belgique, desservant Bruxelles.",
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
    googleSiteVerification: "UsdoRjkOKV3xWXYt7a6EDznGGJv_JImb8Q4yhCNJdgs",
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className="relative">
        <NavBar />
        <ContactButton />
        {children}
        <Footer />
        <TopButton />
        <Analytics />
      </body>
    </html>
  );
}
