import NextTopLoader from 'nextjs-toploader'
import type { Metadata } from "next";
import { Fira_Code } from 'next/font/google'
import "./globals.scss";

const firacode = Fira_Code({subsets: ['latin']})


export const metadata: Metadata = {
  title: "MSI Rony",
  description: "Portfolio of Md. Saiful Islam Rony",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firacode.className} antialiased`}
      >
        <NextTopLoader 
          showSpinner={false}
          color="#C778DD"
        />
        {children}
      </body>
    </html>
  );
}
