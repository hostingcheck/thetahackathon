import styled from "styled-components";
import PropTypes from "prop-types";

// Define the theme directly in this file
const theme = {
  colors: {
    primary: "#5bc5a7",
    secondary: "#83d2ba",
    orange: "#FF8027",
    darkOrange: "#f37217",
    green: "#78B75E",
    darkGreen: "#55b32f",
    red: "#ec5050",
    darkRed: "#ce4444",
    blue: "#418CC9",
    darkBlue: "#1a7bcb",
    gray: "#818589",
    darkGray: "#999595",
    white: "#FFFFFF",
    black: "#000",
    darkBG: "#202124",
    sectionBG: "#36373a",
    darkText: "#F5F5F7",
    lightBG: "#F2F2F2",
    lightText: "#2E0509",
  },
  shadows: {
    button: 'rgb(0 0 0 / 12%) 0px 1px 6px, rgb(0 0 0 / 12%) 0px 1px 4px'
  }
};

const colorMap = {
  primary: {
    color: theme.colors.white,
    bg: theme.colors.primary,
    hoverBg: theme.colors.secondary,
  },
  secondary: {
    color: theme.colors.white,
    bg: theme.colors.secondary,
    hoverBg: theme.colors.primary,
  },
  success: {
    color: theme.colors.white,
    bg: theme.colors.green,
    hoverBg: theme.colors.darkGreen,
  },
  warning: {
    color: theme.colors.white,
    bg: theme.colors.orange,
    hoverBg: theme.colors.darkOrange,
  },
  error: {
    color: theme.colors.white,
    bg: theme.colors.red,
    hoverBg: theme.colors.darkRed,
  },
};

const StyledButton = styled.button(
  ({ size, $variant, $outlined }) => `
  padding: 0 ${size === "large" ? 1.8 : 1.5}rem;
  height: ${size === "large" ? 5 : 3}rem;
  border: 1px solid ${colorMap[$variant].bg};
  background: ${$outlined ? theme.colors.white : colorMap[$variant].bg};
  color: ${$outlined ? colorMap[$variant].bg : colorMap[$variant].color};
  border-radius: 4px;
  font-size: ${size === "large" ? 1.8 : 1}rem;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  box-shadow: ${theme.shadows.button};
  :not([disabled]) {
    cursor: pointer;
  }
  :hover {
    background: ${colorMap[$variant].hoverBg};
    color: ${colorMap[$variant].color};
    border-color: ${colorMap[$variant].hoverBg};
  }
  :disabled {
    cursor: not-allowed;
  }
`
);

const Button = ({
  variant = "primary",
  size = "medium",
  disabled = false,
  outlined = false,
  children,
  type = "button",
  ...rest
}) => {
  return (
    <StyledButton
      $variant={variant}
      size={size}
      disabled={disabled}
      $outlined={outlined}
      type={type}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  outlined: PropTypes.bool,
  children: PropTypes.any,
  type: PropTypes.string,
};

export default Button;
