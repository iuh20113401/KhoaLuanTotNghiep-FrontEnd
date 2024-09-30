import fetchApi from "./FetchConfig";
const BASE_URL = "/user";

const themNhieuSinhVien = (data) =>
  fetchApi(`${BASE_URL}/nhieuUser`, {
    method: "POST",
    body: data,
  });

const layDanhSachTroChuyen = () =>
  fetchApi(`${BASE_URL}/danhSachTroChuyen`, {
    method: "GET",
  });
const layDanhSachToanBoGiangVien = () =>
  fetchApi(`${BASE_URL}/GiangVien`, {
    method: "GET",
  });
export { themNhieuSinhVien, layDanhSachTroChuyen, layDanhSachToanBoGiangVien };
