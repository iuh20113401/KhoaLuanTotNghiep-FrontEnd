import fetchApi from "./FetchConfig";
const BASE_URL = "/caiDat";
const layThongTinCaiDat = () =>
  fetchApi(`${BASE_URL}/`, {
    method: "GET",
  });
const moDangKyThucTap = () =>
  fetchApi(`${BASE_URL}/dangKyThucTap`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isOpen: true }),
  });
const dongDangKyThucTap = () =>
  fetchApi(`${BASE_URL}/dangKyThucTap`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isOpen: false }),
  });
const moDangKyDeTai = () =>
  fetchApi(`${BASE_URL}/dangKyDeTai`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isOpen: true }),
  });
const dongDangKyDeTai = () =>
  fetchApi(`${BASE_URL}/dangKyDeTai`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isOpen: false }),
  });
export {
  layThongTinCaiDat,
  moDangKyDeTai,
  dongDangKyDeTai,
  moDangKyThucTap,
  dongDangKyThucTap,
};
