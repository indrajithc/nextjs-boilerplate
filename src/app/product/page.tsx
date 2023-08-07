import { FC } from "react";

import SampleWidgetOne from "@widgets/SampleWidgetOne";
import SampleWidgetTwo from "@widgets/SampleWidgetTwo";
import SampleWidgetThree, { SampleWidgetComponent } from "@widgets/SampleWidgetThree";
import Footer from "@widgets/Footer";

interface ProductPageProps {}

const ProductPage: FC<ProductPageProps> = () => {
  return (
    <main className="main-content-panel">
      Product page
      <SampleWidgetOne />
      <SampleWidgetTwo />
      <SampleWidgetThree />
      <SampleWidgetComponent />
      <Footer />
    </main>
  );
};

export default ProductPage;
