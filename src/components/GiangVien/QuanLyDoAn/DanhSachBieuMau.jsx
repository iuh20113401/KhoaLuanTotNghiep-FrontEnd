import styled from "styled-components";
import StyledTable from "../../../ui/Table";
const SERVER = import.meta.env.PROD
  ? import.meta.env.VITE_SERVER_URL
  : import.meta.env.VITE_SERVER_URL_LOCAL;
const Link = styled.a`
  color: var(--bs-black);
  &:hover {
    color: var(--bs-primary);
  }
`;
function DanhSachBieuMau({ DanhSachBieuMau }) {
  return (
    <div>
      <StyledTable>
        {DanhSachBieuMau.map((bm) => (
          <ChiTietBieuMau
            href={`${SERVER}${bm.duongDan}`}
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
export default DanhSachBieuMau;
