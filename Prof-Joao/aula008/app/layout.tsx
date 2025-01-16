import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A minha empresa",
  description: "Empresa prestadora de serviços",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>
        {children}
      </body>
    </html>
  );
}
