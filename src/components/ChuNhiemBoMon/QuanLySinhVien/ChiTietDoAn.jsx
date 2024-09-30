import { Link } from "react-router-dom";
import Button from "../../../ui/Button";
import { useState } from "react";
import ModalXemDiem from "./ModalXemDiem";

function ChiTietDoAn({ doAn, index, chamDiem, tieuChi }) {
  const countSinhVien = doAn.sinhVien2 ? 2 : 1;
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <tr>
        <td rowSpan={countSinhVien}>{index + 1}</td>
        <td rowSpan={countSinhVien}>{doAn.maDoAn}</td>
        <td rowSpan={countSinhVien}>{doAn.tenDoAn}</td>
        <td>{doAn.sinhVien1.maSo}</td>
        <td>{doAn.sinhVien1.hoTen}</td>
        <td rowSpan={countSinhVien} className="text-center">
          {doAn.tienDoHoanThanh}
        </td>
        <td rowSpan={countSinhVien}>
          <Link
            to={`chitietdoan/${doAn._id}`}
            onClick={() => setShowModal(true)}
          >
            <Button size="xs" bgcolor="var(--bs-blue)">
              Chi tiết
            </Button>
          </Link>
          <Button
            className="mt-1"
            size="xs"
            bgcolor="var(--bs-danger)"
            onClick={() => setShowModal(true)}
          >
            Xem điểm
          </Button>
        </td>
      </tr>
      {doAn.sinhVien2 && (
        <tr>
          <td>{doAn.sinhVien2.maSinhVien}</td>
          <td>{doAn.sinhVien2.ten}</td>
        </tr>
      )}
      {showModal && (
        <ModalXemDiem
          size="xl"
          doAn={doAn}
          tieuChi={tieuChi}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
}

export default ChiTietDoAn;
