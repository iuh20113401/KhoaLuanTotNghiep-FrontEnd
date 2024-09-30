import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Card from "../../ui/Card";
import DanhSachBaoCaoContainer from "../../components/GiangVien/QuanLyThucTap/DanhSachBaoCaoThucTap/DanhSachBaoCao";
import FilterBaoCao from "../../components/GiangVien/QuanLyThucTap/DanhSachBaoCaoThucTap/filterBaoCao";
import {
  layTieuChiThucTapChoDoanhNghiep,
  layTieuChiThucTapChoGiangVien,
} from "../../services/TieuChi";
import { layDanhSachThucTapTheoGiangVien } from "../../services/ThucTap";

export const ChamDiemThucTapContext = createContext();

function ChamDiemBaoCaoThucTap() {
  const {
    data,
    isLoading: doAnLoading,
    refetch,
  } = useQuery({
    queryKey: ["DanhSachBaoCao"],
    queryFn: layDanhSachThucTapTheoGiangVien,
  });
  const { data: tieuChiDoanhNghiep, isLoading: doanhNghiepTCLoding } = useQuery(
    {
      queryKey: ["tieuChiDoanhNghiep"],
      queryFn: layTieuChiThucTapChoDoanhNghiep,
    }
  );
  const { data: tieuChiGiangVien, isLoading: giangVienTCLoading } = useQuery({
    queryKey: ["tieuChiGiangVienGiamSat"],
    queryFn: layTieuChiThucTapChoGiangVien,
  });
  const DanhSachBaoCao = data?.result.sort((a, b) => a.maDoAn - b.maDoAn);
  const TieuChiDoanhNghiep = tieuChiDoanhNghiep?.result;
  const TieuChiGiangVien = tieuChiGiangVien?.result;
  const isLoading = doAnLoading || doanhNghiepTCLoding || giangVienTCLoading;
  return (
    !isLoading && (
      <div>
        <h5>Chấm điểm đồ án</h5>
        <ChamDiemThucTapContext.Provider
          value={{
            refetch,
          }}
        >
          <Card className="mt-3">
            <FilterBaoCao />
            <DanhSachBaoCaoContainer
              chamDiem={true}
              DanhSachBaoCao={DanhSachBaoCao}
              tieuChiDoanhNghiep={TieuChiDoanhNghiep}
              tieuChiGiangVien={TieuChiGiangVien}
            />
          </Card>
        </ChamDiemThucTapContext.Provider>
      </div>
    )
  );
}

export default ChamDiemBaoCaoThucTap;
