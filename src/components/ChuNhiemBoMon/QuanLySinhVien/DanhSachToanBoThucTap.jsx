import { useQuery } from "@tanstack/react-query";
import StyledTable from "../../../ui/Table";
import ChiTietSinhVienThucTap from "./ChiTietSinhVienThucTap";
import { layDanhSachDangKyThucTap } from "../../../services/ThucTap";

function DanhSachToanBoThucTap() {
  const { data, isLoading } = useQuery({
    queryKey: ["DanhSachToanBoSinhVienThucTap"],
    queryFn: layDanhSachDangKyThucTap,
  });
  const DanhSachSinhVienThucTap = data?.results;
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>STT</th>
          <th>Mã số sinh viên</th>
          <th>Họ tên</th>
          <th>Công ty thực tập </th>
          <th>Địa chỉ</th>
          <th>Email công ty</th>
          <th>Giám sát</th>
          <th>Số điện thoại</th>
        </tr>
      </thead>
      <tbody>
        {!isLoading &&
          DanhSachSinhVienThucTap.map((sv, index) => (
            <ChiTietSinhVienThucTap sinhvien={sv} index={index} key={index} />
          ))}
      </tbody>
    </StyledTable>
  );
}

export default DanhSachToanBoThucTap;
