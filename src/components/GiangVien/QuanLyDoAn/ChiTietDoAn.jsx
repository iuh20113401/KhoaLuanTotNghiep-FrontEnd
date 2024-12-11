import { Link } from "react-router-dom";
import Button from "../../../ui/Button";
import ModalChamDiem from "./ModalChamDiem";
import { useState } from "react";
import { HiDocument, HiOutlineEye } from "react-icons/hi";
import { HiPencilSquare } from "react-icons/hi2";
import ModalXemDiemHuongDan from "./ModalXemDiemHuongDan";
import ModalXemTaiLieu from "./ModalXemTaiLieu";

function ChiTietDoAn({ doAn, index, chamDiem, tieuChi, loai, refetch }) {
  const countSinhVien =
    doAn.sinhVien2 && Object.values(doAn.sinhVien2).length !== 0 ? 2 : 1;
  const [showModal, setShowModal] = useState(false);
  const [showDiem, setShowDiem] = useState(false);
  const [showTaiLieu, setShowTaiLieu] = useState(false);
  const isOdd = (index + 1) % 2 === 0;
  let newLoai = loai;
  if (loai === "diemPhanBien")
    newLoai =
      +doAn?.giangVienPhanBien === 1
        ? "diemPhanBien.diemPhanBien1"
        : "diemPhanBien.diemPhanBien2";
  const getNestedValue = (obj, path) => {
    return path.split(".").reduce((acc, part) => acc && acc[part], obj);
  };

  return (
    <>
      <tr className={isOdd ? "strip" : ""}>
        <td rowSpan={countSinhVien}>{index + 1}</td>
        <td rowSpan={countSinhVien}>{doAn.maDoAn}</td>
        <td width="20%" rowSpan={countSinhVien}>
          {doAn.tenDoAn}
        </td>
        <td>{doAn?.sinhVien1.maSo}</td>
        <td>{doAn?.sinhVien1.hoTen}</td>

        {!chamDiem ? (
          <td rowSpan={countSinhVien}>
            <Link to={`chitietdoan/${doAn._id}`}>
              <Button>Xem</Button>
            </Link>
          </td>
        ) : (
          <td rowSpan={countSinhVien} width="25%">
            {loai === "diemPhanBien" && (
              <div>
                <Button onClick={() => setShowTaiLieu(true)}>
                  <HiDocument />
                  Xem danh sách tài liệu
                </Button>
              </div>
            )}
            <div className="mt-2">
              <Button
                bgcolor="var(--bs-blue)"
                state={
                  !getNestedValue(doAn.sinhVien1Info.diem, newLoai)?.diemAbet
                    ?.length > 0
                    ? "disabled"
                    : ""
                }
                disabled={
                  !(
                    getNestedValue(doAn.sinhVien1Info.diem, newLoai)?.diemAbet
                      ?.length > 0
                  )
                }
                onClick={() => setShowDiem(true)}
              >
                <span>
                  <HiOutlineEye />
                </span>
                Xem điểm
              </Button>
            </div>
            <div className="mt-2">
              <Button
                size="sm"
                bgcolor="var(--bs-danger)"
                state={
                  doAn.trangThai < 2
                    ? "disabled"
                    : !(
                          getNestedValue(doAn.sinhVien1Info.diem, newLoai)
                            ?.diemAbet?.length > 0
                        ) || doAn.trangThai < 2
                      ? ""
                      : "disabled"
                }
                onClick={() => setShowModal(true)}
                disabled={
                  getNestedValue(doAn.sinhVien1Info.diem, newLoai)?.diemAbet
                    .length > 0 || doAn.trangThai < 2
                }
              >
                <span>
                  <HiPencilSquare />
                </span>
                Chấm điểm
              </Button>

              {doAn.trangThai <= 1 ? (
                <p className="error">khóa luận chưa cập nhật trạng thái</p>
              ) : (
                <p className="error"></p>
              )}
            </div>
          </td>
        )}
      </tr>
      {doAn.sinhVien2 != null && Object.values(doAn.sinhVien2).length > 0 && (
        <tr className={isOdd ? "strip" : ""}>
          <td>{doAn?.sinhVien2.maSo}</td>
          <td>{doAn?.sinhVien2.hoTen}</td>
        </tr>
      )}
      {showModal && (
        <ModalChamDiem
          doAn={doAn}
          tieuChi={tieuChi}
          setShowModal={setShowModal}
          loai={loai}
          refetch={refetch}
        />
      )}
      {showDiem && (
        <ModalXemDiemHuongDan
          doAn={doAn}
          setShowModal={setShowDiem}
          loai={loai}
        />
      )}
      {showTaiLieu && (
        <ModalXemTaiLieu
          doAn={doAn}
          setShowModal={setShowTaiLieu}
          loai={"taiLieuPhanBien"}
        />
      )}
    </>
  );
}

export default ChiTietDoAn;
