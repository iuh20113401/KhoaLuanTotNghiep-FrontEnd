import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyles from "./styles/GlobalStyled";
import LoginPage from "./pages/LoginPage";
import SinhVienLayout from "./ui/SinhVienLayout";
import TrangChu from "./pages/Sinhvien/TrangChu";
import DangKyDeTai from "./pages/Sinhvien/DangKyDeTai";
import DangKyThucTap from "./pages/Sinhvien/DangKyThucTap";
import Chat from "./pages/Chat";
import QuanLyDoAn from "./pages/QuanLyDoAn";
import GiangVIenLayout from "./ui/GiangVIenLayout";
import QuanLyDeTai from "./pages/Giangvien/QuanLyDeTai";
import XemDanhSachSinhVien from "./pages/Giangvien/XemDanhSachSinhVien";
import XemDanhSachDoAn from "./pages/Giangvien/XemDanhSachDoAn";
import ChamDiemDoAn from "./pages/Giangvien/ChamDiemDoAn";
import ChamDiemPhanBien from "./pages/Giangvien/ChamDiemPhanBien";
import ChamDiemHoiDong from "./pages/Giangvien/ChamDiemHoiDong";
import QuanLyThongTinSInhVien from "./pages/ChuNhiemBoMon/QuanLyThongTinSInhVien";
import QuanLyThongTinDoAn from "./pages/ChuNhiemBoMon/QuanLyThongTinDoAn";
import QuanLyThongTinThucTap from "./pages/ChuNhiemBoMon/QuanLyThongTinThucTap";
import DuyetDeTai from "./pages/ChuNhiemBoMon/DuyetDeTai";
import PhanCongGiangVienPhanBien from "./pages/ChuNhiemBoMon/PhanCongGiangVienPhanBien";
import { Toaster } from "react-hot-toast";
import DiemDanhDoAn from "./pages/Giangvien/DiemDanhDoAn";
import TaoThongBao from "./pages/Giangvien/TaoThongBao";
import TaoNoiDungThongBao from "./components/ChuNhiemBoMon/TaoThongBao/TaoNoiDungThongBao";
import LichHopGiangVien from "./pages/Giangvien/LichHop";
import NoiDungThongBao from "./pages/ThongBao";
import QuanLyThucTap from "./pages/QuanLyThucTap";
import PhanCongGiangVienGiamSat from "./pages/ChuNhiemBoMon/PhanCongGiangVienGiamSat";
import XemDanhSachSinhVienThucTap from "./pages/Giangvien/XemDanhSachSinhVienThucTap";
import XemDanhSachBaoCao from "./pages/Giangvien/XemDanhSachBaoCao";
import ChamDiemBaoCaoThucTap from "./pages/Giangvien/ChamDiemBaoCaoThucTap";
import DiemDanhThucTap from "./pages/Giangvien/DiemDanhThucTap";
import ThongBao from "./pages/Giangvien/ThongBao";
import LichHopSinhVien from "./pages/Sinhvien/LichHop";
import Logout from "./pages/Logout";
import DashBoard from "./pages/Giangvien/DashBoard";

import PhanCongGiangVienHoiDong from "./pages/ChuNhiemBoMon/PhanCongGiangVienHoiDong";
import QuanLyTieuChi from "./pages/ChuNhiemBoMon/QuanLyTieuChi";
import CaiDat from "./pages/ChuNhiemBoMon/CaiDat";
import { MobileProvider } from "./context/MobileContext";
import QuanLyTaiKhoanSInhVien from "./pages/admin/QuanLyTaiKhoanSInhVien";
import QuanLyTaiKhoanGiangVien from "./pages/admin/QuanLyTaiKhoanGiangVien";
import AdminCaiDat from "./pages/admin/AdminCaiDat";
import ThongTInTaiKhoan from "./pages/ThongTInTaiKhoan";

