import DanhSachDeTaiContainer from "../../components/Sinhvien/DangKyDeTai/DanhSachDeTaiContainer";
import Card from "../../ui/Card";
import Filter from "../../components/Sinhvien/DangKyDeTai/Filter";
import { layDanhSachDeTaiDangKy } from "../../services/DeTaiApi";
import DanhSachLoiMoiContainer from "../../components/Sinhvien/DangKyDeTai/DanhSachLoiMoiContainer";
import UseUser from "../../context/UseUser";
import useCaiDatInfo from "../../hooks/useCaiDatInfo";
import { useDanhSachDeTai } from "../../hooks/useDanhSachDeTai";
import { useSearchParams } from "react-router-dom";
import { sortDoAnList } from "../../utils/SortDoAn";
import LoadingSpinner from "../../ui/Spinner";

function DangKyDeTai() {
  const { DanhSachDeTai, filterDeTai, handleFilterDeTai, isLoading } =
    useDanhSachDeTai({
      key: "DanhSachDeTai",
      fn: layDanhSachDeTaiDangKy,
    });
  const [searchParams] = useSearchParams();

  const { caiDatInfo, isLoading: caiDatLoading } = useCaiDatInfo();
  const { data: user, isLoading: loiMoiLoading } = UseUser();
  const loiMoi = user.user?.loiMoi;
  const sortBy = searchParams.get("sortBy");
  const sortedDoAn = sortDoAnList(filterDeTai, sortBy);
  return (
    <>
      {!loiMoiLoading && loiMoi?.length > 0 && (
        <>
          <h5 className="mt-3 mb-2">Danh sách lời mời</h5>
          <DanhSachLoiMoiContainer loiMoi={loiMoi} />
        </>
      )}
      <h5 className="mt-3 mb-2">Đăng ký đề tài</h5>
      <Card>
        {" "}
        <Filter
          DanhSachDeTai={DanhSachDeTai}
          handleFilterDeTai={handleFilterDeTai}
        />
        {isLoading || caiDatLoading ? (
          <LoadingSpinner />
        ) : (
          <DanhSachDeTaiContainer
            caiDatInfo={caiDatInfo}
            danhSachDeTai={sortedDoAn}
          />
        )}
      </Card>
    </>
  );
}

export default DangKyDeTai;
