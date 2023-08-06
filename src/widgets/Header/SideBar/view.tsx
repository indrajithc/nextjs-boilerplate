import { FC } from "react";

interface SideBarViewProps {
  isOpen: Boolean;
}

const SideBarView: FC<SideBarViewProps> = (props) => {
  const { isOpen } = props;
  return (
    <div className={`sidebar-panel ${!isOpen ? "close" : ""}`}>
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
