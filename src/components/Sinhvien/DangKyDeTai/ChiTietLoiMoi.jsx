import { useMutation } from "@tanstack/react-query";
import Button from "../../../ui/Button";
import { themSinhVien2 } from "../../../services/doAn";
import toast from "react-hot-toast";
import UseUser from "../../../context/UseUser";
import { useNavigate } from "react-router-dom";

function ChiTietLoiMoi({ loiMoi }) {
  const { refetch } = UseUser();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: themSinhVien2,
    onSuccess: (data) => {
      toast.success("Tham gia đò án thành công");
      refetch();
      navigate("/sinhVien/QuanLyDoan");
    },
  });
  function handleThamGia() {
    mutate(loiMoi);
  }
  return (
    <tr>
      <td>{loiMoi?.maSo}</td>
      <td>{loiMoi?.hoTen}</td>
      <td>{loiMoi?.tenDoAn}</td>
      <td>{loiMoi?.giangVien}</td>
      <td>
        <Button disabled={isPending} onClick={handleThamGia}>
          Chấp nhận
        </Button>
      </td>
    </tr>
  );
}

export default ChiTietLoiMoi;
