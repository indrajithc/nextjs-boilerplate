import { FC } from "react";

import Breadcrumb from "@components/Breadcrumb";
import Link from "@components/Link";

import Footer from "@widgets/Footer";
import { ProductList } from "@widgets/Product";

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
          <div className="row">
            <div className="col">
              <h3>Products</h3>
            </div>
            <div className="col-auto">
              <Link href="/product/new">
                <button className="btn btn-primary">Add New</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="content-panel">
        <ProductList />
      </div>
      <Footer />
    </main>
  );
};

export default ProductPage;
