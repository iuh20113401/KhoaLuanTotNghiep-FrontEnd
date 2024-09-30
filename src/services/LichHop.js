import fetchApi from "./FetchConfig";
const BASE_URL = "/lichHop";

const taoLichHop = (data) =>
  fetchApi(`${BASE_URL}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
const layDanhSachLichHop = (giangVien) =>
  fetchApi(`${BASE_URL}/GiangVien/${giangVien}`, {
    method: "GET",
  });
const layDanhSachLichHopSinhVien = (sinhVien) =>
  fetchApi(`${BASE_URL}/SinhVien/${sinhVien}`, {
    method: "GET",
  });
export { taoLichHop, layDanhSachLichHopSinhVien, layDanhSachLichHop };
