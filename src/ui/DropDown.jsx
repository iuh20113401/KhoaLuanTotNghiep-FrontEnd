import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDropdownMenu = styled.div`
  position: absolute;
  bottom: ${(props) => props.bottom || "100%"};
  z-index: 1000;
  box-shadow: 0 0.25rem 1.125rem 0 rgba(47, 43, 61, 0.16);
  padding: 0.5rem;
  background-color: var(--bs-white);
`;
const StyledLink = styled(Link)`
  display: flex;
  gap: 0.25rem;
  border-radius: 0.4rem;
  width: 100%;
  padding: 0.543rem 1rem;
  clear: both;
  font-weight: 400;
  color: var(--bs-dropdown-link-color);
  text-align: inherit;
  white-space: nowrap;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  &:hover {
    color: #444050;
    background-color: #f3f2f3;
  }
`;
export { StyledDropdownMenu, StyledLink };
