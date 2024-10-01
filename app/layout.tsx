import NextTopLoader from 'nextjs-toploader'
import { ThemeProvider } from '@mui/material';
import type { Metadata } from "next";
import "@fontsource/fira-code/400.css";
import "@fontsource/fira-code/500.css";
import "@fontsource/fira-code/600.css";
import "@fontsource/fira-code/700.css";
import { Fira_Code } from 'next/font/google'
import "./globals.css";
import theme from './theme';
import { Toaster } from '@/components/ui/toaster';
import Logger from './components/(micro)/Logger';

const firacode = Fira_Code({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "SI Rony",
  description: "Portfolio of Md. Saiful Islam Rony",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body
          className={`${firacode.className} antialiased`}
        >
          <NextTopLoader
            showSpinner={false}
            color="#C778DD"
          />
          <Logger />
          {children}
          <Toaster />
        </body>
      </ThemeProvider>
    </html>
  );
}
