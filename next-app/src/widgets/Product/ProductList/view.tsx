import { FC } from "react";

import IconSearch from "@icons/IconSearch";

import Table from "@widgets/Product/ProductList/Table";

interface ProductListViewProps {}

const ProductListView: FC<ProductListViewProps> = ({}) => {
  return (
    <div className="api-panel">
      <div className="card">
        <div className="card-body">
          <div className="row justify-content-between align-items-center gy-2">
            <div className="col">
              <h3>Application</h3>
            </div>
            <div className="col-12 col-md-5 col-lg-4 col-xl-3">
              <div className="input-group-icon-left">
                <span className="input-group-text">
                  <a href="/" className="link secondary d-flex">
                    <IconSearch className="icon sm fill-muted" />
                  </a>
                </span>
                <input placeholder="Search" type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>

        <Table />
      </div>
    </div>
  );
};

export default ProductListView;
