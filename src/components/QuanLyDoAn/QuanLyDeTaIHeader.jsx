import styled from "styled-components";
import Avatar from "../../ui/Avatar";
import { Col1, ColLg, StyledRow } from "../../ui/Row";
import Card from "../../ui/Card";
import Badges from "../../ui/Badges";
import { StyledTabHeader } from "../../ui/Tab";
import Logo from "../../../public/hinhanh/iuh_logo_1.png";
import formatVieNamDate from "../../utils/FormatDate";
import Button from "../../ui/Button";
import { HiPencilSquare } from "react-icons/hi2";
import { useState } from "react";
import { StyledInput } from "../../ui/Input";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { capNhatDoAn } from "../../services/DoAn";
import LoadingSpinner from "../../ui/Spinner";

const StyledHeader = styled.div`
  padding: 0.8rem 1.6rem;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;

  h4 {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    h4 {
      font-size: 1.25rem;
    }
  }
`;

const StyledRowResponsive = styled(StyledRow)`
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 0.8rem;
  }
`;

const StyledTrangThai = {
  0: {
    content: "Đang tiến hành",
    bgcolor: "var(--bs-warning)",
    color: "var(--bs-white)",
  },
  1: {
    content: "Đạt giữa kỳ",
    bgcolor: "var(--bs-warning)",
    color: "var(--bs-white)",
  },
  2: {
    content: "Chờ phản biện",
    bgcolor: "var(--bs-warning)",
    color: "var(--bs-white)",
  },
  3: {
    content: "Chờ chấm điểm hội đồng",
    bgcolor: "var(--bs-warning)",
    color: "var(--bs-white)",
  },
  4: {
    content: "Chờ chám điểm poster",
    bgcolor: "var(--bs-warning)",
    color: "var(--bs-white)",
  },
  5: {
    content: "Cấm thi",
    bgcolor: "var(--bs-danger)",
    color: "var(--bs-white)",
  },
  6: {
    content: "Không đạt phản biện",
    bgcolor: "var(--bs-danger)",
    color: "var(--bs-white)",
  },
  7: {
    content: "Không đạt hội đồng",
    bgcolor: "var(--bs-danger)",
    color: "var(--bs-white)",
  },
  8: {
    content: "Đạt",
    bgcolor: "var(--bs-danger)",
    color: "var(--bs-white)",
  },
};

function QuanLyDeTaiHeader({ content, active, setActive, doAn, refetch }) {
  const [isEdit, setEdit] = useState(false);
  const [tenDoAn, setTenDoAn] = useState(doAn.tenDoAn);
  const { mutate: suaMutate, isPending: suaLoading } = useMutation({
    mutationFn: capNhatDoAn,
    onSuccess: () => {
      toast.success("Sửa đề tài thành công");
      setEdit(false);
      refetch();
    },
    onError: (error) => {
      toast.error("Có lỗi xảy ra khi sửa đề tài");
    },
  });
  function handleSubmit(e) {
    e.preventDefault();
    if (tenDoAn === doAn.tenDoAn) return;
    suaMutate({ ...doAn, tenDoAn });
  }
  return (
    <Card>
      {suaLoading ? (
        <div>
          <LoadingSpinner />
        </div>
      ) : (
        <StyledHeader>
          <StyledRowResponsive gap="1.6rem">
            <Avatar size="xl" src={Logo} />
            <ColLg>
              <StyledInfo>
                <form
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                >
                  <StyledRow gap="0.4rem">
                    <ColLg>
                      {isEdit ? (
                        <StyledInput
                          type="text"
                          placeholder="Nhập tên đề tài"
                          value={tenDoAn}
                          onChange={(e) => setTenDoAn(e.target.value)}
                        />
                      ) : (
                        <h5 className="fw-bold">{doAn?.tenDoAn}</h5>
                      )}
                    </ColLg>
                    <Col1 className="align-center flex">
                      <Button
                        variation="icon"
                        bgcolor="transparent"
                        color="black"
                        onClick={() => setEdit((edit) => !edit)}
                      >
                        <HiPencilSquare size={"1.8rem"} />
                      </Button>
                    </Col1>
                  </StyledRow>
                </form>
                <StyledRowResponsive>
                  <div>
                    <p>Mã đồ án: {doAn?.maDoAn}</p>
                  </div>
                  <div>
                    <p>
                      {" "}
                      Ngày tham gia:{" "}
                      <span className="fw-medium">
                        {formatVieNamDate(doAn?.ngayThamGia)}
                      </span>
                    </p>
                  </div>
                  <Badges
                    content={StyledTrangThai[doAn.trangThai].content}
                    bgcolor={StyledTrangThai[doAn.trangThai].bgcolor}
                    color={StyledTrangThai[doAn.trangThai].color}
                  />
                </StyledRowResponsive>
              </StyledInfo>
            </ColLg>
          </StyledRowResponsive>
          <StyledTabHeader>
            {content.map((ct, index) => (
              <li className="nav-item" role="presentation" key={index}>
                <button
                  type="button"
                  className={active === index ? "active" : ""}
                  onClick={() => setActive(index)}
                >
                  {ct.header}
                </button>
              </li>
            ))}
          </StyledTabHeader>
        </StyledHeader>
      )}
    </Card>
  );
}

export default QuanLyDeTaiHeader;
