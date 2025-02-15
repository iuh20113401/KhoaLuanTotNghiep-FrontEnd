import fetchApi from "./FetchConfig";
const BASE_URL = "/user";
const layThongTinTaiKhoan = (id) =>
  fetchApi(`${BASE_URL}/${id}`, {
    method: "GET",
  });
const capNhatAnhDaiDien = (data) =>
  fetchApi(`${BASE_URL}/me/hinhAnh`, {
    method: "PATCH",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: data,
  });
const capNhatThongTinTaiKhoan = (data) =>
  fetchApi(`${BASE_URL}/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
const themNhieuSinhVien = (data) =>
  fetchApi(`${BASE_URL}/nhieuSinhVien`, {
    method: "POST",
    body: data,
  });
const themSinhVien = (data) =>
  fetchApi(`${BASE_URL}/sinhVien`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
const themNhieuSinhVienAdmin = (data) =>
  fetchApi(`${BASE_URL}/nhieuSinhVien`, {
    method: "POST",
    body: data,
  });
const themNhieuGiangVienAdmin = (data) =>
  fetchApi(`${BASE_URL}/nhieuGiangVien`, {
    method: "POST",
    body: data,
  });
const themGiangVien = (data) =>
  fetchApi(`${BASE_URL}/giangVien`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
const layDanhSachTaiKhoanSinhVien = ({ page, perPage, filter = null }) =>
  fetchApi(
    `${BASE_URL}/sinhVien?page=${page}&limit=${perPage}${filter ? `&maSo=${filter}` : ""}`,
    {
      method: "GET",
    }
  );
const layDanhSachTaiKhoanGiangVien = ({ page, perPage, filter }) =>
  fetchApi(
    `${BASE_URL}/giangVien?page=${page}&limit=${perPage}${filter ? `&maSo=${filter}` : ""}`,
    {
      method: "GET",
    }
  );
const layDanhSachTroChuyen = () =>
  fetchApi(`${BASE_URL}/danhSachTroChuyen`, {
    method: "GET",
  });
const layDanhSachToanBoGiangVien = () =>
  fetchApi(`${BASE_URL}/GiangVien`, {
    method: "GET",
  });
export {
  layThongTinTaiKhoan,
  capNhatThongTinTaiKhoan,
  capNhatAnhDaiDien,
  themNhieuSinhVien,
  layDanhSachTroChuyen,
  layDanhSachTaiKhoanGiangVien,
  layDanhSachTaiKhoanSinhVien,
  themSinhVien,
  themNhieuSinhVienAdmin,
  themGiangVien,
  themNhieuGiangVienAdmin,
  layDanhSachToanBoGiangVien,
};
