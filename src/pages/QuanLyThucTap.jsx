import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import UseUser from "../context/UseUser";
import { getThongTinThucTap } from "../services/ThucTap";
import ThongTinThucTap from "../components/QuanLyThucTap/ThongTinThucTap";
import ThanhVienThucTap from "../components/QuanLyThucTap/ThanhVienThucTap";
import TaiLieuThucTap from "../components/QuanLyThucTap/TaiLieuThucTap";
import BieuMauThucTap from "../components/QuanLyThucTap/BieuMauThucTap";
import Diem from "../components/QuanLyThucTap/DiemThucTap";
import DiemDanhContainer from "../components/QuanLyThucTap/DiemDanhContainer";
import QuanLyThucTapHeader from "../components/QuanLyThucTap/QuanLyThucTapHeader";
import LoadingSpinner from "../ui/Spinner";

const StyledContainer = styled.section`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
`;
function QuanLyThucTap() {
  const [active, setActive] = useState(0);
  const { data: user, isLoading: userLoading } = UseUser();
  let { maBaoCao } = useParams();

  const {
    data,
    isLoading: doAnLoading,
    refetch,
  } = useQuery({
    queryKey: ["ThucTap", maBaoCao || "1"], // Adding maDoAn to the queryKey to refetch on change
    queryFn: () => {
      if (user.user.vaiTro === 0) return getThongTinThucTap(user.user?.thucTap);
      return getThongTinThucTap(maBaoCao);
    },
    enabled:
      (!userLoading && user !== undefined) ||
      (user?.user.vaiTro !== 0 && maBaoCao !== undefined), // Ensuring the query runs only when both are maBaoCao
  });
  const isLoading = userLoading || doAnLoading;
  const thucTap = data?.result;

  const TabArr = [
    {
      header: "Thông tin chung",
      content: (
        <ThongTinThucTap
          user={user?.user}
          thucTap={thucTap}
          refetch={refetch}
        />
      ),
    },
    {
      header: "Thành viên",
      content: <ThanhVienThucTap thucTap={thucTap} />,
    },
    {
      header: "Hướng dẫn",
      content: "", // Add component or functionality as needed
    },
    {
      header: "Tài liệu",
      content: <TaiLieuThucTap thucTap={thucTap} refetch={refetch} />,
    },
    {
      header: "Biểu mẫu",
      content: <BieuMauThucTap thucTap={thucTap} />,
    },
    {
      header: "Điểm",
      content: <Diem thucTap={thucTap} user={user?.user} />,
    },
    {
      header: "Điểm danh",
      content: <DiemDanhContainer baoCao={thucTap} />, // Add component or functionality as needed
    },
  ];
  if (isLoading)
    return (
      <div>
        {" "}
        <LoadingSpinner />
      </div>
    );
  return (
    thucTap && (
      <StyledContainer>
        <QuanLyThucTapHeader
          content={TabArr}
          active={active}
          setActive={setActive}
          thucTap={thucTap}
        />
        <div>{TabArr[active].content}</div>
      </StyledContainer>
    )
  );
}

export default QuanLyThucTap;
