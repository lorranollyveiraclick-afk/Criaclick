import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import ClientProviders from "./client-providers";
import WhatsAppFloat from "./whatsapp-float";
import { I18nProvider } from "./i18n";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CriaClick Digital Hub",
  description: "Agência digital especializada em soluções web modernas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <Providers>
          <I18nProvider>
            <ClientProviders>
              {children}
            </ClientProviders>
            <WhatsAppFloat />
          </I18nProvider>
        </Providers>
      </body>
    </html>
  );
}

