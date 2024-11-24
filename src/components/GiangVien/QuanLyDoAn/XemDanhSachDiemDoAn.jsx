import { useQuery } from "@tanstack/react-query";
import { layDanhSachSinhVienTheoGiangVien } from "../../../services/SinhVien";
import StyledTable from "../../../ui/Table";
import LoadingSpinner from "../../../ui/Spinner";
import Card from "../../../ui/Card";

const mapDataForExport = (data) => {
  return data.map((item, index) => {
    const sinhVien = item.Info;
    const doAn = item.doAnInfo;
    const diemHuongDan = item.diem?.diemHuongDan || [];
    const diemPhanBien = item.diem?.diemPhanBien || [];

    const diemHD = diemHuongDan?.diemTong || "N/A";

    // Prepare diemAbet under diemPhanBien
    const diemPB1 = diemPhanBien?.diemPhanBien1?.diemTong || "N/A";
    const diemPB2 = diemPhanBien?.diemPhanBien2?.diemTong || "N/A";

    // Flatten data for export
    return {
      STT: index + 1,
      maSo: sinhVien.maSo,
      hoTen: sinhVien.hoTen,
      maDoAn: doAn.maDoAn,
      tenDoAn: doAn.tenDoAn,
      diemHuongDan: diemHD?.diemTong || "N/A",
      diemPhanBien1: diemPB1?.diemTong || "N/A",
      diemPhanBien2: diemPB2?.diemTong || "N/A",
    };
  });
};

function XemDanhSachDiemDoAn() {
  const { data, isLoading } = useQuery({
    queryKey: ["DanhSachSinhVien"],
    queryFn: layDanhSachSinhVienTheoGiangVien,
  });
  if (isLoading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  const newData = mapDataForExport(data?.danhSachSinhVien);
  return (
    <Card className="mt-2">
      <StyledTable>
        <thead>
          <tr>
            <th>STT</th>
            <th>MSSV</th>
            <th>Họ tên</th>
            <th>Mã đồ án</th>
            <th>Điểm hướng dẫn</th>
            <th>Điểm phản biên 1</th>
            <th>Điểm phản biên 2</th>
          </tr>
        </thead>
        <tbody>
          {newData.map((sv) => {
            return (
              <tr>
                <td>{sv.STT}</td>
                <td>{sv.maSo}</td>
                <td>{sv.hoTen}</td>
                <td className="text-center">{sv.maDoAn}</td>
                <td className="text-center">{sv.diemHuongDan}</td>
                <td className="text-center">{sv.diemPhanBien1}</td>
                <td className="text-center">{sv.diemPhanBien2}</td>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </Card>
  );
}
export default XemDanhSachDiemDoAn;
