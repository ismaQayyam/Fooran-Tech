import React from "react";
import "../../src/Style/global.css";

/**
 * GlobalButton
 *
 * Props:
 * - children: node
 * - onClick: func
 * - size: "sm" | "md" | "lg" | undefined  (quick presets)
 * - style: object  (pass custom width/height or CSS variables)
 * - className: string (extra classes)
 * - fullWidth: boolean (makes width:100%)
 * - disabled: boolean
 * - type: "button" | "submit" | "reset"
 *
 * How to customize size directly per component:
 * <GlobalButton style={{ width: "200px", height: "48px" }}>Click</GlobalButton>
 *
 * Or use presets:
 * <GlobalButton size="sm">Small</GlobalButton>
 */
const SIZE_MAP = {
  sm: {
    "--btn-h": "32px",
    "--btn-fs": "14px",
    "--btn-px": "10px",
  },
  md: {
    "--btn-h": "44px",
    "--btn-fs": "16px",
    "--btn-px": "16px",
  },
  lg: {
    "--btn-h": "56px",
    "--btn-fs": "18px",
    "--btn-px": "20px",
  },
};

const GlobalButton = ({
  children,
  onClick,
  size,
  style = {},
  className = "",
  fullWidth = false,
  disabled = false,
  type = "button",
  ...rest
}) => {
  const sizeVars = size && SIZE_MAP[size] ? SIZE_MAP[size] : {};
  const finalStyle = { ...sizeVars, ...style };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`global-btn ${fullWidth ? "full" : ""} ${disabled ? "is-disabled" : ""} ${className}`}
      style={finalStyle}
      aria-disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default GlobalButton;
