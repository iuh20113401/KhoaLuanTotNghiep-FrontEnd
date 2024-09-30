import { useMutation } from "@tanstack/react-query";
import Button from "../../../ui/Button";
import { StyledInput, StyledTextarea } from "../../../ui/Input";
import Modal from "../../../ui/Modal";
import decodeHtml from "../../../utils/ChangeHtmlCode";
import { useState } from "react";
import { suaDeTai } from "../../../services/DeTaiApi";
import toast from "react-hot-toast";
function DisplayQuillContent({ content }) {
  const decodedContent = decodeHtml(content);

  return <div dangerouslySetInnerHTML={{ __html: decodedContent }} />;
}
function ChinhSuaModal({ deTai, setShowModal }) {
  const { mutate: chinhSuaMutate, isPending: suaLoading } = useMutation({
    mutationFn: suaDeTai,
    onSuccess: () => {
      toast.success("Đã cập nhật yêu cầu chỉnh sửa");
      setShowModal(false);
    },
  });
  const [noiDungChinhSua, setNoiDungChinhSua] = useState(deTai?.ghiChu || "");

  function chinhSuaDeTaiHandle() {
    chinhSuaMutate({ _id: deTai._id, ghiChu: noiDungChinhSua });
  }
  return (
    <Modal size="xl">
      <Modal.Header>
        <h5>Yêu cầu chỉnh sủa đề tài</h5>
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
        <div>
          <p>Tên đề tài: {deTai.tenDeTai}</p>
        </div>
        <div className="mt-2">
          <p>Mô tả: </p>
          <p className="">
            <DisplayQuillContent content={deTai.moTa} />
          </p>
        </div>
        <div className="mt-2">
          <p>Kết quả cần đạt:</p>
          <p className="">
            <DisplayQuillContent content={deTai.ketQuaCanDat} />
          </p>
        </div>
        <div className="mt-2">
          <p>Kỹ năng cần có: </p>
          <p className="">
            <DisplayQuillContent content={deTai.kyNangCanCo} />
          </p>
        </div>
        <StyledTextarea
          className="mt-2"
          value={noiDungChinhSua}
          onChange={(e) => setNoiDungChinhSua(e.target.value)}
          placeholder="Nhập yêu cầu chỉnh sửa"
        />
        <div className="mt-3 text-end">
          <Button
            onClick={chinhSuaDeTaiHandle}
            disabled={suaLoading}
            state={suaLoading ? "disabled" : ""}
          >
            Xác nhận
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ChinhSuaModal;
