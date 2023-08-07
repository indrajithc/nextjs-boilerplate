import { FC } from "react";

import Breadcrumb from "@components/Breadcrumb";
import Footer from "@widgets/Footer";

interface ProductPageProps {}

const ProductPage: FC<ProductPageProps> = () => {
  const breadcrumbItems = [
    {
      id: "dashboard",
      href: "/",
      label: "Dashboard",
    },
    {
      id: "product",
      href: "/product",
      label: "Product",
      active: true,
    },
  ];

  return (
    <main className="main-content-panel">
      <div className="title-panel">
        <div className="breadcrumb-panel">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ProductPage;
