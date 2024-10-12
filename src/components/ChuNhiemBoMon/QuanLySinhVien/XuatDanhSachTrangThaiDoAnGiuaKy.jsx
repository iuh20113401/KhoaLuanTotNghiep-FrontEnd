import { HiCheck } from "react-icons/hi";
import StyledTable from "../../../ui/Table";
import { utils, writeFile } from "xlsx";
import Button from "../../../ui/Button";

function XuatDanhSachTrangThaiDoAnGiuaKy({ danhSachDoAn }) {
  const exportToExcel = () => {
    // Prepare the data
    const data = danhSachDoAn.flatMap((doAn, index) => {
      const rows = [
        {
          STT: index + 1,
          "Mã đồ án": doAn.maDoAn,
          "Tên đồ án": doAn.tenDoAn,
          "Mã sinh viên": doAn.sinhVien1.maSo,
          "Tên sinh viên": doAn.sinhVien1.hoTen,
          Pass: doAn.trangThai === 1 ? "✓" : "",
          Fail: doAn.trangThai === 6 ? "✓" : "",
          "N/A": doAn.trangThai !== 1 && doAn.trangThai !== 6 ? "✓" : "",
        },
      ];

      // Add second student if present
      if (doAn.sinhVien2) {
        rows.push({
          STT: "", // Empty for second student row
          "Mã đồ án": "", // Empty for second student row
          "Tên đồ án": "", // Empty for second student row
          "Mã sinh viên": doAn.sinhVien2.maSo,
          "Tên sinh viên": doAn.sinhVien2.hoTen,
          Pass: "", // Status columns only in the first row
          Fail: "",
          "N/A": "",
        });
      }

      return rows;
    });

    // Create a worksheet
    const ws = utils.json_to_sheet(data);

    // Define merges for columns that need rowspan-like behavior
    const merges = [];
    let rowIndex = 1; // Excel rows start at 1 (not 0)
    danhSachDoAn.forEach((doAn, index) => {
      if (doAn.sinhVien2) {
        // Merge STT, Mã đồ án, Tên đồ án, Pass, Fail, and N/A cells for two rows (if sinhVien2 exists)
        merges.push(
          { s: { r: rowIndex, c: 0 }, e: { r: rowIndex + 1, c: 0 } }, // STT
          { s: { r: rowIndex, c: 1 }, e: { r: rowIndex + 1, c: 1 } }, // Mã đồ án
          { s: { r: rowIndex, c: 2 }, e: { r: rowIndex + 1, c: 2 } }, // Tên đồ án
          { s: { r: rowIndex, c: 5 }, e: { r: rowIndex + 1, c: 5 } }, // Pass
          { s: { r: rowIndex, c: 6 }, e: { r: rowIndex + 1, c: 6 } }, // Fail
          { s: { r: rowIndex, c: 7 }, e: { r: rowIndex + 1, c: 7 } } // N/A
        );
        rowIndex += 2; // Move to the next set of rows
      } else {
        rowIndex += 1; // Move to the next row for single-student projects
      }
    });

    // Apply merges to the worksheet
    ws["!merges"] = merges;

    // Adjust column widths
    const wsCols = [
      { wch: 5 }, // STT
      { wch: 15 }, // Mã đồ án
      { wch: 30 }, // Tên đồ án
      { wch: 15 }, // Mã sinh viên
      { wch: 25 }, // Tên sinh viên
      { wch: 5 }, // Pass
      { wch: 5 }, // Fail
      { wch: 5 }, // N/A
    ];
    ws["!cols"] = wsCols;

    // Create a workbook
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "DanhSach");

    // Export to Excel
    writeFile(wb, "DanhSachDoAnGiuaKy.xlsx");
  };
  return (
    <div>
      <Button className="mb-3" onClick={() => exportToExcel()}>
        Print
      </Button>
      <StyledTable className="text-left pl-3">
        <tr>
          <th>STT</th>
          <th width="15%">Mã đồ án</th>
          <th className="text-left pl-3" width="20%">
            Tên đồ án
          </th>
          <th className="text-left pl-3" width="13%">
            Mã sinh viên
          </th>
          <th className="text-left pl-3">Tên sinh viên</th>
          <th className="text-center" width="8%">
            Pass
          </th>
          <th className="text-center" width="8%">
            Fail
          </th>
          <th className="text-center" width="8%">
            N/A
          </th>
        </tr>
        {danhSachDoAn.map((doAn, index) => {
          const countSinhVien = doAn.sinhVien2 ? 2 : 1;

          return (
            <>
              <tr className={index % 2 !== 0 ? "strip" : ""}>
                <td rowSpan={countSinhVien}>{index + 1}</td>
                <td rowSpan={countSinhVien}>{doAn.maDoAn}</td>
                <td rowSpan={countSinhVien}>{doAn.tenDoAn}</td>
                <td className="text-left pl-3">{doAn.sinhVien1.maSo}</td>
                <td className="text-left pl-3">{doAn.sinhVien1.hoTen}</td>
                <td rowSpan={countSinhVien}>
                  {doAn.trangThai === 1 && <HiCheck size={"1.5rem"} />}
                </td>
                <td rowSpan={countSinhVien}>
                  {doAn.trangThai === 6 && <HiCheck size={"1.5rem"} />}
                </td>
                <td rowSpan={countSinhVien}>
                  {doAn.trangThai !== 1 && doAn.trangThai !== 6 && (
                    <HiCheck size={"1.5rem"} />
                  )}
                </td>
              </tr>
              {doAn.sinhVien2 && (
                <tr className={index % 2 != 0 ? "strip" : ""}>
                  <td className="text-left pl-3">{doAn.sinhVien2.maSo}</td>
                  <td className="text-left pl-3">{doAn.sinhVien2.hoTen}</td>
                </tr>
              )}
            </>
          );
        })}
      </StyledTable>
    </div>
  );
}

export default XuatDanhSachTrangThaiDoAnGiuaKy;
