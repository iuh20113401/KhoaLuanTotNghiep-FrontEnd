import fetchApi from "./FetchConfig";
const BASE_URL = "/bieuMauChung";
const uploadBieuMau = (data) =>
  fetchApi(`${BASE_URL}`, {
    method: "POST",
    body: data,
  });
const layDanhSachBieuMau = (giangVien) =>
  fetchApi(`${BASE_URL}/${giangVien}`, {
    method: "GET",
  });
const layDanhSachBieuMauChung = () =>
  fetchApi(`${BASE_URL}/`, {
    method: "GET",
  });
export { uploadBieuMau, layDanhSachBieuMau, layDanhSachBieuMauChung };
