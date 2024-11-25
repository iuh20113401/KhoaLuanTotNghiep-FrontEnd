import styled, { css } from "styled-components";
import RadioSvg from "../../public/Radio.svg";
import CheckboxSvg from "../../public/Checkbox.svg";

const inputStyles = css`
  display: block;
  width: ${(props) => props.width || "100%"};
  padding: 0.426rem 0.9375rem;
  font-size: 0.9375rem;
  color: #444050;
  background: transparent;
  border: 1px solid #d1d0d4;
  border-radius: 0.375rem;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: #7367f0;
    border-width: 2px;
  }

  &.error {
    border-color: var(--bs-danger);
  }

  &[type="file"] {
    cursor: pointer;
    &::file-selector-button {
      border: 1px solid #ccc;
      padding: 6px 12px;
      cursor: pointer;
    }
  }

  &:disabled {
    color: black;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 0.6rem;
    padding: 0.25rem 0.55rem;
  }
`;

const StyledInput = styled.input`
  ${inputStyles}
  display: ${(props) => (props.hidden ? "none" : "block")};
`;

const StyledTextarea = styled.textarea`
  ${inputStyles}
  overflow-y: scroll;
`;

const StyledSelect = styled.select`
  ${inputStyles}
  @media (max-width: 768px) {
    max-width: max-content;
  }
`;

const StyledFormCheck = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  label {
    cursor: pointer;
    color: #444050;
    margin-left: 0.5rem;
  }

  input:disabled + label {
    opacity: 0.45;
  }
  font-size: 0.9375rem;
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const checkboxRadioStyles = css`
  width: 1.2em;
  height: 1.2em;
  margin-top: 0.0875em;
  background-color: transparent;
  border: 2px solid #acaab1;
  cursor: pointer;

  &:checked {
    background-color: #7367f0;
    border-color: #7367f0;
    box-shadow: 0 2px 6px rgba(115, 103, 240, 0.3);
  }

  &:disabled {
    opacity: 0.45;
  }
`;

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  ${checkboxRadioStyles}
  border-radius: 0.267em;
  background-image: url(${CheckboxSvg});
  background-size: contain;
`;

const StyledRadio = styled.input.attrs({ type: "radio" })`
  ${checkboxRadioStyles}
  border-radius: 50%;
  background-image: url(${RadioSvg});
  background-size: 1.3125rem;
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
      <StyledRadio {...register} {...props} />
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
