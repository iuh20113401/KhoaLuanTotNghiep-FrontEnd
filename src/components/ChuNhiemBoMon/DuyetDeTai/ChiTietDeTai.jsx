import { HiCheck } from "react-icons/hi";
import Button from "../../../ui/Button";
import { HiPencilSquare } from "react-icons/hi2";
import decodeHtml from "../../../utils/ChangeHtmlCode";
import { useMutation } from "@tanstack/react-query";
import { duyetDeTai } from "../../../services/DeTaiApi";
import toast from "react-hot-toast";
import { useState } from "react";
import ChinhSuaModal from "./ChinhSuaModal";
function DisplayQuillContent({ content }) {
  const decodedContent = decodeHtml(content);

  return <div dangerouslySetInnerHTML={{ __html: decodedContent }} />;
}
function ChiTietDeTai({ deTai, refetch }) {
  const { mutate: duyetMutate, isPending: isLoading } = useMutation({
    mutationFn: duyetDeTai,
    onSuccess: () => {
      toast.success("Duyệt đề tài thành công");
      refetch();
    },
  });
  const [showModal, setShowModal] = useState(false);
  function duyetDeTaiHandle() {
    duyetMutate(deTai._id);
  }

  return (
    <>
      <tr>
        <td>
          <p>{deTai.tenDeTai}</p>
        </td>
        <td>
          <p>
            <DisplayQuillContent content={deTai.moTa} />
          </p>{" "}
        </td>
        <td>
          <p>
            <DisplayQuillContent content={deTai.kyNangCanCo} />
          </p>{" "}
        </td>
        <td>
          <p>
            <DisplayQuillContent content={deTai.ketQuaCanDat} />
          </p>{" "}
        </td>
        <td>
          <p>{deTai.giangVien.hoTen}</p>
        </td>
        <td>
          <Button
            variation="icon"
            bgcolor="var(--bs-success)"
            onClick={duyetDeTaiHandle}
            disabled={isLoading}
          >
            <HiCheck />
          </Button>
          <div className="mt-1">
            <Button
              bgcolor={deTai?.ghiChu ? "var(--bs-red)" : "var(--bs-blue)"}
              variation="icon"
              disabled={isLoading}
              onClick={() => setShowModal(true)}
            >
              <HiPencilSquare />
            </Button>
          </div>
        </td>
      </tr>
      {showModal && <ChinhSuaModal setShowModal={setShowModal} deTai={deTai} />}
    </>
  );
}

export default ChiTietDeTai;
