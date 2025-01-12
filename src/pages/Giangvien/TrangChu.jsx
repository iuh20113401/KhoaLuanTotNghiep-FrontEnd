import { NavLink } from "react-router-dom";
import Card from "../../ui/Card";
import StyledTable from "../../ui/Table";
import Button from "../../ui/Button";
import { HiDownload } from "react-icons/hi";

function GiangVienTrangChu() {
  return (
    <div>
      <h4>Trang chủ</h4>
      <div>
        <h5>
          <b>Thông báo</b>
        </h5>
        <Card className="p-2">
          <div className="thong-bao-div">
            <NavLink to="#">
              <p>Some thing must read before do</p>
            </NavLink>
            <NavLink to="#">
              <p>Some thing must read before do</p>
            </NavLink>
            <NavLink to="#">
              <p>Some thing must read before do</p>
            </NavLink>
            <NavLink to="#">
              <p>Some thing must read before do</p>
            </NavLink>
          </div>
        </Card>
      </div>
      <div className="mt-4">
        <h5>Biểu mẫu</h5>
        <Card>
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
    </div>
  );
}

export default GiangVienTrangChu;
