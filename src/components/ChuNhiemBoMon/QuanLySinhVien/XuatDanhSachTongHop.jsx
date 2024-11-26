/* eslint-disable array-callback-return */
import { useRef } from "react";

const getDanhSachSinhVien = (DanhSachDoAn) => {
  // Initialize an empty array to store all sinhVien
  let danhSachSinhVien = [];
  const DanhSachDiemTheoLO = {};
  const DanhSachTrangThai = {};
  // Iterate through each doAn item
  DanhSachDoAn.forEach((doAn) => {
    // Check if sinhVien1 exists and add to the list
    if (doAn.sinhVien1) {
      const sinhVien1Info = {
        id: doAn.sinhVien1._id,
        maSo: doAn.sinhVien1.maSo,
        hoTen: doAn.sinhVien1.hoTen,
        email: doAn.sinhVien1.email,
        hinhAnh: doAn.sinhVien1.hinhAnh,
        soDienThoai: doAn.sinhVien1.soDienThoai,
        ngaySinh: doAn.sinhVien1.ngaySinh,
        diem: doAn.sinhVien1Info.diem,
      };
      danhSachSinhVien.push(sinhVien1Info);
    }

    // Check if sinhVien2 exists and add to the list
    if (doAn.sinhVien2) {
      const sinhVien2Info = {
        id: doAn.sinhVien2._id,
        maSo: doAn.sinhVien2.maSo,
        hoTen: doAn.sinhVien2.hoTen,
        email: doAn.sinhVien2.email,
        hinhAnh: doAn.sinhVien2.hinhAnh,
        soDienThoai: doAn.sinhVien2.soDienThoai,
        ngaySinh: doAn.sinhVien2.ngaySinh,
        diem: doAn.sinhVien2Info.diem,
      };
      danhSachSinhVien.push(sinhVien2Info);
    }
    DanhSachTrangThai[doAn.trangThai] =
      ++DanhSachTrangThai[doAn.trangThai] || 1;
  });

  danhSachSinhVien.map((sv) => {
    const diemHuongDan = sv.diem.diemHuongDan?.diemAbet;
    const diemPhanBien1 = sv.diem.diemPhanBien?.diemPhanBien1?.diemAbet;
    const diemPhanBien2 = sv.diem.diemPhanBien?.diemPhanBien2?.diemAbet;
    const diemHoiDong1 = sv.diem.diemHoiDong?.diemHoiDong1?.diemAbet;
    const diemHoiDong2 = sv.diem.diemHoiDong?.diemHoiDong2?.diemAbet;
    const diemHoiDong3 = sv.diem.diemHoiDong?.diemHoiDong3?.diemAbet;
    diemHuongDan &&
      diemHuongDan.length > 0 &&
      diemHuongDan.map((d) => {
        if (DanhSachDiemTheoLO[d.stt]) {
          if (DanhSachDiemTheoLO[d.stt].lan1) {
            DanhSachDiemTheoLO[d.stt].lan1[d.diem] =
              (DanhSachDiemTheoLO[d.stt].lan1[d.diem] || 0) + 1;
          } else {
            DanhSachDiemTheoLO[d.stt] = {
              ...DanhSachDiemTheoLO[d.stt],
              lan1: {
                [d.diem]: 1,
              },
            };
          }
        } else {
          DanhSachDiemTheoLO[d.stt] = {
            lan1: {
              [d.diem]: 1,
            },
          };
        }
      });
    diemPhanBien1 &&
      diemPhanBien1.length > 0 &&
      diemPhanBien1.map((d) => {
        if (DanhSachDiemTheoLO[d.stt]) {
          if (DanhSachDiemTheoLO[d.stt].lan1) {
            DanhSachDiemTheoLO[d.stt].lan1[d.diem] =
              (DanhSachDiemTheoLO[d.stt].lan1[d.diem] || 0) + 1;
          } else {
            DanhSachDiemTheoLO[d.stt] = {
              ...DanhSachDiemTheoLO[d.stt],
              lan1: {
                [d.diem]: 1,
              },
            };
          }
        } else {
          DanhSachDiemTheoLO[d.stt] = {
            lan1: {
              [d.diem]: 1,
            },
          };
        }
      });
    diemPhanBien2 &&
      diemPhanBien2.length > 0 &&
      diemPhanBien2.map((d) => {
        if (DanhSachDiemTheoLO[d.stt]) {
          if (DanhSachDiemTheoLO[d.stt].lan1) {
            DanhSachDiemTheoLO[d.stt].lan1[d.diem] =
              (DanhSachDiemTheoLO[d.stt].lan1[d.diem] || 0) + 1;
          } else {
            DanhSachDiemTheoLO[d.stt] = {
              ...DanhSachDiemTheoLO[d.stt],
              lan1: {
                [d.diem]: 1,
              },
            };
          }
        } else {
          DanhSachDiemTheoLO[d.stt] = {
            lan1: {
              [d.diem]: 1,
            },
          };
        }
      });
    diemHoiDong1 &&
      diemHoiDong1.length &&
      diemHoiDong1.map((d) => {
        if (DanhSachDiemTheoLO[d.stt]) {
          if (DanhSachDiemTheoLO[d.stt].lan2) {
            DanhSachDiemTheoLO[d.stt].lan2[d.diem] =
              DanhSachDiemTheoLO[d.stt].lan2[d.diem] + 1;
          } else {
            DanhSachDiemTheoLO[d.stt] = {
              ...DanhSachDiemTheoLO[d.stt],
              lan2: {
                [d.diem]: 1,
              },
            };
          }
        } else {
          DanhSachDiemTheoLO[d.stt] = {
            lan2: {
              [d.diem]: 1,
            },
          };
        }
      });
    diemHoiDong2 &&
      diemHoiDong2.length &&
      diemHoiDong2.map((d) => {
        if (DanhSachDiemTheoLO[d.stt]) {
          if (DanhSachDiemTheoLO[d.stt].lan2) {
            DanhSachDiemTheoLO[d.stt].lan2[d.diem] =
              (DanhSachDiemTheoLO[d.stt].lan2[d.diem] || 0) + 1;
          } else {
            DanhSachDiemTheoLO[d.stt] = {
              ...DanhSachDiemTheoLO[d.stt],
              lan2: {
                [d.diem]: 1,
              },
            };
          }
        } else {
          DanhSachDiemTheoLO[d.stt] = {
            lan2: {
              [d.diem]: 1,
            },
          };
        }
      });
    diemHoiDong3 &&
      diemHoiDong3.length &&
      diemHoiDong3.map((d) => {
        if (DanhSachDiemTheoLO[d.stt]) {
          if (DanhSachDiemTheoLO[d.stt].lan2) {
            DanhSachDiemTheoLO[d.stt].lan2[d.diem] =
              (DanhSachDiemTheoLO[d.stt].lan2[d.diem] || 0) + 1;
          } else {
            DanhSachDiemTheoLO[d.stt] = {
              ...DanhSachDiemTheoLO[d.stt],
              lan2: {
                [d.diem]: 1,
              },
            };
          }
        } else {
          DanhSachDiemTheoLO[d.stt] = {
            lan2: {
              [d.diem]: 1,
            },
          };
        }
      });
  });
  return [danhSachSinhVien, DanhSachDiemTheoLO, DanhSachTrangThai];
};
export default function XuatDanhSachTongHop({ DanhSachDoAn }) {
  const contentRef = useRef();
  const [danhSachSinhVien, DanhSachDiemTheoLO, DanhSachTrangThai] =
    getDanhSachSinhVien(DanhSachDoAn);
  const tongSoDiemLan1 = Object.values(DanhSachDiemTheoLO[1].lan1).reduce(
    (acc, vl) => acc + vl,
    0
  );
  const tongSoDiemLan2 =
    DanhSachDiemTheoLO[1].lan2 &&
    Object.values(DanhSachDiemTheoLO[1].lan2).reduce((acc, vl) => acc + vl, 0);
  const SLDoAnDat = Object.keys(DanhSachTrangThai).reduce(
    (acc, tt) =>
      +tt >= 1 && +tt <= 4 ? (acc = acc + DanhSachTrangThai[tt]) : acc,
    0
  );
  const SLDoAnKoDat = Object.keys(DanhSachTrangThai).reduce(
    (acc, tt) =>
      +tt >= 6 && +tt <= 7 ? (acc = acc + DanhSachTrangThai[tt]) : acc,
    0
  );
  const SLDoAnCamThi = Object.keys(DanhSachTrangThai).reduce(
    (acc, tt) => (+tt === 5 ? (acc = acc + DanhSachTrangThai[tt]) : acc),
    0
  );
  function Export2Doc(filename = "") {
    var preHtml = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'>
        <title>Export HTML To Doc</title>
        <style>
          @page WordSection1 {
            mso-page-orientation: portrait;
            margin-top: 1.78cm;
            margin-bottom: 1.78cm;
            margin-left: 2.54cm;
            margin-right: 2.54cm;
          }
          div.WordSection1 { page: WordSection1; }
        </style>
      </head>
      <body>
        <div class='WordSection1'>
  `;
    var postHtml = "</div></body></html>";

    var html = preHtml + contentRef.current.innerHTML + postHtml;

    var blob = new Blob(["\ufeff", html], {
      type: "application/msword",
    });

    var filename = filename ? filename + ".doc" : "document.doc";

    var downloadLink = document.createElement("a");
    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = filename;
      downloadLink.click();
    }

    document.body.removeChild(downloadLink);
  }
  return (
    <div style={{ textAlign: "left " }}>
      <button onClick={() => Export2Doc("document")}>Print</button>
      <div class="docx-wrapper" ref={contentRef}>
        <section
          class="docx"
          style={{
            padding: "36pt",
            width: "612pt",
            minHeight: "792pt",
            margin: "auto",
          }}
        >
          <article>
            <p style={{ marginBottom: "0", lineHeight: "1" }}>
              <span
                style={{
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                  fontSize: "12pt",
                  textDecoration: "underline",
                }}
              >
                Đánh giá:
              </span>
            </p>
            {/*note Kết quả thống kê */}
            <p style={{ marginBottom: "0", lineHeight: "1" }}>
              <span
                style={{
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                  fontSize: "12pt",
                }}
              >
                a. Kết quả thống kê: (theo kết quả cuối kỳ)
              </span>
            </p>
            {/*note sinh viên cấm thi (trang thái = 5) */}
            <p
              class="docx-num-3-0"
              style={{
                marginTop: "0",
                marginBottom: "0",
                lineHeight: "1",
                marginLeft: "36pt",
              }}
            >
              <span
                style={{
                  fontFamily: "Times New Roman",
                  fontSize: "12pt",
                }}
              >
                - Số sinh viên bị cấm thi:{" "}
              </span>
              <span style={{ fontWeight: "bold" }}>{SLDoAnCamThi}</span>
            </p>
            {/*note sinh viên đạt (trang thái = 4) */}
            <p
              class="docx-num-3-0"
              style={{
                marginTop: "0",
                marginBottom: "0",
                lineHeight: "1",
                marginLeft: "36pt",
              }}
            >
              <span
                style={{
                  fontFamily: "Times New Roman",
                  fontSize: "12pt",
                }}
              >
                - Số sinh viên đạt:{" "}
              </span>
              <span style={{ fontWeight: "bold" }}>{SLDoAnDat}</span>
            </p>
            {/*note sinh viên không đạt (trang thái = 6,7) */}
            <p
              class="docx-num-3-0"
              style={{
                marginTop: "0",
                marginBottom: "0",
                lineHeight: "1",
                marginLeft: "36pt",
              }}
            >
              <span
                style={{
                  fontFamily: "Times New Roman",
                  fontSize: "12pt",
                }}
              >
                - Số sinh viên không đạt:{" "}
              </span>
              <span style={{ fontWeight: "bold" }}>{SLDoAnKoDat}</span>
            </p>
            <p
              class="docx-num-3-0"
              style={{
                marginTop: "0",
                marginBottom: "0",
                lineHeight: "1",
                marginLeft: "36pt",
              }}
            >
              <span
                style={{
                  fontFamily: "Times New Roman",
                  fontSize: "12pt",
                }}
              >
                - Số sinh viên bỏ thi cuối kỳ:
              </span>
              <span style={{ fontWeight: "bold" }}>--</span>
            </p>
            {/*note đánh giá theo chuản đầu ra */}

            <p style={{ marginBottom: "0pt", lineHeight: 1 }}>
              <span
                style={{
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                  minHeight: "12pt",
                  fontSize: "12pt",
                }}
              >
                b. Đánh giá theo chuẩn đầu ra:
              </span>
            </p>
            {Object.keys(DanhSachDiemTheoLO).map((a, i) => {
              const LO = DanhSachDiemTheoLO[a];

              return (
                <>
                  <p
                    class="docx-num-4-0"
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "justify",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Times New Roman"',
                        color: "rgb(0, 0, 0)",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      <strong>Chuẩn đầu ra {a}:</strong> Thiết kế một hệ thống
                      thông tin/đưa ra giải pháp đáp ứng được yêu cầu bài
                      toán/hệ thống.
                    </span>
                  </p>

                  <table
                    class="first-row first-col no-vband"
                    style={{
                      width: "480.25pt",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <tr style={{ height: "14.4pt", textAlign: "center" }}>
                      <td
                        colspan="2"
                        style={{
                          width: "96.25pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid rgb(0, 0, 0)",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              fontWeight: "bold",
                              color: "rgb(0, 0, 0)",
                              minHeight: "12pt",
                              fontSize: "12pt",
                            }}
                          >
                            Chi tiết
                          </span>
                        </p>
                      </td>
                      <td
                        colspan="2"
                        style={{
                          width: "96pt",
                          borderTop: "0.5pt solid black",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              fontWeight: "bold",
                              color: "rgb(0, 0, 0)",
                              minHeight: "12pt",
                              fontSize: "12pt",
                            }}
                          >
                            Failed
                          </span>
                        </p>
                      </td>
                      <td
                        colspan="2"
                        style={{
                          width: "96pt",
                          borderTop: "0.5pt solid black",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              fontWeight: "bold",
                              color: "rgb(0, 0, 0)",
                              minHeight: "12pt",
                              fontSize: "12pt",
                            }}
                          >
                            Fair
                          </span>
                        </p>
                      </td>
                      <td
                        colspan="2"
                        style={{
                          width: "96pt",
                          borderTop: "0.5pt solid black",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              fontWeight: "bold",
                              color: "rgb(0, 0, 0)",
                              minHeight: "12pt",
                              fontSize: "12pt",
                            }}
                          >
                            Accepted
                          </span>
                        </p>
                      </td>
                      <td
                        colspan="2"
                        style={{
                          width: "96pt",
                          borderTop: "0.5pt solid black",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              fontWeight: "bold",
                              color: "rgb(0, 0, 0)",
                              minHeight: "12pt",
                              fontSize: "12pt",
                            }}
                          >
                            Excellent
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr style={{ height: "14.4pt", textAlign: "center" }}>
                      <td
                        style={{
                          width: "31.5pt",
                          borderTop: "none",
                          borderLeft: "0.5pt solid black",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              fontWeight: "bold",
                              color: "rgb(0, 0, 0)",
                              minHeight: "12pt",
                              fontSize: "12pt",
                            }}
                          >
                            Lần
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "64.75pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              fontWeight: "bold",
                              fontStyle: "italic",
                              color: "rgb(0, 0, 0)",
                              minHeight: "12pt",
                              fontSize: "12pt",
                            }}
                          >
                            Số mẫu
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "47.45pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              fontStyle: "italic",
                              color: "rgb(0, 0, 0)",
                              minHeight: "10pt",
                              fontSize: "10pt",
                            }}
                          >
                            Số lượng
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "48.55pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              fontStyle: "italic",
                              color: "rgb(0, 0, 0)",
                              minHeight: "10pt",
                              fontSize: "10pt",
                            }}
                          >
                            Tỷ lệ
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "47.45pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              fontStyle: "italic",
                              color: "rgb(0, 0, 0)",
                              minHeight: "10pt",
                              fontSize: "10pt",
                            }}
                          >
                            Số lượng
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "48.55pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              fontStyle: "italic",
                              color: "rgb(0, 0, 0)",
                              minHeight: "10pt",
                              fontSize: "10pt",
                            }}
                          >
                            Tỷ lệ
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "47.45pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              fontStyle: "italic",
                              color: "rgb(0, 0, 0)",
                              minHeight: "10pt",
                              fontSize: "10pt",
                            }}
                          >
                            Số lượng
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "48.55pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              fontStyle: "italic",
                              color: "rgb(0, 0, 0)",
                              minHeight: "10pt",
                              fontSize: "10pt",
                            }}
                          >
                            Tỷ lệ
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "47.45pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              fontStyle: "italic",
                              color: "rgb(0, 0, 0)",
                              minHeight: "10pt",
                              fontSize: "10pt",
                            }}
                          >
                            Số lượng
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "48.55pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              fontStyle: "italic",
                              color: "rgb(0, 0, 0)",
                              minHeight: "10pt",
                              fontSize: "10pt",
                            }}
                          >
                            Tỷ lệ
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr style={{ height: "14.4pt", textAlign: "center" }}>
                      <td
                        style={{
                          width: "31.5pt",
                          borderTop: "none",
                          borderLeft: "0.5pt solid black",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        {/* note lần 1 gồm hướng dẫn và điểm phản biện */}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              color: "rgb(0, 0, 0)",
                              minHeight: "12pt",
                              fontSize: "12pt",
                            }}
                          >
                            1
                          </span>
                        </p>
                      </td>
                      {/* note lần 1 số mẫu tổng số điểm hướng dân và phản biệ */}

                      <td
                        style={{
                          width: "64.75pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          {tongSoDiemLan1}
                        </p>
                      </td>
                      <td
                        style={{
                          width: "47.45pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {/* note lần 1 tổng điểm 1*/}

                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>{LO.lan1[1] || 0}</span>
                        </p>
                      </td>

                      <td
                        style={{
                          width: "48.55pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {/* noten lần 1 phần trăm điểm 1*/}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>
                            {LO.lan1[1]
                              ? ((LO.lan1[1] / tongSoDiemLan1) * 100).toFixed(2)
                              : 0}
                            %
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "47.45pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {/* noten lần 1 tổng điểm điểm 2*/}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>{LO.lan1[2] || 0}</span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "48.55pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {" "}
                        {/* noten lần 1 phần trăm điểm điểm 2*/}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>
                            {LO.lan1[2]
                              ? ((LO.lan1[2] / tongSoDiemLan1) * 100).toFixed(2)
                              : 0}
                            %
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "47.45pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {/* noten lần 1 tổng điểm điểm 3*/}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>{LO.lan1[3] || 0}</span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "48.55pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {/* noten lần 1 phần trăm  điểm 3*/}

                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>
                            {LO.lan1[3]
                              ? ((LO.lan1[3] / tongSoDiemLan1) * 100).toFixed(2)
                              : 0}
                            %{" "}
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "47.45pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {" "}
                        {/* noten lần 1 tổng điểm 4*/}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>{LO.lan1[4] || 0}</span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "48.55pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {/* note lần 1 phần trăm điểm 4*/}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>
                            {LO.lan1[4]
                              ? ((LO.lan1[4] / tongSoDiemLan1) * 100).toFixed(2)
                              : 0}
                            %
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr style={{ height: "14.4pt", textAlign: "center" }}>
                      <td
                        style={{
                          width: "31.5pt",
                          borderTop: "none",
                          borderLeft: "0.5pt solid black",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        {/* note lần 2 phần trăm điểm 4*/}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              color: "rgb(0, 0, 0)",
                              minHeight: "12pt",
                              fontSize: "12pt",
                            }}
                          >
                            2
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "64.75pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {/* note lần 2 tổng số mẫu*/}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>{tongSoDiemLan2}</span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "47.45pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {" "}
                        {/* note lần 2 tổng số điểm 1*/}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>{LO.lan2?.[1] || 0}</span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "48.55pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {/* note lần 2 phần trăm số điểm 1*/}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>
                            {LO.lan2?.[1]
                              ? ((LO.lan2[1] / tongSoDiemLan2) * 100).toFixed(2)
                              : 0}
                            %
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "47.45pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {/* note lần 2 tổng số điểm 2*/}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>{LO.lan2?.[2] || 0}</span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "48.55pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {" "}
                        {/* note lần 2 phần trăm số điểm 2*/}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>
                            {LO.lan2?.[2]
                              ? ((LO.lan2[2] / tongSoDiemLan2) * 100).toFixed(2)
                              : 0}
                            %
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "47.45pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {" "}
                        {/* note lần 2 tổng số điểm 3*/}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>{LO.lan2?.[3] || 0}</span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "48.55pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {" "}
                        {/* note lần 2 phần trăm số điểm 3*/}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>
                            {LO.lan2?.[3]
                              ? ((LO.lan2[3] / tongSoDiemLan2) * 100).toFixed(2)
                              : 0}
                            %
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "47.45pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {/* note lần 2 tổng số điểm 4*/}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>{LO.lan2?.[4] || 0}</span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "48.55pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {/* note lần 2 phần trăm số điểm 2*/}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>
                            {LO.lan2?.[4]
                              ? ((LO.lan2[4] / tongSoDiemLan2) * 100).toFixed(2)
                              : 0}
                            %
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr style={{ height: "14.4pt", textAlign: "center" }}>
                      <td
                        style={{
                          width: "31.5pt",
                          borderTop: "none",
                          borderLeft: "0.5pt solid black",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        {/* note tổng lần 1 và 2*/}

                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              color: "rgb(0, 0, 0)",
                              minHeight: "12pt",
                              fontSize: "12pt",
                            }}
                          >
                            TC
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "64.75pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {" "}
                        {/* note tổng số mẫu lần 1 và 2*/}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>{tongSoDiemLan1 + tongSoDiemLan2}</span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "47.45pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {/* note tổng số diểm 1 lần 1 và 2*/}

                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>
                            {(parseFloat(LO.lan1?.[1]) || 0) +
                              (parseFloat(LO.lan2?.[1]) || 0)}
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "48.55pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {" "}
                        {/* note tổng phần trăm diểm 1 lần 1 và 2*/}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>
                            {(
                              (((parseFloat(LO.lan1?.[1]) || 0) +
                                (parseFloat(LO.lan2?.[1]) || 0)) /
                                (tongSoDiemLan1 + tongSoDiemLan2)) *
                              100
                            ).toFixed(2)}
                            %
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "47.45pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {" "}
                        {/* note tổng số diểm 2 lần 1 và 2*/}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>
                            {(parseFloat(LO.lan1?.[2]) || 0) +
                              (parseFloat(LO.lan2?.[2]) || 0)}
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "48.55pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {" "}
                        {/* note tổng phần trăm diểm 2 lần 1 và 2*/}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>
                            {(
                              (((parseFloat(LO.lan1?.[2]) || 0) +
                                (parseFloat(LO.lan2?.[2]) || 0)) /
                                (tongSoDiemLan1 + tongSoDiemLan2)) *
                              100
                            ).toFixed(2)}
                            %
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "47.45pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {" "}
                        {/* note tổng số diểm 3 lần 1 và 2*/}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>
                            {(parseFloat(LO.lan1?.[3]) || 0) +
                              (parseFloat(LO.lan2?.[3]) || 0)}
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "48.55pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {" "}
                        {/* note tổng phần trăm diểm 3 lần 1 và 2*/}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>
                            {(
                              (((parseFloat(LO.lan1?.[3]) || 0) +
                                (parseFloat(LO.lan2?.[3]) || 0)) /
                                (tongSoDiemLan1 + tongSoDiemLan2)) *
                              100
                            ).toFixed(2)}
                            %
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "47.45pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {/* note tổng số diểm 34 lần 1 và 2*/}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>
                            <span>
                              {(parseFloat(LO.lan1?.[4]) || 0) +
                                (parseFloat(LO.lan2?.[4]) || 0)}
                            </span>
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "48.55pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {/* note tổng phần trăm diểm 34 lần 1 và 2*/}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>
                            {(
                              (((parseFloat(LO.lan1?.[4]) || 0) +
                                (parseFloat(LO.lan2?.[4]) || 0)) /
                                (tongSoDiemLan1 + tongSoDiemLan2)) *
                              100
                            ).toFixed(2)}
                            %
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr style={{ height: "7.2pt", textAlign: "center" }}>
                      <td
                        style={{
                          width: "31.5pt",
                          borderWidth: "initial",
                          borderStyle: "none",
                          borderColor: "initial",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        ></p>
                      </td>
                    </tr>
                    <tr style={{ height: "14.4pt", textAlign: "center" }}>
                      <td
                        colspan="2"
                        style={{
                          width: "96.25pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid rgb(0, 0, 0)",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              fontWeight: "bold",
                              color: "rgb(0, 0, 0)",
                              minHeight: "12pt",
                              fontSize: "12pt",
                            }}
                          >
                            Tổng hợp
                          </span>
                        </p>
                      </td>
                      <td
                        colspan="2"
                        style={{
                          width: "96pt",
                          borderTop: "0.5pt solid black",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              fontWeight: "bold",
                              color: "rgb(0, 0, 0)",
                              minHeight: "12pt",
                              fontSize: "12pt",
                            }}
                          >
                            Đạt
                          </span>
                        </p>
                      </td>
                      <td
                        colspan="2"
                        style={{
                          width: "96pt",
                          borderTop: "0.5pt solid black",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              fontWeight: "bold",
                              color: "rgb(0, 0, 0)",
                              minHeight: "12pt",
                              fontSize: "12pt",
                            }}
                          >
                            Không đạt
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr style={{ height: "14.4pt", textAlign: "center" }}>
                      <td
                        style={{
                          width: "31.5pt",
                          borderTop: "none",
                          borderLeft: "0.5pt solid black",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              fontWeight: "bold",
                              color: "rgb(0, 0, 0)",
                              minHeight: "12pt",
                              fontSize: "12pt",
                            }}
                          >
                            LO
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "64.75pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              fontWeight: "bold",
                              fontStyle: "italic",
                              color: "rgb(0, 0, 0)",
                              minHeight: "12pt",
                              fontSize: "12pt",
                            }}
                          >
                            Số mẫu
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "47.45pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              fontStyle: "italic",
                              color: "rgb(0, 0, 0)",
                              minHeight: "10pt",
                              fontSize: "10pt",
                            }}
                          >
                            Số lượng
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "48.55pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              fontStyle: "italic",
                              color: "rgb(0, 0, 0)",
                              minHeight: "10pt",
                              fontSize: "10pt",
                            }}
                          >
                            Tỷ lệ
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "47.45pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              fontStyle: "italic",
                              color: "rgb(0, 0, 0)",
                              minHeight: "10pt",
                              fontSize: "10pt",
                            }}
                          >
                            Số lượng
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "48.55pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              fontStyle: "italic",
                              color: "rgb(0, 0, 0)",
                              minHeight: "10pt",
                              fontSize: "10pt",
                            }}
                          >
                            Tỷ lệ
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr style={{ height: "14.4pt", textAlign: "center" }}>
                      <td
                        style={{
                          width: "31.5pt",
                          borderTop: "none",
                          borderLeft: "0.5pt solid black",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        {/* note Tên LO*/}

                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              color: "rgb(0, 0, 0)",
                              minHeight: "12pt",
                              fontSize: "12pt",
                            }}
                          >
                            {i + 1}
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "64.75pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        {/* noteTổng số mâu*/}

                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              color: "rgb(0, 0, 0)",
                              minHeight: "12pt",
                              fontSize: "12pt",
                            }}
                          >
                            <span>{tongSoDiemLan1 + tongSoDiemLan2}</span>
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "47.45pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {/* noteTổng số điểm 3, 4*/}

                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>
                            {parseFloat(LO.lan1?.[3] || 0) +
                              parseFloat(LO.lan1?.[4] || 0) +
                              parseFloat(LO.lan2?.[3] || 0) +
                              parseFloat(LO.lan2?.[4] || 0)}
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "48.55pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {" "}
                        {/* note phần trăm số điểm 3, 4*/}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>
                            {(
                              ((parseFloat(LO.lan1?.[3] || 0) +
                                parseFloat(LO.lan1?.[4] || 0) +
                                parseFloat(LO.lan2?.[3] || 0) +
                                parseFloat(LO.lan2?.[4] || 0)) /
                                (tongSoDiemLan1 + tongSoDiemLan2)) *
                              100
                            ).toFixed(2)}
                            %
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "47.45pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {" "}
                        {/* noteTổng số điểm 1,2*/}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>
                            {parseFloat(LO.lan1?.[1] || 0) +
                              parseFloat(LO.lan1?.[2] || 0) +
                              parseFloat(LO.lan2?.[1] || 0) +
                              parseFloat(LO.lan2?.[2] || 0)}
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "48.55pt",
                          borderTop: "none",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "bottom",
                        }}
                      >
                        {" "}
                        {/* note Phần trăm số điểm 1,2*/}
                        <p
                          style={{
                            marginBottom: "0pt",
                            lineHeight: 1,
                            textAlign: "right",
                          }}
                        >
                          <span>
                            {(
                              ((parseFloat(LO.lan1?.[1] || 0) +
                                parseFloat(LO.lan1?.[2] || 0) +
                                parseFloat(LO.lan2?.[1] || 0) +
                                parseFloat(LO.lan2?.[2] || 0)) /
                                (tongSoDiemLan1 + tongSoDiemLan2)) *
                              100
                            ).toFixed(2)}
                            %
                          </span>
                        </p>
                      </td>
                    </tr>
                  </table>
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      marginLeft: "36pt",
                      textAlign: "justify",
                    }}
                  ></p>
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      marginLeft: "36pt",
                      textAlign: "justify",
                    }}
                  >
                    <span>Nhận xét về chuẩn đầu ra 3: </span>
                    <span
                      style={{
                        fontFamily: '"Times New Roman"',
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      Tỉ lệ đạt của LO này là 81.11%. Sinh viên yếu trong việc
                      vẽ các sơ đồ thiết kế hệ thống (sequence…) dẫn đến điểm
                      không cao mặc dù sv đưa ra giải pháp phù hợp -&gt; củng cố
                      kiến thức trong môn PTTKHT{" "}
                    </span>
                  </p>
                </>
              );
            })}
            <p
              style={{ marginBottom: "0pt", lineHeight: 1, marginLeft: "36pt" }}
            >
              <span
                style={{
                  fontFamily: '"Times New Roman"',
                  fontWeight: "bold",
                  minHeight: "13pt",
                  fontSize: "13pt",
                  textDecoration: "underline",
                }}
              >
                Nhận xét chung và đề nghị
              </span>
              <span
                style={{
                  fontFamily: '"Times New Roman"',
                  fontWeight: "bold",
                  minHeight: "13pt",
                  fontSize: "13pt",
                  textDecoration: "underline",
                }}
              >
                :
              </span>
            </p>
            <p
              class="docx-num-2-0"
              style={{
                marginTop: "0",
                marginBottom: "0pt",
                lineHeight: 1,
                marginLeft: "72pt",
                textAlign: "justify",
              }}
            >
              <span
                style={{
                  fontFamily: '"Times New Roman"',
                  minHeight: "13pt",
                  fontSize: "13pt",
                }}
              >
                Giảng viên hướng dẫn nên hướng dẫn kỹ cho sinh viên phần hiện
                thực hệ thống.
              </span>
            </p>
            <p
              class="docx-num-2-0"
              style={{
                marginTop: "0",

                marginBottom: "0pt",
                lineHeight: 1,
                marginLeft: "72pt",
                textAlign: "justify",
              }}
            >
              <span
                style={{
                  fontFamily: '"Times New Roman"',
                  minHeight: "13pt",
                  fontSize: "13pt",
                }}
              >
                Giảng viên nên bổ sung thểm cho sinh kiến thức phần kiểm thử
                phần mềm vì sinh viên nghành Hệ thống thông tin không được học
                kiến thức về môn này. Đặc biệt đưa cho sinh viên các mẫu tài
                liệu về kiểm thử chương trình.{" "}
              </span>
            </p>
            <p
              class="docx-num-2-0"
              style={{
                marginTop: "0",

                marginBottom: "0pt",
                lineHeight: 1,
                marginLeft: "72pt",
                textAlign: "justify",
              }}
            >
              <span
                style={{
                  fontFamily: '"Times New Roman"',
                  minHeight: "13pt",
                  fontSize: "13pt",
                }}
              >
                Giảng viên nên hướng cho sinh viên dành nhiều thời gian vào
                trong việc viết báo cáo khóa luận.
              </span>
            </p>
            <p style={{ marginBottom: "0pt", lineHeight: 1 }}>
              <span
                style={{
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                  minHeight: "13pt",
                  fontSize: "13pt",
                  textDecoration: "underline",
                }}
              >
                4. Kinh nghiệm và đề xuất:
              </span>
            </p>
            <p
              class="docx-num-2-0"
              style={{
                marginTop: "0",

                marginBottom: "0pt",
                lineHeight: 1,
                textAlign: "justify",
              }}
            >
              <span
                style={{
                  fontFamily: "Times New Roman",
                  minHeight: "13pt",
                  fontSize: "13pt",
                }}
              >
                Giảng viên hướng dẫn nên hướng dẫn kỹ cho sinh viên phần hiện
                thực hệ thống.
              </span>
            </p>
            <p
              class="docx-num-2-0"
              style={{
                marginTop: "0",

                marginBottom: "0pt",
                lineHeight: 1,
                textAlign: "justify",
              }}
            >
              <span
                style={{
                  fontFamily: "Times New Roman",
                  minHeight: "13pt",
                  fontSize: "13pt",
                }}
              >
                Giảng viên nên bổ sung thêm cho sinh kiến thức phần kiểm thử
                phần mềm vì sinh viên ngành Hệ thống Thông tin không được học
                kiến thức về môn này. Đặc biệt đưa cho sinh viên các mẫu tài
                liệu về kiểm thử chương trình.
              </span>
            </p>
            <p
              class="docx-num-2-0"
              style={{
                marginTop: "0",

                marginBottom: "0pt",
                lineHeight: 1,
                textAlign: "justify",
              }}
            >
              <span
                style={{
                  fontFamily: "Times New Roman",
                  minHeight: "13pt",
                  fontSize: "13pt",
                }}
              >
                Giảng viên nên hướng cho sinh viên dành nhiều thời gian vào
                trong việc viết báo cáo khóa luận.
              </span>
            </p>
            <p
              style={{ marginBottom: "0pt", lineHeight: 1, textAlign: "right" }}
            >
              <span
                style={{
                  fontFamily: "Times New Roman",
                  fontStyle: "italic",
                  minHeight: "12pt",
                  fontSize: "12pt",
                }}
              >
                Tp. Hồ Chí Minh, ngày 18 tháng 9 năm 2020
              </span>
            </p>
            <table
              class="first-row first-col no-vband docx_tablegrid"
              style={{ width: "100%", border: "none" }}
            >
              <tr>
                <td
                  style={{
                    width: "50%",
                  }}
                >
                  <p style={{ textAlign: "center" }}>
                    <span
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      Trưởng Bộ môn
                    </span>
                  </p>
                </td>

                <td
                  style={{
                    width: "50%",
                  }}
                >
                  <p style={{ textAlign: "center" }}>
                    <span
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      Người lập biểu
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "50.4pt" }}></tr>
              <tr>
                <td
                  style={{
                    width: "50%",
                  }}
                >
                  <p style={{ textAlign: "center" }}>
                    <span
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      TS. Ngô Hữu Dũng
                    </span>
                  </p>
                </td>

                <td
                  style={{
                    width: "50%",
                  }}
                >
                  <p style={{ textAlign: "center" }}>
                    <span
                      style={{
                        fontFamily: "Times New Roman",
                        fontWeight: "bold",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      ThS. Nguyễn Hữu Quang
                    </span>
                  </p>
                </td>
              </tr>
            </table>
            <p></p>
          </article>
        </section>
      </div>
    </div>
  );
}
