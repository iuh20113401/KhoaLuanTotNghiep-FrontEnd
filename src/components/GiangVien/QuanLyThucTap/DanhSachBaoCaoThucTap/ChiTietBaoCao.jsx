import { Link } from "react-router-dom";
import Button from "../../../../ui/Button";
import { useContext, useState } from "react";
import { HiEye, HiOutlineEye } from "react-icons/hi";
import { HiPencilSquare } from "react-icons/hi2";
import ModalChamDiem from "../ChamDiemThucTap/ModalChamDiemThucTap";
import { ChamDiemThucTapContext } from "../../../../pages/Giangvien/ChamDiemBaoCaoThucTap";

function ChiTietBaoCao({
  baoCao,
  index,
  chamDiem,
  tieuChiDoanhNghiep,
  tieuChiGiangVien,
}) {
  const [showModal, setShowModal] = useState(false);
  const isOdd = (index + 1) % 2 === 0;
  const diemGiangVien =
    baoCao.sinhVienInfo.diem.diemThucTap?.diemGiangVien?.length > 0;
  const diemDoanhNghiep =
    baoCao.sinhVienInfo.diem.diemThucTap?.diemDoanhNghiep?.length > 0;
  return (
    <>
      <tr className={isOdd ? "strip" : ""}>
        <td>{index + 1}</td>
        <td>{baoCao.userInfo.maSo}</td>
        <td width="20%">{baoCao.userInfo.hoTen}</td>
        <td>{baoCao.tenCongTy}</td>
        <td>{baoCao.tenNguoiGiamSat}</td>
        {!chamDiem ? (
          <td>
            <Link to={`chiTietBaoCao/${baoCao._id}`}>
              <Button>Xem</Button>
            </Link>
          </td>
        ) : (
          <td>
            <div className="mt-2">
              <Button
                size="sm"
                bgcolor={`${
                  diemGiangVien ? "var(--bs-blue)" : "var(--bs - danger)"
                }`}
                onClick={() => setShowModal(0)}
              >
                <span>{diemGiangVien ? <HiEye /> : <HiPencilSquare />}</span>
                {diemGiangVien ? "Xem điểm giảng viên" : "Chấm điểm giảng viên"}
              </Button>
            </div>
            <div className="mt-2">
              <Button
                size="sm"
                bgcolor={`${
                  diemDoanhNghiep ? "var(--bs-blue)" : "var(--bs - danger)"
                }`}
                onClick={() => setShowModal(1)}
              >
                <span>{diemDoanhNghiep ? <HiEye /> : <HiPencilSquare />}</span>
                {diemDoanhNghiep
                  ? "Xem điểm doanh nghiệp"
                  : "Chấm điểm doanh nghiệp"}
              </Button>
            </div>
          </td>
        )}
      </tr>
      {showModal === 0 && (
        <ModalChamDiem
          thucTap={baoCao}
          tieuChi={tieuChiGiangVien}
          setShowModal={setShowModal}
          loai="diemGiangVien"
        />
      )}
      {showModal === 1 && (
        <ModalChamDiem
          thucTap={baoCao}
          tieuChi={tieuChiDoanhNghiep}
          setShowModal={setShowModal}
          loai="diemDoanhNghiep"
        />
      )}
    </>
  );
}

export default ChiTietBaoCao;
