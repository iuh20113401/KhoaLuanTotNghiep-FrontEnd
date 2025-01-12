import StyledTable from "../../../ui/Table";
const SERVER = import.meta.env.PROD
  ? import.meta.env.VITE_SERVER_URL
  : import.meta.env.VITE_SERVER_URL_LOCAL;

function DanhSachBieuMau({ DanhSachBieuMau }) {
  return (
    <div>
      <StyledTable>
        {DanhSachBieuMau?.map((bm) => (
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
        <a className="link" href={href} target="blank">
          {ten}
        </a>
      </td>
    </tr>
  );
}
export default DanhSachBieuMau;
