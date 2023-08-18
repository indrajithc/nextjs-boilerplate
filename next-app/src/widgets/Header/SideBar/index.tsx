"use client";
import { FC, useMemo } from "react";
import { usePathname } from "next/navigation";

import { useRootContext } from "@context/RootProvider";

import IconDashboard from "@icons/IconDashboard";
import IconSearchHistory from "@icons/IconSearchHistory";
import IconCube from "@icons/IconCube";

import SideBarView from "./view";

interface SideBarProps {}

const SideBar: FC<SideBarProps> = ({}) => {
  const { isOpenSideBar } = useRootContext();

  const pathname = usePathname();

  const menuItems = useMemo(() => {
    const defaultMenuItems = [
      {
        id: "dashboard",
        href: "/",
        label: "Dashboard",
        icon: <IconDashboard className="icon sm fill-muted" />,
        active: false,
      },
      {
        id: "search-history",
        href: "/search-history",
        label: "Search History",
        icon: <IconSearchHistory className="icon sm fill-muted" />,
        active: false,
      },
      {
        id: "product",
        href: "/product",
        label: "Product",
        icon: <IconCube className="icon sm fill-muted" />,
        active: false,
      },
    ];

    return defaultMenuItems.map((item) => ({
      ...item,
      active: pathname.startsWith(item.href),
    }));
  }, [pathname]);

  return <SideBarView isOpen={isOpenSideBar} menuItems={menuItems} />;
};

export default SideBar;
