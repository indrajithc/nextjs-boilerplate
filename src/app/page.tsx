import { FC } from "react";

import Footer from "@widgets/Footer";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <main className="main-content-panel">
      Home page
      <Footer />
    </main>
  );
};

export default HomePage;
