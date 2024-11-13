import { useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import { layDanhSachBieuMau, uploadBieuMau } from "../../services/BieuMauChung";
import toast from "react-hot-toast";
import { HiUpload } from "react-icons/hi";
import UseUser from "../../context/UseUser";
import { layDanhSachThucTapTheoGiangVien } from "../../services/ThucTap";
import DanhSachBieuMau from "../../components/GiangVien/QuanLyDoAn/DanhSachBieuMau";
import DanhSachBaoCaoContainer from "../../components/GiangVien/QuanLyThucTap/DanhSachBaoCaoThucTap/DanhSachBaoCao";
import FilterBaoCao from "../../components/GiangVien/QuanLyThucTap/DanhSachBaoCaoThucTap/FilterBaoCao";
import { useDanhSachBaoCao } from "../../hooks/useDanhSachBaoCao";
import { useSearchParams } from "react-router-dom";
import { sortDoAnList } from "../../utils/SortDoAn";
import { sortBaoCaoList } from "../../utils/SortBaoCao";
import LoadingSpinner from "../../ui/Spinner";

function XemDanhSachBaoCao() {
  const [searchParams] = useSearchParams();

  const {
    DanhSachBaoCao,
    filterBaoCao,
    handleFilterBaoCao,
    isLoading,
    hocKy,
    namHoc,
  } = useDanhSachBaoCao({
    key: "DanhSachBaoCao",
    fn: layDanhSachThucTapTheoGiangVien,
  });
  const sortBy = searchParams.get("sortBy");

  const sortedDoAn = sortBaoCaoList(filterBaoCao, sortBy);

  const { data: user, isLoading: userLoading } = UseUser();

  const {
    data: BieuMauData,
    isLoading: BieuMauLoading,
    refetch,
  } = useQuery({
    queryKey: ["DanhSachBieuMau"],
    queryFn: () => layDanhSachBieuMau(user.user._id),
    enabled: !userLoading,
  });
  const inputref = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const { mutate: uploadMutate, isPending } = useMutation({
    mutationFn: uploadBieuMau,
    onSuccess: () => {
      toast.success("Upload biểu mẫu thành công");
      setSelectedFile(null);
      refetch();
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
    formData.append("loai", 1);
    uploadMutate(formData);
  }, [selectedFile, uploadMutate]);
  return (
    <div>
      <h5>Danh sách đồ án</h5>

      <Card className="mt-3 p-3">
        <div className="flex space-between align-center">
          {BieuMauLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <h6>Biểu mẫu chung</h6>

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
                style={{ display: "none" }}
                type="file"
                ref={inputref}
                onChange={handleFileChange}
              />
            </>
          )}
        </div>
        {!BieuMauLoading && (
          <DanhSachBieuMau DanhSachBieuMau={BieuMauData?.danhSachBieuMau} />
        )}
      </Card>
      <Card className="mt-3">
        {isLoading ? (
          <div className="p-5">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            <FilterBaoCao
              handleFilterBaoCao={handleFilterBaoCao}
              hocKy={hocKy}
              namHoc={namHoc}
            />
            <DanhSachBaoCaoContainer
              DanhSachBaoCao={sortedDoAn || DanhSachBaoCao}
            />
          </>
        )}
      </Card>
    </div>
  );
}

export default XemDanhSachBaoCao;
