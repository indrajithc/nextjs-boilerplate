"use client";
import { FC } from "react";

import { useRootContext } from "@context/RootProvider";

import HeadBarView from "./view";

interface HeadBarProps {}

const HeadBar: FC<HeadBarProps> = ({}) => {
  const { updateOpenSideBar, isOpenSideBar } = useRootContext();

  const handleToggleButtonClick = () => {
    updateOpenSideBar(!isOpenSideBar);
  };

  return <HeadBarView handleToggleButtonClick={handleToggleButtonClick} />;
};

export default HeadBar;
