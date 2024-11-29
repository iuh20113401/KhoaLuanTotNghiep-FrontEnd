import { useState } from "react";
import QuanLyDeTaIHeader from "../components/QuanLyDoAn/QuanLyDeTaIHeader";
import ThongTinChung from "../components/QuanLyDoAn/ThongTinChung";
import styled from "styled-components";
import ThanhVien from "../components/QuanLyDoAn/ThanhVien";
import BieuMauDoAn from "../components/QuanLyDoAn/BieuMauDoAn";
import TaiLieuDoAn from "../components/QuanLyDoAn/TaiLieuDoAn";
import Diem from "../components/QuanLyDoAn/Diem";
import UseUser from "../context/UseUser";
import { useQuery } from "@tanstack/react-query";
import { getThongTinDoAn } from "../services/DoAn";
import { useParams } from "react-router-dom";
import DiemDanhContainer from "../components/QuanLyDoAn/DiemDanhContainer";
import LoadingSpinner from "../ui/Spinner";
import TaiLieuPhanBienDoAn from "../components/QuanLyDoAn/TaiLieuPhanBien";

const StyledContainer = styled.section`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
`;
function QuanLyDeTai() {
  const [active, setActive] = useState(0);
  const { data: user, isLoading: userLoading } = UseUser();
  let { maDoAn } = useParams();
  const {
    data,
    isLoading: doAnLoading,
    refetch,
  } = useQuery({
    queryKey: ["DoAn", maDoAn || "1"], // Adding maDoAn to the queryKey to refetch on change
    queryFn: () => {
      if (user.user.vaiTro === 0) return getThongTinDoAn(user.user?.doAn);
      return getThongTinDoAn(maDoAn);
    },
    enabled:
      (!userLoading && user !== undefined) ||
      (user?.user.vaiTro !== 0 && maDoAn !== undefined), // Ensuring the query runs only when both are available
  });
  const isLoading = userLoading || doAnLoading;
  const doAn = data?.result;

  const TabArr = [
    {
      header: "Thông tin chung",
      content: (
        <ThongTinChung user={user?.user} doAn={doAn} refetch={refetch} />
      ),
    },
    {
      header: "Thành viên",
      content: <ThanhVien doAn={doAn} />,
    },
    // {
    //   header: "Hướng dẫn",
    //   content: "", // Add component or functionality as needed
    // },
    {
      header: "Tài liệu",
      content: <TaiLieuDoAn doAn={doAn} refetch={refetch} />,
    },
    {
      header: "Biểu mẫu",
      content: <BieuMauDoAn doAn={doAn} />,
    },
    {
      header: "Điểm",
      content: <Diem doAn={doAn} user={user?.user} />,
    },
    {
      header: "Điểm danh",
      content: <DiemDanhContainer doAn={doAn} />, // Add component or functionality as needed
    },
  ];
  if (doAn?.trangThai >= 2)
    TabArr.splice(4, 0, {
      header: "Tài liệu phản biện",
      content: <TaiLieuPhanBienDoAn doAn={doAn} refetch={refetch} />,
    });
  if (doAn?.trangThai >= 3)
    TabArr.splice(5, 0, {
      header: "Tài liệu hội đồng",
      content: <TaiLieuPhanBienDoAn doAn={doAn} refetch={refetch} />,
    });
  if (isLoading) return <LoadingSpinner />;
  return (
    doAn && (
      <StyledContainer>
        <QuanLyDeTaIHeader
          content={TabArr}
          active={active}
          setActive={setActive}
          doAn={doAn}
          refetch={refetch}
        />
        <div>{TabArr[active].content}</div>
      </StyledContainer>
    )
  );
}

export default QuanLyDeTai;
