import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import Header from "@components/header/Header";
import AppProvider from "@app/_provider/appProvider";
import "./global.scss";

const roboto = Roboto({ subsets: ["latin"], weight:['300', '400', '500', '700'] });

export const metadata: Metadata = {
  title: "Test",
  description: "First Next project",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={roboto.className}>
          <Header/>
          <AppProvider>
          {children}
          </AppProvider>
      </body>
    </html>
  );
}



