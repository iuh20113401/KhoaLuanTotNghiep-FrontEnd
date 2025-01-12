import Card from "../../../ui/Card";
import { Col3, ColLg, StyledRow } from "../../../ui/Row";

function ThongTinChung({ thongTinDashboad }) {
  return (
    <StyledRow>
      <Col3 className="pr-2 pl-2">
        <Card className="p-2">
          <StyledRow>
            <ColLg>
              <h6>Tổng sinh viên</h6>
              <h4>{thongTinDashboad?.soLuongDeTai || 0}</h4>
            </ColLg>
          </StyledRow>
        </Card>
      </Col3>
      <Col3 className="pr-2 pl-2">
        <Card className="p-2">
          <h6>Số lượng đề tài</h6>{" "}
          <h4>{thongTinDashboad?.soLuongDeTai || 0}</h4>
        </Card>
      </Col3>
      <Col3 className="pr-2 pl-2">
        <Card className="p-2">
          <h6>Số lượng khóa luận</h6>{" "}
          <h4>{thongTinDashboad?.soLuongDoAn || 0}</h4>
        </Card>
      </Col3>
      <Col3 className="pr-2 pl-2">
        <Card className="p-2">
          <h6>Số lượng thực tập</h6>{" "}
          <h4>{thongTinDashboad?.soLuongSinhVienThucTap || 0}</h4>
        </Card>
      </Col3>
    </StyledRow>
  );
}

export default ThongTinChung;
