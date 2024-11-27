import { useContext, useEffect, useMemo } from "react";
import Button from "../../../../ui/Button";
import { StyledSelect } from "../../../../ui/Input";
import { Col3, Col9, StyledRow } from "../../../../ui/Row";
import { PhanCongHoiDongContext } from "../../../../pages/ChuNhiemBoMon/PhanCongGiangVienHoiDong";
import { useMutation, useQuery } from "@tanstack/react-query";
import { layDanhSachToanBoGiangVien } from "../../../../services/User";
import { layHoiDong, taoHoiDong } from "../../../../services/hoiDong";
import toast from "react-hot-toast";
import LoadingSpinner from "../../../../ui/Spinner";
function getDistinctValues(arr, field) {
  const distinctValues = new Set();
  arr.forEach((item) => distinctValues.add(item[field]));
  return Array.from(distinctValues).length;
}
function HoiDongContainer() {
  const context = useContext(PhanCongHoiDongContext);
  const {
    hoiDongs,
    posterHoiDongs,
    isConfirmed,
    setHoiDongs,
    setPosterHoiDongs,
    setIsConfirmed,
  } = context;
  const { data, isLoading: giangVienLoading } = useQuery({
    queryKey: ["DanhSachGiangVien"],
    queryFn: layDanhSachToanBoGiangVien,
  });
  const DanhSachGiangVien = data?.danhSachGiangVien || [];
  const {
    data: hoiDongData,
    isLoading: hoiDongLoading,
    refetch,
  } = useQuery({
    queryKey: ["DanhSacHoiDong"],
    queryFn: layHoiDong,
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const DanhSachHoiDong = hoiDongData?.danhSachHoiDong || [];
  const { mutate: taoHoiDongMutate, isPending: taoHoiDongPending } =
    useMutation({
      mutationFn: taoHoiDong,
      onSuccess: () => {
        toast.success("Tạo hội đồng thành công");
        setIsConfirmed(true);
        refetch();
      },
      onError: (error) => {
        toast.error("Lôi", error.message);
      },
    }); // Helper function to get all selected giangVien
  // Sử dụng useEffect để cập nhật hoiDongs và posterHoiDongs khi hoiDongData thay đổi
  useEffect(() => {
    if (hoiDongLoading) return;
    if (DanhSachHoiDong && DanhSachHoiDong.length > 0) {
      const existingHoiDongs = DanhSachHoiDong.filter((hd) => hd.loai === 1);
      const existingPosterHoiDongs = DanhSachHoiDong.filter(
        (hd) => hd.loai === 2
      );

      if (existingHoiDongs.length > 0) {
        let formattedHoiDongs = [];
        const soLuongHoiDong = getDistinctValues(existingHoiDongs, "stt");
        for (let index = 0; index < soLuongHoiDong; index++) {
          const hoiDong = existingHoiDongs.filter((hd) => hd.stt === index);
          formattedHoiDongs.push({
            stt: index,
            chuTich: hoiDong.filter((hd) => hd.vaiTro === 1)[0].giangVien._id,
            thuKy: hoiDong.filter((hd) => hd.vaiTro === 2)[0].giangVien._id,
            uyVien: hoiDong.filter((hd) => hd.vaiTro === 3)[0].giangVien._id,
          });
        }
        setHoiDongs(formattedHoiDongs);
      }

      if (existingPosterHoiDongs.length > 0) {
        let formattedPosterHoiDongs = [];
        const soLuongPosterHoiDongs = getDistinctValues(
          existingPosterHoiDongs,
          "stt"
        );
        for (let index = 0; index < soLuongPosterHoiDongs; index++) {
          const hoiDong = existingPosterHoiDongs.filter(
            (hd) => hd.stt === index
          );
          formattedPosterHoiDongs.push({
            stt: index,
            gv1: hoiDong.filter((hd) => hd.vaiTro === 1)[0].giangVien._id,
            gv2: hoiDong.filter((hd) => hd.vaiTro === 2)[0].giangVien._id,
          });
        }
        setPosterHoiDongs(formattedPosterHoiDongs);
      }

      setIsConfirmed(true); // Đánh dấu là đã xác nhận
    }
  }, [
    hoiDongLoading,
    hoiDongData,
    setHoiDongs,
    setPosterHoiDongs,
    setIsConfirmed,
    DanhSachHoiDong,
  ]);
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
  const selectedGiangVien = useMemo(getAllSelectedGiangVien, [
    hoiDongs,
    posterHoiDongs,
  ]);

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
    taoHoiDongMutate([
      { danhSachHoiDong: hoiDongs, loai: 1 },
      { danhSachHoiDong: posterHoiDongs, loai: 2 },
    ]);
  };
  if (giangVienLoading || taoHoiDongPending)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

  return (
    <div>
      <h5>Lập danh sách hội đồng</h5>
      <h6 className="mt-2">Danh sách hội đồng </h6>

      {hoiDongs.map((hoiDong) => (
        <div key={hoiDong.id}>
          <p>
            <strong>Hội đồng {hoiDong.id}</strong>
          </p>
          <StyledRow className="mt-1">
            <Col3>Chủ tịch hội đồng</Col3>
            <Col9>
              {isConfirmed ? (
                <p>
                  {
                    DanhSachGiangVien.find((gv) => gv._id === hoiDong.chuTich)
                      ?.hoTen
                  }
                </p>
              ) : (
                <StyledSelect
                  value={hoiDong.chuTich}
                  onChange={(e) =>
                    handleChangeHoiDong(hoiDong.id, "chuTich", e.target.value)
                  }
                >
                  <option value={""}>Chọn chủ tịch hội đồng</option>
                  {getAvailableGiangVien(hoiDong.chuTich).map((gv) => (
                    <option value={gv._id} key={gv._id}>
                      {gv.hoTen}
                    </option>
                  ))}
                </StyledSelect>
              )}
            </Col9>
          </StyledRow>

          <StyledRow className="mt-1">
            <Col3>Thư ký hội đồng</Col3>
            <Col9>
              {isConfirmed ? (
                <p>
                  {
                    DanhSachGiangVien.find((gv) => gv._id === hoiDong.thuKy)
                      ?.hoTen
                  }
                </p>
              ) : (
                <StyledSelect
                  value={hoiDong.thuKy}
                  onChange={(e) =>
                    handleChangeHoiDong(hoiDong.id, "thuKy", e.target.value)
                  }
                >
                  <option value={""}>Chọn thư ký hội đồng</option>
                  {getAvailableGiangVien(hoiDong.thuKy).map((gv) => (
                    <option value={gv._id} key={gv._id}>
                      {gv.hoTen}
                    </option>
                  ))}
                </StyledSelect>
              )}
            </Col9>
          </StyledRow>

          <StyledRow className="mt-1">
            <Col3>Ủy viên hội đồng</Col3>
            <Col9>
              {isConfirmed ? (
                <p>
                  {
                    DanhSachGiangVien.find((gv) => gv._id === hoiDong.uyVien)
                      ?.hoTen
                  }
                </p>
              ) : (
                <StyledSelect
                  value={hoiDong.uyVien}
                  onChange={(e) =>
                    handleChangeHoiDong(hoiDong.id, "uyVien", e.target.value)
                  }
                >
                  <option value={""}>Chọn ủy viên hội đồng</option>
                  {getAvailableGiangVien(hoiDong.uyVien).map((gv) => (
                    <option value={gv._id} key={gv._id}>
                      {gv.hoTen}
                    </option>
                  ))}
                </StyledSelect>
              )}
            </Col9>
          </StyledRow>
          {hoiDong.id > 1 && isConfirmed !== true && (
            <div>
              <Button onClick={() => xoaHoiDong(hoiDong.id)} className="mt-1">
                Xóa hội đồng {hoiDong.id}
              </Button>
            </div>
          )}
        </div>
      ))}

      {!isConfirmed && (
        <Button onClick={themHoiDong} className="mt-1">
          Thêm hội đồng
        </Button>
      )}

      <h6 className="mt-2">Danh sách hội đồng poster</h6>

      {posterHoiDongs.map((posterHoiDong) => (
        <div key={posterHoiDong.id}>
          <p>
            <strong>Hội đồng poster {posterHoiDong.id}</strong>
          </p>
          <StyledRow className="mt-1">
            <Col3>Giảng viên 1</Col3>
            <Col9>
              {isConfirmed ? (
                <p>
                  {
                    DanhSachGiangVien.find((gv) => gv._id === posterHoiDong.gv1)
                      ?.hoTen
                  }
                </p>
              ) : (
                <StyledSelect
                  value={posterHoiDong.gv1}
                  onChange={(e) =>
                    handleChangePosterHoiDong(
                      posterHoiDong.id,
                      "gv1",
                      e.target.value
                    )
                  }
                >
                  <option value={""}>Chọn giảng viên 1</option>
                  {getAvailableGiangVien(posterHoiDong.gv1).map((gv) => (
                    <option value={gv._id} key={gv._id}>
                      {gv.hoTen}
                    </option>
                  ))}
                </StyledSelect>
              )}
            </Col9>
          </StyledRow>

          <StyledRow className="mt-1">
            <Col3>Giảng viên 2</Col3>
            <Col9>
              {isConfirmed ? (
                <p>
                  {
                    DanhSachGiangVien.find((gv) => gv._id === posterHoiDong.gv2)
                      ?.hoTen
                  }
                </p>
              ) : (
                <StyledSelect
                  value={posterHoiDong.gv2}
                  onChange={(e) =>
                    handleChangePosterHoiDong(
                      posterHoiDong.id,
                      "gv2",
                      e.target.value
                    )
                  }
                >
                  <option value={""}>Chọn giảng viên 2</option>
                  {getAvailableGiangVien(posterHoiDong.gv2).map((gv) => (
                    <option value={gv._id} key={gv._id}>
                      {gv.hoTen}
                    </option>
                  ))}
                </StyledSelect>
              )}
            </Col9>
          </StyledRow>
          {posterHoiDong.id > 1 && isConfirmed !== true && (
            <div>
              <Button
                onClick={() => xoaPosterHoiDong(posterHoiDong.id)}
                className="mt-1"
              >
                Xóa hội đồng poster {posterHoiDong.id}
              </Button>
            </div>
          )}
        </div>
      ))}

      {!isConfirmed && (
        <Button onClick={themPosterHoiDong} className="mt-1">
          Thêm hội đồng poster
        </Button>
      )}

      <div className="text-end">
        {!isConfirmed && (
          <Button className="mt-2" onClick={handleConfirm}>
            Xác nhận
          </Button>
        )}
      </div>
    </div>
  );
}

export default HoiDongContainer;
