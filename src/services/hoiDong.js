import fetchApi from "./FetchConfig";
const BASE_URL = "/hoiDong";

const layHoiDong = () =>
  fetchApi(`${BASE_URL}/`, {
    method: "GET",
  });

const taoHoiDong = (data) =>
  fetchApi(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

export { layHoiDong, taoHoiDong };
