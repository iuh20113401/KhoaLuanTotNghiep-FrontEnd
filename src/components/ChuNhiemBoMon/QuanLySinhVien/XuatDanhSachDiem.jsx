/* eslint-disable array-callback-return */
import { useRef } from "react";

const getDanhSachSinhVien = (DanhSachDoAn) => {
  // Initialize an empty array to store all sinhVien
  let danhSachSinhVien = [];
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
  });

  return danhSachSinhVien;
};
export default function XuatDanhSachDiemWord({ DanhSachDoAn }) {
  const contentRef = useRef();
  const DanhSachSinhVien = getDanhSachSinhVien(DanhSachDoAn);
  function Export2Doc(filename = "") {
    var preHtml = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'>
        <title>Export HTML To Doc</title>
        <style>
          @page WordSection1 {
            size: 841.95pt 595.35pt; /* Landscape A4 */
            mso-page-orientation: landscape;
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
    <div>
      <button onClick={() => Export2Doc("document")}>Print</button>
      <div class="docx-wrapper" ref={contentRef}>
        <div
          style={{
            padding: "50.4pt 72pt",
            width: "841.7pt",
            minHeight: "595.45pt",
            fontFamily: "Times New Roman",
            color: " rgb(0, 0, 0)",
          }}
          class="docx"
        >
          <article>
            <p style={{ lineHeight: "1.5", textAlign: "center" }}>
              <span
                style={{
                  fontWeight: "bold",
                  minHeight: "16pt",
                  fontSize: "16pt",
                }}
              >
                FINAL RESULT
              </span>
            </p>
            <p
              class="docx-num-6-0"
              style={{ lineHeight: "1.5", textAlign: "justify" }}
            >
              <span
                style={{
                  fontFamily: '"Times New Roman"',
                  fontWeight: "bold",
                  minHeight: "12pt",
                  fontSize: "12pt",
                }}
              >
                Course:{" "}
              </span>

              <span
                style={{
                  fontFamily: '"Times New Roman"',
                  fontWeight: "bold",
                  minHeight: "12pt",
                  fontSize: "12pt",
                }}
              >
                <span class="docx-tab-stop"> </span>Graduation Thesis{" "}
              </span>

              <span
                style={{
                  fontFamily: '"Times New Roman"',
                  fontWeight: "bold",
                  minHeight: "12pt",
                  fontSize: "12pt",
                }}
              >
                <span class="docx-tab-stop"> </span>- Semester:
              </span>

              <span
                style={{
                  fontFamily: '"Times New Roman"',
                  fontWeight: "bold",
                  minHeight: "12pt",
                  fontSize: "12pt",
                }}
              >
                <span class="docx-tab-stop"> </span>II / 2020 - 2021
              </span>
            </p>
            <table
              class="first-row first-col no-vband"
              style={{ width: " 100%", borderCollapse: "collapse" }}
            >
              <tr style={{ height: "15.75pt" }}>
                <th
                  style={{
                    borderLeft: "0.5pt solid black",
                    borderTop: "0.5pt solid black",
                    borderBottom: "0.5pt solid black",
                    borderRight: "0.5pt solid black",
                    backgroundColor: "rgb(255, 229, 153)",
                    verticalAlign: "middle",
                    borderCollapse: "collapse",
                  }}
                >
                  <p
                    style={{
                      marginTop: "1pt",
                      marginBottom: "1pt",
                      lineHeight: "1",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "rgb(0, 0, 0)",
                        minHeight: "10pt",
                        fontSize: "10pt",
                      }}
                    >
                      No
                    </span>
                  </p>
                </th>
                <th
                  style={{
                    width: "10.42%",
                    borderTop: "0.5pt solid black",
                    borderLeft: "none",
                    borderBottom: "0.5pt solid black",
                    borderRight: "0.5pt solid black",
                    backgroundColor: "rgb(255, 229, 153)",
                    verticalAlign: "middle",
                    borderCollapse: "collapse",
                  }}
                >
                  <p
                    style={{
                      marginTop: "1pt",
                      marginBottom: "1pt",
                      lineHeight: "1",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "rgb(0, 0, 0)",
                        minHeight: "10pt",
                        fontSize: "10pt",
                      }}
                    >
                      Student's ID
                    </span>
                  </p>
                </th>
                <th
                  style={{
                    width: "20.88%",
                    borderTop: "0.5pt solid black",
                    borderLeft: "none",
                    borderBottom: "0.5pt solid black",
                    borderRight: "0.5pt solid black",
                    backgroundColor: "rgb(255, 229, 153)",
                    verticalAlign: "middle",
                    borderCollapse: "collapse",
                  }}
                  colspan="2"
                >
                  <p
                    style={{
                      marginTop: "1pt",
                      marginBottom: "1pt",
                      lineHeight: "1",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "rgb(0, 0, 0)",
                        minHeight: "10pt",
                        fontSize: "10pt",
                      }}
                    >
                      Student's name
                    </span>
                  </p>
                </th>
                <th
                  style={{
                    width: "7.26%",
                    borderTop: "0.5pt solid black",
                    borderLeft: "none",
                    borderBottom: "0.5pt solid black",
                    borderRight: "0.5pt solid black",
                    backgroundColor: "rgb(255, 229, 153)",
                    verticalAlign: "middle",
                    borderCollapse: "collapse",
                  }}
                >
                  <p
                    style={{
                      marginTop: "1pt",
                      marginBottom: "1pt",
                      lineHeight: "1",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "rgb(0, 0, 0)",
                        minHeight: "10pt",
                        fontSize: "10pt",
                      }}
                    >
                      Round
                    </span>
                  </p>
                </th>
                <th
                  style={{
                    width: "8.02%",
                    borderTop: "1pt solid black",
                    borderLeft: "none",
                    borderBottom: "1pt solid black",
                    borderRight: "1pt solid black",
                    backgroundColor: "rgb(255, 229, 153)",
                    verticalAlign: "middle",
                    borderCollapse: "collapse",
                  }}
                >
                  <p
                    style={{
                      marginTop: "1pt",
                      marginBottom: "1pt",
                      lineHeight: "1",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "rgb(0, 0, 0)",
                        minHeight: "10pt",
                        fontSize: "10pt",
                      }}
                    >
                      Type
                    </span>
                  </p>
                </th>
                <th
                  style={{
                    width: "4.88%",
                    borderTop: "1pt solid black",
                    borderLeft: "none",
                    borderBottom: "1pt solid black",
                    borderRight: "1pt solid black",
                    backgroundColor: "rgb(255, 229, 153)",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "1pt",
                      marginBottom: "1pt",
                      lineHeight: "1",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Times New Roman"',
                        fontWeight: "bold",
                        color: "rgb(0, 0, 0)",
                        minHeight: "10pt",
                        fontSize: "10pt",
                      }}
                    >
                      LO1
                    </span>
                  </p>
                </th>
                <th
                  style={{
                    width: "4.88%",
                    borderTop: "1pt solid black",
                    borderLeft: "none",
                    borderBottom: "1pt solid black",
                    borderRight: "1pt solid black",
                    backgroundColor: "rgb(255, 229, 153)",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "1pt",
                      marginBottom: "1pt",
                      lineHeight: "1",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Times New Roman"',
                        fontWeight: "bold",
                        color: "rgb(0, 0, 0)",
                        minHeight: "10pt",
                        fontSize: "10pt",
                      }}
                    >
                      LO2
                    </span>
                  </p>
                </th>
                <th
                  style={{
                    width: "4.88%",
                    borderTop: "1pt solid black",
                    borderLeft: "none",
                    borderBottom: "1pt solid black",
                    borderRight: "1pt solid black",
                    backgroundColor: "rgb(255, 229, 153)",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "1pt",
                      marginBottom: "1pt",
                      lineHeight: "1",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Times New Roman"',
                        fontWeight: "bold",
                        color: "rgb(0, 0, 0)",
                        minHeight: "10pt",
                        fontSize: "10pt",
                      }}
                    >
                      LO3
                    </span>
                  </p>
                </th>
                <th
                  style={{
                    width: "4.88%",
                    borderTop: "1pt solid black",
                    borderLeft: "none",
                    borderBottom: "1pt solid black",
                    borderRight: "1pt solid black",
                    backgroundColor: "rgb(255, 229, 153)",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "1pt",
                      marginBottom: "1pt",
                      lineHeight: "1",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Times New Roman"',
                        fontWeight: "bold",
                        color: "rgb(0, 0, 0)",
                        minHeight: "10pt",
                        fontSize: "10pt",
                      }}
                    >
                      LO4
                    </span>
                  </p>
                </th>
                <th
                  style={{
                    width: "4.88%",
                    borderTop: "1pt solid black",
                    borderLeft: "none",
                    borderBottom: "1pt solid black",
                    borderRight: "1pt solid black",
                    backgroundColor: "rgb(255, 229, 153)",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "1pt",
                      marginBottom: "1pt",
                      lineHeight: "1",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Times New Roman"',
                        fontWeight: "bold",
                        color: "rgb(0, 0, 0)",
                        minHeight: "10pt",
                        fontSize: "10pt",
                      }}
                    >
                      LO5
                    </span>
                  </p>
                </th>
                <th
                  style={{
                    width: "4.88%",
                    borderTop: "1pt solid black",
                    borderLeft: "none",
                    borderBottom: "1pt solid black",
                    borderRight: "1pt solid black",
                    backgroundColor: "rgb(255, 229, 153)",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "1pt",
                      marginBottom: "1pt",
                      lineHeight: "1",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Times New Roman"',
                        fontWeight: "bold",
                        color: "rgb(0, 0, 0)",
                        minHeight: "10pt",
                        fontSize: "10pt",
                      }}
                    >
                      LO6
                    </span>
                  </p>
                </th>
                <th
                  style={{
                    width: "4.88%",
                    borderTop: "1pt solid black",
                    borderLeft: "none",
                    borderBottom: "1pt solid black",
                    borderRight: "1pt solid black",
                    backgroundColor: "rgb(255, 229, 153)",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "1pt",
                      marginBottom: "1pt",
                      lineHeight: "1",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Times New Roman"',
                        fontWeight: "bold",
                        color: "rgb(0, 0, 0)",
                        minHeight: "10pt",
                        fontSize: "10pt",
                      }}
                    >
                      LO7
                    </span>
                  </p>
                </th>
                <th
                  style={{
                    width: "4.88%",
                    borderTop: "1pt solid black",
                    borderLeft: "none",
                    borderBottom: "1pt solid black",
                    borderRight: "1pt solid black",
                    backgroundColor: "rgb(255, 229, 153)",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "1pt",
                      marginBottom: "1pt",
                      lineHeight: "1",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Times New Roman"',
                        fontWeight: "bold",
                        color: "rgb(0, 0, 0)",
                        minHeight: "10pt",
                        fontSize: "10pt",
                      }}
                    >
                      LO8
                    </span>
                  </p>
                </th>
                <th
                  style={{
                    width: "4.88%",
                    borderTop: "1pt solid black",
                    borderLeft: "none",
                    borderBottom: "1pt solid black",
                    borderRight: "1pt solid black",
                    backgroundColor: "rgb(255, 229, 153)",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "1pt",
                      marginBottom: "1pt",
                      lineHeight: "1",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Times New Roman"',
                        fontWeight: "bold",
                        color: "rgb(0, 0, 0)",
                        minHeight: "10pt",
                        fontSize: "10pt",
                      }}
                    >
                      LO9
                    </span>
                  </p>
                </th>
              </tr>
              {DanhSachSinhVien.map((sv, index) => {
                const i = ["a", "b", "c", "d", "e", "f"];
                let dem = 0;
                return (
                  <>
                    <tr style={{ height: "15pt" }}>
                      <td
                        style={{
                          width: "4.88%",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          borderLeft: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginTop: "1pt",
                            marginBottom: "1pt",
                            lineHeight: "1",
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              color: "rgb(0, 0, 0)",
                              minHeight: "10pt",
                              fontSize: "10pt",
                            }}
                          >
                            {`${index + 1}${i[dem]}`}
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "10.42%",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginTop: "1pt",
                            marginBottom: "1pt",
                            lineHeight: "1",
                            textAlign: "right",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              color: "rgb(0, 0, 0)",
                              minHeight: "10pt",
                              fontSize: "10pt",
                            }}
                          >
                            {sv.maSo}
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "10.42%",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginTop: "1pt",
                            marginBottom: "1pt",
                            lineHeight: "1",
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              color: "rgb(0, 0, 0)",
                              minHeight: "10pt",
                              fontSize: "10pt",
                            }}
                          >
                            {sv.hoTen.split(" ").slice(0, -1).join(" ")}
                          </span>
                        </p>
                      </td>

                      <td
                        style={{
                          width: "10.42%",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginTop: "1pt",
                            marginBottom: "1pt",
                            lineHeight: "1",
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              color: "rgb(0, 0, 0)",
                              minHeight: "10pt",
                              fontSize: "10pt",
                            }}
                          >
                            {sv.hoTen.split(" ").pop()}
                          </span>
                        </p>
                      </td>

                      <td
                        style={{
                          width: "10.42%",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginTop: "1pt",
                            marginBottom: "1pt",
                            lineHeight: "1",
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              color: "rgb(0, 0, 0)",
                              minHeight: "10pt",
                              fontSize: "10pt",
                            }}
                          >
                            Round 1
                          </span>
                        </p>
                      </td>

                      <td
                        style={{
                          width: "10.42%",
                          borderLeft: "none",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginTop: "1pt",
                            marginBottom: "1pt",
                            lineHeight: "1",
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: '"Times New Roman"',
                              color: "rgb(0, 0, 0)",
                              minHeight: "10pt",
                              fontSize: "10pt",
                            }}
                          >
                            Instructor
                          </span>
                        </p>
                      </td>

                      {Array.from({ length: 9 }).map((_, stt) => {
                        return (
                          <td
                            style={{
                              width: "4.88%",
                              borderLeft: "none",
                              borderBottom: "0.5pt solid black",
                              borderRight: "0.5pt solid black",
                              backgroundColor: "inherit",
                              verticalAlign: "middle",
                            }}
                          >
                            <p
                              style={{
                                marginTop: "1pt",
                                marginBottom: "1pt",
                                lineHeight: "1",
                                textAlign: "center",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: '"Times New Roman"',
                                  color: "rgb(0, 0, 0)",
                                  minHeight: "10pt",
                                  fontSize: "10pt",
                                }}
                              >
                                {+sv.diem?.diemHuongDan?.diemAbet?.[stt]
                                  ?.stt ===
                                stt + 1
                                  ? sv.diem?.diemHuongDan?.diemAbet[stt].diem
                                  : ""}
                              </span>
                            </p>
                          </td>
                        );
                      })}
                    </tr>
                    {sv.diem?.diemPhanBien &&
                      Object.keys(sv.diem?.diemPhanBien)?.map((pb, sttPb) => {
                        const diemPB = sv.diem?.diemPhanBien[pb];
                        if (!Object.keys(diemPB).length) return;
                        if (!Object.keys(diemPB.diemAbet).length) return;
                        return (
                          <tr style={{ height: "15pt" }}>
                            <td
                              style={{
                                width: "4.88%",
                                borderBottom: "0.5pt solid black",
                                borderRight: "0.5pt solid black",
                                borderLeft: "0.5pt solid black",
                                backgroundColor: "inherit",
                                verticalAlign: "middle",
                              }}
                            >
                              <p
                                style={{
                                  marginTop: "1pt",
                                  marginBottom: "1pt",
                                  lineHeight: "1",
                                  textAlign: "center",
                                }}
                              >
                                <span
                                  style={{
                                    fontFamily: '"Times New Roman"',
                                    color: "rgb(0, 0, 0)",
                                    minHeight: "10pt",
                                    fontSize: "10pt",
                                  }}
                                >
                                  {`${index + 1}${i[++dem]}`}
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                width: "10.42%",
                                borderLeft: "none",
                                borderBottom: "0.5pt solid black",
                                borderRight: "0.5pt solid black",
                                backgroundColor: "inherit",
                                verticalAlign: "middle",
                              }}
                            >
                              <p
                                style={{
                                  marginTop: "1pt",
                                  marginBottom: "1pt",
                                  lineHeight: "1",
                                  textAlign: "right",
                                }}
                              >
                                <span
                                  style={{
                                    fontFamily: '"Times New Roman"',
                                    color: "rgb(0, 0, 0)",
                                    minHeight: "10pt",
                                    fontSize: "10pt",
                                  }}
                                >
                                  {sv.maSo}
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                width: "10.42%",
                                borderLeft: "none",
                                borderBottom: "0.5pt solid black",
                                borderRight: "0.5pt solid black",
                                backgroundColor: "inherit",
                                verticalAlign: "middle",
                              }}
                            >
                              <p
                                style={{
                                  marginTop: "1pt",
                                  marginBottom: "1pt",
                                  lineHeight: "1",
                                  textAlign: "center",
                                }}
                              >
                                <span
                                  style={{
                                    fontFamily: '"Times New Roman"',
                                    color: "rgb(0, 0, 0)",
                                    minHeight: "10pt",
                                    fontSize: "10pt",
                                  }}
                                >
                                  {sv.hoTen.split(" ").slice(0, -1).join(" ")}
                                </span>
                              </p>
                            </td>

                            <td
                              style={{
                                width: "10.42%",
                                borderLeft: "none",
                                borderBottom: "0.5pt solid black",
                                borderRight: "0.5pt solid black",
                                backgroundColor: "inherit",
                                verticalAlign: "middle",
                              }}
                            >
                              <p
                                style={{
                                  marginTop: "1pt",
                                  marginBottom: "1pt",
                                  lineHeight: "1",
                                  textAlign: "center",
                                }}
                              >
                                <span
                                  style={{
                                    fontFamily: '"Times New Roman"',
                                    color: "rgb(0, 0, 0)",
                                    minHeight: "10pt",
                                    fontSize: "10pt",
                                  }}
                                >
                                  {sv.hoTen.split(" ").pop()}
                                </span>
                              </p>
                            </td>

                            <td
                              style={{
                                width: "10.42%",
                                borderLeft: "none",
                                borderBottom: "0.5pt solid black",
                                borderRight: "0.5pt solid black",
                                backgroundColor: "inherit",
                                verticalAlign: "middle",
                              }}
                            >
                              <p
                                style={{
                                  marginTop: "1pt",
                                  marginBottom: "1pt",
                                  lineHeight: "1",
                                  textAlign: "center",
                                }}
                              >
                                <span
                                  style={{
                                    fontFamily: '"Times New Roman"',
                                    color: "rgb(0, 0, 0)",
                                    minHeight: "10pt",
                                    fontSize: "10pt",
                                  }}
                                >
                                  Round 2
                                </span>
                              </p>
                            </td>

                            <td
                              style={{
                                width: "10.42%",
                                borderLeft: "none",
                                borderBottom: "0.5pt solid black",
                                borderRight: "0.5pt solid black",
                                backgroundColor: "inherit",
                                verticalAlign: "middle",
                              }}
                            >
                              <p
                                style={{
                                  marginTop: "1pt",
                                  marginBottom: "1pt",
                                  lineHeight: "1",
                                  textAlign: "center",
                                }}
                              >
                                <span
                                  style={{
                                    fontFamily: '"Times New Roman"',
                                    color: "rgb(0, 0, 0)",
                                    minHeight: "10pt",
                                    fontSize: "10pt",
                                  }}
                                >
                                  Critic 0{sttPb + 1}
                                </span>
                              </p>
                            </td>

                            {Array.from({ length: 9 }).map((_, stt) => {
                              return (
                                <td
                                  style={{
                                    width: "4.88%",
                                    borderLeft: "none",
                                    borderBottom: "0.5pt solid black",
                                    borderRight: "0.5pt solid black",
                                    backgroundColor: "inherit",
                                    verticalAlign: "middle",
                                  }}
                                >
                                  <p
                                    style={{
                                      marginTop: "1pt",
                                      marginBottom: "1pt",
                                      lineHeight: "1",
                                      textAlign: "center",
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontFamily: '"Times New Roman"',
                                        color: "rgb(0, 0, 0)",
                                        minHeight: "10pt",
                                        fontSize: "10pt",
                                      }}
                                    >
                                      {+diemPB?.diemAbet?.[stt]?.stt === stt + 1
                                        ? diemPB?.diemAbet[stt].diem
                                        : ""}
                                    </span>
                                  </p>
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    {sv.diem?.diemHoiDong &&
                      Object.keys(sv.diem?.diemHoiDong)?.map((pb, sttHD) => {
                        const diemHD = sv.diem?.diemHoiDong[pb];

                        if (!diemHD || !Object.keys(diemHD).length) return;
                        if (!Object.keys(diemHD.diemAbet).length) return;
                        return (
                          <tr style={{ height: "15pt" }}>
                            <td
                              style={{
                                width: "4.88%",
                                borderBottom: "0.5pt solid black",
                                borderRight: "0.5pt solid black",
                                borderLeft: "0.5pt solid black",
                                backgroundColor: "inherit",
                                verticalAlign: "middle",
                              }}
                            >
                              <p
                                style={{
                                  marginTop: "1pt",
                                  marginBottom: "1pt",
                                  lineHeight: "1",
                                  textAlign: "center",
                                }}
                              >
                                <span
                                  style={{
                                    fontFamily: '"Times New Roman"',
                                    color: "rgb(0, 0, 0)",
                                    minHeight: "10pt",
                                    fontSize: "10pt",
                                  }}
                                >
                                  {`${index + 1}${i[++dem]}`}
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                width: "10.42%",
                                borderLeft: "none",
                                borderBottom: "0.5pt solid black",
                                borderRight: "0.5pt solid black",
                                backgroundColor: "inherit",
                                verticalAlign: "middle",
                              }}
                            >
                              <p
                                style={{
                                  marginTop: "1pt",
                                  marginBottom: "1pt",
                                  lineHeight: "1",
                                  textAlign: "right",
                                }}
                              >
                                <span
                                  style={{
                                    fontFamily: '"Times New Roman"',
                                    color: "rgb(0, 0, 0)",
                                    minHeight: "10pt",
                                    fontSize: "10pt",
                                  }}
                                >
                                  {sv.maSo}
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                width: "10.42%",
                                borderLeft: "none",
                                borderBottom: "0.5pt solid black",
                                borderRight: "0.5pt solid black",
                                backgroundColor: "inherit",
                                verticalAlign: "middle",
                              }}
                            >
                              <p
                                style={{
                                  marginTop: "1pt",
                                  marginBottom: "1pt",
                                  lineHeight: "1",
                                  textAlign: "center",
                                }}
                              >
                                <span
                                  style={{
                                    fontFamily: '"Times New Roman"',
                                    color: "rgb(0, 0, 0)",
                                    minHeight: "10pt",
                                    fontSize: "10pt",
                                  }}
                                >
                                  {sv.hoTen.split(" ").slice(0, -1).join(" ")}
                                </span>
                              </p>
                            </td>

                            <td
                              style={{
                                width: "10.42%",
                                borderLeft: "none",
                                borderBottom: "0.5pt solid black",
                                borderRight: "0.5pt solid black",
                                backgroundColor: "inherit",
                                verticalAlign: "middle",
                              }}
                            >
                              <p
                                style={{
                                  marginTop: "1pt",
                                  marginBottom: "1pt",
                                  lineHeight: "1",
                                  textAlign: "center",
                                }}
                              >
                                <span
                                  style={{
                                    fontFamily: '"Times New Roman"',
                                    color: "rgb(0, 0, 0)",
                                    minHeight: "10pt",
                                    fontSize: "10pt",
                                  }}
                                >
                                  {sv.hoTen.split(" ").pop()}
                                </span>
                              </p>
                            </td>

                            <td
                              style={{
                                width: "10.42%",
                                borderLeft: "none",
                                borderBottom: "0.5pt solid black",
                                borderRight: "0.5pt solid black",
                                backgroundColor: "inherit",
                                verticalAlign: "middle",
                              }}
                            >
                              <p
                                style={{
                                  marginTop: "1pt",
                                  marginBottom: "1pt",
                                  lineHeight: "1",
                                  textAlign: "center",
                                }}
                              >
                                <span
                                  style={{
                                    fontFamily: '"Times New Roman"',
                                    color: "rgb(0, 0, 0)",
                                    minHeight: "10pt",
                                    fontSize: "10pt",
                                  }}
                                >
                                  Round 3
                                </span>
                              </p>
                            </td>

                            <td
                              style={{
                                width: "10.42%",
                                borderLeft: "none",
                                borderBottom: "0.5pt solid black",
                                borderRight: "0.5pt solid black",
                                backgroundColor: "inherit",
                                verticalAlign: "middle",
                              }}
                            >
                              <p
                                style={{
                                  marginTop: "1pt",
                                  marginBottom: "1pt",
                                  lineHeight: "1",
                                  textAlign: "center",
                                }}
                              >
                                <span
                                  style={{
                                    fontFamily: '"Times New Roman"',
                                    color: "rgb(0, 0, 0)",
                                    minHeight: "10pt",
                                    fontSize: "10pt",
                                  }}
                                >
                                  Critic 0{sttHD + 1}
                                </span>
                              </p>
                            </td>

                            {Array.from({ length: 9 }).map((_, stt) => {
                              return (
                                <td
                                  style={{
                                    width: "4.88%",
                                    borderLeft: "none",
                                    borderBottom: "0.5pt solid black",
                                    borderRight: "0.5pt solid black",
                                    backgroundColor: "inherit",
                                    verticalAlign: "middle",
                                  }}
                                >
                                  <p
                                    style={{
                                      marginTop: "1pt",
                                      marginBottom: "1pt",
                                      lineHeight: "1",
                                      textAlign: "center",
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontFamily: '"Times New Roman"',
                                        color: "rgb(0, 0, 0)",
                                        minHeight: "10pt",
                                        fontSize: "10pt",
                                      }}
                                    >
                                      {+diemHD?.diemAbet?.[stt]?.stt === stt + 1
                                        ? diemHD?.diemAbet[stt].diem
                                        : ""}
                                    </span>
                                  </p>
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                  </>
                );
              })}
            </table>
            <p style={{ lineHeight: "1.5", textAlign: "justify" }}></p>
            <p
              class="docx-num-6-0"
              style={{ lineHeight: "1.5", textAlign: "justify" }}
            >
              <span
                style={{
                  fontFamily: '"Times New Roman"',
                  fontWeight: "bold",
                  minHeight: "12pt",
                  fontSize: "12pt",
                  fontStyle: "italic",
                }}
              >
                Reported by
              </span>
              <span>: </span>
              <span>
                <span> </span>
              </span>
              <span
                style={{
                  fontFamily: '"Times New Roman"',
                  fontWeight: "bold",
                  minHeight: "12pt",
                  fontSize: "12pt",
                }}
              >
                Nguyen Huu Quang,
              </span>

              <span
                style={{
                  fontFamily: '"Times New Roman"',
                  fontWeight: "bold",
                  minHeight: "12pt",
                  fontSize: "12pt",
                }}
              >
                <span> </span>
              </span>
            </p>
            <p
              class="docx-num-6-0"
              style={{ lineHeight: "1.5", textAlign: "justify" }}
            >
              <span
                style={{
                  fontFamily: '"Times New Roman"',
                  fontWeight: "bold",
                  minHeight: "12pt",
                  fontSize: "12pt",
                  fontStyle: "italic",
                }}
              >
                Approved by
              </span>
              <span>:</span>
              <span
                style={{
                  fontFamily: '"Times New Roman"',
                  fontWeight: "bold",
                  minHeight: "12pt",
                  fontSize: "12pt",
                }}
              >
                <span class="docx-tab-stop"> </span>Ngo Huu Dung,{" "}
              </span>

              <span
                style={{
                  fontFamily: '"Times New Roman"',
                  fontWeight: "bold",
                  minHeight: "12pt",
                  fontSize: "12pt",
                  fontStyle: "italic",
                }}
              >
                Head of Information Systems Department
              </span>
            </p>
            <p></p>
          </article>
        </div>
      </div>
    </div>
  );
}
