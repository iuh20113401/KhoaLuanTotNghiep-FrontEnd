import fetchApi from "./FetchConfig";
const BASE_URL = "/doAn";
const dangKyDoAn = (data) =>
  fetchApi(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
const capNhatDoAn = (data) =>
  fetchApi(`${BASE_URL}/${data._id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
const themSinhVien2 = (data) =>
  fetchApi(`${BASE_URL}/${data.doAn}/SinhVien2`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
const getThongTinDoAn = (maDoAn) =>
  fetchApi(`${BASE_URL}\\${maDoAn}`, {
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

const layDanhSachDoAnTheoGiangVien = (hocKy, namHoc) =>
  fetchApi(
    `${BASE_URL}/DanhSachDoAn/GiangVien?hocKy=${hocKy}&namHoc=${namHoc}`,
    {
      method: "GET",
    }
  );
const layThongTinSinhVienTheoDoAn = (id) =>
  fetchApi(`${BASE_URL}/${id}/sinhVien`, {
    method: "GET",
  });

const layDanhSachDoAnDat = () =>
  fetchApi(`${BASE_URL}/DoAnDat`, {
    method: "GET",
  });

const themNhieuGiangVienPhanBien = (data) =>
  fetchApi(`${BASE_URL}/doAnDat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
const layDanhSachDoAnPhanBien = () =>
  fetchApi(`${BASE_URL}/DanhSachDoAn/PhanBien`, {
    method: "GET",
  });
const layDanhSachToanBoDoAn = (hocKy, namHoc) =>
  fetchApi(`${BASE_URL}?hocKy=${hocKy}&namHoc=${namHoc}`, {
    method: "GET",
  });
const layDanhSachDoAnDatPhanBien = () =>
  fetchApi(`${BASE_URL}/DanhSachDoAnDatPhanBien`, {
    method: "GET",
  });
const themNhiemGiangVienHoiDong = (data) =>
  fetchApi(`${BASE_URL}/DanhSachDoAnDatPhanBien`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
const layDanhSachDoAnHoiDong = () =>
  fetchApi(`${BASE_URL}/DanhSachDoAn/HoiDong`, {
    method: "GET",
  });
export {
  dangKyDoAn,
  getThongTinDoAn,
  themComment,
  themTaiLieu,
  layDanhSachDoAnTheoGiangVien,
  layThongTinSinhVienTheoDoAn,
  capNhatDoAn,
  layDanhSachDoAnDat,
  themNhieuGiangVienPhanBien,
  layDanhSachDoAnPhanBien,
  layDanhSachToanBoDoAn,
  themSinhVien2,
  layDanhSachDoAnDatPhanBien,
  themNhiemGiangVienHoiDong,
  layDanhSachDoAnHoiDong,
};
