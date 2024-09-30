import { HiDownload } from "react-icons/hi";
import Button from "../../../ui/Button";
import formatVieNamDate from "../../../utils/FormatDate";
import { Link } from "react-router-dom";

function ChiTietBieuMau({ bieuMau }) {
  return (
    <tr>
      <td>{bieuMau.ten}</td>
      <td>{formatVieNamDate(bieuMau.ngayTao)}</td>
      <td>{bieuMau.dungLuong}</td>
      <td>
        <Link to={`http://localhost:3000/${bieuMau.duongDan}`}>
          <Button variation="icon">
            <HiDownload />
          </Button>
        </Link>
      </td>
    </tr>
  );
}

export default ChiTietBieuMau;
