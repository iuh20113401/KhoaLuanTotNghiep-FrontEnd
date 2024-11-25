import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { HiDownload, HiTrash, HiUpload } from "react-icons/hi";

import Button from "../../ui/Button";
import Card from "../../ui/Card";
import StyledTable from "../../ui/Table";
import { useEffect, useRef, useState } from "react";
import { ColLg, StyledRow } from "../../ui/Row";
import { themTaiLieuHoiDong, xoaTaiLieuHoiDong } from "../../services/DoAn";
const SERVER = import.meta.env.PROD
  ? import.meta.env.VITE_SERVER_URL
  : import.meta.env.VITE_SERVER_URL_LOCAL;
function TaiLieuHoiDongDoAn({ doAn, refetch }) {
  const TaiLieu = doAn.taiLieuHoiDong;
  const inputref = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const { mutate: themMutate, isLoading: isPending } = useMutation({
    mutationFn: (formData) => themTaiLieuHoiDong(doAn._id, formData),
    onSuccess: () => {
      toast.success("Thêm tài liệu thành công");
      refetch();
      setSelectedFile(null);
    },
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });
  const { mutate: xoaMutate, isPending: xoaPending } = useMutation({
    mutationFn: xoaTaiLieuHoiDong,
    onSuccess: () => {
      toast.success("Xóa tài liệu thành công");
      refetch();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  function handleAddFile() {
    inputref.current.click();
  }
  function handleFileChange(e) {
    setSelectedFile(e.target.files[0]);
  }
  useEffect(() => {
    if (!selectedFile) {
      return;
    }
    const formData = new FormData();
    formData.append("taiLieu", selectedFile);
    themMutate(formData);
  }, [selectedFile, themMutate]);

  function xoaFile(taiLieuId) {
    xoaMutate({ id: doAn._id, taiLieuId });
  }
  return (
    <div>
      <h5>Tài liệu</h5>
      <Card className="mt-2 p-2">
        <Button
          type="normal"
          variation="outline"
          bgcolor="var(--bs-blue)"
          color="var(--bs-blue)"
          onClick={handleAddFile}
          disabled={isPending}
        >
          <span>
            <HiUpload />
          </span>
          Tải tài liệu lên
        </Button>
        <input
          type="file"
          style={{ display: "none" }}
          ref={inputref}
          onChange={handleFileChange}
        />
        <StyledTable>
          <thead>
            <tr>
              <th>Tên</th>
              <th>Ngày đăng</th>
              <th>Dung lượng</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {TaiLieu.map((tl) => (
              <tr>
                <td>{tl.tenTaiLieu}</td>
                <td>{tl.ngayDang}</td>
                <td>{tl.dungLuong}</td>
                <td>
                  <StyledRow>
                    <ColLg>
                      <Link to={`${SERVER}${tl.duongDan}`} target="blank">
                        <Button variation="icon">
                          <HiDownload />
                        </Button>
                      </Link>
                    </ColLg>
                    <ColLg>
                      <Button
                        disabled={xoaPending}
                        variation="icon"
                        onClick={() => xoaFile(tl._id)}
                      >
                        <HiTrash />
                      </Button>
                    </ColLg>
                  </StyledRow>
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </Card>
    </div>
  );
}

export default TaiLieuHoiDongDoAn;
