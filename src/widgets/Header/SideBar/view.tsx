import { FC } from "react";

interface SideBarViewProps {}

const SideBarView: FC<SideBarViewProps> = ({}) => {
  return (
    <div className="sidebar-panel">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a href="/" className="nav-link active">
            <span>Dashboard</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBarView;
