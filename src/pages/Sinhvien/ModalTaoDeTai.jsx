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
      <Modal.Header>
        <h5>{sinhvien?.Info?.hoTen}</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={() => setShowModal((showModal) => !showModal)}
        >
          X
        </button>
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
