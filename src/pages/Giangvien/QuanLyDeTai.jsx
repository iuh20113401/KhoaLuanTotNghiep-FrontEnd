import { useState } from "react";
import DanhSachDeTai from "../../components/GiangVien/QuanLyDeTai/DanhSachDeTai";
import Filter from "../../components/GiangVien/QuanLyDeTai/Filter";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import ThemDetai from "./ThemDetai";
import { useQuery } from "@tanstack/react-query";
import { layDanhSachDeTai } from "../../services/DeTaiApi";
import SuaDeTai from "./SuaDeTai";
import { useSearchParams } from "react-router-dom";
import { sortDoAnList } from "../../utils/sortDoAn";

function QuanLyDeTai() {
  const [isAdd, setIsAdd] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["danhSachDeTai"],
    queryFn: layDanhSachDeTai,
  });

  let danhSachDeTai = data?.deTai;
  const [searchParams] = useSearchParams();

  let filterDeTai = data?.deTai;

  if (danhSachDeTai) {
    for (let entry of searchParams.entries()) {
      if (entry[1] === "" || entry[0] === "sortBy") continue;
      if (entry[0] === "trangThai" && entry[1] === "2") {
        filterDeTai = filterDeTai.filter((dt) => {
          return dt[entry[0]].toString() === "0" && dt.ghiChu !== null;
        });
        continue;
      }
      filterDeTai = filterDeTai.filter((dt) => {
        return dt[entry[0]].toString() === entry[1];
      });
    }
  }
  const sortBy = searchParams.get("sortBy");

  const sortedDoAn = sortDoAnList(filterDeTai, sortBy);
  return (
    <div>
      {!isAdd && !isEdit && !isLoading && (
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
            <Filter DanhSachDeTai={danhSachDeTai} />
            <DanhSachDeTai danhSachDeTai={filterDeTai} setIsEdit={setIsEdit} />
          </Card>
        </>
      )}
      {isAdd && <ThemDetai />}
      {isEdit && <SuaDeTai deTai={isEdit} />}
    </div>
  );
}

export default QuanLyDeTai;
