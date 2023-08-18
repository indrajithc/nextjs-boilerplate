import { FC } from "react";

import Breadcrumb from "@components/Breadcrumb";

import { EditProduct } from "@widgets/Product";
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
      id: "edit",
      href: "/product/edit",
      label: "Edit",
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
              <h3>Edit Product</h3>
            </div>
            <div className="col-auto"></div>
          </div>
        </div>
      </div>
      <div className="content-panel">
        <EditProduct />
      </div>
      <Footer />
    </main>
  );
};

export default ProductPage;
