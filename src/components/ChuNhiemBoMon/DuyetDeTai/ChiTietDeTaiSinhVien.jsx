import Button from "../../../ui/Button";
import { useMutation } from "@tanstack/react-query";
import { duyetDeTai } from "../../../services/DeTaiApi";
import toast from "react-hot-toast";
import { useState } from "react";
import ChinhSuaModal from "./ChinhSuaModal";
import formatVieNamDate from "../../../utils/FormatDate";

import { HiOutlineDotsVertical } from "react-icons/hi";
import DeTaiUi from "../../../ui/DeTaiUi";
import { StyledDropdownMenu, StyledLink } from "../../../ui/DropDown";
import hinhAnh from "../../../../public/hinhanh/iuh_logo_2.png";
import Badges from "../../../ui/Badges";
import LoadingSpinner from "../../../ui/Spinner";
const StyleTrangThai = {
  0: {
    ten: "Chờ duyệt khóa luận",
    bgColor: "bg-green-600",
  },

  4: {
    ten: "Chưa duyệt",
    bgColor: "bg-yellow-500",
  },
};
function ChiTietDeTaiAccordion({ deTai, refetch }) {
  const [edit, setEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { mutate: duyetMutate, isPending: isLoading } = useMutation({
    mutationFn: duyetDeTai,
    onSuccess: () => {
      toast.success("Duyệt đề tài thành công");
      refetch();
    },
    onError: (error) => {
      toast.success("Duyệt đề tài thành công");
      refetch();
    },
  });
  const left = <img src={deTai.hinhAnh || hinhAnh} alt="Hình ảnh đề tài" />;
  const right = (
    <>
      <h6>{deTai.tenDeTai}</h6>
      <p>
        {" "}
        Mã số sinh viên: <strong>{deTai.sinhVien.maSo}</strong>
      </p>
      <p>
        Sinh viên: <strong>{deTai.sinhVien.hoTen}</strong>
      </p>
      <p>
        Giảng viên hướng dẫn: <strong>{deTai.giangVien.hoTen}</strong>
      </p>
      <p>
        Ngày tạo:{" "}
        <strong>
          {formatVieNamDate(deTai.ngayTao)} (
          {Math.ceil(
            (new Date() - new Date(deTai.ngayTao)) / (1000 * 60 * 60 * 24)
          )}{" "}
          ngày)
        </strong>
      </p>
      <p>
        Trạng thái:{" "}
        <Badges
          content={StyleTrangThai[deTai.trangThai].ten}
          bgcolor={StyleTrangThai[deTai.trangThai].bgColor}
        />
      </p>
      <p>
        <strong>Mô tả:</strong>
      </p>
      <DeTaiUi.DisplayQuillContent content={deTai.moTa} />
    </>
  );
  const hiddenElement = (deTai) => (
    <>
      <p>
        <strong>Kỹ năng cần có:</strong>
      </p>
      <DeTaiUi.DisplayQuillContent content={deTai.kyNangCanCo} />
      <p>
        <strong>Kết quả cần đạt:</strong>
      </p>
      <DeTaiUi.DisplayQuillContent content={deTai.ketQuaCanDat} />
    </>
  );
  const buttonContent = (deTai) => {
    return (
      <div style={{ position: "relative" }}>
        <Button
          varitaion="icon"
          size="xl"
          bgcolor="transparent"
          color="black"
          onClick={() => setEdit((edit) => !edit)}
        >
          <HiOutlineDotsVertical />
        </Button>
        {edit && (
          <StyledDropdownMenu>
            <StyledLink onClick={() => setShowModal(deTai)}>
              Chỉnh sửa
            </StyledLink>
            <StyledLink onClick={() => duyetMutate(deTai._id)}>
              Duyệt
            </StyledLink>
          </StyledDropdownMenu>
        )}
      </div>
    );
  };
  if (isLoading) return <LoadingSpinner />;
  return (
    <div>
      <DeTaiUi
        deTai={deTai}
        key={deTai._id}
        hidden={hiddenElement(deTai)}
        left={left}
        right={right}
        buttonContent={+deTai.trangThai === 4 ? null : buttonContent(deTai)}
      />
      {showModal && <ChinhSuaModal setShowModal={setShowModal} deTai={deTai} />}
    </div>
  );
}

export default ChiTietDeTaiAccordion;
