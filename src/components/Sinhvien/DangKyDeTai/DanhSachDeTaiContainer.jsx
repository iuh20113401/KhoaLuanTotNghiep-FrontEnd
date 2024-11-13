import Card from "../../../ui/Card";
import ChiTietDeTai from "./ChiTietDeTai";

function DanhSachDeTaiContainer({ danhSachDeTai, caiDatInfo }) {
  return (
    <div>
      <Card>
        <div className="p-3">
          <h6>Danh sách đề tài</h6>
        </div>
        {danhSachDeTai.map((deTai) => (
          <ChiTietDeTai deTai={deTai} caiDatInfo={caiDatInfo} />
        ))}
      </Card>
    </div>
  );
}

export default DanhSachDeTaiContainer;
