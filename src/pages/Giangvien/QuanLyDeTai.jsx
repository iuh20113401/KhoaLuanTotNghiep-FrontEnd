import { useState } from "react";
import Filter from "../../components/GiangVien/QuanLyDeTai/Filter";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import ThemDetai from "./ThemDetai";
import { layDanhSachDeTai } from "../../services/DeTaiApi";
import SuaDeTai from "./SuaDeTai";
import { useSearchParams } from "react-router-dom";
import { sortDoAnList } from "../../utils/SortDoAn";
import { useDanhSachDeTai } from "../../hooks/useDanhSachDeTai";
import DanhSachDeTaiContainer from "../../components/GiangVien/QuanLyDeTai/DanhSachDeTaiContainer";
import LoadingSpinner from "../../ui/Spinner";

function QuanLyDeTai() {
  const [isAdd, setIsAdd] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const {
    DanhSachDeTai,
    filterDeTai,
    handleFilterDeTai,
    isLoading,
    hocKy,
    namHoc,
  } = useDanhSachDeTai({
    key: "DanhSachDeTai",
    fn: layDanhSachDeTai,
  });
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  const sortedDoAn = sortDoAnList(filterDeTai, sortBy);
  return (
    <div>
      {!isAdd && !isEdit && (
        <>
          <h5>Quản lý đề tài</h5>
          <Button
            size="block"
            className="mt-3"
            onClick={() => setIsAdd((isAdd) => !isAdd)}
          >
            Thêm đề tài
          </Button>
          <Card className="mt-3">
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                <Filter
                  DanhSachDeTai={DanhSachDeTai}
                  handleFilterDeTai={handleFilterDeTai}
                />
                <DanhSachDeTaiContainer
                  danhSachDeTai={DanhSachDeTai}
                  sortedDoAn={sortedDoAn ?? DanhSachDeTai}
                  setIsEdit={setIsEdit}
                />
              </>
            )}
          </Card>
        </>
      )}
      {isAdd && <ThemDetai />}
      {isEdit && <SuaDeTai deTai={isEdit} />}
    </div>
  );
}

export default QuanLyDeTai;
