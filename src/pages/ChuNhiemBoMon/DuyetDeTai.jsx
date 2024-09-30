import { useQuery } from "@tanstack/react-query";
import DanhSachDeTai from "../../components/ChuNhiemBoMon/DuyetDeTai/DanhSachDeTai";
import Filter from "../../components/ChuNhiemBoMon/DuyetDeTai/Filter";
import Card from "../../ui/Card";
import { layDanhSachDeTaiChoDuyet } from "../../services/DeTaiApi";

function DuyetDeTai() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: "danhSachDeTaiChoDuyet",
    queryFn: layDanhSachDeTaiChoDuyet,
  });
  const danhSachDeTai = data?.danhMuc;
  return (
    <div>
      <h5>Duyệt đề tài</h5>
      <Card className="mt-3">
        <Filter />
        {!isLoading && (
          <DanhSachDeTai refetch={refetch} danhSachDeTai={danhSachDeTai} />
        )}
      </Card>
    </div>
  );
}

export default DuyetDeTai;
