import { HiShare } from "react-icons/hi";
import Button from "../../../ui/Button";
import { ColLg, StyledRow } from "../../../ui/Row";
import Avatar from "../../../ui/Avatar";
import UseUser from "../../../context/UseUser";
import { useState } from "react";
import LapNhomModal from "../LapNhom/LapNhomModal";

const SERVER = import.meta.env.PROD
  ? import.meta.env.VITE_SERVER_URL
  : import.meta.env.VITE_SERVER_URL_LOCAL;
function CardThanhVien({ doAn }) {
  const { data, isLoading } = UseUser();
  const user = data.user;
  const [showModal, setShowModal] = useState(false);
  return (
    !isLoading && (
      <>
        <StyledRow>
          <ColLg>
            <h5>Thành viên</h5>
          </ColLg>
          {user.vaiTro === 0 && (
            <ColLg>
              <Button
                size="xs"
                bgcolor="var(--bs-danger)"
                onClick={() => setShowModal(true)}
              >
                <span>
                  <HiShare />
                </span>
                Lập nhóm
              </Button>
            </ColLg>
          )}
        </StyledRow>
        <div className="mt-2">
          <StyledRow className="align-center">
            <Avatar src={`${SERVER}${doAn.giangVien.hinhAnh}`} />
            <ColLg className="ml-2">
              <p>{doAn.giangVien.hoTen}</p>
            </ColLg>
          </StyledRow>
          <StyledRow className="align-center mt-1">
            <Avatar src={`${SERVER}${doAn.sinhVien1.hinhAnh}`} />
            <ColLg className="ml-2">
              <p>{doAn.sinhVien1.hoTen}</p>
            </ColLg>
          </StyledRow>
          {doAn.sinhVien2 && (
            <StyledRow className="align-center mt-1">
              <Avatar src={`${SERVER}${doAn.sinhVien2.hinhAnh}`} />
              <ColLg className="ml-2">
                <p>{doAn.sinhVien2.hoTen}</p>
              </ColLg>
            </StyledRow>
          )}
        </div>
        {showModal && <LapNhomModal setShowModal={setShowModal} />}
      </>
    )
  );
}

export default CardThanhVien;
