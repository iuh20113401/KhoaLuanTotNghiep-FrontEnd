import styled from "styled-components";

const StyledButtonGroup = styled.div`
  margin-top: 0 !important;
  border-radius: var(--bs-border-radius);
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  & > * {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin-left: calc(var(--bs-border-width) * -1);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-color: #82808b;
  }
  &:focus-within * {
    border-color: #7367f0 !important;
    border-width: 2px;
  }
  & > input {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    min-width: 0;
  }
`;
const StyledButtonGroupText = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.625;
  color: #444050;
  text-align: center;
  white-space: nowrap;
  background-color: rgba(0, 0, 0, 0);
  border: var(--bs-border-width) solid #d1d0d4;
  border-radius: var(--bs-border-radius);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-color: #82808b;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-width: 1px;
  padding: calc(0.426rem - 2px) calc(0.9375rem - var(--bs-border-width));
  box-shadow: none;
`;
function ButtonGroup({ icon, children }) {
  return (
    <StyledButtonGroup>
      <StyledButtonGroupText>{icon}</StyledButtonGroupText>
      {children}
    </StyledButtonGroup>
  );
}

export default ButtonGroup;
