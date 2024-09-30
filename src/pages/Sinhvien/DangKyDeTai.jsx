import DanhSachDeTai from "../../components/Sinhvien/DangKyDeTai/DanhSachDeTai";
import Card from "../../ui/Card";
import Filter from "../../components/Sinhvien/DangKyDeTai/Filter";
import { useQuery } from "@tanstack/react-query";
import { layDanhSachDeTaiDangKy } from "../../services/DeTaiApi";
import DanhSachLoiMoiContainer from "../../components/Sinhvien/DangKyDeTai/DanhSachLoiMoiContainer";

function DangKyDeTai() {
  const { data, isLoading } = useQuery({
    queryKey: ["DanhSachDeTai"],
    queryFn: layDanhSachDeTaiDangKy,
  });
  const danhSachDeTai = data?.DanhSachDeTai;
  return (
    <>
      <h5 className="mt-3 mb-2">Danh sách lời mời</h5>
      <DanhSachLoiMoiContainer />
      <h5 className="mt-3 mb-2">Đăng ký đề tài</h5>
      <Card>
        <Filter />

        {!isLoading && <DanhSachDeTai danhSachDeTai={danhSachDeTai} />}
      </Card>
    </>
  );
}

export default DangKyDeTai;
