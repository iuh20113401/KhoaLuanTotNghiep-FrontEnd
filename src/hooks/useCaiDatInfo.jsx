import { useQuery } from "@tanstack/react-query";
import { layThongTinCaiDat } from "../services/CaiDat";

function useCaiDatInfo() {
  const { data, isLoading } = useQuery({
    queryKey: ["thongTinCaiDat"],
    queryFn: layThongTinCaiDat,
  });
  const caiDatInfo = data?.result;
  return { caiDatInfo, isLoading };
}

export default useCaiDatInfo;
