import { useQuery } from "@tanstack/react-query";
import Banner from "../../components/Sinhvien/TrangChu/Banner";
import BieuMau from "../../components/Sinhvien/TrangChu/BieuMau";
import KeHoachThucHien from "../../components/Sinhvien/TrangChu/KeHoachThucHien";
import ThongBaoContainer from "../../components/Sinhvien/TrangChu/ThongBaoContainer";
import {
  layDanhSachChoSinhVien,
  layKeHoachThucHien,
} from "../../services/ThongBao";
import LoadingSpinner from "../../ui/Spinner";

function TrangChu() {
  const { data: keHoachData, isLoading: keHoachLoading } = useQuery({
    queryKey: ["KeHoachThucHien"],
    queryFn: layKeHoachThucHien,
  });
  const { data: thongBaoData, isLoading: ThongBaoLoading } = useQuery({
    queryKey: ["DanhSachThongBao"],
    queryFn: layDanhSachChoSinhVien,
  });
  const DanhSachThongBao = thongBaoData?.data;
  const keHoach = keHoachData?.thongBao;
  const isLoading = ThongBaoLoading && keHoachLoading;
  return (
    <div>
      <Banner />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <KeHoachThucHien keHoach={keHoach} />
          <ThongBaoContainer DanhSachThongBao={DanhSachThongBao} />
          <BieuMau />
        </>
      )}
    </div>
  );
}

export default TrangChu;
