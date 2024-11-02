import { HiOutlineInformationCircle } from "react-icons/hi";
import Button from "../../../ui/Button";
import Card from "../../../ui/Card";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import StyledTable from "../../../ui/Table";
import styled from "styled-components";
import KeHoachThucHien from "./KeHoachThucHien";
import { layDanhSachChoSinhVien } from "../../../services/ThongBao";
import { useMobile } from "../../../context/MobileContext";
const StyledLink = styled(Link)`
  &:hover {
    color: var(--bs-primary);
  }
`;
function ThongBaoContainer({ vaiTro }) {
  const { data, isLoading } = useQuery({
    queryKey: ["DanhSachThongBao"],
    queryFn: layDanhSachChoSinhVien,
  });
  const DanhSachThongBao = data?.data;
  return (
    !isLoading && (
      <div className="mt-3">
        <h4>Thông báo</h4>
        <Card className="p-3 mt-1">
          {vaiTro === "2" && (
            <div className="mt-2">
              <Link to={"taoThongBao"}>
                <Button
                  type="normal"
                  variation="outline"
                  bgcolor="var(--bs-blue)"
                  color="var(--bs-blue)"
                >
                  <span>
                    <HiOutlineInformationCircle />
                  </span>
                  Tạo thông báo mới
                </Button>
              </Link>
            </div>
          )}
          <div className="mt-2">
            <StyledTable>
              <tbody>
                {DanhSachThongBao?.map((tb) => (
                  <ChiTietThongBao thongBao={tb} key={tb._id} />
                ))}
              </tbody>
            </StyledTable>
          </div>
        </Card>
      </div>
    )
  );
}
function ChiTietThongBao({ thongBao }) {
  const isMobile = useMobile();
  return (
    <tr>
      <td width={isMobile ? "20%" : "10%"}>
        <Link to={""}>
          {thongBao.loai === 0
            ? "Toàn bộ"
            : thongBao.loai === 1
            ? "Giảng viên"
            : "Sinh viên"}
        </Link>
      </td>
      <td>
        <StyledLink to={`/sinhVien/thongBao/${thongBao._id}`}>
          {thongBao.tieuDe}
        </StyledLink>
      </td>
    </tr>
  );
}
export default ThongBaoContainer;
