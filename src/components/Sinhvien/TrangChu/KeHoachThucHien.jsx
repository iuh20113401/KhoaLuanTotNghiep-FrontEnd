import { useQuery } from "@tanstack/react-query";
import { layKeHoachThucHien } from "../../../services/ThongBao";
import ThongBaoContainer from "./ThongBaoContainer";
const SERVER = import.meta.env.PROD
  ? import.meta.env.VITE_SERVER_URL
  : import.meta.env.VITE_SERVER_URL_LOCAL;
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
              src={`${SERVER}${keHoach?.noiDung.replace("/", "")}`}
              alt="hinhAnh"
              width="100%"
              height="100%"
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
