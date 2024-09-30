import styled from "styled-components";
import StyledTable from "../../../ui/Table";

const Link = styled.a`
  color: var(--bs-black);
  &:hover {
    color: var(--bs-primary);
  }
`;
function DanhSachBieuMauBaoCao({ DanhSachBieuMau }) {
  return (
    <div>
      <StyledTable>
        {DanhSachBieuMau.map((bm) => (
          <ChiTietBieuMau
            href={`http://localhost:3000/${bm.duongDan}`}
            ten={bm.ten}
            key={bm.duongDan}
          />
        ))}
      </StyledTable>
    </div>
  );
}
function ChiTietBieuMau({ href, ten }) {
  return (
    <tr>
      <td>
        <Link href={href} target="blank">
          {ten}
        </Link>
      </td>
    </tr>
  );
}
export default DanhSachBieuMauBaoCao;
