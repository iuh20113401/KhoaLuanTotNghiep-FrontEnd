import { ColLg, StyledRow } from "../../../ui/Row";
import Avatar from "../../../ui/Avatar";

const SERVER = import.meta.env.PROD
  ? import.meta.env.VITE_SERVER_URL
  : import.meta.env.VITE_SERVER_URL_LOCAL;
function CardThanhVien({ thucTap }) {
  const user = thucTap?.userId;
  const giangVien = thucTap.giangVien;
  return (
    <>
      <StyledRow>
        <ColLg>
          <h5>Thành viên</h5>
        </ColLg>
      </StyledRow>
      <div className="mt-2">
        {giangVien && (
          <StyledRow className="align-center">
            <Avatar src={`${SERVER}${thucTap.giangVien.hinhAnh}`} />
            <ColLg className="ml-2">
              <p>{thucTap.giangVien.hoTen}</p>
            </ColLg>
          </StyledRow>
        )}
        <StyledRow className="align-center mt-1">
          <Avatar src={`${SERVER}${user.hinhAnh}`} />
          <ColLg className="ml-2">
            <p>{user.hoTen}</p>
          </ColLg>
        </StyledRow>
      </div>
    </>
  );
}

export default CardThanhVien;
