import { FC, ReactNode, Suspense } from "react";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

import "@themes/scss/main-scss/main.scss";

import RootProvider from "@context/RootProvider";

const metadata: Metadata = {
  title: "E-Commerce App",
  description: "E-commerce application",
};

interface homeLayoutProps {
  children: React.ReactNode;
}

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--bs-body-font-family",
  weight: ["300", "400", "700", "900"],
});

const HomeLayout: FC<homeLayoutProps> = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" dir="ltr" className={lato.variable}>
      <body>
        <RootProvider>
          <div className="row g-0">
            <Suspense>
              <div className="col">{children}</div>
            </Suspense>
          </div>
        </RootProvider>
      </body>
    </html>
  );
};

export { metadata };

export default HomeLayout;
