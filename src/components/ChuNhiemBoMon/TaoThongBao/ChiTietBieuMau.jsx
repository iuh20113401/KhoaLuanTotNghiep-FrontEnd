import { Link } from "react-router-dom";

function ChiTietBieuMau({ bieuMau }) {
  return (
    <tr>
      <td>
        <div className="flex">
          <Link href={bieuMau.duongDan} target="blank">
            {bieuMau.ten}
          </Link>
        </div>
      </td>
    </tr>
  );
}
export default ChiTietBieuMau;
