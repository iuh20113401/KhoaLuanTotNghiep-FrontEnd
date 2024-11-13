import { HiOutlineInformationCircle } from "react-icons/hi";
import Button from "../../../ui/Button";
import Card from "../../../ui/Card";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { layDanhSachToanBoThongBao } from "../../../services/ThongBao";
import StyledTable from "../../../ui/Table";
import styled from "styled-components";
import KeHoachThucHien from "./KeHoachThucHien";
import formatVieNamDate from "../../../utils/FormatDate";
const StyledLink = styled(Link)`
  &:hover {
    color: var(--bs-primary);
  }
`;
function ThongBaoContainer({ vaiTro }) {
  const { data, isLoading } = useQuery({
    queryKey: ["DanhSachThongBao"],
    queryFn: layDanhSachToanBoThongBao,
  });
  const DanhSachThongBao = data?.data;
  return (
    !isLoading && (
      <div>
        <Card className="p-3 mt-3">
          <h6>Kế hoạch thực hiện</h6>
          <div className="mt-2">
            <KeHoachThucHien />
          </div>
        </Card>
        <Card className="p-3 mt-3">
          <h6>Thông báo</h6>
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
  return (
    <tr>
      <td width={"10%"}>
        <Link to={""}>
          {thongBao.loai === 0
            ? "Toàn bộ"
            : thongBao.loai === 1
            ? "Giảng viên"
            : "Sinh viên"}
        </Link>
      </td>
      <td>
        <StyledLink to={`/giangvien/thongBao/${thongBao._id}`}>
          {thongBao.tieuDe}
        </StyledLink>
      </td>
      <td>
        <StyledLink to={`/giangvien/thongBao/${thongBao._id}`}>
          {formatVieNamDate(thongBao.ngayTao)}
        </StyledLink>
      </td>
    </tr>
  );
}
export default ThongBaoContainer;
