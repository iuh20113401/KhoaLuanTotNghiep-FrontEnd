import fetchApi from "./FetchConfig";
const BASE_URL = "/maDiemDanh";

const taoMaDiemDanh = (data) =>
  fetchApi(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
const diemDanh = (data) =>
  fetchApi(`${BASE_URL}/${data.id}/diemDanh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ location: data.location }),
  });
export { taoMaDiemDanh, diemDanh };
