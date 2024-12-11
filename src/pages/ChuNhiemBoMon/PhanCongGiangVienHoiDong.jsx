import { useMutation, useQuery } from "@tanstack/react-query";
import Card from "../../ui/Card";
import {
  layDanhSachDoAnDatPhanBien,
  themNhiemGiangVienHoiDong,
} from "../../services/DoAn";
import DanhSachDoAnContainer from "../../components/ChuNhiemBoMon/PhanCongGiangVienHoiDong/DanhSachDoAnContainer";
import toast from "react-hot-toast";
import { createContext, useEffect, useMemo, useState } from "react";
import Button from "../../ui/Button";
import LoadingSpinner from "../../ui/Spinner";
import HoiDongContainer from "../../components/ChuNhiemBoMon/PhanCongGiangVienHoiDong/TaoHoiDong/HoiDongContainer";
import { useDanhSachDoAn } from "../../hooks/useDanhSachDoAn";
export const PhanCongHoiDongContext = createContext();
function PhanCongGiangVienHoiDong() {
  const { DanhSachDoAn, isLoading, namHoc, hocKy } = useDanhSachDoAn({
    key: "DanhSachDoAnDatPhanBien",
    fn: layDanhSachDoAnDatPhanBien,
  });
  const [updatedDoAn, setUpdatedDoAn] = useState([]);

  const { mutate, isPending } = useMutation({
    mutationFn: themNhiemGiangVienHoiDong,
    onSuccess: () => {
      toast.success("Câp nhât giảng viên thành công");
    },
    onError: (error) => {
      toast.error("Lôi", error.message);
    },
  });
  useEffect(() => {
    if (DanhSachDoAn.length) {
      setUpdatedDoAn(
        DanhSachDoAn.filter((da) => {
          return (
            typeof da.giangVienHoiDong === "object" &&
            !Object.values(da.giangVienHoiDong).length > 0
          );
        })
      );
    }
  }, [DanhSachDoAn]);
  const [hoiDongs, setHoiDongs] = useState([
    { id: 1, chuTich: "", thuKy: "", uyVien: "" },
  ]);
  const [posterHoiDongs, setPosterHoiDongs] = useState([
    { id: 1, gv1: "", gv2: "" },
  ]);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleChangeHoiDongDoAn = (doAnId, type, id, value) => {
    setUpdatedDoAn((prevDoAnList) =>
      prevDoAnList.map((doAn) => {
        return doAn._id === doAnId
          ? {
              ...doAn,
              loai: type,
              giangVienHoiDong:
                +type === 1 ? hoiDongs[+id] : posterHoiDongs[+id],
            }
          : doAn;
      })
    );
  };
  function handlePhanCong() {
    const isUpdated = updatedDoAn.every((da) => {
      return (
        da.giangVienHoiDong &&
        Object.values(da.giangVienHoiDong).every((vl) => vl !== "")
      );
    });
    if (!isUpdated) {
      toast.error("Vui phân công hết đò án");
      return;
    }
    const newData = updatedDoAn.map((da) => {
      const { giangVienHoiDong, loai } = da;
      if (loai === 1)
        return {
          loai,
          _id: da._id,
          giangVien: Object.keys(giangVienHoiDong)
            .map(
              (gv, index) =>
                index !== 0 && {
                  userId: giangVienHoiDong[gv],
                  chucDanh: gv,
                  stt: gv === "chuTich" ? 1 : gv === "thuKy" ? 2 : 3,
                }
            )
            .filter((gv) => gv),
        };
      if (loai === 2)
        return {
          loai,
          _id: da._id,

          giangVien: Object.keys(giangVienHoiDong)
            .map(
              (gv, index) =>
                index !== 0 && {
                  userId: giangVienHoiDong[gv],
                  chucDanh: gv,
                  stt: gv === "gv1" ? 1 : 2,
                }
            )
            .filter((gv) => gv),
        };
      return null;
    });
    mutate(newData);
  }
  return (
    <PhanCongHoiDongContext.Provider
      value={{
        hoiDongs,
        posterHoiDongs,
        isConfirmed,
        handleChangeHoiDongDoAn,
        setHoiDongs,
        setPosterHoiDongs,
        setIsConfirmed,
      }}
    >
      <div>
        <h5>Phân công giảng viên hội đồng</h5>
        <Card className="p-2 mt-3">
          <HoiDongContainer />
        </Card>
        <Card className="p-2 mt-2">
          <h5>Danh sách khóa luận</h5>
          {isLoading ? (
            <div>
              <LoadingSpinner />
            </div>
          ) : (
            <>
              <DanhSachDoAnContainer DanhSachDoAn={updatedDoAn} />
              <div className="text-end">
                <Button onClick={handlePhanCong} disabled={isPending}>
                  Phân công hội đồng
                </Button>
              </div>
            </>
          )}
        </Card>
      </div>
    </PhanCongHoiDongContext.Provider>
  );
}

export default PhanCongGiangVienHoiDong;
