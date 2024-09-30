import styled, { css } from "styled-components";
const Variations = {
  default: css`
    font-size: var(--bs-badge-font-size);
    line-height: 1;
    padding: var(--bs-badge-padding-y) var(--bs-badge-padding-x);
  `,
  icon: css`
    line-height: 1.375;
    height: 1.5rem;
    width: 1.5rem;
    font-size: 0.812rem;
    & > span {
      & > svg {
        font-size: ${(props) => props.fontSize || "1rem"};
        font-family: "tabler-icons" !important;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        vertical-align: middle;
        display: inline-block;
      }
    }
  `,
};
const BadgesVar = css`
  --bs-badge-padding-x: 0.77em;
  --bs-badge-padding-y: 0.4235em;
  --bs-badge-font-size: 0.8667em;
  --bs-badge-font-weight: 500;
  --bs-badge-color: #fff;
  --bs-badge-border-radius: 0.25rem;
  --bs-bg-opacity: 1;
`;
const StyledBage = styled.span`
  ${BadgesVar}
  display: inline-block;
  font-weight: var(--bs-badge-font-weight);
  color: ${(props) => (props.color ? props.color : "var(--bs-badge-color)")};
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: ${(props) =>
    props.pill ? "50rem !important" : "var(--bs-badge-border-radius)"};
  background-color: ${(props) => props.bgcolor || "var(--bs-primary)"};
  ${(props) => Variations[props.variation]}
`;
function Badges({ content, children, ...props }) {
  return <StyledBage {...props}>{content || children}</StyledBage>;
}
Badges.defaultProps = {
  variation: "default",
};
export default Badges;
