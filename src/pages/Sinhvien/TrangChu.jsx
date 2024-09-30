import Banner from "../../components/Sinhvien/TrangChu/Banner";
import BieuMau from "../../components/Sinhvien/TrangChu/BieuMau";
import KeHoachThucHien from "../../components/Sinhvien/TrangChu/KeHoachThucHien";
import ThongBaoContainer from "../../components/Sinhvien/TrangChu/ThongBaoContainer";

function TrangChu() {
  return (
    <div>
      <Banner />
      <KeHoachThucHien />
      <ThongBaoContainer />
      <BieuMau />
    </div>
  );
}

export default TrangChu;
