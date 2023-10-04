"use client";
import { FC, ReactNode, useRef, ReactElement, useEffect } from "react";

interface TooltipProps {
  overlay: ReactElement<any> | ReactNode;
  children: ReactNode;
  placement: "right" | "bottom";
}

const Tooltip: FC<TooltipProps> = (props) => {
  const { overlay, placement, children } = props;

  const overlayRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  const handleMouseLeave = () => {
    if (tooltipRef.current) {
      tooltipRef.current?.classList.remove("show");
    }
  };

  const handleMouseOver = () => {
    if (overlayRef.current && tooltipRef.current && arrowRef.current) {
      const { left, width, bottom, top, height } = overlayRef?.current?.getBoundingClientRect();
      const { width: tooltipWidth, height: tooltipHeight } = tooltipRef?.current?.getBoundingClientRect();
      const { width: arrowWidth, height: arrowHeight } = arrowRef?.current?.getBoundingClientRect();
      tooltipRef.current?.classList.add("show");
      tooltipRef.current.style.visibility = `unset`;

      const dimensions = {
        el: 0,
        et: 0,
        al: 0,
        at: 0,
      };

      switch (placement) {
        case "right": {
          dimensions.el = left + width;
          dimensions.et = top - (tooltipHeight / 2 - height / 2);
          dimensions.al = 0;
          dimensions.at = arrowHeight / 2;
          break;
        }
        case "bottom":
        default: {
          const widthCenter = Math.round((left - tooltipWidth / 2 + width / 2) * 100) / 100;
          dimensions.el = widthCenter;
          dimensions.et = bottom;
          dimensions.al = tooltipWidth / 2 - arrowWidth / 2;
          dimensions.at = 0;
          break;
        }
      }

      tooltipRef.current.style.transform = `translate( ${dimensions.el}px, ${dimensions.et}px)`;
      arrowRef.current.style.transform = `translate( ${dimensions.al}px, ${dimensions.at}px)`;
    }
  };

  useEffect(() => {
    handleMouseLeave();
    return () => handleMouseLeave();
  }, []);

  return (
    <div onMouseLeave={handleMouseLeave}>
      <div onMouseOver={handleMouseOver} ref={overlayRef}>
        {overlay}
      </div>
      <div
        className="tooltip bs-tooltip-auto fade show"
        role="tooltip"
        id="tooltip534701"
        data-popper-placement={placement}
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
