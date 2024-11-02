import styled, { css } from "styled-components";

const ButtonVar = css`
  --bs-btn-padding-x: 1.25rem;
  --bs-btn-padding-y: 0.4812rem;
  --bs-btn-font-size: 0.9375rem;
  --bs-btn-font-weight: 500;
  --bs-btn-line-height: 1.375;
  --bs-btn-color: var(--bs-body-color);
  --bs-btn-bg: transparent;
  --bs-btn-border-width: var(--bs-border-width);
  --bs-btn-border-color: transparent;
  --bs-btn-border-radius: var(--bs-border-radius);
  --bs-btn-hover-border-color: transparent;
  --bs-btn-box-shadow: none;
  --bs-btn-disabled-opacity: 0.8;
  --bs-btn-focus-box-shadow: 0 0 0 0.05rem
    rgba(var(--bs-btn-focus-shadow-rgb), 0.5);
`;

const States = {
  normal: css``,
  active: css``,
  disabled: css`
    cursor: not-allowed;
    color: var(--bs-btn-disabled-color);
    pointer-events: none;
    background-color: var(--bs-btn-disabled-bg);
    border-color: var(--bs-btn-disabled-border-color);
    opacity: var(--bs-btn-disabled-opacity);
  `,
};

const Size = {
  block: css`
    width: 100%;
  `,
  xl: css`
    --bs-btn-padding-y: 0.809rem;
    --bs-btn-padding-x: 1.75rem;
    --bs-btn-font-size: 1.1875rem;
    --bs-btn-border-radius: 0.625rem;
  `,
  lg: css`
    --bs-btn-padding-y: 0.708rem;
    --bs-btn-padding-x: 1.625rem;
    --bs-btn-font-size: 1.0625rem;
    --bs-btn-border-radius: var(--bs-border-radius-lg);
  `,
  normal: css``,
  sm: css`
    line-height: 1.375;
  `,
  xs: css`
    --bs-btn-padding-y: 0.153rem;
    --bs-btn-padding-x: 0.75rem;
    --bs-btn-font-size: 0.6875rem;
    --bs-btn-border-radius: 0.125rem;
  `,
};

const Variations = {
  default: css`
    background-color: ${(props) => props.bgcolor || "var(--bs-primary)"};
  `,
  outline: css`
    border-color: ${(props) => props.bgcolor || "var(--bs-primary)"};
    background-color: var(--bs-btn-bg);
  `,
  text: css`
    background-color: var(--bs-btn-bg);
    border-color: var(--bs-btn-bg);
  `,
  icon: css`
    background-color: ${(props) => props.bgcolor || "var(--bs-primary)"};
    --bs-btn-active-border-color: transparent;
    padding: 0;
    width: calc(2.25rem + var(--bs-border-width) * 2);
    height: calc(2.25rem + var(--bs-border-width) * 2);
    justify-content: center;
    align-items: center;

    & svg {
      color: ${(props) => props.color || "var(--bs-white)"};
    }
    & span {
      margin-right: 0;
    }
  `,
};

const StyledButton = styled.button`
  ${ButtonVar}

  & > span {
    margin-right: 0.5rem;
    line-height: 0.9;
    font-size: 1rem;
    font-family: "tabler-icons";
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    vertical-align: middle;
    display: inline-block;
  }

  /* Responsive Adjustments */
  @media (max-width: 992px) {
    --bs-btn-padding-x: 1rem;
    --bs-btn-padding-y: 0.5rem;
    --bs-btn-font-size: 0.85rem;
  }

  @media (max-width: 768px) {
    --bs-btn-padding-x: 0.75rem;
    --bs-btn-padding-y: 0.4rem;
    --bs-btn-font-size: 0.6rem;
    width: max-content;
  }

  @media (max-width: 576px) {
    --bs-btn-padding-x: 0.5rem;
    --bs-btn-padding-y: 0.3rem;
  }

  width: fit-content;
  height: fit-content;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
  font-family: var(--bs-btn-font-family);
  font-size: var(--bs-btn-font-size);
  font-weight: var(--bs-btn-font-weight);
  line-height: var(--bs-btn-line-height);
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-transform: none;
  border-radius: ${(props) =>
    props.rounded
      ? "var(--bs-border-radius-pill)"
      : "var(--bs-btn-border-radius)"};
  color: ${(props) => props.color || "var(--bs-white)"};
  ${(props) => Variations[props.variation]}
  ${(props) => Size[props.size]}
  ${(props) => States[props.state]}
`;

function Button({ children, icon, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

Button.defaultProps = {
  variation: "default",
  size: "normal",
  state: "normal",
};

export default Button;
