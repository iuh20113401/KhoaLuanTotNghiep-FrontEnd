import { useQuery } from "@tanstack/react-query";
import Card from "../../ui/Card";
import { layThongTinSinhVien } from "../../services/SinhVien";
import SinhVienXemDiem from "./XemDiem/SinhVienXemDiem";
import GiangVienXemDiem from "./XemDiem/GiangVienXemDiem";
import { layThongTinSinhVienTheoDoAn } from "../../services/DoAn";
import LoadingSpinner from "../../ui/Spinner";

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
      <Card className="p-2">
        {isLoading ? (
          <div>
            <LoadingSpinner />
          </div>
        ) : (
          <>
            {user.vaiTro === 0 && (
              <SinhVienXemDiem userInfo={user} sinhVienInfo={data.sinhVien} />
            )}
            {user.vaiTro !== 0 && (
              <GiangVienXemDiem
                sinhVien1={{
                  ...data.result.sinhVien1,
                  ...data.result.sinhVien1Info,
                }}
                sinhVien2={
                  data.sinhVien2Info && typeof data.sinhVien2Info === "object"
                    ? { ...data.result.sinhVien2, ...data.result.sinhVien2Info }
                    : null
                }
              />
            )}
          </>
        )}
      </Card>
    </div>
  );
}

export default Diem;
