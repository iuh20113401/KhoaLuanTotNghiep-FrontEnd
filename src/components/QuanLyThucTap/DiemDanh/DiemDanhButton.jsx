import { HiCamera } from "react-icons/hi";
import Button from "../../../ui/Button";
import QrCodeImageScanner from "./QrCodeImageScnaner";
// import QrCodeScanner from "./QrCodeScanner";
import { BiImage } from "react-icons/bi";
import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { diemDanh } from "../../../services/DiemDanh";
import toast from "react-hot-toast";

function DiemDanhButton() {
  const inputRef = useRef();
  const [location, setLocation] = useState(null);
  const { mutate: imageMutate, isPending } = useMutation({
    mutationFn: diemDanh,
    onSuccess: (data) => {
      toast.success("Điểm danh thành công");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  async function handleImageClick(e) {
    await navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setLocation(coords);
      },
      (error) => {
        alert(
          "Error getting location. Please ensure location services are enabled."
        );
      }
    );
    inputRef.current.click();
    inputRef.current.value = null;
  }
  return (
    <div className="flex">
      <Button
        onClick={handleImageClick}
        disabled={isPending}
        className="mr-2"
        bgcolor="var(--bs-blue)"
      >
        <span>
          <BiImage />
        </span>
        Quét mã điểm danh bằng hình ảnh
      </Button>
      <Button disabled={isPending}>
        <span>
          <HiCamera />
        </span>
        Quét mã điểm danh
      </Button>
      <QrCodeImageScanner
        inputRef={inputRef}
        location={location}
        mutate={imageMutate}
      />
    </div>
  );
}

export default DiemDanhButton;
