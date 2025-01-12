import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { BsFilePlus } from "react-icons/bs";

import Button from "../../ui/Button";
import StyledTable from "../../ui/Table";
import { StyledInput } from "../../ui/Input";
import Card from "../../ui/Card";
import LoadingSpinner from "../../ui/Spinner";
import { layDanhSachTaiKhoanSinhVien } from "../../services/User";
import ThemSinhVien from "../../components/admin/ThemSinhVien";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { StyledDropdownMenu, StyledLink } from "../../ui/DropDown";
import Pagination from "../../ui/Pagination";
import { Col1, ColLg, StyledRow } from "../../ui/Row";
import { useForm } from "react-hook-form";
import ThemSinhVienExcel from "../../components/admin/ThemSinhVienExcel";
import styled from "styled-components";
const SERVER = import.meta.env.PROD
  ? import.meta.env.VITE_SERVER_URL
  : import.meta.env.VITE_SERVER_URL_LOCAL;
const GioiTinh = {
  0: "Nam",
  1: "Nữ",
};

function QuanLyTaiKhoanSInhVien() {
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 25;
  const [filter, setFilter] = useState("");
  const [isPending, setIsPending] = useState(false);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["DanhSachSinhVien", page, perPage, filter],
    queryFn: () => layDanhSachTaiKhoanSinhVien({ page, perPage, filter }),
  });
  const { register, handleSubmit } = useForm();
  const DanhSachSinhVien = data?.danhSachSinhVien;
  const totalPages = data?.totalPages;

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  const timKiem = (data) => {
    setFilter(data.maSo);
    setPage(1);
  };
  return (
    <div>
      {isPending ? (
        <div className="overlay">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <h5>Quản lý tài khoản sinh viên</h5>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Button
                className="mt-3"
                bgcolor="bg-green-600"
                onClick={() => setShowModal(true)}
              >
                <span>
                  <BsFilePlus />
                </span>
                Thêm tài khoản sinh viên
              </Button>
            </div>
            <div>
              <ThemSinhVienExcel
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
                        placeholder="Tìm kiếm theo mã số sinh viên"
                        register={{ ...register("maSo") }}
                      />
                    </ColLg>
                    <Col1>
                      <Button>Tìm</Button>
                    </Col1>
                  </StyledRow>
                </form>
                <StyledTable>
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
                    {DanhSachSinhVien.map((sv, index) => (
                      <ChiTietThongTinTaiKhoanSinhVien
                        key={index}
                        index={index + perPage * (page - 1)}
                        sv={sv}
                      />
                    ))}
                  </tbody>
                </StyledTable>
                <div className="mb-2">
                  <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              </>
            )}
          </Card>
          {showModal && (
            <ThemSinhVien setShowModal={setShowModal} refetch={refetch} />
          )}
        </>
      )}
    </div>
  );
}
function ChiTietThongTinTaiKhoanSinhVien({ index, sv }) {
  const [edit, setEdit] = useState(false);

  return (
    <tr>
      <td>
        <p>{index + 1}</p>
      </td>
      <td>
        <img
          crossorigin="anonymous | use-credentials"
          src={`${SERVER}${sv.hinhAnh}`}
          alt="Hình ảnh"
          style={{ width: "60px", height: "60px" }}
        />
      </td>
      <td>
        <p>{sv?.maSo}</p>
      </td>
      <td>
        <p>{sv?.hoTen}</p>
      </td>
      <td>
        <p>{sv?.email}</p>
      </td>

      <td>
        <p>{sv?.soDienThoai}</p>
      </td>
      <td>
        <p>{GioiTinh[sv?.gioiTinh ? 1 : 0]}</p>
      </td>
      <td>
        <div style={{ position: "relative" }}>
          <Button
            varitaion="icon"
            size="xl"
            bgcolor="transparent"
            color="text-black"
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
export default QuanLyTaiKhoanSInhVien;
