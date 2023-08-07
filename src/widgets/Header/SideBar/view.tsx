import { FC, ReactNode } from "react";

import Tooltip from "@components/Tooltip";
import Link from "@components/Link";

type MenuItem = {
  id: string;
  href: string;
  label: string;
  icon?: ReactNode;
  active: boolean;
};

interface SideBarViewProps {
  isOpen: Boolean;
  menuItems: MenuItem[];
}

const SideBarView: FC<SideBarViewProps> = (props) => {
  const { isOpen, menuItems } = props;

  const getMenuItem = (menuItem: MenuItem, isActive: boolean) => (
    <Link href={menuItem.href} className={`nav-link${isActive ? " active" : ""}`}>
      {menuItem.icon}
      <span>{menuItem.label}</span>
    </Link>
  );

  return (
    <div className={`sidebar-panel ${!isOpen ? "close" : ""}`}>
      <ul className="nav flex-column">
        {menuItems.map((menuItem, index) => (
          <li className="nav-item " key={`${menuItem.id || index + 1}`}>
            {isOpen ? (
              getMenuItem(menuItem, menuItem.active)
            ) : (
              <Tooltip placement="right" overlay={getMenuItem(menuItem, menuItem.active)}>
                {menuItem.label}
              </Tooltip>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBarView;
