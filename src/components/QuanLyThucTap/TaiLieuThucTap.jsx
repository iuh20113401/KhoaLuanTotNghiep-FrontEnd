import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { HiDownload, HiUpload } from "react-icons/hi";

import { SERVER } from "../../context/env";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import StyledTable from "../../ui/Table";
import { useEffect, useRef, useState } from "react";
import { themTaiLieu } from "../../services/ThucTap";

function TaiLieuThucTap({ thucTap, refetch }) {
  const TaiLieu = thucTap.taiLieu;
  const inputref = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const { mutate: themMutate, isLoading: isPending } = useMutation({
    mutationFn: (formData) => themTaiLieu(thucTap._id, formData),
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
                  <Link to={`${SERVER}${tl.duongDan}`} target="blank">
                    <Button variation="icon">
                      <HiDownload />
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </Card>
    </div>
  );
}

export default TaiLieuThucTap;
