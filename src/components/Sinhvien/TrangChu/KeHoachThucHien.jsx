import { useQuery } from "@tanstack/react-query";
import { layKeHoachThucHien } from "../../../services/ThongBao";
import ThongBaoContainer from "./ThongBaoContainer";

function KeHoachThucHien() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["KeHoachThucHien"],
    queryFn: layKeHoachThucHien,
  });
  const keHoach = data?.thongBao;
  return (
    <div className="mt-3">
      <h4>Kế hoạch thực hiện</h4>
      <div className="mt-1">
        {!isLoading && +keHoach.hinhThuc === 1 ? (
          <>
            <img
              crossorigin="anonymous | use-credentials"
              src={`http://localhost:3000${keHoach.noiDung}`}
              alt="hinhAnh"
              width="100%"
              height="1000px"
            />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default KeHoachThucHien;
