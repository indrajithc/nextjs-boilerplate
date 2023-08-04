import { FC } from "react";
import Link from "@components/Link";
import Image from "@components/Image";

import IconMenu from "@icons/IconMenu";
import IconHelp from "@icons/IconHelp";
import IconCategory from "@icons/IconCategory";
import IconNotification from "@icons/IconNotification";
import IconChevronDown from "@icons/IconChevronDown";

interface HeadBarViewProps {}

const HeadBarView: FC<HeadBarViewProps> = ({}) => {
  return (
    <header>
      <div className="align-items-center justify-content-between g-0 row">
        <div className="col-auto">
          <Link href={"/"} className="navbar-brand">
            <Image src="/dummy/images/image-svg-172x30.svg" width={172} height={30} alt="logo" />
          </Link>
          <button type="button" className="btn btn-toggler">
            <IconMenu className="icon fill-muted" />
          </button>
        </div>
        <div className="col-auto">
          <ul className="header-nav-icons nav">
            <li className="nav-item">
              <IconHelp className="icon sm fill-primary" />
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
              <div className="d-none d-md-flex ms-5 dropdown show">
                <a className="navbar-user">
                  <span>Michael Richard</span>
                  <IconChevronDown className="icon xs fill-muted ms-1" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeadBarView;
