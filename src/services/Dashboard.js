import fetchApi from "./FetchConfig";
const BASE_URL = "/dashboard";
const layThongTinDashboardGiangVien = () =>
  fetchApi(`${BASE_URL}/GiangVien`, {
    method: "GET",
  });

export { layThongTinDashboardGiangVien };
