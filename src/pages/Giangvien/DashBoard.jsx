import { useQuery } from "@tanstack/react-query";
import { layThongTinDashboardGiangVien } from "../../services/Dashboard";
import ThongTinChung from "../../components/GiangVien/Dashboard/ThongTinChung";
import DashboardDeTai from "../../components/GiangVien/Dashboard/DashboardDeTai";
import DashboardThucTap from "../../components/GiangVien/Dashboard/DashboardThucTap";
import { createContext } from "react";
export const DashboardContext = createContext();
function DashBoard() {
  const { data, isLoading } = useQuery({
    queryKey: ["thongTinDashboad"],
    queryFn: layThongTinDashboardGiangVien,
  });
  const thongTinDashboad = data;
  return (
    <div>
      <h5>DashBoard</h5>
      {!isLoading && (
        <DashboardContext.Provider value={thongTinDashboad}>
          <div className="mt-3">
            <ThongTinChung thongTinDashboad={thongTinDashboad} />
            <DashboardDeTai thongTinDashboad={thongTinDashboad} />
            <DashboardThucTap thongTinDashboad={thongTinDashboad} />
          </div>
        </DashboardContext.Provider>
      )}
    </div>
  );
}

export default DashBoard;
