import { FC } from "react";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

import "@themes/scss/main-scss/main.scss";

import HeadBar from "@widgets/Header/HeadBar";

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

const HomeLayout: FC<homeLayoutProps> = (props) => {
  const { children } = props;
  return (
    <html lang="en" className={lato.variable}>
      <body>
        <HeadBar />
        <div className="row g-0">
          <div className="col-auto"></div>
          <div className="col">{children}</div>
        </div>
      </body>
    </html>
  );
};

export { metadata };

export default HomeLayout;
