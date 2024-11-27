import { HiOutlineDotsVertical } from "react-icons/hi";
import Badges from "../../../ui/Badges";
import Button from "../../../ui/Button";
import "react-quill/dist/quill.bubble.css";
import { StyledDropdownMenu, StyledLink } from "../../../ui/DropDown";
import { useState } from "react";
import decodeHtml from "../../../utils/ChangeHtmlCode";
import { useMutation } from "@tanstack/react-query";
import { xoaDeTai } from "../../../services/DeTaiApi";
import toast from "react-hot-toast";

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
function ChiTietDeTai({ deTai, refetch, setIsEdit }) {
  const [ghiChu, setGhiChu] = useState(false);
  const trangThai = deTai.trangThai === 0 ? (deTai?.ghiChu ? 2 : 0) : 1;
  const [edit, setEdit] = useState(false);
  const { mutate: xoaMutate, isPending } = useMutation({
    mutationFn: xoaDeTai,
    onSuccess: () => {
      toast.success("Xóa đề tài thành công");
      refetch();
    },
    onError: () => {
      toast.error("Xóa đề tài không thành công");
    },
  });
  function handleXoa() {
    xoaMutate(deTai._id);
  }
  if (isPending) return;
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
              {deTai.trangThai !== 1 && (
                <StyledLink>
                  <Button
                    onClick={handleXoa}
                    bgColor="transparent"
                    color="black"
                  >
                    Xóa
                  </Button>
                </StyledLink>
              )}
            </StyledDropdownMenu>
          )}
        </div>
      </td>
    </tr>
  );
}

export default ChiTietDeTai;
