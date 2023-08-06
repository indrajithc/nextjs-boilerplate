"use client";
import { FC, useState, useRef, useEffect } from "react";

import IconChevronDown from "@icons/IconChevronDown";
import IconUser from "@icons/IconUser";
import IconSignOut from "@icons/IconSignOut";

interface HeaderOptionDropdownProps {
  className: string;
}

const HeaderOptionDropdown: FC<HeaderOptionDropdownProps> = (props) => {
  const { className } = props;

  const [show, setShow] = useState<Boolean | undefined>(undefined);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [optionsTop, setOptionsTop] = useState<Number>(0);

  const handleClose = ({ target }: MouseEvent) => {
    if (!containerRef.current?.contains(target as Node)) {
      setShow(false);
    }
  };

  const handleClick = () => {
    if (buttonRef.current) {
      const { height } = buttonRef.current?.getBoundingClientRect();
      setOptionsTop(height);
    }
    setShow(!show);
  };

  const handleItemClick = () => {
    setShow(false);
  };

  useEffect(() => {
    if (show) {
      document.addEventListener("click", handleClose);
    } else {
      document.removeEventListener("click", handleClose);
    }

    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [show]);

  return (
    <div className={`${className} dropdown`} ref={containerRef}>
      <a className="navbar-user" onClick={handleClick} ref={buttonRef}>
        <span>Michael Richard</span>
        <IconChevronDown className="icon xs fill-muted ms-1" />
      </a>

      {show !== undefined ? (
        <div
          role="menu"
          onClick={handleItemClick}
          className={`dropdown-menu ${show ? "show" : ""}`}
          style={{ right: 0, transform: `translate(0px, ${optionsTop}px)` }}
        >
          <button className="btn btn-username">
            <span className="name">Michael Richard</span>
            <span className="mail">Michael@gmail.com</span>
          </button>
          <div className="dropdown-divider"></div>
          <button type="button" role="menuitem" className="dropdown-item">
            <IconUser className="icon sm stroke-muted me-2" />
            View Profile
          </button>
          <div className="dropdown-divider"></div>
          <button type="button" role="menuitem" className="dropdown-item">
            <IconSignOut className="icon sm stroke-muted me-2" />
            Logout
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HeaderOptionDropdown;
