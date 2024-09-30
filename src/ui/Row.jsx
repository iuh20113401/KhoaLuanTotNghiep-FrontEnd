import styled, { css } from "styled-components";
const RowVar = css`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
`;
const StyledRow = styled.div`
  ${RowVar}
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  gap: ${(props) => props.gap || "0px"};
  box-sizing: border-box;
`;
const ColLg = styled.div`
  flex: 1 0 0%;
`;
const Col10 = styled.div`
  flex: 0 0 auto;
  width: 83.33333333%;
`;
const Col3 = styled.div`
  flex: 0 0 auto;
  width: 25%;
`;
const Col9 = styled.div`
  flex: 0 0 auto;
  width: 75%;
`;
const Col8 = styled.div`
  flex: 0 0 auto;
  width: 66.66666667%;
`;
const Col4 = styled.div`
  flex: 0 0 auto;
  width: 33.33333333%;
`;
const Col2 = styled.div`
  flex: 0 0 auto;
  width: 16.66666667%;
`;
const Col1 = styled.div`
  flex: 0 0 auto;
  width: 8.33333333%;
`;
export { StyledRow, ColLg, Col10, Col1, Col2, Col3, Col4, Col8, Col9 };
