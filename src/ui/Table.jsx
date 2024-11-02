import styled, { css } from "styled-components";

const TableVar = css`
  --bs-table-color: var(--bs-body-color, #333);
  --bs-table-border-color: #e6e6e8;
  --bs-table-bg: transparent;
  --bs-table-striped-bg: #f3f2f3;
  --bs-table-hover-bg: rgba(47, 43, 61, 0.06);
  --bs-table-active-bg: rgba(115, 103, 240, 0.08);
`;

const Variations = {
  default: css`
    --bs-table-bg: transparent;
    --bs-table-striped-bg: #f3f2f3;
    --bs-table-hover-bg: rgba(47, 43, 61, 0.06);
    --bs-table-active-bg: rgba(115, 103, 240, 0.08);
  `,
  dark: css`
    --bs-table-bg: #4b4b4b;
    --bs-table-striped-bg: #565656;
    --bs-table-hover-bg: #595959;
    --bs-table-active-bg: #595959;
    color: #fff;
    border-color: #616161;
  `,
  striped: css`
    background-color: var(--bs-table-bg);
    & tr:nth-child(odd) {
      background-color: var(--bs-table-striped-bg);
    }
  `,
  hoverable: css`
    & tbody tr:hover {
      background-color: var(--bs-table-hover-bg);
    }
  `,
};

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 768px) {
    & table {
      width: 100%;
      font-size: 0.85rem;
    }
  }
`;

const StyledTableContainer = styled.table`
  ${TableVar}
  ${(props) => Variations[props.variation]}
  width: ${(props) =>
    props.variation === "overflow" ? "max-content" : "100%"};
  margin-bottom: 1rem;
  border-spacing: 2px;
  border-collapse: collapse;
  background-color: var(--bs-table-bg);
  box-sizing: border-box;

  & thead > tr > th {
    border-bottom: 1px solid var(--bs-table-border-color);
    text-transform: uppercase;
    font-size: 0.8125rem;
    padding: 0.782rem 1.25rem;
    font-weight: 700;
    letter-spacing: 0.2px;
    text-align: left;
    @media (max-width: 768px) {
      width: max-content !important;
      font-size: 0.5rem;
      padding: 0.5rem 1rem;
    }
  }

  & tbody > tr > td {
    padding: 0.782rem 1.25rem;
    border-bottom: 1px solid var(--bs-table-border-color);
    @media (max-width: 768px) {
      font-size: 0.5rem;
      padding: 0.5rem 1rem;
    }
  }

  & tr.striped-row {
    background-color: var(--bs-table-active-bg);
  }
  &.form {
    @media (max-width: 768px) {
      th,
      td {
        display: block;
        width: 100%;
      }

      thead {
        display: none;
      }

      tr {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        border: 1px solid #ddd;
      }
    }
  }
`;

function StyledTable({ children, variation = "default", ...props }) {
  return (
    <TableWrapper>
      <StyledTableContainer variation={variation} {...props}>
        {children}
      </StyledTableContainer>
    </TableWrapper>
  );
}

export default StyledTable;
