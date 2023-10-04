import { FC } from "react";
import { IconProps } from "@lib/types";

const Icon: FC<IconProps> = (props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g id="Group_3" data-name="Group 3" transform="translate(-24 48) rotate(-90)">
        <rect id="Rectangle_1" data-name="Rectangle 1" width="24" height="24" transform="translate(24 24)" fill="#fff" opacity="0" />
        <path
          id="Path_260"
          data-name="Path 260"
          d="M10.079,22.625l8.344-8.4,8.346,8.4a2.131,2.131,0,0,0,3.033,0,2.168,2.168,0,0,0,0-3.054L19.929,9.631a2.131,2.131,0,0,0-3.033,0L7.025,19.572a2.16,2.16,0,0,0,3.054,3.054Z"
          transform="translate(17.57 20.003)"
        />
      </g>
    </svg>
  );
};

export default Icon;
