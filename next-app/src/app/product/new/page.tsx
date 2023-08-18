import { FC } from "react";

import Breadcrumb from "@components/Breadcrumb";

import { NewProduct } from "@widgets/Product";
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
    },
    {
      id: "new",
      href: "/product/new",
      label: "New",
      active: true,
    },
  ];

  return (
    <main className="main-content-panel">
      <div className="title-panel">
        <div className="breadcrumb-panel">
          <Breadcrumb items={breadcrumbItems} />
          <div className="row">
            <div className="col">
              <h3>Add New Product</h3>
            </div>
            <div className="col-auto"></div>
          </div>
        </div>
      </div>
      <div className="content-panel">
        <NewProduct />
      </div>
      <Footer />
    </main>
  );
};

export default ProductPage;
