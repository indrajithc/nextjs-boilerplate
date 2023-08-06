import { FC, MouseEventHandler } from "react";
import Link from "@components/Link";
import Image from "@components/Image";

import HeaderOptionDropdown from "@widgets/Header/HeadBar/HeaderOptionDropdown";

import IconMenu from "@icons/IconMenu";
import IconHelp from "@icons/IconHelp";
import IconCategory from "@icons/IconCategory";
import IconNotification from "@icons/IconNotification";

import Tooltip from "@components/Tooltip";

interface HeadBarViewProps {
  handleToggleButtonClick: MouseEventHandler<HTMLButtonElement>;
}

const HeadBarView: FC<HeadBarViewProps> = (props) => {
  const { handleToggleButtonClick } = props;

  return (
    <header>
      <div className="align-items-center justify-content-between g-0 row">
        <div className="col-auto">
          <Link href={"/"} className="navbar-brand">
            <Image src="/dummy/images/image-svg-172x30.svg" width={172} height={30} alt="logo" />
          </Link>
          <button type="button" className="btn btn-toggler" onClick={handleToggleButtonClick}>
            <IconMenu className="icon fill-muted" />
          </button>
        </div>
        <div className="col-auto">
          <ul className="header-nav-icons nav">
            <li className="nav-item">
              <Tooltip overlay={<IconHelp className="icon sm fill-primary" />}>Help</Tooltip>
            </li>
            <li className="nav-item">
              <div className="subscriptions dropdown p-0">
                <IconCategory className="icon sm stroke-muted" />
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <div className="position-relative">
                  <span className="notification" />
                  <IconNotification className="icon sm fill-muted" />
                </div>
              </a>
            </li>
            <li className="nav-item">
              <HeaderOptionDropdown className="d-none d-md-flex ms-3 show" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeadBarView;
