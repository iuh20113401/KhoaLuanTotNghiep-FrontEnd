import { HiOutlineDotsVertical } from "react-icons/hi";
import Button from "../../../ui/Button";
import DeTaiUi from "../../../ui/DeTaiUi";
import { useState } from "react";
import { StyledDropdownMenu, StyledLink } from "../../../ui/DropDown";
import hinhAnh from "../public/hinhanh/iuh_logo_2.png";
function ChiTietDeTaiAccordion({ deTai, setIsEdit }) {
  const [edit, setEdit] = useState(false);

  const left = <img src={deTai.HinhAnh || hinhAnh} alt="Hình ảnh đề tài" />;
  const rigth = (
    <>
      <h6>{deTai.tenDeTai}</h6>

      <p>
        Giảng viên hướng dẫn: <strong>{deTai.giangVien.hoTen}</strong>
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
          color="var(--bs-black)"
          onClick={() => setEdit((edit) => !edit)}
        >
          <HiOutlineDotsVertical />
        </Button>
        {edit && (
          <StyledDropdownMenu>
            <StyledLink onClick={() => setIsEdit(deTai)}>Chỉnh sửa</StyledLink>
            <StyledLink>Xóa</StyledLink>
          </StyledDropdownMenu>
        )}
      </div>
    );
  };
  return (
    <div>
      <DeTaiUi
        deTai={deTai}
        key={deTai._id}
        setIsEdit={setIsEdit}
        hidden={hiddenElement(deTai)}
        left={left}
        rigth={rigth}
        buttonContent={buttonContent(deTai)}
      />
    </div>
  );
}

export default ChiTietDeTaiAccordion;
