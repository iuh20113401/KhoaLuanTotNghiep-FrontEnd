import styled from "styled-components";
import Card from "../../ui/Card";
import { Col3, Col9, StyledRow } from "../../ui/Row";
import CardThanhVien from "./ThongTinThucTap/CardThanhVien";
import decodeHtml from "../../utils/ChangeHtmlCode";
import CardTaiLieu from "./ThongTinThucTap/CardTaiLieu";
import Comment from "./ThongTinThucTap/Comment";
import CardXacNhan from "./ThongTinThucTap/CardXacNhan";

const StyledInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-bottom: 0.4rem;
`;

function DisplayQuillContent({ content }) {
  const decodedContent = decodeHtml(content);

  return <div dangerouslySetInnerHTML={{ __html: decodedContent }} />;
}
function ThongTinThucTap({ user, thucTap, refetch }) {
  return (
    <StyledRow>
      <Col9>
        <Card className="p-2">
          <StyledInfoDiv>
            <h6>
              <b>Tên công ty:</b>
            </h6>
            <p>{thucTap.tenCongTy}</p>
          </StyledInfoDiv>
          <StyledInfoDiv>
            <h6>
              <b>Địa chỉ công ty:</b>
            </h6>{" "}
            <p>{thucTap.diaChiCongTy}</p>
          </StyledInfoDiv>
          <StyledInfoDiv>
            <h6>
              <b>Tên người đại diện:</b>
            </h6>
            <p>{thucTap.tenNguoiDaiDien}</p>
          </StyledInfoDiv>
          <StyledInfoDiv>
            <h6>
              <b>Email công ty :</b>
            </h6>
            <p>{thucTap.emailCongTy}</p>
          </StyledInfoDiv>
          <StyledInfoDiv>
            <h6>
              <b>Tên người giám sát:</b>
            </h6>
            <p>{thucTap.tenNguoiGiamSat}</p>
          </StyledInfoDiv>{" "}
          <StyledInfoDiv>
            <h6>
              <b>Số diện thoại người giám sát:</b>
            </h6>
            <p>{thucTap.soDienThoaiNguoiGiamSat}</p>
          </StyledInfoDiv>{" "}
          <StyledInfoDiv>
            <h6>
              <b>Trạng thái:</b>
            </h6>
            <p>
              {+thucTap.trangThaiThucTap === 0 ? "Đang phỏng vấn" : "Đã đi làm"}
            </p>
          </StyledInfoDiv>
        </Card>
        <div className="mt-3">
          <Comment
            comment={thucTap.comment}
            idDoAn={thucTap._id}
            refetch={refetch}
          />
        </div>
      </Col9>
      <Col3 className="pl-3 pr-3">
        {user.vaiTro !== 0 && (
          <Card>
            <CardXacNhan
              id={thucTap._id}
              trangThai={thucTap.trangThai}
              refetch={refetch}
            />
          </Card>
        )}
        <Card className="p-3 mt-2">
          <CardThanhVien thucTap={thucTap} />
        </Card>
        <Card className="p-3 mt-2">
          <CardTaiLieu taiLieu={thucTap.taiLieu} />
        </Card>
      </Col3>
    </StyledRow>
  );
}

export default ThongTinThucTap;
