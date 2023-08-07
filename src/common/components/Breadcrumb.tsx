import { FC } from "react";

type BreadcrumbItem = {
  id: string;
  href: string;
  label: string;
  active: Boolean;
};

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: FC<BreadcrumbProps> = (props) => {
  const { items } = props;
  return (
    <nav>
      <div className="breadcrumb">
        {items.map((item, index) => (
          <div className="breadcrumb-item" key={`${item?.id || index + 1}`}>
            <a {...(item?.active ? {} : { href: item?.href || undefined, className: "text-primary" })}>{item.label}</a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumb;
