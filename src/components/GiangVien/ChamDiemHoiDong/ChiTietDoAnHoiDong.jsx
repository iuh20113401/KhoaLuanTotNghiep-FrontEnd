import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../ui/Button";
import { HiDocument, HiOutlineEye } from "react-icons/hi";
import { HiPencilSquare } from "react-icons/hi2";
import ModalChamDiemHoiDong from "./ModalChamDiemHoiDong";
import ModalXemTaiLieu from "../QuanLyDoAn/ModalXemTaiLieu";

function ChiTietDoAnHoiDong({ doAn, index, chamDiem, refetch }) {
  const countSinhVien = doAn.sinhVien2 ? 2 : 1;
  const [showModal, setShowModal] = useState(false);
  const [showDiem, setShowDiem] = useState(false);
  const [showTaiLieu, setShowTaiLieu] = useState(false);

  const isOdd = (index + 1) % 2 === 0;
  let newLoai = `diemHoiDong.diemHoiDong${doAn.stt}`;

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
          <td rowSpan={countSinhVien}>
            <div>
              <Button onClick={() => setShowTaiLieu(true)}>
                <HiDocument />
                Xem danh sách tài liệu
              </Button>
            </div>
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
                Xem
              </Button>
            </div>
            <div className="mt-2">
              <Button
                size="sm"
                bgcolor="var(--bs-danger)"
                state={
                  getNestedValue(doAn.sinhVien1Info.diem, newLoai)?.diemAbet
                    .length > 0
                    ? "disabled"
                    : ""
                }
                onClick={() => setShowModal(true)}
                disabled={
                  getNestedValue(doAn.sinhVien1Info.diem, newLoai)?.diemAbet
                    .length > 0
                }
              >
                <span>
                  <HiPencilSquare />
                </span>
                Chấm điểm
              </Button>
            </div>
          </td>
        )}
      </tr>
      {doAn.sinhVien2 &&
        doAn.sinhVien2 != null &&
        Object.values(doAn.sinhVien2).length > 0 && (
          <tr className={isOdd ? "strip" : ""}>
            <td>{doAn?.sinhVien2.maSo}</td>
            <td>{doAn?.sinhVien2.hoTen}</td>
          </tr>
        )}
      {showModal && (
        <ModalChamDiemHoiDong
          doAn={doAn}
          setShowModal={setShowModal}
          refetch={refetch}
        />
      )}{" "}
      {showDiem && (
        <ModalChamDiemHoiDong
          doAn={doAn}
          setShowModal={setShowDiem}
          refetch={refetch}
          chamDiem={false}
        />
      )}
      {showTaiLieu && (
        <ModalXemTaiLieu
          doAn={doAn}
          setShowModal={setShowTaiLieu}
          loai={"taiLieuHoiDong"}
        />
      )}
    </>
  );
}

export default ChiTietDoAnHoiDong;
