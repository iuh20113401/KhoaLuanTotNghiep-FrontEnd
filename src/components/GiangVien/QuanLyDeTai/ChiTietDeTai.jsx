import { HiOutlineDotsVertical } from "react-icons/hi";
import Badges from "../../../ui/Badges";
import Button from "../../../ui/Button";
import "react-quill/dist/quill.bubble.css";
import { StyledDropdownMenu, StyledLink } from "../../../ui/DropDown";
import { useState } from "react";
import decodeHtml from "../../../utils/ChangeHtmlCode";

function DisplayQuillContent({ content }) {
  const decodedContent = decodeHtml(content);

  return <div dangerouslySetInnerHTML={{ __html: decodedContent }} />;
}
const StyleTrangThai = {
  0: {
    ten: "Chờ duyệt",
    bgColor: "var(--bs-danger)",
  },

  1: {
    ten: "Đã duyệt",
    bgColor: "var(--bs-success)",
  },
  2: {
    ten: "Chỉnh sửa",
    bgColor: "var(--bs-warning)",
  },
};
function ChiTietDeTai({ deTai, setIsEdit }) {
  const [ghiChu, setGhiChu] = useState(false);
  const trangThai = deTai.trangThai === 0 ? (deTai?.ghiChu ? 2 : 0) : 1;
  const [edit, setEdit] = useState(false);
  return (
    <tr>
      <td>
        <p>{deTai.tenDeTai}</p>
      </td>
      <td>
        <p>
          <DisplayQuillContent content={deTai.moTa} />
        </p>
      </td>
      <td>
        <p>
          <DisplayQuillContent content={deTai.kyNangCanCo} />
        </p>
      </td>
      <td>
        <p>
          <DisplayQuillContent content={deTai.ketQuaCanDat} />
        </p>
      </td>
      <td>
        <div style={{ position: "relative" }}>
          <Badges
            content={StyleTrangThai[trangThai].ten}
            bgcolor={StyleTrangThai[trangThai].bgColor}
            onMouseEnter={() => setGhiChu(true)}
            onMouseLeave={() => setGhiChu(false)}
          />
          {ghiChu && (
            <StyledDropdownMenu className="mt-2" bottom="120%">
              <p>{deTai?.ghiChu}</p>
            </StyledDropdownMenu>
          )}
        </div>
      </td>
      <td>
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
              <StyledLink onClick={() => setIsEdit(deTai)}>
                Chỉnh sửa
              </StyledLink>
              <StyledLink>Xóa</StyledLink>
            </StyledDropdownMenu>
          )}
        </div>
      </td>
    </tr>
  );
}

export default ChiTietDeTai;