const queryClient = new QueryClient({
  defaultOption: {
    queries: {
      staleTime: 300 * 1000,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <MobileProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Navigate to="login" />} />
            <Route path="Login" element={<LoginPage />} />
            <Route path="Logout" element={<Logout />} />
            {/* note dành cho sinh viên */}
            <Route path="sinhvien" element={<SinhVienLayout />}>
              <Route path="" element={<Navigate to="trangChu" />} />{" "}
              <Route path="trangChu" index element={<TrangChu />} />
              <Route path="dangKyDeTai" element={<DangKyDeTai />} />
              <Route path="dangKyThucTap" element={<DangKyThucTap />} />
              <Route path="chat" element={<Chat />} />
              <Route path="QuanLyDoAn" element={<QuanLyDoAn />} />
              <Route path="quanLyThucTap" element={<QuanLyThucTap />} />
              <Route path="LichHop" element={<LichHopSinhVien />} />{" "}
              <Route path="thongBao/:id" element={<NoiDungThongBao />} />
              <Route path="thongTinTaiKhoan" element={<ThongTInTaiKhoan />} />
            </Route>
            <Route path="giangvien" element={<GiangVIenLayout />}>
              <Route path="" element={<Navigate to="trangChu" />} />{" "}
              <Route path="thongTinTaiKhoan" element={<ThongTInTaiKhoan />} />
              <Route path="trangChu" element={<DashBoard />} />
              <Route path="thongBao" element={<ThongBao />} />
              <Route path="quanlydetai" element={<QuanLyDeTai />} />
              <Route path="doAn">
                <Route
                  path="danhsachsinhvien"
                  element={<XemDanhSachSinhVien />}
                />
                <Route path="danhsachdoan" element={<XemDanhSachDoAn />} />
                <Route
                  path="danhsachdoan/chitietdoan/:maDoAn"
                  element={<QuanLyDoAn />}
                />
                <Route path="chamdiemdoan" element={<ChamDiemDoAn />} />{" "}
                <Route path="diemDanhDoAn" element={<DiemDanhDoAn />} />{" "}
              </Route>
              <Route path="thucTap">
                <Route
                  path="danhsachsinhvien"
                  element={<XemDanhSachSinhVienThucTap />}
                />
                <Route path="danhSachBaoCao" element={<XemDanhSachBaoCao />} />
                <Route
                  path="danhSachBaoCao/chiTietBaoCao/:maBaoCao"
                  element={<QuanLyThucTap />}
                />
                <Route path="chamDiem" element={<ChamDiemBaoCaoThucTap />} />{" "}
                <Route path="diemDanh" element={<DiemDanhThucTap />} />
              </Route>
              <Route path="chamdiemphanbien" element={<ChamDiemPhanBien />} />
              <Route
                path="chamdiemhoidong"
                element={<ChamDiemHoiDong />}
              />{" "}
              <Route path="lichHop" element={<LichHopGiangVien />} />
              <Route path="troChuyen" element={<Chat />} />
              {/* note dành cho chủ nhiệm bộ môn */}
              <Route path="taoThongBao" element={<TaoThongBao />} />
              <Route path="thongBao/:id" element={<NoiDungThongBao />} />
              <Route
                path="taothongBao/TaoThongBao"
                element={<TaoNoiDungThongBao />}
              />
              <Route
                path="xemthongtinsinhvien"
                element={<QuanLyThongTinSInhVien />}
              />
              <Route
                path="quanlythongtindoan"
                element={<QuanLyThongTinDoAn />}
              />
              <Route
                path="quanlythongtindoan/chitietdoan/:maDoAn"
                element={<QuanLyDoAn />}
              />
              <Route
                path="quanlythongtinthuctap"
                element={<QuanLyThongTinThucTap />}
              />
              <Route path="quanLyTieuChi" element={<QuanLyTieuChi />} />
              <Route path="duyetdetai" element={<DuyetDeTai />} />
              <Route
                path="phanconggiangvienphanbien"
                element={<PhanCongGiangVienPhanBien />}
              />
              <Route
                path="phanconggiangvienhoidong"
                element={<PhanCongGiangVienHoiDong />}
              />
              <Route
                path="phanCongGiangVienGiamSat"
                element={<PhanCongGiangVienGiamSat />}
              />
              <Route path="CaiDat" element={<CaiDat />} />
              {/* admin function */}
              <Route
                path="quanLyTaiKhoanSinhVien"
                element={<QuanLyTaiKhoanSInhVien />}
              />
              <Route
                path="quanLyTaiKhoanGiangVien"
                element={<QuanLyTaiKhoanGiangVien />}
              />
              <Route path="adminCaiDat" element={<AdminCaiDat />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MobileProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px ",
              backgroundColor: "var(--bs-primary)",
              color: "var(--bs-white)",
            },
          },
          error: {
            duration: 5000,
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--bs-danger)",
              color: "var(--bs-white)",
            },
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
