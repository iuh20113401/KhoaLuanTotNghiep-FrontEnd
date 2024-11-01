import styled, { css } from "styled-components";

const ModalSizes = {
  sm: "",
  lg: css`
    --modal-width: 60vw;
  `,
  xl: css`
    --modal-width: 90vw;
  `,
};

const ModalVars = css`
  --modal-zindex: 1090;
  --modal-width: 35rem;
  --modal-padding: 1.5rem;
  --modal-margin: 1.5rem;
  --modal-bg: #fff;
  --modal-border-color: #e6e6e8;
  --modal-border-width: 0;
  --modal-border-radius: 0.5rem;
  --modal-box-shadow: 0 0.25rem 1.125rem rgba(47, 43, 61, 0.16);
  --modal-header-padding: 1.5rem 1.5rem 0;
  --modal-footer-gap: 1rem;
`;

const StyledModal = styled.div`
  ${ModalVars}
  ${(props) => ModalSizes[props.size || "sm"]}
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: var(--modal-zindex);
  padding-left: 0;
  background: rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  outline: 0;
  transition: opacity 0.15s linear;

  & > div {
    max-width: var(--modal-width);
    width: 100%;
    margin: var(--modal-margin) auto;
  }

  &.show > div {
    transform: translateY(0) scale(1);
  }
`;

const StyledModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;

  padding: var(--modal-padding);
  color: var(--modal-color);
  background-color: var(--modal-bg);
  border: var(--modal-border-width) solid var(--modal-border-color);
  border-radius: var(--modal-border-radius);
  box-shadow: var(--modal-box-shadow);
  outline: 0;
  pointer-events: auto; /* Allow interaction with children */
`;

const StyledModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: var(--modal-header-padding);
  border-bottom: 0;
  border-radius: calc(var(--modal-border-radius) - 0.5rem)
    calc(var(--modal-border-radius) - 0.5rem) 0 0;

  .btn-close {
    margin-left: auto;
    padding: 0.25em;
    color: #2f2b3d;
    background: none;
    border: none;
    opacity: 0.5;
    cursor: pointer;
    transition: opacity 0.2s;
    width: 1.125rem;
    height: 1.125rem;

    &:hover {
      opacity: 0.75;
    }
  }
`;

const StyledModalBody = styled.div`
  flex: 1;
  padding: var(--modal-padding);
  overflow-y: auto;
  max-height: 80%;
`;

const StyledModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: calc(var(--modal-padding) - var(--modal-footer-gap) / 2);
  border-top: 0;
  border-radius: 0 0 calc(var(--modal-border-radius) - 0.5rem)
    calc(var(--modal-border-radius) - 0.5rem);
`;

function Modal({ children, ...props }) {
  return (
    <StyledModal {...props}>
      <div>
        <StyledModalContent>{children}</StyledModalContent>
      </div>
    </StyledModal>
  );
}

Modal.Header = StyledModalHeader;
Modal.Body = StyledModalBody;
Modal.Footer = StyledModalFooter;

export default Modal;
