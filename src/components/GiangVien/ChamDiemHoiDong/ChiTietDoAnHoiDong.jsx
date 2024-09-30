import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../ui/Button";
import { HiOutlineEye } from "react-icons/hi";
import { HiPencilSquare } from "react-icons/hi2";
import ModalChamDiemHoiDong from "./ModalChamDiemHoiDong";

function ChiTietDoAnHoiDong({ doAn, index, chamDiem, refetch }) {
  const countSinhVien = doAn.sinhVien.filter(
    (sv) => sv != null && Object.keys(sv).length > 0
  ).length;
  const [showModal, setShowModal] = useState(false);
  const [showDiem, setShowDiem] = useState(false);
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
        <td>{doAn?.sinhVien[0].maSo}</td>
        <td>{doAn?.sinhVien[0].hoTen}</td>

        {!chamDiem ? (
          <td rowSpan={countSinhVien}>
            <Link to={`chitietdoan/${doAn._id}`}>
              <Button>Xem</Button>
            </Link>
          </td>
        ) : (
          <td rowSpan={countSinhVien}>
            <div>
              <Button
                bgcolor="var(--bs-blue)"
                state={
                  !getNestedValue(doAn.sinhVien[0].diem, newLoai)?.diemAbet
                    ?.length > 0
                    ? "disabled"
                    : ""
                }
                disabled={
                  !(
                    getNestedValue(doAn.sinhVien[0].diem, newLoai)?.diemAbet
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
                  getNestedValue(doAn.sinhVien[0].diem, newLoai)?.diemAbet
                    .length > 0
                    ? "disabled"
                    : ""
                }
                onClick={() => setShowModal(true)}
                disabled={
                  getNestedValue(doAn.sinhVien[0].diem, newLoai)?.diemAbet
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
      {doAn.sinhVien[1] != null &&
        Object.values(doAn.sinhVien[1]).length > 0 && (
          <tr className={isOdd ? "strip" : ""}>
            <td>{doAn?.sinhVien[1].maSo}</td>
            <td>{doAn?.sinhVien[1].hoTen}</td>
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
    </>
  );
}

export default ChiTietDoAnHoiDong;
