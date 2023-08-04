import { FC } from "react";
import IconProps from "@models/IconProps";

const Icon: FC<IconProps> = (props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path
        d="M20.5 10C22.9853 10 25 7.98528 25 5.5C25 3.01472 22.9853 1 20.5 1C18.0147 1 16 3.01472 16 5.5C16 7.98528 18.0147 10 20.5 10Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 25C7.98528 25 10 22.9853 10 20.5C10 18.0147 7.98528 16 5.5 16C3.01472 16 1 18.0147 1 20.5C1 22.9853 3.01472 25 5.5 25Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 16H25V23.5C25 23.8978 24.842 24.2794 24.5607 24.5607C24.2794 24.842 23.8978 25 23.5 25H17.5C17.1022 25 16.7206 24.842 16.4393 24.5607C16.158 24.2794 16 23.8978 16 23.5V16ZM1 1H10V8.5C10 8.89782 9.84196 9.27936 9.56066 9.56066C9.27936 9.84196 8.89782 10 8.5 10H2.5C2.10218 10 1.72064 9.84196 1.43934 9.56066C1.15804 9.27936 1 8.89782 1 8.5V1Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Icon;
