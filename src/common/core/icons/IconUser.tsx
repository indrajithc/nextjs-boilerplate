import { FC } from "react";
import IconProps from "@models/IconProps";

const Icon: FC<IconProps> = (props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M12.3332 13V11.6667C12.3332 10.9594 12.0522 10.2811 11.5521 9.78105C11.052 9.28095 10.3737 9 9.6665 9H4.33317C3.62593 9 2.94765 9.28095 2.44755 9.78105C1.94746 10.2811 1.6665 10.9594 1.6665 11.6667V13M9.6665 3.66667C9.6665 5.13943 8.4726 6.33333 6.99984 6.33333C5.52708 6.33333 4.33317 5.13943 4.33317 3.66667C4.33317 2.19391 5.52708 1 6.99984 1C8.4726 1 9.6665 2.19391 9.6665 3.66667Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Icon;
