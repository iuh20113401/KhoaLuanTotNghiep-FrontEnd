import { useRef, useState } from "react";
import Button from "../../../ui/Button";
import decodeHtml from "../../../utils/ChangeHtmlCode";
import { useMutation } from "@tanstack/react-query";
import { dangKyDoAn } from "../../../services/DoAn";
import toast from "react-hot-toast";
import UseUser from "../../../context/UseUser";
import { useNavigate } from "react-router-dom";
import { StyledRow } from "../../../ui/Row";
import hinhAnh from "../../../../public/hinhanh/iuh_logo_2.png";
import LoadingSpinner from "../../../ui/Spinner";

function DisplayQuillContent({ content }) {
  const decodedContent = decodeHtml(content);
  return <div dangerouslySetInnerHTML={{ __html: decodedContent }} />;
}
// function ChiTietDeTai({ deTai, caiDatInfo }) {
//   const [isDangKy, setIsDangKy] = useState(false);
//   const [rowHeight, setRowHeight] = useState("auto");
//   const { refetch } = UseUser();
//   const navigate = useNavigate();
//   const handleDangKyClick = () => {
//     setRowHeight("200px"); // Đặt chiều cao là tự động để nội dung điều chỉnh
//     setIsDangKy(true);
//   };

//   const handleQuayLaiClick = () => {
//     setRowHeight("auto"); // Trả lại chiều cao tự động khi quay lại
//     setIsDangKy(false);
//   };

//   const { mutate: dangKyMutate, isPending: isLoading } = useMutation({
//     mutationFn: dangKyDoAn,
//     onSuccess: () => {
//       toast.success("Đăng ký đề tài thành công");
//       navigate("/sinhvien/quanLyDoAn");
//       refetch();
//     },
//   });
//   function handleDangKyDoAn() {
//     dangKyMutate({
//       deTai: deTai._id,
//       maDoAn: Math.floor(100000 + Math.random() * 900000),
//       tenDoAn: deTai.tenDeTai,
//       giangVien: deTai.giangVien._id,
//       namHoc: caiDatInfo.namHoc,
//       hocKy: caiDatInfo.hocKy,
//     });
//   }
//   return (
//     <>
//       <tr style={{ height: rowHeight, transition: "height 0.5s ease" }}>
//         {!isDangKy && (
//           <>
//             <td>
//               <p>{deTai.tenDeTai}</p>
//             </td>
//             <td>
//               <DisplayQuillContent content={deTai.moTa} />
//             </td>
//             <td>
//               <DisplayQuillContent content={deTai.kyNangCanCo} />
//             </td>
//             <td>
//               <DisplayQuillContent content={deTai.ketQuaCanDat} />
//             </td>
//             <td>
//               <p>{deTai.giangVien.hoTen}</p>
//             </td>
//             <td>
//               <Button
//                 onClick={handleDangKyClick}
//                 disabled={!caiDatInfo.isDangKyDeTai}
//                 state={caiDatInfo.isDangKyDeTai ? "" : "disabled"}
//               >
//                 Đăng ký
//               </Button>
//             </td>
//           </>
//         )}
//         {isDangKy && (
//           <td colSpan={9}>
//             <h5 className="text-center">Bạn có chắc muốn đăng ký đề tài này</h5>
//             <div className="mt-2 text-center">
//               <Button onClick={handleDangKyDoAn}>Đăng ký đề tài</Button>
//               <Button
//                 className="ml-3"
//                 bgcolor="--bs-secondary"
//                 color="--bs-black"
//                 onClick={handleQuayLaiClick}
//               >
//                 Quay lại
//               </Button>
//             </div>
//           </td>
//         )}
//       </tr>
//     </>
//   );
// }

function ChiTietDeTai2({ deTai, caiDatInfo }) {
  const [active, setActive] = useState(false);
  const [dangky, setDangKy] = useState(false);
  const detailsRef = useRef(null);
  const navigate = useNavigate();
  const { refetch } = UseUser();

  const { mutate: dangKyMutate, isPending: isLoading } = useMutation({
    mutationFn: dangKyDoAn,
    onSuccess: () => {
      toast.success("Đăng ký đề tài thành công");
      navigate("/sinhvien/quanLyDoAn");
      refetch();
    },
  });
  function dangKyHandler() {
    dangKyMutate({
      deTai: deTai._id,
      maDoAn: Math.floor(100000 + Math.random() * 900000),
      tenDoAn: deTai.tenDeTai,
      giangVien: deTai.giangVien._id,
      namHoc: caiDatInfo.namHoc,
      hocKy: caiDatInfo.hocKy,
    });
  }
  if (isLoading)
    return (
      <div
        className="de-tai-container"
        onClick={(e) => {
          if (e.target.localName === "button") return;
          !dangky && setActive((a) => !a);
        }}
      >
        <LoadingSpinner />
      </div>
    );
  return (
    <tr>
      <div
        className="de-tai-container"
        onClick={(e) => {
          if (e.target.localName === "button") return;
          !dangky && setActive((a) => !a);
        }}
      >
        <div className={`front-container ${!dangky ? "active" : "hidden"}`}>
          <div className="doan-left">
            <img src={deTai.HinhAnh || hinhAnh} alt="Hình ảnh đề tài" />
          </div>
          <div className="doan-right">
            <h6>{deTai.tenDeTai}</h6>

            <p>
              Giảng viên hướng dẫn: <strong>{deTai.giangVien?.hoTen}</strong>
            </p>
            <p>
              <strong>Mô tả:</strong>
            </p>
            <DisplayQuillContent content={deTai.moTa} />
            <div
              className={`hidden-element  ${active ? `h-auto` : "h-0"} `}
              ref={detailsRef}
            >
              <p>
                <strong>Kỹ năng cần có:</strong>
              </p>
              <DisplayQuillContent content={deTai.kyNangCanCo} />
              <p>
                <strong>Kết quả cần đạt:</strong>
              </p>
              <DisplayQuillContent content={deTai.ketQuaCanDat} />
            </div>
          </div>
          <button className="button-dang-ky">
            <Button
              onClick={() => setDangKy(true)}
              disabled={!caiDatInfo.isDangKyDeTai}
              state={caiDatInfo.isDangKyDeTai ? "" : "disabled"}
            >
              Đăng ký
            </Button>
          </button>
        </div>
        <div className={`back-container ${dangky ? "active" : "hidden"}`}>
          <p>Bạn có chắc muốn đăng ký đề tài này</p>
          <StyledRow gap="1.2rem">
            <Button
              variation="outline"
              color=""
              onClick={() => setDangKy(false)}
            >
              Hủy
            </Button>
            <Button
              color="text-white"
              onClick={() => dangKyHandler()}
              disabled={!caiDatInfo.isDangKyDeTai}
              state={caiDatInfo.isDangKyDeTai ? "" : "disabled"}
            >
              Đăng ký
            </Button>
          </StyledRow>
        </div>
      </div>
    </tr>
  );
}
export default ChiTietDeTai2;
