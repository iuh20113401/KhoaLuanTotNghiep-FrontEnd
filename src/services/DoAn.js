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
  fetchApi(`${BASE_URL}/${maDoAn}`, {
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
const themTaiLieuPhanBien = (_id, formData) =>
  fetchApi(`${BASE_URL}/${_id}/taiLieuPhanBien`, {
    method: "POST",
    body: formData,
  });
const xoaTaiLieuPhanBien = ({ id, taiLieuId }) => {
  console.log(id, taiLieuId);
  return fetchApi(`${BASE_URL}/${id}/taiLieuPhanBien/${taiLieuId}`, {
    method: "DELETE",
  });
};
const themTaiLieuHoiDong = (_id, formData) =>
  fetchApi(`${BASE_URL}/${_id}/taiLieuHoiDong`, {
    method: "POST",
    body: formData,
  });
const xoaTaiLieuHoiDong = ({ id, taiLieuId }) => {
  console.log(id, taiLieuId);
  return fetchApi(`${BASE_URL}/${id}/taiLieuHoiDong/${taiLieuId}`, {
    method: "DELETE",
  });
};
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

const layDanhSachDoAnDat = (namHoc, hocKy) =>
  fetchApi(
    `${BASE_URL}/DanhSachDoAn/DatCuoiKy?hocKy=${hocKy}&namHoc=${namHoc}`,
    {
      method: "GET",
    }
  );

const themNhieuGiangVienPhanBien = (data) =>
  fetchApi(`${BASE_URL}/DanhSachDoAn/DatCuoiKy`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
const layDanhSachDoAnPhanBien = (hocKy, namHoc) =>
  fetchApi(
    `${BASE_URL}/DanhSachDoAn/PhanBien?hocKy=${hocKy}&namHoc=${namHoc}`,
    {
      method: "GET",
    }
  );
const layDanhSachToanBoDoAn = (hocKy, namHoc) =>
  fetchApi(`${BASE_URL}?hocKy=${hocKy}&namHoc=${namHoc}`, {
    method: "GET",
  });
const layDanhSachDoAnDatPhanBien = (hocKy, namHoc) =>
  fetchApi(
    `${BASE_URL}/DanhSachDoAn/DatPhanBien?hocKy=${hocKy}&namHoc=${namHoc}`,
    {
      method: "GET",
    }
  );
const themNhiemGiangVienHoiDong = (data) =>
  fetchApi(`${BASE_URL}/DanhSachDoAn/DatPhanBien`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
const layDanhSachDoAnHoiDong = (hocKy, namHoc) =>
  fetchApi(`${BASE_URL}/DanhSachDoAn/HoiDong?hocKy=${hocKy}&namHoc=${namHoc}`, {
    method: "GET",
  });
export {
  dangKyDoAn,
  getThongTinDoAn,
  themComment,
  themTaiLieu,
  themTaiLieuPhanBien,
  xoaTaiLieuPhanBien,
  themTaiLieuHoiDong,
  xoaTaiLieuHoiDong,
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
