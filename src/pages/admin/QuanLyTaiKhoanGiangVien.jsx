import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { BsFilePlus } from "react-icons/bs";

import Button from "../../ui/Button";
import StyledTable from "../../ui/Table";
import { StyledInput } from "../../ui/Input";
import Card from "../../ui/Card";
import LoadingSpinner from "../../ui/Spinner";
import { layDanhSachTaiKhoanGiangVien } from "../../services/User";
import ThemGiangVien from "../../components/admin/ThemGiangVien";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { StyledDropdownMenu, StyledLink } from "../../ui/DropDown";
import { Col1, ColLg, StyledRow } from "../../ui/Row";
import { useForm } from "react-hook-form";
import Pagination from "../../ui/Pagination";
import ThemGiangVienExcel from "../../components/admin/ThemGiangVienExcel";
import styled from "styled-components";
const SERVER = import.meta.env.PROD
  ? import.meta.env.VITE_SERVER_URL
  : import.meta.env.VITE_SERVER_URL_LOCAL;
const GioiTinh = {
  0: "Nam",
  1: "Nữ",
};
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 100;
`;
function QuanLyTaiKhoanGiangVien() {
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 25;
  const [filter, setFilter] = useState("");
  const [isPending, setIsPending] = useState(false);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["DanhSachGiangVien", page, perPage, filter],
    queryFn: () => layDanhSachTaiKhoanGiangVien({ page, perPage, filter }),
  });

  const DanhSachGiangVien = data?.danhSachGiangVien;
  const totalPages = data?.totalPages;
  const { register, handleSubmit } = useForm();
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  console.log(filter);
  const timKiem = (data) => {
    setFilter(data.maSo);
    setPage(1);
  };
  return (
    <div>
      {isPending ? (
        <Overlay>
          <LoadingSpinner />
        </Overlay>
      ) : (
        <>
          <h5>Quản lý tài khoản sinh viên</h5>
          <div className="d-flex justify-content-between align-items-center">
            <Button
              className="mt-3"
              bgcolor="var(--bs-success)"
              onClick={() => setShowModal(true)}
            >
              <StyledInput
                hidden="true"
                type="file"
                // onChange={handleFileUpload}
                // ref={inputFile}
              />
              <span>
                <BsFilePlus />
              </span>
              Thêm tài khoản giảng viên
            </Button>
            <div>
              <ThemGiangVienExcel
                refetch={refetch}
                setIsPending={setIsPending}
              />
            </div>
          </div>
          <Card className="mt-3">
            {isLoading ? (
              <div className="p-5">
                <LoadingSpinner />
              </div>
            ) : (
              <>
                <form onSubmit={handleSubmit(timKiem)}>
                  <StyledRow className="m-3" gap="0.4rem">
                    <ColLg>
                      <StyledInput
                        type="number"
                        placeholder="Tìm kiếm theo mã số giảng viên"
                        {...register("maSo")}
                      />
                    </ColLg>
                    <Col1>
                      <Button>Tìm</Button>
                    </Col1>
                  </StyledRow>
                </form>
                <StyledTable className="hover">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Hình ảnh</th>
                      <th width="8%">Mã số </th>
                      <th width="15%">Tên sinh viên</th>
                      <th>Email</th>
                      <th>Số điện thoại</th>
                      <th>Giới tính</th>
                      <th width="">Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DanhSachGiangVien.map((gv, index) => (
                      <ChiTietThongTinTaiKhoanGiangVien
                        gv={gv}
                        index={index}
                        key={index}
                      />
                    ))}
                  </tbody>
                </StyledTable>
              </>
            )}
            <div className="mb-2">
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </Card>
          {showModal && (
            <ThemGiangVien setShowModal={setShowModal} refetch={refetch} />
          )}
        </>
      )}
    </div>
  );
}
function ChiTietThongTinTaiKhoanGiangVien({ index, gv }) {
  const [edit, setEdit] = useState(false);

  return (
    <tr key={index}>
      <td>
        <p>{index + 1}</p>
      </td>
      <td>
        <img
          crossorigin="anonymous | use-credentials"
          src={`${SERVER}${gv.hinhAnh}`}
          alt="Hình ảnh"
          style={{ width: "60px", height: "60px" }}
        />
      </td>
      <td>
        <p>{gv?.maSo}</p>
      </td>
      <td>
        <p>{gv?.hoTen}</p>
      </td>
      <td>
        <p>{gv?.email}</p>
      </td>

      <td>
        <p>{gv?.soDienThoai}</p>
      </td>
      <td>
        <p>{GioiTinh[gv?.gioiTinh ? 1 : 0]}</p>
      </td>
      <td>
        <div style={{ position: "relative" }}>
          <Button
            varitaion="icon"
            size="xl"
            bgcolor="transparent"
            color="var(--bs-black)"
            onClick={() => setEdit((edit) => !edit)}
          >
            <HiOutlineDotsVertical />
          </Button>
          {edit && (
            <StyledDropdownMenu>
              <StyledLink>Reset mật khẩu</StyledLink>
              <StyledLink>Xóa</StyledLink>
            </StyledDropdownMenu>
          )}
        </div>
      </td>
    </tr>
  );
}
export default QuanLyTaiKhoanGiangVien;
