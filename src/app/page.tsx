import { FC } from "react";

import SampleWidgetOne from "@widgets/SampleWidgetOne";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <main>
      Home page
      <SampleWidgetOne />
    </main>
  );
};

export default HomePage;
