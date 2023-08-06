import { FC, ReactNode, Suspense } from "react";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

import "@themes/scss/main-scss/main.scss";

import RootProvider from "@context/RootProvider";

import HeadBar from "@widgets/Header/HeadBar";
import SideBar from "@widgets/Header/SideBar";

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
    <html lang="en" className={lato.variable}>
      <body>
        <RootProvider>
          <HeadBar />
          <div className="row g-0">
            <div className="col-auto">
              <SideBar />
            </div>
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
