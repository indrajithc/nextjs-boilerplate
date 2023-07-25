import { FC } from "react";

import SampleWidgetComponentView from "@widgets/SampleWidgetThree/components/SampleWidgetComponentView";

interface SampleWidgetComponentProps {}

const SampleWidgetComponent: FC<SampleWidgetComponentProps> = () => {
  return <SampleWidgetComponentView />;
};

export default SampleWidgetComponent;
