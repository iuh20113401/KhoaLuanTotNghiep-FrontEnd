import styled from "styled-components";
import Card from "../../ui/Card";
import { Col3, Col9, StyledRow } from "../../ui/Row";
import CardThanhVien from "./ThongTinChung/CardThanhVien";
import decodeHtml from "../../utils/ChangeHtmlCode";
import CardTaiLieu from "./ThongTinChung/CardTaiLieu";
import Comment from "./ThongTinChung/Comment";
import CardXacNhan from "./ThongTinChung/CardXacNhan";
import CardXacNhanCuoiKy from "./ThongTinChung/CardXacNhanCuoiKy";

function DisplayQuillContent({ content }) {
  const decodedContent = decodeHtml(content);
  return <div dangerouslySetInnerHTML={{ __html: decodedContent }} />;
}

function ThongTinChung({ user, doAn, refetch }) {
  const DeTai = doAn.deTai;
  return (
    <StyledRow>
      <Col9>
        <Card className="p-2">
          <div className="mb-2 gap-1 flex flex-col">
            <h6>
              <b>Tên đề tài:</b>
            </h6>
            <p>{DeTai.tenDeTai}</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <h6>
              <b>Giảng viên hướng dẫn:</b>
            </h6>
            <p className="text-sm">{doAn.giangVien.hoTen}</p>
          </div>
          <div className="mb-2 gap-1 flex flex-col">
            <h6>
              <b>Mô tả:</b>
            </h6>
            <DisplayQuillContent content={DeTai.moTa} />
          </div>
          <div className="mb-2 gap-1 flex flex-col">
            <h6>
              <b>Kỹ năng cần có:</b>
            </h6>
            <DisplayQuillContent content={DeTai.kyNangCanCo} />
          </div>
          <div className="mb-2 gap-1 flex flex-col">
            <h6>
              <b>Kết quả cần đạt:</b>
            </h6>
            <DisplayQuillContent content={DeTai.ketQuaCanDat} />
          </div>
        </Card>
        <div className="mt-3">
          <Comment comment={doAn.comment} idDoAn={doAn._id} refetch={refetch} />
        </div>
      </Col9>

      <Col3 className=" pl-3 pr-3">
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
      </Col3>
    </StyledRow>
  );
}

export default ThongTinChung;
