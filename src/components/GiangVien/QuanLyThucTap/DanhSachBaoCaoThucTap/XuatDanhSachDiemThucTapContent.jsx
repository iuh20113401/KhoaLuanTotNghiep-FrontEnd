import StyledTable from "../../../../ui/Table";
import ExcelJS from "exceljs";

async function exportToExcel(DanhSachBaoCao) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("DanhSachDiem");

  const headerStyle = {
    alignment: { horizontal: "center", vertical: "middle" },
    font: { bold: true },
  };
  worksheet.getCell("E1").fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "90EE90" },
  };
  worksheet.getCell("X1").fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "ADD8E6" },
  };

  const subDoanhNghiepHeaders = [];
  for (let i = 1; i <= 9; i++) {
    subDoanhNghiepHeaders.push(i.toString(), i.toString());
  }

  const doanhNghiepAbetThang10Headers = Array(18)
    .fill("")
    .map((_, index) => (index % 2 === 0 ? "ABET" : "10"));
  const subGiangVienHeaders = [];
  for (let i = 1; i <= 4; i++) {
    subGiangVienHeaders.push(i.toString(), i.toString());
  }

  worksheet.getRow(2).values = [
    "",
    "",
    "",
    "",
    ...subDoanhNghiepHeaders,
    "",
    ...subGiangVienHeaders,
  ];

  const giangVienAbetThang10Headers = Array(8)
    .fill("")
    .map((_, index) => (index % 2 === 0 ? "ABET" : "10"));
  worksheet.getRow(3).values = [
    "",
    "",
    "",
    "",
    ...doanhNghiepAbetThang10Headers,
    "",
    ...giangVienAbetThang10Headers,
    "",
  ];

  worksheet.getCell("A1").value = "STT";
  worksheet.getCell("B1").value = "MSSV";
  worksheet.getCell("C1").value = "Họ đệm";
  worksheet.getCell("D1").value = "Tên";
  worksheet.getCell("E1").value = "Đánh giá của công ty";
  worksheet.getCell("X1").value = "Đánh giá của giảng viên";
  worksheet.getCell("AG1").value = "Tổng điểm";
  worksheet.getCell("W2").value = "Tổng điểm";
  worksheet.getCell("AF2").value = "Tổng điểm";

  worksheet.mergeCells("A1:A3");
  worksheet.mergeCells("B1:B3");
  worksheet.mergeCells("C1:C3");
  worksheet.mergeCells("D1:D3");
  worksheet.mergeCells("E1:W1");
  worksheet.mergeCells("W2:W3");
  worksheet.mergeCells("X1:AF1");
  worksheet.mergeCells("AF2:AF3");
  worksheet.mergeCells("AG1:AG3");
  DanhSachBaoCao.forEach((baoCao, index) => {
    const hoDem = baoCao.userInfo.hoTen.split(" ").slice(0, -1).join(" ");
    const ten = baoCao.userInfo.hoTen.split(" ").slice(-1).join("");
    const doanhNghiepScores =
      baoCao.sinhVienInfo.diem?.diemThucTap?.diemDoanhNghiep || [];
    const giangVienScores =
      baoCao.sinhVienInfo.diem?.diemThucTap?.diemGiangVien || [];

    const doanhNghiepData = doanhNghiepScores.flatMap((diem) => [
      diem.diemAbet,
      diem.diemThang10,
    ]);
    const giangVienData = giangVienScores.flatMap((diem) => [
      diem.diemAbet,
      diem.diemThang10,
    ]);
    const formattedDoanhNghiepData = [
      ...doanhNghiepData,
      ...Array(18 - doanhNghiepData.length).fill("NA"),
    ];
    const formattedGiangVienData = [
      ...giangVienData,
      ...Array(8 - giangVienData.length).fill("NA"),
    ];

    const avgDoanhNghiep =
      doanhNghiepScores.reduce((acc, a) => acc + +a.diemThang10, 0) /
        doanhNghiepScores.length || "NA";
    const avgGiangVien =
      giangVienScores.reduce((acc, a) => acc + +a.diemThang10, 0) /
        giangVienScores.length || "NA";
    const finalScore =
      avgDoanhNghiep !== "NA" && avgGiangVien !== "NA"
        ? (avgDoanhNghiep + avgGiangVien) / 2
        : "NA";

    worksheet.addRow([
      index + 1,
      baoCao.userInfo.maSo,
      hoDem,
      ten,
      ...formattedDoanhNghiepData,
      avgDoanhNghiep,
      ...formattedGiangVienData,
      avgGiangVien,
      finalScore,
    ]);
  });
  const totalRows = worksheet.rowCount;
  const totalColumns = worksheet.columnCount;

  for (let row = 1; row <= totalRows; row++) {
    for (let col = 1; col <= totalColumns; col++) {
      const cell = worksheet.getCell(row, col);
      cell.alignment = headerStyle.alignment;
      if (row === 1 || row === 2) cell.font = headerStyle.font;
    }
  }
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "DanhSachDiemThucTap.xlsx";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function XuatDanhSachDiemThucTapContent({ DanhSachBaoCao }) {
  return (
    <div style={{ overflowX: "scroll" }}>
      {" "}
      <button onClick={() => exportToExcel(DanhSachBaoCao)}>
        Export to Excel
      </button>
      <StyledTable variation="overflow">
        <thead>
          <tr>
            <th rowSpan={3}>STT</th>
            <th rowSpan={3}>MSSV</th>
            <th rowSpan={3}>Họ đệm</th>
            <th rowSpan={3}>Tên</th>
            <th
              colSpan={19}
              className="text-center"
              style={{ backgroundColor: "var(--bs-info-bg-subtle)" }}
            >
              Đánh giá của công ty
            </th>
            <th
              colSpan={9}
              className="text-center"
              style={{ backgroundColor: "var(--bs-primary-border-subtle)" }}
            >
              Đánh giá của giảng viên
            </th>
            <th rowSpan={3}>Tổng điểm</th>
          </tr>
          <tr>
            <th colSpan={2} className="text-center">
              1
            </th>
            <th colSpan={2} className="text-center">
              2
            </th>
            <th colSpan={2} className="text-center">
              3
            </th>
            <th colSpan={2} className="text-center">
              4
            </th>
            <th colSpan={2} className="text-center">
              5
            </th>
            <th colSpan={2} className="text-center">
              6
            </th>
            <th colSpan={2} className="text-center">
              7
            </th>
            <th colSpan={2} className="text-center">
              8
            </th>
            <th colSpan={2} className="text-center">
              9
            </th>
            <th rowSpan={2} className="text-center">
              Tổng điểm
            </th>
            <th colSpan={2} className="text-center">
              1
            </th>
            <th colSpan={2} className="text-center">
              2
            </th>
            <th colSpan={2} className="text-center">
              3
            </th>
            <th colSpan={2} className="text-center">
              4
            </th>
            <th rowSpan={2} className="text-center">
              Tổng điểm
            </th>
          </tr>
          <tr>
            <th>Abet</th>
            <th>10</th>
            <th>Abet</th>
            <th>10</th>
            <th>Abet</th>
            <th>10</th>
            <th>Abet</th>
            <th>10</th>
            <th>Abet</th>
            <th>10</th>
            <th>Abet</th>
            <th>10</th>
            <th>Abet</th>
            <th>10</th>
            <th>Abet</th>
            <th>10</th>
            <th>Abet</th>
            <th>10</th>
            <th>Abet</th>
            <th>10</th>
            <th>Abet</th>
            <th>10</th>
            <th>Abet</th>
            <th>10</th>
            <th>Abet</th>
            <th>10</th>
          </tr>
        </thead>
        <tbody>
          {DanhSachBaoCao.map((baoCao, i) => {
            const countDiemDoanhNghiep =
              baoCao.sinhVienInfo.diem?.diemThucTap?.diemDoanhNghiep?.length;
            const countDiemGiangVien =
              baoCao.sinhVienInfo.diem?.diemThucTap?.diemGiangVien?.length;
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{baoCao.userInfo.maSo}</td>
                <td>
                  {baoCao.userInfo.hoTen.split(" ").slice(0, -1).join(" ")}
                </td>
                <td>{baoCao.userInfo.hoTen.split(" ").slice(-1)}</td>
                {baoCao.sinhVienInfo.diem?.diemThucTap?.diemDoanhNghiep
                  ? baoCao.sinhVienInfo.diem?.diemThucTap?.diemDoanhNghiep?.map(
                      (diem) => {
                        return (
                          <>
                            <td className="text-center">{diem.diemAbet}</td>
                            <td className="text-center">{diem.diemThang10}</td>
                          </>
                        );
                      }
                    )
                  : Array.from({ length: 16 }).map((a, i) => <td>NA</td>)}
                <td></td>
                <td></td>
                <td className="text-center">
                  {baoCao.sinhVienInfo.diem?.diemThucTap?.diemDoanhNghiep
                    ? baoCao.sinhVienInfo.diem?.diemThucTap?.diemDoanhNghiep?.reduce(
                        (acc, a) => acc + +a.diemThang10,
                        0
                      ) / countDiemDoanhNghiep
                    : "NA"}
                </td>
                {baoCao.sinhVienInfo.diem?.diemThucTap?.diemGiangVien
                  ? baoCao.sinhVienInfo.diem?.diemThucTap?.diemGiangVien?.map(
                      (diem) => {
                        return (
                          <>
                            <td className="text-center">{diem.diemAbet}</td>
                            <td className="text-center">{diem.diemThang10}</td>
                          </>
                        );
                      }
                    )
                  : Array.from({ length: 8 }).map((a, i) => <td>NA</td>)}
                <td className="text-center">
                  {baoCao.sinhVienInfo.diem?.diemThucTap?.diemDoanhNghiep
                    ? baoCao.sinhVienInfo.diem?.diemThucTap?.diemGiangVien?.reduce(
                        (acc, a) => acc + +a.diemThang10,
                        0
                      ) / countDiemGiangVien
                    : "NA"}
                </td>

                <td className="text-center">
                  {baoCao.sinhVienInfo.diem?.diemThucTap?.diemDoanhNghiep
                    ? (baoCao.sinhVienInfo.diem?.diemThucTap?.diemDoanhNghiep?.reduce(
                        (acc, a) => acc + +a.diemThang10,
                        0
                      ) /
                        countDiemDoanhNghiep +
                        baoCao.sinhVienInfo.diem?.diemThucTap?.diemGiangVien?.reduce(
                          (acc, a) => acc + +a.diemThang10,
                          0
                        ) /
                          countDiemGiangVien) /
                      2
                    : "NA"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </div>
  );
}

export default XuatDanhSachDiemThucTapContent;
