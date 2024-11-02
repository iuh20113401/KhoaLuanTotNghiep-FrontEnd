import { HiDownload } from "react-icons/hi";
import Button from "../../../ui/Button";
import StyledTable from "../../../ui/Table";
import Card from "../../../ui/Card";
import { useMobile } from "../../../context/MobileContext";

function BieuMau() {
  const isMobile = useMobile();
  return (
    <div className="mt-3">
      <h4>Biểu mẫu</h4>
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
            <tr>
              <td width={isMobile && "40%"}>
                BaoCao_NguyenTuanKiet_NguyenNgocKhanh
              </td>
              <td width={isMobile && "40%"}>23/09/2024</td>
              <td>20MB</td>
              <td>
                <Button variation="icon">
                  <HiDownload />
                </Button>
              </td>
            </tr>
          </tbody>
        </StyledTable>
      </Card>
    </div>
  );
}

export default BieuMau;
