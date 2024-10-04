import { HiDownload } from "react-icons/hi";
import Button from "../../../ui/Button";
import formatVieNamDate from "../../../utils/FormatDate";
import { Link } from "react-router-dom";
const SERVER = import.meta.env.PROD
  ? import.meta.env.VITE_SERVER_URL
  : import.meta.env.VITE_SERVER_URL_LOCAL;
function ChiTietBieuMau({ bieuMau }) {
  return (
    <tr>
      <td>{bieuMau.ten}</td>
      <td>{formatVieNamDate(bieuMau.ngayTao)}</td>
      <td>{bieuMau.dungLuong}</td>
      <td>
        <Link to={`${SERVER}${bieuMau.duongDan}`}>
          <Button variation="icon">
            <HiDownload />
          </Button>
        </Link>
      </td>
    </tr>
  );
}

export default ChiTietBieuMau;
