import { HiDownload } from "react-icons/hi";
import Button from "../../../ui/Button";
import StyledTable from "../../../ui/Table";
import Card from "../../../ui/Card";

function BieuMau() {
  return (
    <div className="mt-3">
      <h4>Biểu mẫu</h4>
      <Card className="mt-1">
        <StyledTable>
          <thead>
            <tr>
              <th>Tên biểu mẫu</th>
              <th>Ngày đăng</th>
              <th>Dung lượng</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BaoCao_NguyenTuanKiet_NguyenNgocKhanh</td>
              <td>23/09/2024</td>
              <td>20MB</td>
              <td>
                <Button variation="icon">
                  <HiDownload />
                </Button>
              </td>
            </tr>
            <tr>
              <td>BaoCao_NguyenTuanKiet_NguyenNgocKhanh</td>
              <td>23/09/2024</td>
              <td>20MB</td>
              <td>
                <Button variation="icon">
                  <HiDownload />
                </Button>
              </td>
            </tr>
            <tr>
              <td>BaoCao_NguyenTuanKiet_NguyenNgocKhanh</td>
              <td>23/09/2024</td>
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
