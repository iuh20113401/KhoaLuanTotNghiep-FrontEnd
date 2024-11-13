import StyledTable from "../../../../ui/Table";
import ChiTietBaoCao from "./ChiTietBaoCao";

function DanhSachBaoCaoContainer({
  chamDiem = false,
  DanhSachBaoCao,
  tieuChiDoanhNghiep,
  tieuChiGiangVien,
}) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>STT</th>
          <th>MSSV</th>
          <th width="15%">Tên sinh viên</th>
          <th width="20%">Tên công ty</th>
          <th width="15%">Người giám sát</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {DanhSachBaoCao?.map((bc, index) => {
          return (
            <ChiTietBaoCao
              baoCao={bc}
              index={index}
              chamDiem={chamDiem}
              tieuChiDoanhNghiep={tieuChiDoanhNghiep}
              tieuChiGiangVien={tieuChiGiangVien}
              key={bc._id}
            />
          );
        })}
      </tbody>
    </StyledTable>
  );
}

export default DanhSachBaoCaoContainer;
