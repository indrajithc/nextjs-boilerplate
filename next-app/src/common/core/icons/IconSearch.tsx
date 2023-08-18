import { FC } from "react";
import { IconProps } from "@lib/types";

const Icon: FC<IconProps> = (props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g id="Search-icon" transform="translate(-1188 -92)">
        <rect id="Rectangle_690" data-name="Rectangle 690" width="24" height="24" transform="translate(1188 92)" fill="none" />
        <path
          id="Path_315"
          data-name="Path 315"
          d="M7.092.036a7.885,7.885,0,0,0-.438,15.634,9.769,9.769,0,0,0,2.383.014,9.149,9.149,0,0,0,1.489-.373,8.711,8.711,0,0,0,2.115-1.148l.152-.124,1.683,1.683a43.824,43.824,0,0,0,3.266,3.061.876.876,0,0,0,1.12-1.12c-.052-.155-1.631-1.662-3.147-3.18l-1.683-1.689.124-.152a8.629,8.629,0,0,0,1.158-2.149,9.156,9.156,0,0,0,.362-1.472,9.9,9.9,0,0,0,0-2.278,7.772,7.772,0,0,0-.724-2.316A7.883,7.883,0,0,0,7.092.036m1.436,1.75A6.127,6.127,0,1,1,2.719,4.566,6.127,6.127,0,0,1,8.528,1.786"
          transform="translate(1188.001 97.408) rotate(-13)"
        />
      </g>
    </svg>
  );
};

export default Icon;
