import styled from "styled-components";
import Card from "../../ui/Card";
import { Col3, Col9, StyledRow } from "../../ui/Row";
import CardThanhVien from "./ThongTinChung/CardThanhVien";
import decodeHtml from "../../utils/ChangeHtmlCode";
import CardTaiLieu from "./ThongTinChung/CardTaiLieu";
import Comment from "./ThongTinChung/Comment";
import CardXacNhan from "./ThongTinChung/CardXacNhan";
import CardXacNhanCuoiKy from "./ThongTinChung/CardXacNhanCuoiKy";

const StyledInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-bottom: 0.4rem;
`;

// Make StyledRow and columns responsive for mobile
const ResponsiveRow = styled(StyledRow)`
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const ResponsiveCol9 = styled(Col9)`
  @media (max-width: 768px) {
    flex: 1 1 100%;
    padding: 0;
    width: 100%;
    padding-right: 1.2rem;
    padding-left: 1.2rem;
    margin-top: 0.8rem;
  }
`;

const ResponsiveCol3 = styled(Col3)`
  @media (max-width: 768px) {
    flex: 1 1 100%;
    padding: 0;
    width: 100%;
  }
`;

function DisplayQuillContent({ content }) {
  const decodedContent = decodeHtml(content);
  return <div dangerouslySetInnerHTML={{ __html: decodedContent }} />;
}

function ThongTinChung({ user, doAn, refetch }) {
  const DeTai = doAn.deTai;

  return (
    <ResponsiveRow>
      <ResponsiveCol9>
        <Card className="p-2">
          <StyledInfoDiv>
            <h6>
              <b>Tên đề tài:</b>
            </h6>
            <p>{DeTai.tenDeTai}</p>
          </StyledInfoDiv>
          <StyledInfoDiv>
            <h6>
              <b>Giảng viên hướng dẫn:</b>
            </h6>
          </StyledInfoDiv>
          <StyledInfoDiv>
            <h6>
              <b>Mô tả:</b>
            </h6>
            <DisplayQuillContent content={DeTai.moTa} />
          </StyledInfoDiv>
          <StyledInfoDiv>
            <h6>
              <b>Kỹ năng cần có:</b>
            </h6>
            <DisplayQuillContent content={DeTai.kyNangCanCo} />
          </StyledInfoDiv>
          <StyledInfoDiv>
            <h6>
              <b>Kết quả cần đạt:</b>
            </h6>
            <DisplayQuillContent content={DeTai.ketQuaCanDat} />
          </StyledInfoDiv>
        </Card>
        <div className="mt-3">
          <Comment comment={doAn.comment} idDoAn={doAn._id} refetch={refetch} />
        </div>
      </ResponsiveCol9>

      <ResponsiveCol3 className="pl-3 pr-3">
        {user.vaiTro !== 0 && doAn.trangThai === 0 && (
          <Card>
            <CardXacNhan
              id={doAn._id}
              trangThai={doAn.trangThai}
              refetch={refetch}
            />
          </Card>
        )}
        {user.vaiTro !== 0 && doAn.trangThai >= 1 && (
          <Card>
            <CardXacNhanCuoiKy
              id={doAn._id}
              trangThai={doAn.trangThai}
              refetch={refetch}
            />
          </Card>
        )}
        <Card className="p-3 mt-2">
          <CardThanhVien doAn={doAn} />
        </Card>
        <Card className="p-3 mt-2">
          <CardTaiLieu taiLieu={doAn.taiLieu} />
        </Card>
      </ResponsiveCol3>
    </ResponsiveRow>
  );
}

export default ThongTinChung;
