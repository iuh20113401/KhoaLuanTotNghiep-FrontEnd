import { HiOutlineDotsVertical } from "react-icons/hi";
import Badges from "../../../ui/Badges";
import Button from "../../../ui/Button";
import "react-quill/dist/quill.bubble.css";
import { StyledDropdownMenu, StyledLink } from "../../../ui/DropDown";
import { useState } from "react";
import decodeHtml from "../../../utils/ChangeHtmlCode";
import { useMutation } from "@tanstack/react-query";
import { suaDeTai, xoaDeTai } from "../../../services/DeTaiApi";
import toast from "react-hot-toast";
import formatVieNamDate from "../../../utils/FormatDate";

function DisplayQuillContent({ content }) {
  const decodedContent = decodeHtml(content);

  return <div dangerouslySetInnerHTML={{ __html: decodedContent }} />;
}
const StyleTrangThai = {
  0: {
    ten: "Chờ duyệt",
    bgColor: "bg-red-500",
  },
  1: {
    ten: "Đã duyệt",
    bgColor: "bg-green-600",
  },
  2: {
    ten: "Chỉnh sửa",
    bgColor: "bg-amber-400",
  },
};
function ChiTietDeTai({ deTai, refetch, setIsEdit, isSinhVien }) {
  const [ghiChu, setGhiChu] = useState(false);
  const trangThai =
    deTai.trangThai === 0
      ? deTai?.ghiChu && deTai.ghiChu.length > 0
        ? 2
        : 0
      : 1;
  const [edit, setEdit] = useState(false);
  const { mutate: capNhatDeTaiMutate, isPending: capNhatDeTaiPending } =
    useMutation({
      mutationFn: suaDeTai,
      onSuccess: () => {
        toast.success("Duyệt đề tài thành công");
        refetch();
      },
      onError: () => {
        toast.error("Xóa đề tài không thành công");
      },
    });

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
  function handleDuyet() {
    capNhatDeTaiMutate({ ...deTai, trangThai: 0 });
  }
  function handleKhongDuyet() {
    capNhatDeTaiMutate({ ...deTai, trangThai: 5 });
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
      {isSinhVien ? (
        <>
          <td>{deTai.sinhVien.maSo}</td>
          <td>{deTai.sinhVien.hoTen}</td>
        </>
      ) : (
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
                {deTai?.ghiChu.map((gc) => (
                  <p>
                    <strong>{formatVieNamDate(gc.ngayTao)}</strong>
                    {gc.noiDung}
                  </p>
                ))}
              </StyledDropdownMenu>
            )}
          </div>
        </td>
      )}
      <td>
        <div style={{ position: "relative" }}>
          <Button
            varitaion="icon"
            size="xl"
            bgcolor="transparent"
            color="text-black"
            onClick={() => setEdit((edit) => !edit)}
          >
            <HiOutlineDotsVertical />
          </Button>
          {edit &&
            (isSinhVien ? (
              <StyledDropdownMenu>
                <StyledLink>
                  <Button
                    bgcolor="transparent"
                    color="black"
                    size="xs"
                    style={{ margin: 0, padding: 0 }}
                    onClick={handleDuyet}
                  >
                    <p>Duyệt</p>
                  </Button>
                </StyledLink>
                <StyledLink>
                  <Button
                    onClick={handleKhongDuyet}
                    bgcolor="transparent"
                    color="black"
                    varitaion="icon"
                    size="xs"
                    style={{ margin: 0, padding: 0, textAlign: "start" }}
                  >
                    <p>Không duyệt</p>
                  </Button>
                </StyledLink>
              </StyledDropdownMenu>
            ) : (
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
            ))}
        </div>
      </td>
    </tr>
  );
}

export default ChiTietDeTai;
