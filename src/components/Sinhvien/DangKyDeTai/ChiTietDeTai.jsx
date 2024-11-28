import { useRef, useState } from "react";
import Button from "../../../ui/Button";
import decodeHtml from "../../../utils/ChangeHtmlCode";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { dangKyDoAn } from "../../../services/DoAn";
import toast from "react-hot-toast";
import UseUser from "../../../context/UseUser";
import { useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { StyledRow } from "../../../ui/Row";

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

const Container = styled.article`
  width: 98%;
  margin: auto;
  height: auto;
  padding: 1.6rem;
  background-color: #fff;
  box-shadow: 0 0rem 0.1rem 0.05rem rgba(0, 0, 0, 0.2);
  border-radius: 0.6rem;
  transition: all 0.5s ease;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
  position: relative;
  margin-bottom: 0.8rem;
`;
const rotateAndeTairanslate = keyframes`
  0% { 
    transform: rotateY(0) translateX(0); 
    opacity: 1;
  }
  50% { 
    opacity: 0.3;  
  }
  100% { 
    transform: rotateY(180deg) ; 
    opacity: 0;
  }
`;

const translateAndRotateBack = keyframes`
  0% { 
    transform: rotateY(180deg);
    opacity:0;
  }
  50% { 
    opacity:0.5;
  }
  100% { 
    transform: rotateY(0);
      opacity:1;
       }
`;
const FrontContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  backface-visibility: hidden;
  transition: all 0.3s ease;
  animation: ${({ type }) =>
    type === "active"
      ? css`
          ${translateAndRotateBack} 0.6s ease forwards
        `
      : css`
          ${rotateAndeTairanslate} 0.6s ease forwards
        `};
`;

const BackContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backface-visibility: hidden;
  gap: 0.8rem;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${({ type }) =>
    type === "active"
      ? css`
          ${translateAndRotateBack} 0.6s ease forwards
        `
      : css`
          ${rotateAndeTairanslate} 0.6s ease forwards
        `};
`;
const DoAnLeft = styled.aside`
  width: 9.6rem;
  height: 6.4rem;
  border-radius: 50%;
  & > img {
    width: 100%;
    height: 100%;
  }
`;
const HiddentElement = styled.div`
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
  max-height: ${({ maxheight }) => maxheight};
`;
const DoAnRight = styled.aside`
  width: 75%;
  padding: 0 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
const ButtonDangKy = styled.div`
  width: 10%;
  margin: auto;
`;
function ChiTietDeTai2({ deTai, caiDatInfo }) {
  const [active, setActive] = useState(false);
  const [dangky, setDangKy] = useState(false);
  const detailsRef = useRef(null);
  const maxHeight = active ? `${detailsRef.current.scrollHeight}px` : "0";
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
  return (
    <tr>
      <Container
        onClick={(e) => {
          if (e.target.localName === "button") return;
          !dangky && setActive((a) => !a);
        }}
      >
        <FrontContainer type={!dangky ? "active" : "hidden"}>
          <DoAnLeft>
            <img
              src={deTai.HinhAnh || "../public/hinhanh/iuh_logo_2.png"}
              alt="Hình ảnh đề tài"
            />
          </DoAnLeft>
          <DoAnRight>
            <h6>{deTai.tenDeTai}</h6>

            <p>
              Giảng viên hướng dẫn: <strong>{deTai.giangVien.hoTen}</strong>
            </p>
            <p>
              <strong>Mô tả:</strong>
            </p>
            <DisplayQuillContent content={deTai.moTa} />
            <HiddentElement ref={detailsRef} maxheight={maxHeight}>
              <p>
                <strong>Kỹ năng cần có:</strong>
              </p>
              <DisplayQuillContent content={deTai.kyNangCanCo} />
              <p>
                <strong>Kết quả cần đạt:</strong>
              </p>
              <DisplayQuillContent content={deTai.ketQuaCanDat} />
            </HiddentElement>
          </DoAnRight>
          <ButtonDangKy>
            <Button
              onClick={() => setDangKy(true)}
              disabled={!caiDatInfo.isDangKyDeTai}
              state={caiDatInfo.isDangKyDeTai ? "" : "disabled"}
            >
              Đăng ký
            </Button>
          </ButtonDangKy>
        </FrontContainer>
        <BackContainer type={dangky ? "active" : "hidden"}>
          <p>Bạn có chắc muốn đăng ký đề tài này</p>
          <StyledRow gap="1.2rem">
            <Button
              variation="outline"
              color="var(--color--main_7)"
              onClick={() => setDangKy(false)}
            >
              Hủy
            </Button>
            <Button
              color="var(--bs-white)"
              onClick={() => dangKyHandler()}
              disabled={!caiDatInfo.isDangKyDeTai}
              state={caiDatInfo.isDangKyDeTai ? "" : "disabled"}
            >
              Đăng ký
            </Button>
          </StyledRow>
        </BackContainer>
      </Container>
    </tr>
  );
}
export default ChiTietDeTai2;
