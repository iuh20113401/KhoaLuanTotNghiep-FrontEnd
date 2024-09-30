import fetchApi from "./FetchConfig";
const BASE_URL = "/tieuChi";
const layTieuChiDoAn = () =>
  fetchApi(`${BASE_URL}/TieuChiDoAn`, {
    method: "GET",
  });
const layTieuChiHuongDan = () =>
  fetchApi(`${BASE_URL}/huongDan`, {
    method: "GET",
  });
const layTieuChiPhanBien = () =>
  fetchApi(`${BASE_URL}/phanBien`, {
    method: "GET",
  });
const layTieuChiThucTapChoDoanhNghiep = () =>
  fetchApi(`${BASE_URL}/thuctap/doanhnghiep`, {
    method: "GET",
  });
const layTieuChiThucTapChoGiangVien = () =>
  fetchApi(`${BASE_URL}/thuctap/giangvien`, {
    method: "GET",
  });
const themTieuChi = (data) =>
  fetchApi(`${BASE_URL}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
export {
  layTieuChiHuongDan,
  layTieuChiPhanBien,
  layTieuChiThucTapChoDoanhNghiep,
  layTieuChiThucTapChoGiangVien,
  themTieuChi,
  layTieuChiDoAn,
};
