import { useMutation } from "@tanstack/react-query";
import Card from "../../ui/Card";
import {
  layDanhSachDoAnDatPhanBien,
  themNhiemGiangVienHoiDong,
} from "../../services/DoAn";
import toast from "react-hot-toast";
import { createContext, useEffect, useState } from "react";
import HoiDongContainer from "../../components/ChuNhiemBoMon/PhanCongGiangVienHoiDong/TaoHoiDong/HoiDongContainer";
import { useDanhSachDoAn } from "../../hooks/useDanhSachDoAn";
import DanhSachKhoaLuanChuaPhanHoiDong from "../../components/ChuNhiemBoMon/PhanCongGiangVienHoiDong/DanhSachKhoaLuanChuaPhanHoiDong";
import DanhSachKhoaLuanDaPhanHoiDong from "../../components/ChuNhiemBoMon/PhanCongGiangVienHoiDong/DanhSachKhoaLuanDaPhanHoiDong";
import QuanLyDeTaiHeader from "../../components/ChuNhiemBoMon/TaoThongBao/QuanLyDeTaiHeader";
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
                +type === 1
                  ? { stt: id, ...hoiDongs[+id] }
                  : { stt: id, ...hoiDongs[+id] },
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
          stt: giangVienHoiDong.stt,
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
  const [active, setActive] = useState(0);

  const TabArr = [
    {
      header: "Danh sách đề tài giảng viên",
      content: (
        <DanhSachKhoaLuanChuaPhanHoiDong
          updatedDoAn={updatedDoAn}
          handlePhanCong={handlePhanCong}
          isLoading={isLoading}
          isPending={isPending}
        />
      ),
    },
    {
      header: "Danh sách đề tài sinh viên yêu cầu",
      content: (
        <DanhSachKhoaLuanDaPhanHoiDong
          danhSachDoAn={DanhSachDoAn.filter((da) => {
            return !(
              typeof da.giangVienHoiDong === "object" &&
              !Object.values(da.giangVienHoiDong).length > 0
            );
          })}
          isLoading={isLoading}
          isPending={isPending}
        />
      ),
    },
  ];
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
        <div className="mt-3">
          <QuanLyDeTaiHeader
            content={TabArr}
            active={active}
            setActive={setActive}
          />
        </div>
        <div className="mt-1">{TabArr[active].content}</div>
      </div>
    </PhanCongHoiDongContext.Provider>
  );
}

export default PhanCongGiangVienHoiDong;
