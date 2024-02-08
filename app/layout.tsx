import { Analytics } from "@vercel/analytics/react";
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
          url: "/dark-favicon.ico",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "/light-favicon.ico",
          media: "(prefers-color-scheme: dark)",
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
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
