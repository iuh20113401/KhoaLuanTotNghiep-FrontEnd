import { Link } from "react-router-dom";
import Button from "../../../ui/Button";
import { useState } from "react";
import ModalXemDiem from "./ModalXemDiem";
import Badges from "../../../ui/Badges";
const StyledTrangThai = {
  0: {
    content: "Đang tiến hành",
    bgcolor: "bg-yellow-500",
    color: "text-white",
  },
  1: {
    content: "Đạt giữa kỳ",
    bgcolor: "bg-yellow-500",
    color: "text-white",
  },
  2: {
    content: "Chờ phản biện",
    bgcolor: "bg-yellow-500",
    color: "text-white",
  },
  3: {
    content: "Chờ chấm điểm hội động",
    bgcolor: "bg-yellow-500",
    color: "text-white",
  },
  4: {
    content: "Chờ chám diểm poster",
    bgcolor: "bg-yellow-500",
    color: "text-white",
  },
  5: {
    content: "Chờ chám diểm poster",
    bgcolor: "bg-green-600",
    color: "text-white",
  },
  6: {
    content: "Cấm thi",
    bgcolor: "bg-red-500",
    color: "text-white",
  },
  7: {
    content: "Không đạt phản biện ",
    bgcolor: "bg-red-500",
    color: "text-white",
  },
  8: {
    content: "Không đạt hội đồng",
    bgcolor: "bg-red-500",
    color: "text-white",
  },
};
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
          <Badges
            content={StyledTrangThai[doAn.trangThai].content}
            bgcolor={StyledTrangThai[doAn.trangThai].bgcolor}
            color={StyledTrangThai[doAn.trangThai].color}
          />
        </td>
        <td className="flex flex-col gap-1" rowSpan={countSinhVien}>
          <Link
            to={`chitietdoan/${doAn._id}`}
            onClick={() => setShowModal(true)}
          >
            <Button size="xs" bgcolor="bg-primary-600">
              Chi tiết
            </Button>
          </Link>
          <Button
            size="xs"
            bgcolor="bg-red-500"
            onClick={() => setShowModal(true)}
          >
            Xem điểm
          </Button>
        </td>
      </tr>
      {doAn.sinhVien2 && (
        <tr>
          <td>{doAn.sinhVien2.maSo}</td>
          <td>{doAn.sinhVien2.hoTen}</td>
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
