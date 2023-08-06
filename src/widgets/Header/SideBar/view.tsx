import { FC } from "react";

import Tooltip from "@components/Tooltip";

import IconDashboard from "@icons/IconDashboard";

interface SideBarViewProps {
  isOpen: Boolean;
}

const SideBarView: FC<SideBarViewProps> = (props) => {
  const { isOpen } = props;

  const dashboardIcon = (
    <a href="/" className="nav-link active">
      <IconDashboard className="icon sm fill-muted" />
      <span>Dashboard</span>
    </a>
  );

  return (
    <div className={`sidebar-panel ${!isOpen ? "close" : ""}`}>
      <ul className="nav flex-column">
        <li className="nav-item">
          {isOpen ? (
            dashboardIcon
          ) : (
            <Tooltip placement="right" overlay={dashboardIcon}>
              Dashboard
            </Tooltip>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SideBarView;
