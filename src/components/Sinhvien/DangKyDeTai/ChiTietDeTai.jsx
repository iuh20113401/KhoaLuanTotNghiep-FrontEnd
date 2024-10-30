import { useState } from "react";
import Button from "../../../ui/Button";
import decodeHtml from "../../../utils/ChangeHtmlCode";
import { useMutation } from "@tanstack/react-query";
import { dangKyDoAn } from "../../../services/DoAn";
import toast from "react-hot-toast";
import UseUser from "../../../context/UseUser";
import { useNavigate } from "react-router-dom";

function DisplayQuillContent({ content }) {
  const decodedContent = decodeHtml(content);
  return <div dangerouslySetInnerHTML={{ __html: decodedContent }} />;
}
function ChiTietDeTai({ deTai, caiDatInfo }) {
  const [isDangKy, setIsDangKy] = useState(false);
  const [rowHeight, setRowHeight] = useState("auto");
  const { refetch } = UseUser();
  const navigate = useNavigate();
  const handleDangKyClick = () => {
    setRowHeight("200px"); // Đặt chiều cao là tự động để nội dung điều chỉnh
    setIsDangKy(true);
  };

  const handleQuayLaiClick = () => {
    setRowHeight("auto"); // Trả lại chiều cao tự động khi quay lại
    setIsDangKy(false);
  };

  const { mutate: dangKyMutate, isPending: isLoading } = useMutation({
    mutationFn: dangKyDoAn,
    onSuccess: () => {
      toast.success("Đăng ký đề tài thành công");
      navigate("/sinhvien/quanLyDoAn");
      refetch();
    },
  });
  function handleDangKyDoAn() {
    dangKyMutate({
      deTai: deTai._id,
      maDoAn: Math.floor(100000 + Math.random() * 900000),
      tenDoAn: deTai.tenDeTai,
      giangVien: deTai.giangVien._id,
      namHoc: caiDatInfo.namHoc,
      hocKy: caiDatInfo.hocKy,
    });
  }
  return (
    <>
      <tr style={{ height: rowHeight, transition: "height 0.5s ease" }}>
        {!isDangKy && (
          <>
            <td>
              <p>{deTai.tenDeTai}</p>
            </td>
            <td>
              <DisplayQuillContent content={deTai.moTa} />
            </td>
            <td>
              <DisplayQuillContent content={deTai.kyNangCanCo} />
            </td>
            <td>
              <DisplayQuillContent content={deTai.ketQuaCanDat} />
            </td>
            <td>
              <p>{deTai.giangVien.hoTen}</p>
            </td>
            <td>
              <Button
                onClick={handleDangKyClick}
                disabled={!caiDatInfo.isDangKyDeTai}
                state={caiDatInfo.isDangKyDeTai ? "" : "disabled"}
              >
                Đăng ký
              </Button>
            </td>
          </>
        )}
        {isDangKy && (
          <td colSpan={9}>
            <h5 className="text-center">Bạn có chắc muốn đăng ký đề tài này</h5>
            <div className="mt-2 text-center">
              <Button onClick={handleDangKyDoAn}>Đăng ký đề tài</Button>
              <Button
                className="ml-3"
                bgcolor="--bs-secondary"
                color="--bs-black"
                onClick={handleQuayLaiClick}
              >
                Quay lại
              </Button>
            </div>
          </td>
        )}
      </tr>
    </>
  );
}

export default ChiTietDeTai;
