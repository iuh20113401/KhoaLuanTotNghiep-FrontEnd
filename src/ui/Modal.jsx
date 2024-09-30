import styled, { css } from "styled-components";
const Sizes = {
  sm: "",
  lg: css`
    --bs-modal-width: 50rem;
  `,
  xl: css`
    --bs-modal-width: 1140px;
  `,
};

const ModalVar = css`
  --bs-modal-zindex: 1090;
  --bs-modal-width: 35rem;
  --bs-modal-padding: 1.5rem;
  --bs-modal-margin: 1.5rem;
  --bs-modal-color: ;
  --bs-modal-bg: #fff;
  --bs-modal-border-color: #e6e6e8;
  --bs-modal-border-width: 0px;
  --bs-modal-border-radius: 0.5rem;
  --bs-modal-box-shadow: 0 0.25rem 1.125rem 0 rgba(47, 43, 61, 0.16);
  --bs-modal-inner-border-radius: calc(0.5rem - 0px);
  --bs-modal-header-padding-x: 0rem;
  --bs-modal-header-padding-y: 1.5rem;
  --bs-modal-header-padding: 1.5rem 1.5rem 0rem;
  --bs-modal-header-border-color: var(--bs-border-color);
  --bs-modal-header-border-width: 0px;
  --bs-modal-title-line-height: 1.375;
  --bs-modal-footer-gap: 1rem;
  --bs-modal-footer-bg: ;
  --bs-modal-footer-border-color: var(--bs-border-color);
  --bs-modal-footer-border-width: 0px;
`;
const StyledModal = styled.div`
  ${ModalVar}
  ${(props) => Sizes[props.size || "sm"]}
  display: block;
  padding-left: 0px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--bs-modal-zindex);
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  transition: opacity 0.15s linear;
  &.show > div {
    transform: translateY(0) scale(1);
  }
  &::after {
    content: "";
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
  & > div {
    max-width: var(--bs-modal-width);
    position: relative;
    width: auto;
    margin: var(--bs-modal-margin);
    margin-right: auto;
    margin-left: auto;
    pointer-events: none;
  }
`;
const StyledModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--bs-modal-color);
  pointer-events: auto;
  background-color: var(--bs-modal-bg);
  background-clip: padding-box;
  border: var(--bs-modal-border-width) solid var(--bs-modal-border-color);
  border-radius: var(--bs-modal-border-radius);
  outline: 0;
  box-shadow: 0 0.25rem 1.125rem 0 rgba (47, 43, 61, 0.16);
`;
const StyledModalHeader = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  padding: var(--bs-modal-header-padding);
  border-bottom: var(--bs-modal-header-border-width) solid
    var(--bs-modal-header-border-color);
  border-top-left-radius: var(--bs-modal-inner-border-radius);
  border-top-right-radius: var(--bs-modal-inner-border-radius);
  & > .btn-close {
    position: absolute;
    right: 0.8125rem;
    top: 1.6875rem;
    transform: translate(23px, -25px);
    border-radius: 0.25rem;
    opacity: 1;
    padding: 0.3757rem;
    box-shadow: 0 0.0625rem 0.375rem 0 rgba(47, 43, 61, 0.1);
    transition: all 0.23s ease 0.1s;
    margin: calc(-0.5 * var(--bs-modal-header-padding-y))
      calc(-0.5 * var(--bs-modal-header-padding-x))
      calc(-0.5 * var(--bs-modal-header-padding-y)) auto;
    --bs-btn-close-color: #2f2b3d;
    --bs-btn-close-opacity: 0.5;
    --bs-btn-close-hover-opacity: 0.75;
    --bs-btn-close-focus-shadow: none;
    --bs-btn-close-focus-opacity: 0.75;
    --bs-btn-close-disabled-opacity: 0.25;
    --bs-btn-close-white-filter: invert(1) grayscale(100%) brightness(200%);
    box-sizing: content-box;
    width: 1.125rem;
    height: 1.125rem;
    padding: 0.25em 0.25em;
    color: var(--bs-btn-close-color);
    background: var(--bs-white);
    border: 0;
  }
`;
const StyledModalBody = styled.div`
  position: relative;
  flex: 1 1 auto;
  padding: var(--bs-modal-padding);
`;
const StyledModalFooter = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * 0.5);
  background-color: var(--bs-modal-footer-bg);
  border-top: var(--bs-modal-footer-border-width) solid
    var(--bs-modal-footer-border-color);
  border-bottom-right-radius: var(--bs-modal-inner-border-radius);
  border-bottom-left-radius: var(--bs-modal-inner-border-radius);
`;
function Modal({ children, setModal, ...props }) {
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
