import fetchApi from "./FetchConfig";
const BASE_URL = "/thongBao";

const layDanhSachToanBoThongBao = () =>
  fetchApi(`${BASE_URL}?loai[in]=[0,1]`, {
    method: "GET",
  });
const layDanhSachChoSinhVien = () =>
  fetchApi(`${BASE_URL}?loai[in]=[0,2]`, {
    method: "GET",
  });

const layDanhSachChoGiangVien = () =>
  fetchApi(`${BASE_URL}/GiangVien`, {
    method: "GET",
  });
const uploadHinhAnh = (data) =>
  fetchApi(`${BASE_URL}/upload`, {
    method: "POST",
    body: data,
  });
const taoThongBaoMoi = (data) =>
  fetchApi(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
const layThongBao = (id) =>
  fetchApi(`${BASE_URL}/${id}`, {
    method: "GET",
  });
const layKeHoachThucHien = () =>
  fetchApi(`${BASE_URL}/keHoach`, {
    method: "GET",
  });
const themHinhAnhKeHoachThucHien = (data) =>
  fetchApi(`${BASE_URL}/keHoach`, {
    method: "POST",
    body: data,
  });
const themBangKeHoachThucHien = (data) =>
  fetchApi(`${BASE_URL}/keHoach`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
export {
  layDanhSachToanBoThongBao,
  layDanhSachChoSinhVien,
  layDanhSachChoGiangVien,
  taoThongBaoMoi,
  layThongBao,
  layKeHoachThucHien,
  themHinhAnhKeHoachThucHien,
  themBangKeHoachThucHien,
  uploadHinhAnh,
};
