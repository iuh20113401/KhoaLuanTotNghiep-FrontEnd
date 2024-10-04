import { useEffect, useRef } from "react";

function XuatDanhSachDoAnWord({ DanhSachDoAn, setShowModal }) {
  const contentRef = useRef();

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
  useEffect(() => {
    Export2Doc("document");
  }, []);
  let index = 0;

  return (
    <div>
      <button onClick={() => Export2Doc("document")}>Print</button>
      <div class="docx-wrapper" ref={contentRef}>
        <section
          class="docx"
          style={{ padding: " 36pt", width: "841.9pt", minHeight: "595.3pt" }}
        >
          <article>
            <table
              style={{ width: "auto", marginLeft: "auto", marginRight: "auto" }}
            >
              <tr style={{ textAlign: "center" }}>
                <td style={{ width: "364pt", verticalAlign: "top" }}>
                  <p
                    style={{
                      lineHeight: "1.15",
                      textAlign: "center",
                      margin: "0",
                    }}
                  >
                    <span style={{ width: "364pt" }}>
                      TRƯỜNG ĐẠI HỌC CÔNG NGHIỆP TP.HCM
                    </span>
                  </p>
                  <p
                    style={{
                      lineHeight: "1.15",
                      textAlign: "center",
                      margin: "0",
                    }}
                  >
                    <span style={{ width: "364pt" }}>
                      KHOA CÔNG NGHỆ THÔNG TIN
                    </span>
                  </p>
                  <p
                    style={{
                      lineHeight: "1.15",
                      textAlign: "center",
                      margin: "0",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "14pt",
                        fontWeight: "bold",
                        width: "364pt",
                      }}
                    >
                      BỘ MÔN HỆ THỐNG THÔNG TIN
                    </span>
                  </p>
                  <hr
                    style={{
                      width: "200pt",
                      height: "1pt",
                      border: "0",
                      borderTop: "0.1pt solid black",
                      margin: "0pt auto",
                      color: "black",
                    }}
                  />
                </td>
                <td style={{ width: "364pt", verticalAlign: "top" }}>
                  <p
                    style={{
                      lineHeight: "1.15",
                      textAlign: "center",
                      margin: "0",
                      fontWeight: "bold",
                    }}
                  >
                    <span style={{ width: "364pt" }}>
                      CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM
                    </span>
                  </p>
                  <p
                    style={{
                      lineHeight: "1.15",
                      textAlign: "center",
                      margin: "0",
                      fontWeight: "bold",
                    }}
                  >
                    <span style={{ width: "364pt" }}>
                      Độc lập – Tự do – Hạnh phúc
                    </span>
                  </p>
                  <hr
                    style={{
                      width: "200pt",
                      height: "1pt",
                      border: "0",
                      borderTop: "0.1pt solid black",
                      margin: "5px auto",
                      color: "black",
                    }}
                  />
                </td>
              </tr>
            </table>

            <p
              style={{
                marginBottom: "0pt",
                lineHeight: 1.15,
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontFamily: '"Times New Roman"',
                  fontWeight: "bold",
                  minHeight: "14pt",
                  fontSize: "14pt",
                }}
              >
                DANH SÁCH PHÂN CÔNG GIẢNG VIÊN HƯỚNG DẪN THỰC HIỆN KHOÁ LUẬN TỐT
                NGHIỆP
              </span>
            </p>
            <p
              style={{
                marginBottom: "0pt",
                lineHeight: 1.15,
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontFamily: '"Times New Roman"',
                  fontWeight: "bold",
                  minHeight: "14pt",
                  fontSize: "14pt",
                }}
              >
                NGÀNH HỆ THỐNG THÔNG TIN
              </span>
            </p>
            <p
              style={{
                marginBottom: "0pt",
                lineHeight: 1.15,
                textAlign: "center",
              }}
            ></p>
            <p
              style={{
                marginBottom: "0pt",
                lineHeight: 1.15,
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontFamily: '"Times New Roman"',
                  fontWeight: "bold",
                  minHeight: "14pt",
                  fontSize: "14pt",
                }}
              >
                HỌC KỲ: II{" "}
              </span>
              <span
                style={{
                  fontFamily: '"Times New Roman"',
                  fontWeight: "bold",
                  minHeight: "14pt",
                  fontSize: "14pt",
                }}
              >
                <span class="docx-tab-stop"> </span>
              </span>
              <span
                style={{
                  fontFamily: '"Times New Roman"',
                  fontWeight: "bold",
                  minHeight: "14pt",
                  fontSize: "14pt",
                }}
              >
                <span class="docx-tab-stop"> </span>NĂM HỌC: 2020-2021
              </span>
            </p>
            <p style={{ marginBottom: "0pt", lineHeight: "1" }}></p>
            <table
              class="first-row first-col no-vband"
              style={{ width: "100%", borderCollapse: "collapse" }}
            >
              <tr style={{ height: "1pt" }}>
                <td
                  style={{
                    width: "4.88%",
                    borderWidth: "0.5pt",
                    borderStyle: "solid",
                    borderColor: "black black rgb(0, 0, 0)",
                    backgroundColor: "inherit",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      lineHeight: 1,
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Times New Roman"',
                        fontWeight: "bold",
                        color: "rgb(0, 0, 0)",
                      }}
                    >
                      Nhóm
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "3.9%",
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
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      lineHeight: 1,
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Times New Roman"',
                        fontWeight: "bold",
                        color: "rgb(0, 0, 0)",
                      }}
                    >
                      STT
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "7.86%",
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
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      lineHeight: 1,
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Times New Roman"',
                        fontWeight: "bold",
                        color: "rgb(0, 0, 0)",
                      }}
                    >
                      MSSV
                    </span>
                  </p>
                </td>
                <td
                  colspan="2"
                  style={{
                    width: "24.5%",
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
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      lineHeight: 1,
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Times New Roman"',
                        fontWeight: "bold",
                        color: "rgb(0, 0, 0)",
                      }}
                    >
                      Họ tên Sinh viên
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "42.12%",
                    borderWidth: "0.5pt",
                    borderStyle: "solid",
                    borderColor: "black black rgb(0, 0, 0)",
                    backgroundColor: "inherit",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      lineHeight: 1,
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Times New Roman"',
                        fontWeight: "bold",
                        color: "rgb(0, 0, 0)",
                      }}
                    >
                      Tên đề tài
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "16.74%",
                    borderWidth: "0.5pt",
                    borderStyle: "solid",
                    borderColor: "black black rgb(0, 0, 0)",
                    backgroundColor: "inherit",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      lineHeight: 1,
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Times New Roman"',
                        fontWeight: "bold",
                        color: "rgb(0, 0, 0)",
                      }}
                    >
                      Giảng viên hướng dẫn
                    </span>
                  </p>
                </td>
              </tr>
              {DanhSachDoAn.map((da, i) => {
                return (
                  <>
                    <tr style={{ height: "1pt" }}>
                      <td
                        rowspan="2"
                        style={{
                          width: "4.88%",
                          borderWidth: "0.5pt",
                          borderStyle: "solid",
                          borderColor: "black black rgb(0, 0, 0)",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginTop: "3pt",
                            marginBottom: "3pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "Times New Roman",
                              color: "rgb(0, 0, 0)",
                            }}
                          >
                            {i + 1}
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "3.9%",
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
                            marginTop: "3pt",
                            marginBottom: "3pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "Times New Roman",
                              color: "rgb(0, 0, 0)",
                            }}
                          >
                            {++index}
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "7.86%",
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
                            marginTop: "3pt",
                            marginBottom: "3pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "Times New Roman",
                              color: "rgb(0, 0, 0)",
                            }}
                          >
                            {da.sinhVien1.maSo}
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "17.94%",
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
                            marginTop: "3pt",
                            marginBottom: "3pt",
                            lineHeight: 1,
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "Times New Roman",
                              color: "rgb(0, 0, 0)",
                            }}
                          >
                            {da.sinhVien1.hoTen
                              .split(" ")
                              .slice(0, -1)
                              .join(" ")}
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "6.56%",
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
                            marginTop: "3pt",
                            marginBottom: "3pt",
                            lineHeight: 1,
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "Times New Roman",
                              color: "rgb(0, 0, 0)",
                            }}
                          >
                            {da.sinhVien1.hoTen.split(" ").pop()}
                          </span>
                        </p>
                      </td>
                      <td
                        rowspan="2"
                        style={{
                          width: "42.12%",
                          borderWidth: "0.5pt",
                          borderStyle: "solid",
                          borderColor: "black black rgb(0, 0, 0)",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginTop: "3pt",
                            marginBottom: "3pt",
                            lineHeight: 1,
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "Times New Roman",
                              color: "rgb(0, 0, 0)",
                            }}
                          >
                            {da.tenDoAn}
                          </span>
                        </p>
                      </td>
                      <td
                        rowspan="2"
                        style={{
                          width: "16.74%",
                          borderWidth: "0.5pt",
                          borderStyle: "solid",
                          borderColor: "black black rgb(0, 0, 0)",
                          backgroundColor: "inherit",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            marginTop: "3pt",
                            marginBottom: "3pt",
                            lineHeight: 1,
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "Times New Roman",
                              color: "rgb(0, 0, 0)",
                            }}
                          >
                            {da.giangVien.hoTen}
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr style={{ height: "1pt" }}>
                      <td
                        style={{
                          width: "3.9%",
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
                            marginTop: "3pt",
                            marginBottom: "3pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "Times New Roman",
                              color: "rgb(0, 0, 0)",
                            }}
                          >
                            {da.sinhVien2 ? ++index : ""}
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "7.86%",
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
                            marginTop: "3pt",
                            marginBottom: "3pt",
                            lineHeight: 1,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "Times New Roman",
                              color: "rgb(0, 0, 0)",
                            }}
                          >
                            {da.sinhVien2 ? da.sinhVien2.maSo : ""}
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "17.94%",
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
                            marginTop: "3pt",
                            marginBottom: "3pt",
                            lineHeight: 1,
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "Times New Roman",
                              color: "rgb(0, 0, 0)",
                            }}
                          >
                            {da.sinhVien2
                              ? da.sinhVien2.hoTen
                                  .split(" ")
                                  .slice(0, -1)
                                  .join(" ")
                              : ""}
                          </span>
                        </p>
                      </td>
                      <td
                        style={{
                          width: "6.56%",
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
                            marginTop: "3pt",
                            marginBottom: "3pt",
                            lineHeight: 1,
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "Times New Roman",
                              color: "rgb(0, 0, 0)",
                            }}
                          >
                            {da.sinhVien2
                              ? da.sinhVien2.hoTen.split(" ").pop()
                              : ""}
                          </span>
                        </p>
                      </td>
                    </tr>
                  </>
                );
              })}
            </table>
            <p
              style={{
                marginTop: "6pt",
                marginBottom: "0pt",
                lineHeight: 1,
              }}
            >
              <span
                style={{
                  fontFamily: '"Times New Roman"',
                  fontWeight: "bold",
                  fontStyle: "italic",
                  minHeight: "12pt",
                  fontSize: "12pt",
                }}
              >
                Danh sách bao gồm {DanhSachDoAn.length} nhóm, và {index} sinh
                viên thực hiện./-
              </span>
            </p>
            <p
              style={{
                marginTop: "6pt",
                marginBottom: "0pt",
                lineHeight: 1,
              }}
            ></p>
            <table
              class="first-row first-col no-vband docx_tablegrid"
              style={{ width: "auto" }}
            >
              <tr style={{ height: "126.05pt" }}>
                <td
                  style={{
                    width: "364pt",
                  }}
                >
                  <p style={{ marginTop: "6pt" }}></p>
                  <p style={{ marginTop: "6pt", textAlign: "center" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      TRƯỞNG BỘ MÔN
                    </span>
                  </p>
                  <p style={{ marginTop: "6pt", textAlign: "center" }}></p>
                  <p style={{ marginTop: "6pt", textAlign: "center" }}></p>
                  <p style={{ marginTop: "6pt", textAlign: "center" }}></p>
                  <p style={{ marginTop: "6pt", textAlign: "center" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      Ngô Hữu Dũng
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "364pt",
                  }}
                >
                  <p style={{ marginTop: "6pt", textAlign: "center" }}>
                    <span
                      style={{
                        fontStyle: "italic",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      Tp.HCM, ngày
                    </span>
                    <span
                      style={{
                        fontStyle: "italic",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      {" "}
                      17{" "}
                    </span>
                    <span
                      style={{
                        fontStyle: "italic",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      tháng
                    </span>
                    <span
                      style={{
                        fontStyle: "italic",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      {" "}
                      9{" "}
                    </span>
                    <span
                      style={{
                        fontStyle: "italic",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      năm 202
                    </span>
                    <span
                      style={{
                        fontStyle: "italic",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      1
                    </span>
                  </p>
                  <p style={{ marginTop: "6pt", textAlign: "center" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      Người lập bảng
                    </span>
                  </p>
                  <p style={{ marginTop: "6pt", textAlign: "center" }}></p>
                  <p style={{ marginTop: "6pt", textAlign: "center" }}></p>
                  <p style={{ marginTop: "6pt", textAlign: "center" }}></p>
                  <p style={{ marginTop: "6pt", textAlign: "center" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      Nguyễn Hữu Quang
                    </span>
                  </p>
                </td>
              </tr>
            </table>
            <p
              style={{
                marginTop: "6pt",
                marginBottom: "0pt",
                lineHeight: 1,
              }}
            ></p>
            <p
              style={{
                marginTop: "6pt",
                marginBottom: "0pt",
                lineHeight: 1,
              }}
            ></p>
            <p></p>
          </article>
          <footer>
            <p class="docx_footer" style={{ textAlign: "right" }}>
              <span>1</span>
            </p>
          </footer>
        </section>
      </div>
    </div>
  );
}

export default XuatDanhSachDoAnWord;
