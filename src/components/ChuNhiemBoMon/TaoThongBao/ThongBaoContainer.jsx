import { HiOutlineInformationCircle, HiTrash } from "react-icons/hi";
import Button from "../../../ui/Button";
import Card from "../../../ui/Card";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  layDanhSachToanBoThongBao,
  xoaThongBao,
} from "../../../services/ThongBao";
import StyledTable from "../../../ui/Table";
import styled from "styled-components";
import KeHoachThucHien from "./KeHoachThucHien";
import formatVieNamDate from "../../../utils/FormatDate";
import toast from "react-hot-toast";
import LoadingSpinner from "../../../ui/Spinner";
const StyledLink = styled(Link)`
  &:hover {
    color: var(--bs-primary);
  }
`;
function ThongBaoContainer({ vaiTro }) {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["DanhSachThongBao"],
    queryFn: layDanhSachToanBoThongBao,
  });
  const { mutate: xoaMutate, isPending } = useMutation({
    mutationFn: xoaThongBao,
    onSuccess: () => {
      toast.success("Xóa thông báo thành công");
      refetch();
    },
    onError: () => {
      toast.error("Xóa thông báo không thành công");
    },
  });
  const DanhSachThongBao = data?.data;
  return (
    !isLoading && (
      <div>
        <Card className="p-3 mt-3">
          <h6>Kế hoạch thực hiện</h6>
          <div className="mt-2">
            <KeHoachThucHien vaiTro={vaiTro} />
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
            {isLoading || isPending ? (
              <div>
                <LoadingSpinner />
              </div>
            ) : DanhSachThongBao?.length > 0 ? (
              <StyledTable>
                <tbody>
                  {DanhSachThongBao?.map((tb) => (
                    <ChiTietThongBao
                      xoaMutate={xoaMutate}
                      vaiTro={vaiTro}
                      thongBao={tb}
                      key={tb._id}
                    />
                  ))}
                </tbody>
              </StyledTable>
            ) : (
              <p>Hiện không có thông báo nào</p>
            )}
          </div>
        </Card>
      </div>
    )
  );
}
function ChiTietThongBao({ vaiTro, thongBao, xoaMutate }) {
  function handleXoa() {
    xoaMutate(thongBao._id);
  }
  return (
    <tr as="link">
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
      </td>{" "}
      {vaiTro === "2" && (
        <td>
          <Button variation="icon" onClick={handleXoa}>
            <HiTrash />
          </Button>
        </td>
      )}
    </tr>
  );
}
export default ThongBaoContainer;
