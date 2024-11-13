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
import { useDanhSachBaoCao } from "../../hooks/useDanhSachBaoCao";
import { sortBaoCaoList } from "../../utils/SortBaoCao";
import { useSearchParams } from "react-router-dom";
import LoadingSpinner from "../../ui/Spinner";

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
  const sortBy = searchParams.get("sortBy");

  const sortedDoAn = sortBaoCaoList(filterBaoCao, sortBy);
  return (
    <div>
      <h5>Chấm điểm báo cáo thực tập</h5>
      <ChamDiemThucTapContext.Provider
        value={{
          refetch,
        }}
      >
        <Card className="mt-3">
          {isLoading ? (
            <div className="p-3">
              <LoadingSpinner />
            </div>
          ) : DanhSachBaoCao?.length > 0 ? (
            <>
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
            </>
          ) : (
            <div className="p-3">
              <p>Hiện tại chưa có báo cáo nào</p>
            </div>
          )}
        </Card>
      </ChamDiemThucTapContext.Provider>
    </div>
  );
}

export default ChamDiemBaoCaoThucTap;
