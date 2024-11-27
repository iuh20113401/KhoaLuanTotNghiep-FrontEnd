import fetchApi from "./FetchConfig";
const BASE_URL = "/deTai";

const layDanhMuc = () =>
  fetchApi(`${BASE_URL}/danhMuc`, {
    method: "GET",
  });

const layDanhSachDeTai = () =>
  fetchApi(`${BASE_URL}/DanhSachDeTai/GiangVien`, {
    method: "GET",
  });
const taoDeTai = (data) =>
  fetchApi(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
const xoaDeTai = (id) =>
  fetchApi(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
const suaDeTai = (data) =>
  fetchApi(`${BASE_URL}/${data._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

const layDanhSachDeTaiChoDuyet = () =>
  fetchApi(`${BASE_URL}/DanhSachDeTai/ChoDuyet`, {
    method: "GET",
  });
const duyetDeTai = (id) =>
  fetchApi(`${BASE_URL}/duyetDeTai/${id}`, {
    method: "PATCH",
  });

const layDanhSachDeTaiDangKy = () =>
  fetchApi(`${BASE_URL}/DanhSachDeTai/DangKy`, {
    method: "GET",
  });

export {
  layDanhMuc,
  taoDeTai,
  layDanhSachDeTai,
  suaDeTai,
  layDanhSachDeTaiChoDuyet,
  duyetDeTai,
  xoaDeTai,
  layDanhSachDeTaiDangKy,
};
