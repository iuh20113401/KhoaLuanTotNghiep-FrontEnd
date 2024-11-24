import Card from "../../ui/Card";
import DanhSachChoPhanCong from "../../components/ChuNhiemBoMon/PhanCongGiangVienPhanBien/DanhSachDoAnDat/DanhSachChoPhanCong";

function PhanCongGiangVienPhanBien() {
  return (
    <div>
      <h5>Phân công giảng viên phản biện</h5>
      <Card className="mt-3">
        <DanhSachChoPhanCong />
      </Card>
    </div>
  );
}

export default PhanCongGiangVienPhanBien;
