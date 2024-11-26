import React, { useState } from "react";
import { Col4, Col8, StyledRow } from "../../../ui/Row";
import Card from "../../../ui/Card";
import PieChart from "./BieuDoTron";
import BarChart from "./BieuDoCot";
import { StyledSelect } from "../../../ui/Input";

function DashboardDeTai({ thongTinDashboad }) {
  const tiLeDauRot = thongTinDashboad?.tiLeDauRot.doAn;
  const diemAbetData = thongTinDashboad?.diemAbet;
  const diemHuongDan = thongTinDashboad?.diemHuongDan;

  if (
    !thongTinDashboad ||
    !tiLeDauRot.length ||
    !diemAbetData.length ||
    !diemHuongDan.length
  )
    return (
      <Card className="mt-2 p-3">
        <p>Hiện chưa có dữ liệu để hiển thị</p>
      </Card>
    );
  const tiLeDauRotLabel = tiLeDauRot.map((dr) =>
    dr.trangThai === 1 ? "Đậu" : dr.trangThai === 2 ? "Rớt" : "Chưa phân loại"
  );
  const tiLeDauRotdata = tiLeDauRot.map((dr) => dr.count);
  const tiLeDauRotOption = {
    backgroundColor: ["#36A2EB", "#FF6384"],
    hoverBackgroundColor: ["#36A2EB", "#FF6384"],
  };
  // Data for diemAbet (based on 'lo' from diemAbetData)
  const diemHuongDanLabel = diemHuongDan.map(
    (diem) => diem.diem || "Chưa chấm"
  );
  const diemHuongDanCount = diemHuongDan.map((diem) => diem.count);
  const diemHuonDanOption = {
    backgroundColor: [
      "#FFCE56",
      "#4BC0C0",
      "#FF6384",
      "#36A2EB",
      "#9966FF",
      "#FF9F40",
    ],
    hoverBackgroundColor: [
      "#FFCE56",
      "#4BC0C0",
      "#FF6384",
      "#36A2EB",
      "#9966FF",
      "#FF9F40",
    ],
  };
  const abetScores = diemAbetData?.map((abet) =>
    abet.diemCounts.map((countObj) => countObj.diem)
  );
  const abetLabels = diemAbetData?.map((abet) => `Lo ${abet.lo}`);
  const abetDataset = abetScores[0]?.map((_, index) => ({
    label: `Diem ${index + 1}`, // Dynamically labeling each diem
    data: diemAbetData?.map((abet) => abet.diemCounts[index]?.diem || 0),
    backgroundColor: `rgba(${index * 50}, 99, 132, 0.6)`, // Dynamically assign colors
    borderColor: `rgba(${index * 50}, 99, 132, 1)`,
    borderWidth: 1,
  }));
  return (
    <div className="mt-3">
      <h5>
        <b>Thông tin đề tài</b>
      </h5>
      <div className="mt-2">
        <StyledRow>
          <Col4>
            <Card style={{ height: "25rem" }} className="p-2 pb-5">
              <h6>Tỉ lệ đậu/rớt đồ án</h6>
              <div style={{ height: "80%", width: "100%" }}>
                <PieChart
                  labels={tiLeDauRotLabel}
                  data={tiLeDauRotdata}
                  option={tiLeDauRotOption}
                />
              </div>
            </Card>
            <Card style={{ height: "25rem" }} className="mt-2 p-2 pb-5">
              <h6>Điểm tổng</h6>
              <div style={{ height: "80%", width: "100%" }}>
                <PieChart
                  labels={diemHuongDanLabel}
                  data={diemHuongDanCount}
                  option={diemHuonDanOption}
                />
              </div>
            </Card>
          </Col4>
          <Col8 className="pl-3">
            <Card style={{ height: "25rem" }} className="p-3 pb-5">
              <h6>Phân bổ diêm abet</h6>
              <BarChart label={abetLabels} datasets={abetDataset} />
            </Card>
            <Card style={{ height: "25rem" }} className="mt-2 p-3 pb-5">
              <DiemAbetTheoLo diemAbetData={diemAbetData} />
            </Card>
          </Col8>
        </StyledRow>
      </div>
    </div>
  );
}

function DiemAbetTheoLo({ diemAbetData }) {
  const [LO, setLO] = useState(1);
  if (!diemAbetData.length) return;
  const abetLo = diemAbetData?.map((abet) => abet.lo);
  const LoLabel = diemAbetData
    ?.filter((abet) => {
      return +abet.lo === +LO;
    })[0]
    .diemCounts?.map((d) => d.diem);

  const LoData = diemAbetData
    ?.filter((abet) => {
      return +abet.lo === +LO;
    })?.[0]
    .diemCounts?.map((d) => d.count);

  const LoOptions = {
    backgroundColor: [
      "#FFCE56",
      "#4BC0C0",
      "#FF6384",
      "#36A2EB",
      "#9966FF",
      "#FF9F40",
    ],
    hoverBackgroundColor: [
      "#FFCE56",
      "#4BC0C0",
      "#FF6384",
      "#36A2EB",
      "#9966FF",
      "#FF9F40",
    ],
  };
  return (
    <>
      <h6>Điểm abet theo Lo</h6>
      <StyledSelect value={LO} onChange={(e) => setLO(e.target.value)}>
        {abetLo?.map((lo) => {
          return <option value={lo}> {`LO ${lo}`}</option>;
        })}
      </StyledSelect>

      <div style={{ height: "100%", width: "100%" }}>
        <PieChart labels={LoLabel} data={LoData} option={LoOptions} />
      </div>
    </>
  );
}
export default DashboardDeTai;
