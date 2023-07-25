import { FC } from "react";

import SampleWidgetOne from "@widgets/SampleWidgetOne";
import SampleWidgetTwo from "@widgets/SampleWidgetTwo";
import SampleWidgetThree, { SampleWidgetComponent } from "@widgets/SampleWidgetThree";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <main>
      Home page
      <SampleWidgetOne />
      <SampleWidgetTwo />
      <SampleWidgetThree />
      <SampleWidgetComponent />
    </main>
  );
};

export default HomePage;
