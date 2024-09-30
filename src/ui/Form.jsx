import styled from "styled-components";

const StyledForm = styled.form`
  display: block;
  margin-top: 0em;
  unicode-bidi: isolate;

  & > div {
    margin-bottom: 1.5rem !important;
    justify-content: flex-end !important;

    & > div > label {
      text-transform: inherit;
      letter-spacing: inherit;
      color: #444050;
      padding-top: calc(0.426rem + var(--bs-border-width));
      padding-bottom: calc(0.426rem + var(--bs-border-width));
      margin-bottom: 0;
      font-size: inherit;
      line-height: 1.625;
      display: inline-block;
    }
  }
`;
export default StyledForm;
