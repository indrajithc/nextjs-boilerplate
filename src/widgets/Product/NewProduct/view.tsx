import { FC } from "react";
import ProductForm from "@widgets/Product/ProductForm";

interface NewProductViewProps {}

const NewProductView: FC<NewProductViewProps> = ({}) => {
  return (
    <div className="api-panel">
      <div className="card">
        <div className="card-body">
          <form className="row g-3">
            <ProductForm />
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewProductView;
