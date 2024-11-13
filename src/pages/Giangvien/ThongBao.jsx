import { Link } from "react-router-dom";
import Card from "../../ui/Card";
import { Col3, Col9, StyledRow } from "../../ui/Row";
import ThongBaoContainer from "../../components/ChuNhiemBoMon/TaoThongBao/ThongBaoContainer";

function ThongBao() {
  return (
    <div>
      <h5>Thông báo</h5>
      <ThongBaoContainer vaiTro="1" />
    </div>
  );
}

export default ThongBao;
