import { useQuery } from "@tanstack/react-query";
import FormThemDeTai from "../../components/GiangVien/QuanLyDeTai/FormThemDeTai";
import { layDanhSachToanBoGiangVien } from "../../services/User";
import Modal from "../../ui/Modal";
import LoadingSpinner from "../../ui/Spinner";

function ModalTaoDeTai({ sinhvien, setShowModal }) {
  const { data, isLoading: giangVienLoading } = useQuery({
    queryKey: ["DanhSachGiangVien"],
    queryFn: layDanhSachToanBoGiangVien,
  });
  const DanhSachGiangVien = data?.danhSachGiangVien || [];
  if (giangVienLoading)
    return (
      <div>
        <LoadingSpinner />;
      </div>
    );
  return (
    <Modal size="xl">
      <Modal.Header onClick={() => setShowModal((showModal) => !showModal)}>
        <h5>{sinhvien?.Info?.hoTen}</h5>
      </Modal.Header>
      <Modal.Body>
        <FormThemDeTai
          danhSachGiangVien={DanhSachGiangVien}
          isSinhVien={true}
        />
      </Modal.Body>
    </Modal>
  );
}

export default ModalTaoDeTai;
