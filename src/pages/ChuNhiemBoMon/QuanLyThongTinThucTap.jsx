import { BsFileExcel } from "react-icons/bs";
import DanhSachToanBoThucTap from "../../components/ChuNhiemBoMon/QuanLySinhVien/DanhSachToanBoThucTap";
import Button from "../../ui/Button";
import Card from "../../ui/Card";

function QuanLyThongTinThucTap() {
  return (
    <div>
      <h5>Quản lý thực tập</h5>
      <div className="mt-2  text-end">
        <Button bgcolor="var(--bs-success)">
          <span>
            <BsFileExcel />
          </span>
          Xuất file excel
        </Button>
      </div>
      <Card className="mt-2">
        <DanhSachToanBoThucTap />
      </Card>
    </div>
  );
}

export default QuanLyThongTinThucTap;
