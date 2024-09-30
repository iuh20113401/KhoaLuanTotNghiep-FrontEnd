import LichHopContainer from "../../components/GiangVien/LichHop/LichHopContainer";
import Card from "../../ui/Card";

function LichHop() {
  return (
    <div>
      <h5>Lịch họp</h5>
      <Card className="p-3 mt-3">
        <LichHopContainer />
      </Card>
    </div>
  );
}

export default LichHop;
