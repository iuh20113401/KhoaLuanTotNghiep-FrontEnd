import { useState } from "react";
import BieuMauContainer from "../../components/ChuNhiemBoMon/TaoThongBao/BieuMauContainer";
import ThongBaoContainer from "../../components/ChuNhiemBoMon/TaoThongBao/ThongBaoContainer";
import TaoThongBaoHeader from "../../components/ChuNhiemBoMon/TaoThongBao/TaoThongBaoHeader";

function TaoThongBao() {
  const [active, setActive] = useState(0);

  const TabArr = [
    {
      header: "Thông báo",
      content: <ThongBaoContainer vaiTro="2" />,
    },
    {
      header: "Biểu mẩu chung",
      content: <BieuMauContainer />,
    },
  ];
  return (
    <div>
      <h5>Tạo thông báo</h5>
      <section className="mt-3">
        <TaoThongBaoHeader
          content={TabArr}
          active={active}
          setActive={setActive}
        />
        <div>{TabArr[active].content}</div>
      </section>
    </div>
  );
}

export default TaoThongBao;
