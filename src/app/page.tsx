import { FC } from "react";

import SampleWidgetOne from "@widgets/SampleWidgetOne";
import SampleWidgetTwo from "@widgets/SampleWidgetTwo";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <main>
      Home page
      <SampleWidgetOne />
      <SampleWidgetTwo />
    </main>
  );
};

export default HomePage;
