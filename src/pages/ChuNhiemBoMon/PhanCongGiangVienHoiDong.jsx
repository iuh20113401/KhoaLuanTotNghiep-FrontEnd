import { useMutation, useQuery } from "@tanstack/react-query";
import LapHoiDongContainer from "../../components/ChuNhiemBoMon/PhanCongGiangVienHoiDong/LapHoiDongContainer";
import { layDanhSachToanBoGiangVien } from "../../services/User";
import Card from "../../ui/Card";
import {
  layDanhSachDoAnDatPhanBien,
  themNhiemGiangVienHoiDong,
} from "../../services/DoAn";
import DanhSachDoAnContainer from "../../components/ChuNhiemBoMon/PhanCongGiangVienHoiDong/DanhSachDoAnContainer";
import toast from "react-hot-toast";
import { createContext, useEffect, useMemo, useState } from "react";
import Button from "../../ui/Button";
export const PhanCongHoiDongContext = createContext();
function PhanCongGiangVienHoiDong() {
  const { data, isLoading } = useQuery({
    queryKey: ["DanhSachGiangVien"],
    queryFn: layDanhSachToanBoGiangVien,
  });
  const DanhSachGiangVien = data?.danhSachGiangVien || [];
  const { data: doAnData, isLoading: doAnLoading } = useQuery({
    queryKey: ["DanhSachDoAnDatPhanBien"],
    queryFn: layDanhSachDoAnDatPhanBien,
  });

  const DanhSachDoAn = doAnData?.DanhSachDoAn || [];
  // Initialize updatedDoAn as an empty array
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
      setUpdatedDoAn(DanhSachDoAn.filter((da) => !da.giangVienHoiDong));
    }
  }, [DanhSachDoAn]); // This will run whenever DanhSachDoAn changes
  const [hoiDongs, setHoiDongs] = useState([
    { id: 1, chuTich: "", thuKy: "", uyVien: "" },
  ]);
  const [posterHoiDongs, setPosterHoiDongs] = useState([
    { id: 1, gv1: "", gv2: "" },
  ]);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Helper function to get all selected giangVien
  const getAllSelectedGiangVien = () => {
    const selectedFromHoiDongs = hoiDongs.flatMap((hd) => [
      hd.chuTich,
      hd.thuKy,
      hd.uyVien,
    ]);
    const selectedFromPosterHoiDongs = posterHoiDongs.flatMap((phd) => [
      phd.gv1,
      phd.gv2,
    ]);
    return [...selectedFromHoiDongs, ...selectedFromPosterHoiDongs].filter(
      (id) => id // Remove empty selections
    );
  };

  // Memoized list of selected giangVien to avoid recalculating on every render
  const selectedGiangVien = useMemo(getAllSelectedGiangVien, [
    hoiDongs,
    posterHoiDongs,
  ]);

  // Function to get available giangVien for each dropdown
  const getAvailableGiangVien = (currentSelection) => {
    return DanhSachGiangVien.filter(
      (gv) => !selectedGiangVien.includes(gv._id) || gv._id === currentSelection
    );
  };

  const themHoiDong = () => {
    setHoiDongs([
      ...hoiDongs,
      { id: hoiDongs.length + 1, chuTich: "", thuKy: "", uyVien: "" },
    ]);
  };

  const themPosterHoiDong = () => {
    setPosterHoiDongs([
      ...posterHoiDongs,
      { id: posterHoiDongs.length + 1, gv1: "", gv2: "" },
    ]);
  };
  // Function to remove a council by ID
  const xoaHoiDong = (id) => {
    setHoiDongs(hoiDongs.filter((hoiDong) => hoiDong.id !== id));
  };

  // Function to remove a poster council by ID
  const xoaPosterHoiDong = (id) => {
    setPosterHoiDongs(
      posterHoiDongs.filter((posterHoiDong) => posterHoiDong.id !== id)
    );
  };
  const handleChangeHoiDong = (id, field, value) => {
    setHoiDongs(
      hoiDongs.map((hoiDong) =>
        hoiDong.id === id ? { ...hoiDong, [field]: value } : hoiDong
      )
    );
  };

  const handleChangePosterHoiDong = (id, field, value) => {
    setPosterHoiDongs(
      posterHoiDongs.map((posterHoiDong) =>
        posterHoiDong.id === id
          ? { ...posterHoiDong, [field]: value }
          : posterHoiDong
      )
    );
  };

  const handleConfirm = () => {
    if (
      !(
        hoiDongs.filter(
          (hd) => hd && Object.values(hd).every((vl) => vl !== "")
        ).length === hoiDongs.length
      ) ||
      !(
        posterHoiDongs.filter(
          (hd) => hd && Object.values(hd).every((vl) => vl !== "")
        ).length === posterHoiDongs.length
      )
    ) {
      toast.error("Vui lòng chọn hội đồng");
      return;
    }
    setIsConfirmed(true);
  };
  const handleChangeHoiDongDoAn = (doAnId, type, id, value) => {
    setUpdatedDoAn((prevDoAnList) =>
      prevDoAnList.map((doAn) => {
        return doAn._id === doAnId
          ? {
              ...doAn,
              loai: type,
              giangVienHoiDong:
                +type === 1 ? hoiDongs[+id - 1] : posterHoiDongs[+id - 1],
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
    if (!isUpdated) toast.error("Vui phân công hết đò án");
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
    });
    mutate(newData);
  }
  return (
    <PhanCongHoiDongContext.Provider
      value={{
        hoiDongs,
        posterHoiDongs,
        isConfirmed,
        handleChangeHoiDong,
        handleChangePosterHoiDong,
        handleConfirm,
        getAvailableGiangVien,
        themHoiDong,
        themPosterHoiDong,
        xoaHoiDong,
        xoaPosterHoiDong,
        handleChangeHoiDongDoAn,
      }}
    >
      <div>
        <h5>Phân công giảng viên hội đồng</h5>
        <Card className="p-2 mt-3">
          <LapHoiDongContainer DanhSachGiangVien={DanhSachGiangVien} />
        </Card>
        <Card className="p-2 mt-2">
          <h5>Danh sách đồ án</h5>
          {!doAnLoading && (
            <DanhSachDoAnContainer DanhSachDoAn={updatedDoAn} />
          )}{" "}
          <div className="text-end">
            <Button onClick={handlePhanCong} disabled={isPending}>
              Phân công hội đồng
            </Button>
          </div>
        </Card>
      </div>
    </PhanCongHoiDongContext.Provider>
  );
}

export default PhanCongGiangVienHoiDong;
