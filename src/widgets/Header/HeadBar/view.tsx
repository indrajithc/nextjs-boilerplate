import { FC } from "react";
import Link from "@components/Link";
import Image from "@components/Image";

import IconMenu from "@icons/IconMenu";

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
            <IconMenu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeadBarView;
