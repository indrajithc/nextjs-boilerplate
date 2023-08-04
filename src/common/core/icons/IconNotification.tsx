import { FC } from "react";
import IconProps from "@models/IconProps";

const Icon: FC<IconProps> = (props) => {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_410_101671)">
        <path
          d="M12 24C12.7956 24 13.5587 23.6839 14.1213 23.1213C14.6839 22.5587 15 21.7956 15 21H9C9 21.7956 9.31607 22.5587 9.87868 23.1213C10.4413 23.6839 11.2044 24 12 24Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2.87685L10.8045 3.11835C9.44844 3.39465 8.2295 4.131 7.35398 5.20278C6.47846 6.27456 6.00015 7.61593 6 8.99985C6 9.94185 5.799 12.2953 5.3115 14.6128C5.0715 15.7633 4.7475 16.9618 4.317 17.9998H19.683C19.2525 16.9618 18.93 15.7648 18.6885 14.6128C18.201 12.2953 18 9.94185 18 8.99985C17.9995 7.61618 17.521 6.27517 16.6455 5.2037C15.7701 4.13223 14.5513 3.3961 13.1955 3.11985L12 2.87535V2.87685ZM21.33 17.9998C21.6645 18.6703 22.0515 19.2013 22.5 19.4998H1.5C1.9485 19.2013 2.3355 18.6703 2.67 17.9998C4.02 15.2998 4.5 10.3198 4.5 8.99985C4.5 5.36985 7.08 2.33985 10.5075 1.64835C10.4866 1.43978 10.5096 1.22914 10.5751 1.03001C10.6405 0.830878 10.747 0.647682 10.8876 0.492235C11.0283 0.336787 11.1999 0.212539 11.3915 0.127504C11.5831 0.0424694 11.7904 -0.00146484 12 -0.00146484C12.2096 -0.00146484 12.4169 0.0424694 12.6085 0.127504C12.8001 0.212539 12.9717 0.336787 13.1124 0.492235C13.253 0.647682 13.3595 0.830878 13.4249 1.03001C13.4904 1.22914 13.5134 1.43978 13.4925 1.64835C15.1879 1.9932 16.7121 2.91339 17.8069 4.2531C18.9016 5.59281 19.4998 7.26971 19.5 8.99985C19.5 10.3198 19.98 15.2998 21.33 17.9998Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_410_101671">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Icon;
