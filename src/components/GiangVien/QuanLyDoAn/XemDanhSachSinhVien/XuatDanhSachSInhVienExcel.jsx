import { BsFileExcel } from "react-icons/bs";
import Button from "../../../../ui/Button";
import exportToExcel from "../../../../utils/ExportsToExcel";

function XuatDanhSachSinhVienExcel({ DanhSachSinhVien }) {
  const data = DanhSachSinhVien?.map((item, index) => ({
    STT: index + 1,
    "Mã số sinh viên": item.Info.maSo,
    "Họ tên sinh viên": item.Info.hoTen,
    email: item.Info.email || "N/A", // Handling null values
    "Số điện thoại": item.Info.soDienThoai,
    "Mã khóa luận": item.doAnInfo.maDoAn,
    "Tên khóa luận": item.doAnInfo.tenDoAn,
  }));
  return (
    <div className="mt-2 mr-3 text-end">
      <Button
        bgcolor="var(--bs-success)"
        onClick={() => {
          exportToExcel(data, "DanhSachSinhVien");
        }}
      >
        <span>
          <BsFileExcel />
        </span>
        Xuất danh sách ra file excel
      </Button>
    </div>
  );
}

export default XuatDanhSachSinhVienExcel;
