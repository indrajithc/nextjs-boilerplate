import { FC } from "react";
import ProductForm from "@widgets/Product/ProductForm";

interface EditProductViewProps {}

const EditProductView: FC<EditProductViewProps> = ({}) => {
  return (
    <div className="api-panel">
      <div className="card">
        <div className="card-body">
          <form className="row g-3">
            <ProductForm />
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProductView;
