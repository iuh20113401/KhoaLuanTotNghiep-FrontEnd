import fetchApi from "./FetchConfig";
const BASE_URL = "/sinhVien";
const guiLoiMoi = (data) =>
  fetchApi(`${BASE_URL}/${data.maSo}/LoiMoi`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
const layDanhSachSinhVienTheoGiangVien = () =>
  fetchApi(`${BASE_URL}/DanhSachSinhVien/GiangVien`, {
    method: "GET",
  });
const layDanhSachSinhVienThucTapTheoGiangVien = () =>
  fetchApi(`${BASE_URL}/DanhSachSinhVienThucTap/GiangVien`, {
    method: "GET",
  });
const layDanhSachToanBoSinhVien = () =>
  fetchApi(`${BASE_URL}/DanhSachSinhVien/ToanBo`, {
    method: "GET",
  });
const layThongTinSinhVien = (id) =>
  fetchApi(`${BASE_URL}/${id}`, {
    method: "GET",
  });
const capNhatSinhVien = (data) =>
  fetchApi(`${BASE_URL}/${data._id}/diemHuongDan`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
const capNhatDiemThucTap = (data) =>
  fetchApi(`${BASE_URL}/${data._id}/diemThucTap`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
export {
  layDanhSachSinhVienTheoGiangVien,
  layDanhSachSinhVienThucTapTheoGiangVien,
  layDanhSachToanBoSinhVien,
  capNhatSinhVien,
  layThongTinSinhVien,
  capNhatDiemThucTap,
  guiLoiMoi,
};
