import { BsFileExcel } from "react-icons/bs";
import Button from "../../../ui/Button";
import exportToExcel from "../../../utils/ExportsToExcel";

// Function to extract the required fields
const mapDataForExport = (data) => {
  return data.map((item, index) => {
    // Extract sinhVien data
    const sinhVien = item; // Assuming there is at least 1 student in sinhVien array

    // Extract Diem Huong Dan (points for guidance)
    const diemHuongDan = item.diem?.diemHuongDan || [];
    const diemPhanBien = item.diem?.diemPhanBien || [];
    // Prepare fields for diemAbet under diemHuongDan

    const diemHD = {
      diemTong: diemHuongDan?.diemTong || "N/A",
      diemAbet: {
        ...diemHuongDan?.diemAbet?.reduce((acc, diem, idx) => {
          acc[`dhd_Lo${idx + 1}`] = diem.diem || "N/A"; // dhd_1, dhd_2,... for each điểm abet
          return acc;
        }, {}),
      },
    };

    // Prepare diemAbet under diemPhanBien
    const diemPB = {
      diemTong: diemPhanBien?.diemPhanBien1?.diemTong || "N/A",
      ...diemPhanBien?.diemPhanBien1?.diemAbet.reduce((acc, diem, idx) => {
        acc[`dpb_${idx + 1}`] = diem.diem || "N/A";
        return acc;
      }, {}),
    };

    // Flatten data for export
    return {
      STT: index + 1,
      "Mã Số": sinhVien.maSo,
      "Họ Tên": sinhVien.hoTen,
      "Mã khóa luận": item.maDoAn,
      "Tên khóa luận": item.tenDoAn,
      "Diem Tong Huong Dan": diemHD?.diemTong || "N/A",
      ...diemHD.diemAbet, // Include dhd_1, dhd_2,... from diemAbet
      "Diem Tong Phan Bien": diemPB?.diemTong || "N/A",
      ...diemPB.diemAbet, // Include dpb_1, dpb_2,... from diemAbet under diemPhanBien
    };
  });
};
const transformData = (data) => {
  return data
    .flatMap((item) => {
      // Extract the common fields from each doAn (project)
      const maDoAn = item.maDoAn;
      const tenDoAn = item.tenDoAn;
      const newArray = [];
      newArray.push({
        maDoAn,
        tenDoAn,
        maSo: item.sinhVien1.maSo,
        hoTen: item.sinhVien1?.hoTen,
        diem: item.sinhVien1Info?.diem || [],
      });
      if (item?.sinhVien2)
        newArray.push({
          maDoAn,
          tenDoAn,
          maSo: item.sinhVien2?.maSo,
          hoTen: item.sinhVien2?.hoTen,
          diem: item.sinhVien2Info?.diem || [],
        });
      return newArray;
    })
    .filter((sv) => sv);
};
function XuatDanhSachDiemDoAn({ DanhSachDoAn }) {
  const data = mapDataForExport(transformData(DanhSachDoAn));
  return (
    <div className="mt-2 mr-3 text-end">
      <Button
        bgcolor="var(--bs-success)"
        onClick={() => {
          exportToExcel(data, "DanhSachSinhVien");
        }}
      >
        <span>
          <BsFileExcel />
        </span>
        Xuất danh sách ra file excel
      </Button>
    </div>
  );
}

export default XuatDanhSachDiemDoAn;
