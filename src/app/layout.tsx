import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Sidebar } from "components/molecules/Sidebar";
import { Header } from "components/molecules/Header";
import { AppContextProvider } from "contexts/AppContext";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContextProvider>
          <div className="fade-in flex">
            <div className="flex min-h-screen">
              <Sidebar />
            </div>
            <div className="flex w-full flex-col">
              <Header />
              <main className="fade-in h-full bg-light-grey p-6 dark:bg-very-dark-grey">
                {children}
              </main>
            </div>
          </div>
          {modal}
        </AppContextProvider>
      </body>
    </html>
  );
}
