import styled, { css } from "styled-components";

const TableVar = css`
  --bs-table-color-type: initial;
  --bs-table-bg-type: initial;
  --bs-table-color-state: initial;
  --bs-table-bg-state: initial;
  --bs-table-color: var(--bs-body-color);
  --bs-table-border-color: #e6e6e8;
  --bs-table-accent-bg: transparent;
  --bs-table-striped-color: var(--bs-body-color);
`;
const Variations = {
  default: css`
    --bs-table-bg: transparent;
    --bs-table-striped-color: var(--bs-body-color);
    --bs-table-striped-bg: #f3f2f3;
    --bs-table-active-color: #6d6b77;
    --bs-table-active-bg: rgba(115, 103, 240, 0.08);
    --bs-table-hover-color: var(--bs-body-color);
    --bs-table-hover-bg: rgba(47, 43, 61, 0.06);
  `,
  dark: css`
    --bs-table-bg: #4b4b4b;
    --bs-table-striped-bg: #565656;
    --bs-table-striped-color: #fff;
    --bs-table-active-bg: #595959;
    --bs-table-active-color: #fff;
    --bs-table-hover-bg: #565656;
    --bs-table-hover-color: #fff;
    color: #fff;
    border-color: #616161;
  `,
};
const StyledTable = styled.table`
  ${TableVar}
  ${(props) => Variations[props.variation]}
  margin-bottom: 0;
  margin-bottom: 1rem;
  vertical-align: middle;
  border-color: ${(props) => props.bgcolor || "var(--bs-table-border-color)"};
  caption-side: bottom;
  border-spacing: 2px;
  box-sizing: border-box;
  width: 100%;
  background-color: var(--bs-table-bg);
  border-collapse: collapse;
  & thead,
  tr,
  th,
  td {
    border-color: inherit;
    border-style: solid;
    border-width: 0;
  }
  & tr.strip {
    background-color: var(--bs-table-active-bg);
  }
  & thead > tr > th {
    border-bottom-width: var(--bs-border-width);
    text-transform: uppercase;
    font-size: 0.8125rem;
    letter-spacing: 0.2px;
    background-clip: padding-box;
    padding: 0.782rem 1.25rem;
    font-weight: 700;
    text-align: -webkit-match-parent;
    ${(props) => Variations[props.headvariation]}
    background-color: var(--bs-table-bg);
  }
  & > th {
    border-width: 0;
    border-top-width: 1px;
    padding-block: 1.161rem;
  }
  & td {
    padding: 0.782rem 1.25rem;
    background-color: var(--bs-table-bg);
    box-shadow: inset 0 0 0 9999px
      var(
        --bs-table-bg-state,
        var(--bs-table-bg-type, var(--bs-table-accent-bg))
      );
    border-bottom-width: var(--bs-border-width);
  }
`;
StyledTable.defaultProps = {
  variation: "default",
};
export default StyledTable;
