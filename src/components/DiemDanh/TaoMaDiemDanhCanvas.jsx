import { useContext, useEffect, useState } from "react";
import Button from "../../ui/Button";
import CanvaContainer from "../../ui/Canvas";
import { StyledInput, StyledSelect } from "../../ui/Input";
import StyledForm from "../../ui/Form";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { layDanhSachSinhVienTheoGiangVien } from "../../services/SinhVien";
import nhomSinhVienTheoDeTai from "../../utils/NhomSinhVienTheoDeTai";
import DanhSachDeTaiContainer from "./CanvasRightContent/DanhSachDeTaiContainer";
import DanhSachDoAnContainer from "./CanvasRightContent/DanhSachDoAnContainer";
import nhomSinhVienTheoDoAn from "../../utils/NhomSinhVienTheoDoAn";
import DanhSachSinhVienContainer from "./CanvasRightContent/DanhSachSinhVienContainer";
import laySinhVien from "../../utils/LaySinhVien";
import toast from "react-hot-toast";
import { taoMaDiemDanh } from "../../services/DiemDanh";
import ShowQrCode from "./CanvasRightContent/ShowQrCode";
import { DiemDanhContext } from "../../pages/Giangvien/DiemDanhDoAn";

function TaoMaDiemDanhCanvas({ setIsDiemDanh }) {
  const { loai: loaiDiemDanh } = useContext(DiemDanhContext);
  const [diaDiem, setDiaDiem] = useState(null); // Store the geolocation data
  const [content, setContent] = useState(null);
  const [qrCode, setQrCode] = useState(null); // Store the generated QR code

  const [selectedSinhVien, setSelectedSinhVien] = useState([]); // Store selected sinhVien
  const { register, watch, handleSubmit } = useForm();
  const { data } = useQuery({
    queryKey: ["DanhSachSinhVien"],
    queryFn: layDanhSachSinhVienTheoGiangVien,
  });
  const { mutate: taoMaDiemDanhMutate, isPending } = useMutation({
    mutationFn: taoMaDiemDanh,
    onSuccess: (data) => {
      toast.success("Tạo mã điểm danh thành công");
      setQrCode(data.qrCode); // Save the QR code data
    },
    onError: () => {
      toast.error("Tạo mã điểm danh không thành công");
    },
  });
  const DanhSachSinhVien = data?.danhSachSinhVien;
  const loai = watch("loai");
  const dieuKien = watch("dieuKien");

  // Handle adding/removing sinhVien when selecting/de-selecting deTai
  const handleSinhVienSelection = (action, sinhVienList) => {
    if (action === "add") {
      setSelectedSinhVien((prev) => [...prev, ...sinhVienList]);
    } else if (action === "remove") {
      setSelectedSinhVien((prev) =>
        prev.filter((sv) => !sinhVienList.includes(sv))
      );
    }
  };

  useEffect(() => {
    if (dieuKien !== "khoangCach") {
      setDiaDiem(null);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setDiaDiem(coords);
      },
      (error) => {
        alert(
          "Error getting location. Please ensure location services are enabled."
        );
        console.error(error);
      }
    );
  }, [dieuKien]);

  useEffect(() => {
    setSelectedSinhVien([]);
    if (qrCode !== null) {
      setContent(<ShowQrCode qrCode={qrCode} />);
      return;
    }
    switch (loai) {
      case "deTai":
        setContent(
          <DanhSachDeTaiContainer
            DanhSachDeTai={nhomSinhVienTheoDeTai(DanhSachSinhVien)}
            register={register}
            handleSinhVienSelection={handleSinhVienSelection}
          />
        );
        break;
      case "doAn":
        setContent(
          <DanhSachDoAnContainer
            DanhSachDoAn={nhomSinhVienTheoDoAn(DanhSachSinhVien)}
            register={register}
            handleSinhVienSelection={handleSinhVienSelection}
          />
        );
        break;
      case "sinhVien":
        setContent(
          <DanhSachSinhVienContainer
            DanhSachSinhVien={laySinhVien(DanhSachSinhVien)}
            register={register}
            handleSinhVienSelection={handleSinhVienSelection}
          />
        );
        break;
      default:
        setContent("");
        break;
    }
  }, [DanhSachSinhVien, qrCode, loai, register]);

  function onSubmit(data) {
    if (data.loai === "all") {
      if (DanhSachSinhVien && DanhSachSinhVien.length > 0) {
        const allSinhVienIds = DanhSachSinhVien.map((sv) => sv.Info._id);
        setSelectedSinhVien(allSinhVienIds);
        data.sinhVien = allSinhVienIds;
      } else {
        toast.error("Danh sách sinh viên trống.");
        return;
      }
    } else if (selectedSinhVien.length === 0) {
      toast.error("Vui lòng chọn sinh viên");
      return;
    }
    switch (data.hieuLuc) {
      case "5m":
        data.hieuLuc = Date.now() + 60 * 5 * 1000;
        break;
      case "10m":
        data.hieuLuc = Date.now() + 60 * 10 * 1000;
        break;
      case "30m":
        data.hieuLuc = Date.now() + 60 * 30 * 1000;
        break;
      case "60m":
        data.hieuLuc = Date.now() + 60 * 60 * 1000;
        break;
      default:
        data.hieuLuc = Date.now() + 60 * 60 * 24 * 1000;
        break;
    }
    const formData = {
      ...data,
      loai: loaiDiemDanh,
      diaDiem: diaDiem
        ? { type: "Point", coordinates: [diaDiem.lng, diaDiem.lat] }
        : null,
      sinhVien: data.sinhVien || selectedSinhVien,
    };
    taoMaDiemDanhMutate(formData);
  }

  return (
    <>
      <CanvaContainer
        title={"Tạo mã điểm danh"}
        onClick={() => setIsDiemDanh(false)}
        RightContent={content}
      >
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="loai">Chọn loại điểm danh</label>
            <StyledSelect {...register("loai")} id="loai" defaultValue={""}>
              <option value={"all"}>Toàn bộ</option>
              <option value={"deTai"}>Theo đề tài</option>
              <option value={"doAn"}>Toàn đồ án</option>
              <option value={"sinhVien"}>Toàn sinh viên</option>
            </StyledSelect>
          </div>
          <div>
            <label>Thời gian hiệu lực</label>
            <StyledSelect {...register("hieuLuc")} defaultValue={"1day"}>
              <option value={"1day"}>1 ngày</option>
              <option value={"5m"}>5 phút</option>
              <option value={"10m"}>10 phút</option>
              <option value={"30m"}>30 phút</option>
              <option value={"60m"}>1 giờ</option>
            </StyledSelect>
          </div>
          <div>
            <label>Điều kiện</label>
            <StyledSelect {...register("dieuKien")} defaultValue={"none"}>
              <option value={"none"}>Không</option>
              <option value={"khoangCach"}>Khoảng cách 300m</option>
            </StyledSelect>
          </div>
          <div>
            <label>Phòng (tùy chọn)</label>
            <StyledInput
              type="text"
              placeholder="Nhập tên phòng"
              {...register("phong")}
            />
          </div>
          <div className="text-end">
            <Button disabled={isPending}>Tạo mã điểm danh</Button>
          </div>
        </StyledForm>
      </CanvaContainer>
    </>
  );
}

export default TaoMaDiemDanhCanvas;
