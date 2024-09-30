import styled, { css } from "styled-components";

const StyledTab = styled.div`
  border-radius: 0.375rem !important;
  display: flex;
  box-shadow: 0 0.1875rem 0.75rem 0 rgba(47, 43, 61, 0.14);
  flex-direction: column;
`;
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
  display: inline-flex;
  width: 100%;
  overflow-x: auto !important;
  overflow-y: hidden;
  border-bottom: 1px solid #e6e6e8;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
  border-bottom: var(--bs-nav-tabs-border-width) solid
    var(--bs-nav-tabs-border-color);
  background: ${(props) => props.bgcolor || " #fff"};
  flex-wrap: inherit;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  & > li {
    white-space: nowrap;
    outline: none !important;
    display: list-item;
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;
    & > button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-transform: capitalize;
      margin-right: 0.25rem;
      width: 100%;
      background-clip: padding-box;
      border-radius: 0;
      border: var(--bs-nav-tabs-border-width) solid rgba(0, 0, 0, 0);
      cursor: pointer;
      padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
      font-size: var(--bs-nav-link-font-size);
      font-weight: var(--bs-nav-link-font-weight);
      color: var(--bs-nav-link-color);
      background: none;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out;
      &.active {
        box-shadow: 0 -2px 0 #7367f0 inset;
        background-color: rgba(0, 0, 0, 0);
        color: var(--bs-nav-tabs-link-active-color);
      }
    }
  }
`;
const StyleTabContent = styled.div`
  flex-shrink: 1;
  background-clip: padding-box;
  background: #fff;
  border-bottom-right-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
  padding: 1.5rem;
  & > p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;
function Tab() {
  return (
    <StyledTab>
      <StyledTabHeader>
        <li class="nav-item" role="presentation">
          <button type="button" className="active">
            Home
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button type="button" class="nav-link">
            Profile
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button type="button" class="nav-link ">
            Messages
          </button>
        </li>
      </StyledTabHeader>
      <StyleTabContent>
        <p>
          Icing pastry pudding oat cake. Lemon drops cotton candy caramels cake
          caramels sesame snaps powder. Bear claw candy topping.
        </p>
        <p>
          Tootsie roll fruitcake cookie. Dessert topping pie. Jujubes wafer
          carrot cake jelly. Bonbon jelly-o jelly-o ice cream jelly beans candy
          canes cake bonbon. Cookie jelly beans marshmallow jujubes sweet.
        </p>
      </StyleTabContent>
    </StyledTab>
  );
}

export default Tab;
export { StyledTabHeader };
