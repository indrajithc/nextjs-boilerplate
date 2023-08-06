import { FC } from "react";

import SampleWidgetOne from "@widgets/SampleWidgetOne";
import SampleWidgetTwo from "@widgets/SampleWidgetTwo";
import SampleWidgetThree, { SampleWidgetComponent } from "@widgets/SampleWidgetThree";
import Footer from "@widgets/Footer";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <main className="main-content-panel">
      Home page
      <SampleWidgetOne />
      <SampleWidgetTwo />
      <SampleWidgetThree />
      <SampleWidgetComponent />
      <Footer />
    </main>
  );
};

export default HomePage;
