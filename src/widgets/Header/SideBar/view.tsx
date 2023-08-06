import { FC } from "react";

import Tooltip from "@components/Tooltip";
import Link from "@components/Link";

import IconDashboard from "@icons/IconDashboard";
import IconSearchHistory from "@icons/IconSearchHistory";

interface SideBarViewProps {
  isOpen: Boolean;
}

const SideBarView: FC<SideBarViewProps> = (props) => {
  const { isOpen } = props;

  const dashboardIcon = (
    <Link href="/" className="nav-link active">
      <IconDashboard className="icon sm fill-muted" />
      <span>Dashboard</span>
    </Link>
  );

  const searchHistoryIcon = (
    <Link href="/" className="nav-link">
      <IconSearchHistory className="icon sm fill-muted" />
      <span>Search History</span>
    </Link>
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
        <li className="nav-item">
          {isOpen ? (
            searchHistoryIcon
          ) : (
            <Tooltip placement="right" overlay={searchHistoryIcon}>
              Search History
            </Tooltip>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SideBarView;
