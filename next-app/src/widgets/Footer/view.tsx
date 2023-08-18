import { FC } from "react";

import Image from "@components/Image";
import Link from "@components/Link";

interface FooterViewProps {}

const FooterView: FC<FooterViewProps> = ({}) => {
  return (
    <footer>
      <div className="row justify-content-between">
        <div className="col-auto">
          <div className="footer-brand">
            Powered By
            <Link href="/" className="ms-1">
              <Image src="/dummy/images/image-svg-126X23.svg" width={72} height={13} alt="Shopsphere" />
            </Link>
          </div>
        </div>
        <div className="col-auto">
          <p>Version:2.1</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterView;
