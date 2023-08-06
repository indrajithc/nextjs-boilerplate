"use client";
import { FC } from "react";

import { useRootContext } from "@context/RootProvider";

import SideBarView from "./view";

interface SideBarProps {}

const SideBar: FC<SideBarProps> = ({}) => {
  const { isOpenSideBar } = useRootContext();

  return <SideBarView isOpen={isOpenSideBar} />;
};

export default SideBar;
