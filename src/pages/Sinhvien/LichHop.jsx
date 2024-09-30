import LichHopSiinhVienContainer from "../../components/Sinhvien/LichHop/LichHopSInhVienContainer";
import Card from "../../ui/Card";

function LichHopSinhVien() {
  return (
    <div>
      <h5>Lịch họp</h5>
      <Card className="p-3 mt-3">
        <LichHopSiinhVienContainer />
      </Card>
    </div>
  );
}

export default LichHopSinhVien;
