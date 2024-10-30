import styled, { css } from "styled-components";

const TabHeaderVar = css`
  --bs-nav-tabs-border-width: 0;
  --bs-nav-tabs-border-color: #e6e6e8;
  --bs-nav-tabs-border-radius: var(--bs-border-radius);
  --bs-nav-tabs-link-hover-border-color: var(--bs-secondary-bg)
    var(--bs-secondary-bg) #e6e6e8;
  --bs-nav-tabs-link-active-color: #7367f0;
  --bs-nav-tabs-link-active-bg: #fff;
  --bs-nav-tabs-link-active-border-color: #7367f0;
  --bs-nav-link-padding-x: 1.375rem;
  --bs-nav-link-padding-y: 0.5435rem;
  --bs-nav-link-font-size: 0.9375rem;
  --bs-nav-link-font-weight: 500;
  --bs-nav-link-color: #444050;
  --bs-nav-link-hover-color: var(--bs-link-hover-color);
  --bs-nav-link-disabled-color: #c1bfc5;
`;
const StyledTabHeader = styled.ul`
  ${TabHeaderVar}
  display: flex; /* Use flex for better responsiveness */
  width: 100%;
  overflow-x: auto; /* Keep horizontal overflow for small screens */
  border-bottom: 1px solid #e6e6e8;
  background: ${(props) => props.bgcolor || "#fff"};
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;

  & > li {
    flex: 0 0 auto; /* Prevent shrinking to keep tabs visible */
    white-space: nowrap; /* Prevent wrapping */

    & > button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-transform: capitalize;
      margin-right: 0.25rem; /* Margin for spacing between buttons */
      padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
      font-size: var(--bs-nav-link-font-size);
      font-weight: var(--bs-nav-link-font-weight);
      color: var(--bs-nav-link-color);
      background: transparent; /* Use transparent to avoid background issues */
      border: none; /* Remove unnecessary borders */
      cursor: pointer;
      transition: color 0.15s ease-in-out;

      &.active {
        box-shadow: 0 -2px 0 #7367f0 inset; /* Active tab style */
        color: var(--bs-nav-tabs-link-active-color);
      }
    }
  }
`;

export { StyledTabHeader };
