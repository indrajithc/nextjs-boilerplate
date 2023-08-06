import { FC } from "react";
import type { Metadata } from "next";

import "@themes/scss/main-scss/main.scss";

import HeadBar from "@widgets/Header/HeadBar";

const metadata: Metadata = {
  title: "E-Commerce App",
  description: "E-commerce application",
};

interface homeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: FC<homeLayoutProps> = (props) => {
  const { children } = props;
  return (
    <html lang="en">
      <body>
        <HeadBar />
        {children}
      </body>
    </html>
  );
};

export { metadata };

export default HomeLayout;
