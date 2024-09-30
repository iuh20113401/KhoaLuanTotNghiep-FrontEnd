import styled from "styled-components";
const MessageWrapper = styled.div`
  display: flex;
  margin-bottom: 3rem;
  &.you {
    justify-content: flex-end;
  }
`;
const MessageDiv = styled.div`
  background-color: #fff;
  box-shadow: 0 0.0625rem 0.375rem 0 rgba(47, 43, 61, 0.1);
  border-radius: 0.375rem;
  border-top-left-radius: 0;
  padding: 0.543rem 1rem;
  &.you {
    color: #fff;
    background-color: #7367f0 !important;
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0;
  }
`;
export { MessageDiv, MessageWrapper };
