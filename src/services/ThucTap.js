import fetchApi from "./FetchConfig";
const BASE_URL = "/thucTap";
const dangKyThucTap = (data) =>
  fetchApi(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
const capNhatNoiDungThucTap = (data) =>
  fetchApi(`${BASE_URL}/${data._id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
const getThongTinThucTap = (maThucTap) =>
  fetchApi(`${BASE_URL}/${maThucTap}`, {
    method: "GET",
  });

const themComment = (data) =>
  fetchApi(`${BASE_URL}/${data._id}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

const themTaiLieu = (_id, formData) =>
  fetchApi(`${BASE_URL}/${_id}/taiLieu`, {
    method: "POST",
    body: formData,
  });

const layDanhSachThucTapTheoGiangVien = () =>
  fetchApi(`${BASE_URL}/DanhSachThucTap/GiangVien`, {
    method: "GET",
  });

const layDanhSachDangKyThucTap = () =>
  fetchApi(`${BASE_URL}/`, {
    method: "GET",
  });

const themGiangVienGiamSat = (data) =>
  fetchApi(`${BASE_URL}/GiangVienGiamSat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

export {
  dangKyThucTap,
  capNhatNoiDungThucTap,
  getThongTinThucTap,
  themComment,
  themTaiLieu,
  layDanhSachThucTapTheoGiangVien,
  layDanhSachDangKyThucTap,
  themGiangVienGiamSat,
};
