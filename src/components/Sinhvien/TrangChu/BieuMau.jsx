import { HiDownload } from "react-icons/hi";
import Button from "../../../ui/Button";
import StyledTable from "../../../ui/Table";
import Card from "../../../ui/Card";
import { useMobile } from "../../../context/MobileContext";
import { useQuery } from "@tanstack/react-query";
import { layDanhSachBieuMauChung } from "../../../services/BieuMauChung";
import formatVieNamDate from "../../../utils/FormatDate";
import { Link } from "react-router-dom";
const SERVER = import.meta.env.PROD
  ? import.meta.env.VITE_SERVER_URL
  : import.meta.env.VITE_SERVER_URL_LOCAL;
function BieuMau() {
  const isMobile = useMobile();
  const { data, isLoading } = useQuery({
    queryKey: ["DanhSachBieuMauChung"],
    queryFn: layDanhSachBieuMauChung,
  });
  if (isLoading) return;
  const DanhSachBieuMau = data?.danhSachBieuMau;
  return (
    <div className="mt-3">
      <h5>Biểu mẫu chung</h5>
      <Card className="mt-1">
        <StyledTable>
          <thead>
            <tr>
              <th width={isMobile ? "30%" : "50%"}>Tên biểu mẫu</th>
              <th>Ngày đăng</th>
              <th>Dung lượng</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {DanhSachBieuMau.map((bm) => (
              <tr key={bm._id}>
                <td width={isMobile && "40%"}>{bm.ten}</td>
                <td width={isMobile && "40%"}>
                  {formatVieNamDate(bm.ngayTao)}
                </td>
                <td>{bm.dungLuong}</td>
                <td>
                  <Link to={`${SERVER}${bm.duongDan}`}>
                    <Button variation="icon">
                      <HiDownload />
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </Card>
    </div>
  );
}

export default BieuMau;
