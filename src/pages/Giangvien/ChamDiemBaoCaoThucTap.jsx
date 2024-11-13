import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Card from "../../ui/Card";
import DanhSachBaoCaoContainer from "../../components/GiangVien/QuanLyThucTap/DanhSachBaoCaoThucTap/DanhSachBaoCao";
import FilterBaoCao from "../../components/GiangVien/QuanLyThucTap/DanhSachBaoCaoThucTap/FilterBaoCao";
import {
  layTieuChiThucTapChoDoanhNghiep,
  layTieuChiThucTapChoGiangVien,
} from "../../services/TieuChi";
import { layDanhSachThucTapTheoGiangVien } from "../../services/ThucTap";

import XuatDanhSachDiemThucTapContainer from "../../components/GiangVien/QuanLyThucTap/DanhSachBaoCaoThucTap/XuatDanhSachDiemThucTapContainer";
import useCaiDatInfo from "../../hooks/useCaiDatInfo";
import { useDanhSachBaoCao } from "../../hooks/useDanhSachBaoCao";
import { sortBaoCaoList } from "../../utils/SortBaoCao";
import { useSearchParams } from "react-router-dom";

export const ChamDiemThucTapContext = createContext();

function ChamDiemBaoCaoThucTap() {
  const {
    DanhSachBaoCao,
    filterBaoCao,
    handleFilterBaoCao,
    isLoading: baoCaoLoading,
    hocKy,
    namHoc,
    refetch,
  } = useDanhSachBaoCao({
    key: "DanhSachBaoCao",
    fn: layDanhSachThucTapTheoGiangVien,
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

  const [searchParams] = useSearchParams();

  const TieuChiDoanhNghiep = tieuChiDoanhNghiep?.result;
  const TieuChiGiangVien = tieuChiGiangVien?.result;
  const isLoading = baoCaoLoading || doanhNghiepTCLoding || giangVienTCLoading;
  if (isLoading || !DanhSachBaoCao?.length) return;
  const sortBy = searchParams.get("sortBy");

  const sortedDoAn = sortBaoCaoList(filterBaoCao, sortBy);
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
            <div className="text-end mt-2 mr-2">
              <XuatDanhSachDiemThucTapContainer
                DanhSachBaoCao={DanhSachBaoCao}
              />
            </div>
            <FilterBaoCao
              hocKy={hocKy}
              namHoc={namHoc}
              handleFilterBaoCao={handleFilterBaoCao}
            />
            <DanhSachBaoCaoContainer
              chamDiem={true}
              DanhSachBaoCao={sortedDoAn || DanhSachBaoCao}
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
