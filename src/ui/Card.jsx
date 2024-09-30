import styled, { css } from "styled-components";

const CardVar = css`
  --bs-card-spacer-y: 1.5rem;
  --bs-card-spacer-x: 1.5rem;
  --bs-card-title-spacer-y: 0.5rem;
  --bs-card-title-color: #444050;
  --bs-card-subtitle-color: #8d8a94;
  --bs-card-border-width: 0;
  --bs-card-border-color: #e6e6e8;
  --bs-card-border-radius: 0.375rem;
  --bs-card-box-shadow: 0 0.1875rem 0.75rem 0 rgba(47, 43, 61, 0.14);
  --bs-card-inner-border-radius: 0.375rem;
  --bs-card-cap-padding-y: 1.5rem;
  --bs-card-cap-padding-x: 1.5rem;
  --bs-card-cap-bg: transparent;
  --bs-card-cap-color: #444050;
  --bs-card-height: ;
  --bs-card-color: ;
  --bs-card-bg: #fff;
  --bs-card-img-overlay-padding: 1.5rem;
  --bs-card-group-margin: 1.5rem;
`;
const StyledCard = styled.div`
  ${CardVar}
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: var(--bs-card-height);
  color: var(--bs-body-color);
  word-wrap: break-word;
  background-color: var(--bs-card-bg);
  border: var(--bs-card-border-width) solid var(--bs-card-border-color);
  border-radius: var(--bs-card-border-radius);
  background-clip: padding-box;
  box-shadow: 0 0.1875rem 0.75rem 0 rgba(47, 43, 61, 0.14);
`;
const StyledCardHeader = styled.div`
  padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
  margin-bottom: 0;
  color: var(--bs-card-cap-color);
  background-color: var(--bs-card-cap-bg);
  border-bottom: 1px solid var(--bs-card-border-color);
  border-color: #e6e6e8;
  &:first-child {
    border-radius: var(--bs-card-inner-border-radius)
      var(--bs-card-inner-border-radius) 0 0;
  }
  &.card-title {
    margin-bottom: var(--bs-card-title-spacer-y);
    color: var(--bs-card-title-color);
  }
`;
function Card({ children, ...props }) {
  return <StyledCard {...props}>{children}</StyledCard>;
}
Card.Header = StyledCardHeader;
export default Card;
