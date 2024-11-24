import Card from "../../ui/Card";
import StyledTable from "../../ui/Table";
import { useQuery } from "@tanstack/react-query";
import { layDanhSachBieuMau } from "../../services/BieuMauChung";
import ChiTietBieuMau from "./BieuMau/ChiTietBieuMau";
import LoadingSpinner from "../../ui/Spinner";

function BieuMauThucTap({ thucTap }) {
  const { data, isLoading } = useQuery({
    queryKey: ["DanhSachBieuMauThucTap"],
    queryFn: () => layDanhSachBieuMau(thucTap.giangVien._id),
  });
  const DanhSachBieuMau = data?.danhSachBieuMau;
  return isLoading ? (
    <div>
      <LoadingSpinner />
    </div>
  ) : (
    <div>
      <h5>Biểu mẫu</h5>
      <Card className="mt-2 p-2">
        <StyledTable>
          <thead>
            <tr>
              <th>Tên biểu mẫu</th>
              <th>Ngày đăng</th>
              <th>Dung lượng</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {DanhSachBieuMau?.map((bm) => (
              <ChiTietBieuMau bieuMau={bm} key={bm._id} />
            ))}
          </tbody>
        </StyledTable>
      </Card>
    </div>
  );
}

export default BieuMauThucTap;
