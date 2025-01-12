import { useMutation } from "@tanstack/react-query";
import Button from "../../../ui/Button";
import { StyledTextarea } from "../../../ui/Input";
import Modal from "../../../ui/Modal";
import decodeHtml from "../../../utils/ChangeHtmlCode";
import { useState } from "react";
import { suaDeTai, yeuCauChinhSuaDeTai } from "../../../services/DeTaiApi";
import toast from "react-hot-toast";
import formatVieNamDate from "../../../utils/FormatDate";
function DisplayQuillContent({ content }) {
  const decodedContent = decodeHtml(content);

  return <div dangerouslySetInnerHTML={{ __html: decodedContent }} />;
}
function ChinhSuaModal({ deTai, setShowModal }) {
  const { mutate: chinhSuaMutate, isPending: suaLoading } = useMutation({
    mutationFn: yeuCauChinhSuaDeTai,
    onSuccess: () => {
      toast.success("Đã cập nhật yêu cầu chỉnh sửa");
      setShowModal(false);
    },
  });
  const [noiDungChinhSua, setNoiDungChinhSua] = useState(deTai?.ghiChu || "");

  function chinhSuaDeTaiHandle() {
    chinhSuaMutate({ id: deTai._id, data: { noiDung: noiDungChinhSua } });
  }
  return (
    <Modal size="xl">
      <Modal.Header onClick={() => setShowModal((showModal) => !showModal)}>
        <h5>Yêu cầu chỉnh sủa đề tài</h5>
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
        <div className="mt-2">
          <p>Yêu câu chỉnh sửa trước đây: </p>
          {deTai.ghiChu.map((gc) => (
            <div className="flex">
              <p>{formatVieNamDate(gc.ngayTao)}: </p>
              <p> {gc.noiDung}</p>
            </div>
          ))}
        </div>
        <StyledTextarea
          className="mt-2"
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
