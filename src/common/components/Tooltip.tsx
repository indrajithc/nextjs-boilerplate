"use client";
import { FC, ReactNode, cloneElement, useRef, ReactElement, useEffect } from "react";

interface TooltipProps {
  overlay: ReactElement<any> | ReactNode;
  children: ReactNode;
}

const Tooltip: FC<TooltipProps> = (props) => {
  const { overlay, children } = props;

  const overlayRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  const handleMouseLeave = () => {
    if (tooltipRef.current) {
      tooltipRef.current?.classList.remove("show");
    }
  };

  const handleMouseOver = () => {
    if (overlayRef.current && tooltipRef.current && arrowRef.current) {
      const { left, width, bottom } = overlayRef?.current?.getBoundingClientRect();
      const { width: tooltipWidth } = tooltipRef?.current?.getBoundingClientRect();
      const { width: arrowWidth } = arrowRef?.current?.getBoundingClientRect();
      const widthCenter = Math.round((left - tooltipWidth / 2 + width / 2) * 100) / 100;
      tooltipRef.current?.classList.add("show");
      tooltipRef.current.style.transform = `translate( ${widthCenter}px, ${bottom}px)`;
      arrowRef.current.style.transform = `translate( ${tooltipWidth / 2 - arrowWidth / 2}px, 0px)`;
      tooltipRef.current.style.visibility = `unset`;
    }
  };

  useEffect(() => {
    handleMouseLeave();
    return () => handleMouseLeave();
  }, []);

  return (
    <div onMouseLeave={handleMouseLeave}>
      {cloneElement(overlay as React.ReactElement<any>, { onMouseOver: handleMouseOver, ref: overlayRef })}
      <div
        className="tooltip bs-tooltip-auto fade show"
        role="tooltip"
        id="tooltip534701"
        data-popper-placement="bottom"
        style={{
          position: "absolute",
          inset: "0px auto auto 0px",
          margin: "0px",
          visibility: "hidden",
        }}
        ref={tooltipRef}
      >
        <div
          className="tooltip-arrow"
          style={{
            position: "absolute",
            left: "0px",
          }}
          ref={arrowRef}
        />
        <div className="tooltip-inner">{children}</div>
      </div>
    </div>
  );
};

export default Tooltip;
