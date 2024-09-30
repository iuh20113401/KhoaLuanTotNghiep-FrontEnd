import { useQuery } from "@tanstack/react-query";
import Card from "../../ui/Card";
import { layThongTinSinhVien } from "../../services/SinhVien";
import SinhVienXemDiem from "./XemDiem/SinhVienXemDiem";
import GiangVienXemDiem from "./XemDiem/GiangVienXemDiem";
import { layThongTinSinhVienTheoDoAn } from "../../services/DoAn";

function Diem({ doAn, user }) {
  const { data, isLoading } = useQuery({
    queryKey: ["thongTinSinhVien"],
    queryFn: () => {
      if (user.vaiTro === 0) return layThongTinSinhVien(user._id);
      return layThongTinSinhVienTheoDoAn(doAn._id);
    },
  });

  return (
    <div>
      <h5>Điểm</h5>
      {!isLoading && (
        <Card className="p-2">
          {user.vaiTro === 0 && (
            <SinhVienXemDiem userInfo={user} sinhVienInfo={data.sinhVien} />
          )}
          {user.vaiTro !== 0 && <GiangVienXemDiem sinhVien={data.sinhVien} />}
        </Card>
      )}
    </div>
  );
}

export default Diem;
