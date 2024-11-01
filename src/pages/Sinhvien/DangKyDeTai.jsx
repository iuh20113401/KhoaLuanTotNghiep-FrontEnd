import DanhSachDeTai from "../../components/Sinhvien/DangKyDeTai/DanhSachDeTai";
import Card from "../../ui/Card";
import Filter from "../../components/Sinhvien/DangKyDeTai/Filter";
import { useQuery } from "@tanstack/react-query";
import { layDanhSachDeTaiDangKy } from "../../services/DeTaiApi";
import DanhSachLoiMoiContainer from "../../components/Sinhvien/DangKyDeTai/DanhSachLoiMoiContainer";
import { layThongTinCaiDat } from "../../services/CaiDat";
import UseUser from "../../context/UseUser";
import useCaiDatInfo from "../../hooks/useCaiDatInfo";

function DangKyDeTai() {
  const { data, isLoading } = useQuery({
    queryKey: ["DanhSachDeTai"],
    queryFn: layDanhSachDeTaiDangKy,
  });
  const danhSachDeTai = data?.DanhSachDeTai;
  const { caiDatInfo, isLoading: caiDatLoading } = useCaiDatInfo();
  const { data: user, isLoading: loiMoiLoading } = UseUser();
  const loiMoi = user.user?.loiMoi;
  return (
    <>
      {!loiMoiLoading && loiMoi?.length > 0 && (
        <>
          <h5 className="mt-3 mb-2">Danh sách lời mời</h5>
          <DanhSachLoiMoiContainer loiMoi={loiMoi} />
        </>
      )}
      <h5 className="mt-3 mb-2">Đăng ký đề tài</h5>
      <Card>
        <Filter />

        {!isLoading && (
          <DanhSachDeTai
            caiDatInfo={caiDatInfo}
            danhSachDeTai={danhSachDeTai}
          />
        )}
      </Card>
    </>
  );
}

export default DangKyDeTai;
