import FormThemDeTai from "../../components/GiangVien/QuanLyDeTai/FormThemDeTai";
import Card from "../../ui/Card";

function SuaDeTai({ deTai }) {
  return (
    <div>
      <h5>Quản lý đề tài {">"} Sửa đề tài</h5>
      <Card className="p-3 mt-3">
        <h5>Thông tin đề tài</h5>
        <FormThemDeTai deTai={deTai} />
      </Card>
    </div>
  );
}

export default SuaDeTai;
