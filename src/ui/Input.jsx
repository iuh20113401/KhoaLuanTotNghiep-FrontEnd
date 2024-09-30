import styled, { css } from "styled-components";
import RadioSvg from "../../public/Radio.svg";
import CheckboxSvg from "../../public/Checkbox.svg";
const InputStyled = css`
  display: block;
  margin: 0;
  font-family: inherit;
  width: ${(props) => props.width || " 100%"};
  padding: calc(0.426rem - var(--bs-border-width))
    calc(0.9375rem - var(--bs-border-width));
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.625;
  color: #444050;
  appearance: none;
  background-color: rgba(0, 0, 0, 0);
  background-clip: padding-box;
  border: var(--bs-border-width) solid #d1d0d4;
  border-radius: var(--bs-border-radius);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  overflow-clip-margin: 0px !important;
  overflow: clip !important;
  &:focus {
    border-color: #7367f0 !important;
    border-width: 2px;
    padding: calc(0.426rem - 2px) calc(0.9375rem - 2px);
  }
  &.error {
    border-color: var(--bs-danger) !important;
  }
  &[type="file"] {
    cursor: pointer;
    white-space: pre;
    text-overflow: ellipsis;
    text-align: start !important;
    border: 0;
    &::file-selector-button {
      border: 1px solid #ccc;
      display: inline-block;
      padding: 6px 12px;
      cursor: pointer;
    }
  }
  &:disabled {
    color: var(--bs-black);

    opacity: 0.9;
  }
`;
const StyledInput = styled.input`
  ${InputStyled}
  ${(props) =>
    props.hidden
      ? css`
          display: none;
        `
      : ""}
`;
const StyledTextarea = styled.textarea`
  ${InputStyled}
  overflow-clip-margin: 0px !important;
  overflow-x: clip !important;
  overflow-y: scroll !important;
`;
const StyledSelect = styled.select`
  ${InputStyled}
  background-clip: padding-box;
  background-image: url("../public/SelectImage.svg");
  background-repeat: no-repeat;
  background-position: right 0.9375rem center;
  background-size: 22px 24px;
`;
const StyledFormCheck = styled.div`
  display: block;
  min-height: 1.3754296875rem;
  margin-bottom: 0.5rem;
  position: relative;
  --bs-gutter-y: 0;
  --bs-gutter-x: 0;

  & label {
    cursor: default;
    color: #444050;
    display: inline-block;
    margin-left: 0.5rem;
  }
  & > input:disabled + label {
    cursor: default;
    opacity: 0.45;
  }
`;
const StyledInputCheck = css`
  --bs-form-check-bg: transparent;
  flex-shrink: 0;
  width: 1.2em;
  height: 1.2em;
  margin-top: 0.0875em;
  vertical-align: top;
  appearance: none;
  background-color: var(--bs-form-check-bg);
  background-image: var(--bs-form-check-bg-image);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 2px solid #acaab1;
  print-color-adjust: exact;
`;
const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  border-radius: 0.267em;
  float: left;
  cursor: pointer;
  ${StyledInputCheck}
  &:checked {
    background-color: #7367f0;
    border-color: #7367f0;
    box-shadow: 0 2px 6px 0 rgba(115, 103, 240, 0.3);
    filter: brightness(90%);
    --bs-form-check-bg-image: url(${CheckboxSvg});
  }
  &:disabled {
    opacity: 0.45;
  }
`;
const StyledRadio = styled.input.attrs({ type: "radio" })`
  ${StyledInputCheck}
  background-size: 0.75rem;
  border-radius: 50%;
  float: left;
  cursor: pointer;
  &:checked {
    background-size: 1.3125rem;
    background-color: #7367f0;
    border-color: #7367f0;
    --bs-form-check-bg-image: url(${RadioSvg});
    outline: 0;
    box-shadow: none;
  }
`;
function CheckboxContainer({ label, register, ...props }) {
  return (
    <StyledFormCheck>
      <StyledCheckbox {...register} {...props} />
      <label>{label}</label>
    </StyledFormCheck>
  );
}
function RadioContainer({ label, register, ...props }) {
  return (
    <StyledFormCheck>
      <StyledRadio type="radio" {...register} {...props} />
      <label>{label}</label>
    </StyledFormCheck>
  );
}
export {
  StyledInput,
  StyledSelect,
  StyledTextarea,
  CheckboxContainer,
  RadioContainer,
};
