import Card from "../../ui/Card";
import SinhVienXemDiem from "./XemDiem/SinhVienXemDiem";
import GiangVienXemDiem from "./XemDiem/GiangVienXemDiem";

function Diem({ doAn, user }) {
  return (
    <div>
      <h5>Điểm</h5>
      <Card className="p-2">
        (
        <>
          {user.vaiTro === 0 && (
            <SinhVienXemDiem userInfo={user} sinhVienInfo={doAn.sinhVien} />
          )}
          {user.vaiTro !== 0 && <GiangVienXemDiem sinhVien={doAn.sinhVien} />}
        </>
      </Card>
    </div>
  );
}

export default Diem;
