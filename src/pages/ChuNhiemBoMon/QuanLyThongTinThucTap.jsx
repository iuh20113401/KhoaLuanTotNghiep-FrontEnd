import { BsFileExcel } from "react-icons/bs";
import DanhSachToanBoThucTap from "../../components/ChuNhiemBoMon/QuanLySinhVien/DanhSachToanBoThucTap";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import XuatDanhSachDiemThucTapContainer from "../../components/GiangVien/QuanLyThucTap/DanhSachBaoCaoThucTap/XuatDanhSachDiemThucTapContainer";
import { useQuery } from "@tanstack/react-query";
import { layDanhSachDangKyThucTap } from "../../services/ThucTap";
import useCaiDatInfo from "../../hooks/useCaiDatInfo";

function QuanLyThongTinThucTap() {
  const { caiDatInfo, isLoading: caiDatLoading } = useCaiDatInfo();
  const { data, isLoading } = useQuery({
    queryKey: ["DanhSachToanBoSinhVienThucTap"],
    queryFn: () =>
      layDanhSachDangKyThucTap(caiDatInfo.hocKy, caiDatInfo.namHoc),
    enabled: !!caiDatLoading,
  });
  const DanhSachBaoCao = data?.results;
  return (
    <div>
      <h5>Quản lý thực tập</h5>
      <div className="mt-2  text-end">
        <XuatDanhSachDiemThucTapContainer DanhSachBaoCao={DanhSachBaoCao} />
      </div>
      <Card className="mt-2">
        {!isLoading && (
          <DanhSachToanBoThucTap DanhSachSinhVienThucTap={DanhSachBaoCao} />
        )}
      </Card>
    </div>
  );
}

export default QuanLyThongTinThucTap;
