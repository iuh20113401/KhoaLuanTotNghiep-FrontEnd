import React, { useRef } from "react";
import Button from "../../../../ui/Button";
import { BsFileWordFill } from "react-icons/bs";

const ContentLoai = {
  diemHuongDan: {
    vaiTro: "GIẢNG VIÊN HƯỚNG DẪN",
  },
  diemPhanBien: { vaiTro: "GIẢNG VIÊN PHẢN BIỆN" },
};

function FileDiemHuongDan({ setShowModal, doAn, loai }) {
  let newLoai = loai;
  if (loai === "diemPhanBien")
    newLoai =
      +doAn?.giangVienPhanBien === 1
        ? "diemPhanBien.diemPhanBien1"
        : "diemPhanBien.diemPhanBien2";
  const getNestedValue = (obj, path) => {
    return path.split(".").reduce((acc, part) => acc && acc[part], obj);
  };

  const contentRef = useRef();
  const countSoLuong = doAn.sinhVien2 ? 2 : 1;
  const contentLoai = ContentLoai[loai];
  const diem = getNestedValue(doAn.sinhVien1Info.diem, newLoai)?.diemAbet;
  const diem2 =
    countSoLuong > 1
      ? getNestedValue(doAn.sinhVien2Info.diem, newLoai)?.diemAbet
      : [];
  const sinhVien1DiemTong = getNestedValue(
    doAn.sinhVien1Info.diem,
    newLoai
  )?.diemTong;
  const sinhVien2DiemTong =
    countSoLuong > 1
      ? getNestedValue(doAn.sinhVien2Info.diem, newLoai)?.diemTong
      : "";
  function Export2Doc(filename = "") {
    var preHtml =
      "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title><style>@page WordSection1 { mso-page-orientation: portrait; margin:1.27cm; } div.WordSection1 {page: WordSection1;}</style></head><body><div class='WordSection1'>";
    var postHtml = "</div></body></html>";

    var html = preHtml + contentRef.current.innerHTML + postHtml;

    var blob = new Blob(["\ufeff", html], {
      type: "application/msword",
    });

    var url =
      "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(html);

    filename = filename ? filename + ".doc" : "document.doc";

    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      downloadLink.href = url;
      downloadLink.download = filename;
      downloadLink.click();
    }

    document.body.removeChild(downloadLink);
  }

  return (
    <div style={{ minHeight: "1000pt" }}>
      <div className="text-end">
        <Button
          variation="outline"
          bgcolor="var(--bs-black)"
          className="mt-3 mr-3"
          color="black"
          onClick={() => {
            setShowModal(false);
          }}
        >
          X
        </Button>
      </div>
      <div
        className="docx-wrapper"
        style={{
          padding: "30px",
          paddingBottom: "0px",
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
          width: "100%",
        }}
        ref={contentRef}
      >
        <section
          className="docx"
          style={{
            padding: "30pt",
            width: "595.3pt",
            minHeight: "841.9pt",
            color: "black",
          }}
        >
          <header>
            <p
              className="docx_header"
              style={{
                margin: "0pt",
                minHeight: "1em",
                textAlign: "right",
                marginBottom: "0pt",
                lineHeight: 1,
              }}
            >
              <span
                style={{
                  fontFamily: "Time new roman",
                  color: "rgb(174, 170, 170)",
                }}
              >
                MẪU 02 – GVPB - ABET
              </span>
            </p>
          </header>
          <article>
            <table
              style={{
                tableLayout: "auto",
                verticalAlign: "top",
                borderBottomWidth: "0px",
              }}
            >
              <tr>
                <td
                  style={{
                    verticalAlign: "top",
                    width: "249.8pt",
                  }}
                >
                  <p
                    style={{
                      margin: "0pt",
                      minHeight: "1em",
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Time new roman",
                        minHeight: "12pt",
                        fontSize: "11pt",
                      }}
                    >
                      TRƯỜNG ĐẠI HỌC CÔNG NGHIỆP TP.HCM
                    </span>
                  </p>
                  <p
                    style={{
                      margin: "0pt",
                      minHeight: "1em",
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Time new roman",
                        minHeight: "12pt",
                        fontSize: "11pt",
                      }}
                    >
                      KHOA CÔNG NGHỆ THÔNG TIN
                    </span>
                  </p>
                  <p
                    style={{
                      margin: "0pt",
                      minHeight: "1em",
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Time new roman",
                        fontWeight: "bold",
                        minHeight: "12pt",
                        fontSize: "11pt",
                      }}
                    >
                      BỘ MÔN HỆ THỐNG THÔNG TIN
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    verticalAlign: "top",
                    width: "263.25pt",
                  }}
                >
                  <p
                    style={{
                      margin: "0pt",
                      minHeight: "1em",

                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Time new roman",
                        fontWeight: "bold",
                        minHeight: "12pt",
                        fontSize: "11pt",
                      }}
                    >
                      CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                    </span>
                  </p>
                  <p
                    style={{
                      margin: "0pt",
                      minHeight: "1em",

                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Time new roman",
                        fontWeight: "bold",
                        minHeight: "12pt",
                        fontSize: "11pt",
                      }}
                    >
                      Độc lập - Tự do - Hạnh phúc
                    </span>
                  </p>
                  <p
                    style={{
                      margin: "0pt",
                      minHeight: "1em",
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Time new roman",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    ></span>
                  </p>
                </td>
              </tr>
            </table>
            <p
              style={{
                marginBottom: "0pt",
                lineHeight: "1",
                marginLeft: "5.4pt",
                textAlign: "center",
                width: "513.05pt",
              }}
            >
              <span
                style={{
                  fontFamily: "Time new roman",
                  fontWeight: "bold",
                  color: "rgb(0, 0, 0)",
                  minHeight: "14pt",
                  fontSize: "14pt",
                }}
              >
                PHIẾU ĐÁNH GIÁ KHÓA LUẬN TỐT NGHIỆP
              </span>
            </p>
            <p
              style={{
                margin: "0pt",
                minHeight: "1em",
                marginTop: "12pt",
                lineHeight: "1.3",
                marginLeft: "5.75pt",
              }}
            >
              <span
                style={{
                  fontFamily: " var(--docx-majorHAnsi-font)",
                  color: "rgb(0, 0, 0)",
                  minHeight: "12pt",
                  fontSize: "12pt",
                }}
              >
                Họ tên người đánh giá:{" "}
              </span>
              <span
                style={{
                  fontFamily: " var(--docx-majorHAnsi-font)",
                  color: "rgb(0, 0, 0)",
                  minHeight: "12pt",
                  fontSize: "12pt",
                }}
              >
                Ths Trần Thị Kim Chi
              </span>
            </p>
            <p
              style={{
                margin: "0pt",
                minHeight: "1em",
                marginTop: "0",
                marginBottom: "12pt",
                lineHeight: "1.3",
                marginLeft: "5.75pt",
              }}
            >
              <span
                style={{
                  fontFamily: " var(--docx-majorHAnsi-font)",
                  color: "rgb(0, 0, 0)",
                  minHeight: "12pt",
                  fontSize: "12pt",
                }}
              >
                Vai trò của người đánh giá: {contentLoai.vaiTro}
              </span>
            </p>
            <p
              style={{
                marginBottom: "0pt",
                lineHeight: "1.3",
                marginLeft: "5.75pt",
              }}
            ></p>
            <p
              style={{
                margin: "0pt",
                minHeight: "1em",
                marginBottom: "0pt",
                lineHeight: "1.3",
                marginLeft: "5.75pt",
              }}
            >
              <span
                style={{
                  fontFamily: " var(--docx-majorHAnsi-font)",
                  color: "rgb(0, 0, 0)",
                  minHeight: "12pt",
                  fontSize: "12pt",
                }}
              >
                Tên đề tài:
              </span>
              <span> </span>
              <span
                style={{
                  fontFamily: "Time new roman",
                  minHeight: "13pt",
                  fontSize: "13pt",
                }}
              >
                {doAn.tenDoAn}
              </span>
            </p>
            <p
              style={{
                margin: "0pt",
                minHeight: "1em",
                marginBottom: "0pt",
                lineHeight: "1.3",
                marginLeft: "5.75pt",
              }}
            >
              <span
                style={{
                  fontFamily: " var(--docx-majorHAnsi-font)",
                  color: "rgb(0, 0, 0)",
                  minHeight: "12pt",
                  fontSize: "12pt",
                }}
              >
                Họ tên sinh viên 1:{" "}
              </span>
              <span id="_Hlk135679721"></span>
              <span
                style={{
                  fontFamily: " var(--docx-majorHAnsi-font)",
                  color: "rgb(0, 0, 0)",
                  minHeight: "12pt",
                  fontSize: "12pt",
                }}
              >
                {doAn.sinhVien1.hoTen}{" "}
              </span>
              <span
                style={{
                  fontFamily: " var(--docx-majorHAnsi-font)",
                  color: "rgb(0, 0, 0)",
                  minHeight: "12pt",
                  fontSize: "12pt",
                }}
              >
                Mã số sinh viên:
              </span>
              <span
                style={{
                  fontFamily: " var(--docx-majorHAnsi-font)",
                  color: "rgb(0, 0, 0)",
                  minHeight: "12pt",
                  fontSize: "12pt",
                }}
              ></span>
              <span
                style={{
                  fontFamily: " var(--docx-majorHAnsi-font)",
                  color: "rgb(0, 0, 0)",
                  minHeight: "12pt",
                  fontSize: "12pt",
                }}
              >
                {doAn.sinhVien1.maSo}
              </span>
            </p>
            {countSoLuong > 1 && (
              <p
                style={{
                  margin: "0pt",
                  minHeight: "1em",
                  marginBottom: "0pt",
                  lineHeight: "1.3",
                  marginLeft: "5.75pt",
                }}
              >
                <span
                  style={{
                    fontFamily: " var(--docx-majorHAnsi-font)",
                    color: "rgb(0, 0, 0)",
                    minHeight: "12pt",
                    fontSize: "12pt",
                  }}
                >
                  Họ tên sinh viên 2:
                </span>
                <span id="_Hlk135679748"></span>
                <span
                  style={{
                    fontFamily: " var(--docx-majorHAnsi-font)",
                    color: "rgb(0, 0, 0)",
                    minHeight: "12pt",
                    fontSize: "12pt",
                  }}
                >
                  {doAn.sinhVien2.hoTen}
                </span>
                <span
                  style={{
                    fontFamily: " var(--docx-majorHAnsi-font)",
                    color: "rgb(0, 0, 0)",
                    minHeight: "12pt",
                    fontSize: "12pt",
                  }}
                >
                  Mã số sinh viên:
                </span>
                <span
                  style={{
                    fontFamily: " var(--docx-majorHAnsi-font)",
                    color: "rgb(0, 0, 0)",
                    minHeight: "12pt",
                    fontSize: "12pt",
                  }}
                ></span>
                <span
                  style={{
                    fontFamily: " var(--docx-majorHAnsi-font)",
                    color: "rgb(0, 0, 0)",
                    minHeight: "12pt",
                    fontSize: "12pt",
                  }}
                >
                  {doAn.sinhVien2.maSo}
                </span>
              </p>
            )}
            <p
              style={{
                margin: "0pt",
                minHeight: "1em",
                marginBottom: "0pt",
                lineHeight: "1",
                marginLeft: "5.4pt",
              }}
            >
              <span
                style={{
                  fontFamily: "Time new roman",
                  minHeight: "7pt",
                  fontSize: "7pt",
                }}
              >
                <span className="docx-tab-stop"> </span>
              </span>
              <span
                style={{
                  fontFamily: "Time new roman",
                  minHeight: "7pt",
                  fontSize: "7pt",
                }}
              >
                <span className="docx-tab-stop"> </span>
              </span>
              <span
                style={{
                  fontFamily: "Time new roman",
                  minHeight: "7pt",
                  fontSize: "7pt",
                }}
              >
                <span className="docx-tab-stop"> </span>
              </span>
              <span
                style={{
                  fontFamily: "Time new roman",
                  minHeight: "7pt",
                  fontSize: "7pt",
                }}
              >
                <span className="docx-tab-stop"> </span>
              </span>
              <span
                style={{
                  fontFamily: "Time new roman",
                  minHeight: "7pt",
                  fontSize: "7pt",
                }}
              >
                <span className="docx-tab-stop"> </span>
              </span>
              <span
                style={{
                  fontFamily: "Time new roman",
                  minHeight: "7pt",
                  fontSize: "7pt",
                }}
              >
                <span className="docx-tab-stop"> </span>
              </span>
              <span
                style={{
                  fontFamily: "Time new roman",
                  minHeight: "7pt",
                  fontSize: "7pt",
                }}
              >
                <span className="docx-tab-stop"> </span>
              </span>
              <span
                style={{
                  fontFamily: "Time new roman",
                  minHeight: "7pt",
                  fontSize: "7pt",
                }}
              >
                <span className="docx-tab-stop"> </span>
              </span>
            </p>
            <table
              className="first-row first-col no-vband docx_tablegrid"
              style={{
                border: " 1px solid black",
                borderCollapse: "collapse",
                width: "513.05pt",
              }}
            >
              <colgroup>
                <col style={{ border: " 1px solid black", width: " 30.3pt" }} />
                <col style={{ border: " 1px solid black", width: "213.3pt" }} />
                <col style={{ border: " 1px solid black", width: "77.95pt" }} />
                <col style={{ border: " 1px solid black", width: "78pt" }} />
                <col style={{ border: " 1px solid black", width: "95.95pt" }} />
              </colgroup>
              <tr>
                <td
                  rowspan="2"
                  style={{
                    border: " 1px solid black",
                    width: "30.3pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      margin: "0pt",
                      minHeight: "1em",
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      textIndent: "-3.2pt",
                      textAign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Time new roman",
                        fontWeight: "bold",
                        color: "rgb(0, 0, 0)",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      STT
                    </span>
                  </p>
                </td>
                <td
                  rowspan="2"
                  style={{
                    borderTop: "0.5pt solid black",
                    borderLeft: "0.5pt solid black",
                    borderBottom: "0.5pt solid black",
                    borderRight: "0.5pt solid black",
                    paddingTop: "0pt",
                    paddingLeft: "5.4pt",
                    paddingBottom: "0pt",
                    paddingRight: "5.4pt",
                    width: "213.3pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      margin: "0pt",
                      minHeight: "1em",
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Time new roman",
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
                  colspan="2"
                  style={{
                    borderTop: "0.5pt solid black",
                    borderLeft: "0.5pt solid black",
                    borderBottom: "0.5pt solid black",
                    borderRight: "0.5pt solid black",
                    paddingTop: "0pt",
                    paddingLeft: "5.4pt",
                    paddingBottom: "0pt",
                    paddingRight: "5.4pt",
                    width: "155.95pt",
                  }}
                >
                  <p
                    style={{
                      margin: "0pt",
                      minHeight: "1em",
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Time new roman",
                        fontWeight: "bold",
                        color: "rgb(0, 0, 0)",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      Kết quả
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    borderTop: "0.5pt solid black",
                    borderLeft: "0.5pt solid black",
                    borderBottom: "0.5pt solid black",
                    borderRight: "0.5pt solid black",
                    paddingTop: "0pt",
                    paddingLeft: "5.4pt",
                    paddingBottom: "0pt",
                    paddingRight: "5.4pt",
                    width: "95.95pt",
                    verticalAlign: "middle",
                  }}
                  rowspan="2"
                >
                  <p
                    style={{
                      margin: "0pt",
                      minHeight: "1em",
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Time new roman",
                        fontWeight: "bold",
                        color: "rgb(0, 0, 0)",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      Ghi Chú
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderTop: "0.5pt solid black",
                    borderLeft: "0.5pt solid black",
                    borderBottom: "0.5pt solid black",
                    borderRight: "0.5pt solid black",
                    paddingTop: "0pt",
                    paddingLeft: "5.4pt",
                    paddingBottom: "0pt",
                    paddingRight: "5.4pt",
                    width: "100pt",
                  }}
                  colspan={countSoLuong > 1 ? 1 : 2}
                >
                  <p
                    style={{
                      margin: "0pt",
                      minHeight: "1em",
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      textAlign: "center",
                      fontFamily: "Time new roman",
                      fontWeight: "bold",
                      color: "rgb(0, 0, 0)",
                      fontSize: "12pt",
                    }}
                  >
                    Sinh viên 1
                  </p>
                </td>
                {countSoLuong > 1 && (
                  <td
                    style={{
                      borderTop: "0.5pt solid black",
                      borderLeft: "0.5pt solid black",
                      borderBottom: "0.5pt solid black",
                      borderRight: "0.5pt solid black",
                      paddingTop: "0pt",
                      paddingLeft: "5.4pt",
                      paddingBottom: "0pt",
                      paddingRight: "5.4pt",
                      width: "100pt",
                    }}
                  >
                    <p
                      style={{
                        margin: "0pt",
                        minHeight: "1em",
                        marginTop: "2pt",
                        marginBottom: "2pt",
                        textAlign: "center",
                        fontFamily: "Time new roman",
                        fontWeight: "bold",
                        color: "rgb(0, 0, 0)",
                        fontSize: "12pt",
                      }}
                    >
                      Sinh viên 2
                    </p>
                  </td>
                )}
              </tr>
              {/*note LO1*/}
              {diem.map((d, index) => {
                return (
                  <tr style={{ height: "34.05pt" }}>
                    <td
                      style={{
                        borderTop: "0.5pt solid black",
                        borderLeft: "0.5pt solid black",
                        borderBottom: "0.5pt solid black",
                        borderRight: "0.5pt solid black",
                        paddingTop: "0pt",
                        paddingLeft: "5.4pt",
                        paddingBottom: "0pt",
                        paddingRight: "5.4pt",
                        width: "30.3pt",
                        verticalAlign: "middle",
                      }}
                    >
                      <p
                        style={{
                          margin: "0pt",
                          minHeight: "1em",
                          marginTop: "2pt",
                          marginBottom: "2pt",
                          textAlign: "center",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "Time new roman",
                            color: "rgb(0, 0, 0)",
                            minHeight: "12pt",
                            fontSize: "12pt",
                          }}
                        >
                          {d.stt}
                        </span>
                      </p>
                    </td>
                    <td
                      style={{
                        borderTop: "0.5pt solid black",
                        borderLeft: "0.5pt solid black",
                        borderBottom: "0.5pt solid black",
                        borderRight: "0.5pt solid black",
                        paddingTop: "0pt",
                        paddingLeft: "5.4pt",
                        paddingBottom: "0pt",
                        paddingRight: "5.4pt",
                        width: "300.3pt",
                        verticalAlign: "middle",
                      }}
                    >
                      <p
                        style={{
                          margin: "0pt",
                          minHeight: "1em",
                          marginTop: "2pt",
                          marginBottom: "2pt",
                          textAlign: "justify",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "Time new roman",
                            color: "rgb(0, 0, 0)",
                            minHeight: "12pt",
                            fontSize: "12pt",
                          }}
                        >
                          {d.ten}
                        </span>
                      </p>
                    </td>
                    {/*note LO1 sinh vien 1*/}
                    <td
                      style={{
                        borderTop: "0.5pt solid black",
                        borderLeft: "0.5pt solid black",
                        borderBottom: "0.5pt solid black",
                        borderRight: "0.5pt solid black",
                        paddingTop: "0pt",
                        paddingLeft: "5.4pt",
                        paddingBottom: "0pt",
                        paddingRight: "5.4pt",
                        width: "77.95pt",
                        verticalAlign: "middle",
                      }}
                      colspan={countSoLuong > 1 ? 1 : 2}
                    >
                      <p
                        style={{
                          margin: "0pt",
                          minHeight: "1em",
                          marginTop: "2pt",
                          marginBottom: "2pt",
                          textAlign: "center",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "Time new roman",
                            color: "rgb(0, 0, 0)",
                            minHeight: "12pt",
                            fontSize: "12pt",
                          }}
                        >
                          {d.diem}
                        </span>
                      </p>
                    </td>
                    {countSoLuong > 1 && (
                      <td
                        style={{
                          borderTop: "0.5pt solid black",
                          borderLeft: "0.5pt solid black",
                          borderBottom: "0.5pt solid black",
                          borderRight: "0.5pt solid black",
                          paddingTop: "0pt",
                          paddingLeft: "5.4pt",
                          paddingBottom: "0pt",
                          paddingRight: "5.4pt",
                          width: "78pt",
                          verticalAlign: "middle",
                        }}
                      >
                        <p
                          style={{
                            margin: "0pt",
                            minHeight: "1em",
                            marginTop: "2pt",
                            marginBottom: "2pt",
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "Time new roman",
                              color: "rgb(0, 0, 0)",
                              minHeight: "12pt",
                              fontSize: "12pt",
                            }}
                          >
                            {diem2[index].diem}
                          </span>
                        </p>
                      </td>
                    )}
                    <td
                      style={{
                        borderTop: "0.5pt solid black",
                        borderLeft: "0.5pt solid black",
                        borderBottom: "0.5pt solid black",
                        borderRight: "0.5pt solid black",
                        paddingTop: "0pt",
                        paddingLeft: "5.4pt",
                        paddingBottom: "0pt",
                        paddingRight: "5.4pt",
                        width: "95.95pt",
                        verticalAlign: "middle",
                      }}
                    >
                      <p
                        style={{
                          margin: "0pt",
                          minHeight: "1em",
                          marginTop: "2pt",
                          marginBottom: "2pt",
                          textAlign: "center",
                        }}
                      >
                        {d.ghiChu}
                      </p>
                    </td>
                  </tr>
                );
              })}

              <tr style={{ height: "34.05pt" }}>
                <td
                  colspan="2"
                  style={{
                    borderTop: "0.5pt solid black",
                    borderLeft: "0.5pt solid black",
                    borderBottom: "0.5pt solid black",
                    borderRight: "0.5pt solid black",
                    paddingTop: "0pt",
                    paddingLeft: "5.4pt",
                    paddingBottom: "0pt",
                    paddingRight: "5.4pt",
                    width: "243.6pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      margin: "0pt",
                      minHeight: "1em",
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Time new roman",
                        fontWeight: "bold",
                        color: "rgb(0, 0, 0)",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      KẾT QUẢ
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    borderTop: "0.5pt solid black",
                    borderLeft: "0.5pt solid black",
                    borderBottom: "0.5pt solid black",
                    borderRight: "0.5pt solid black",
                    paddingTop: "0pt",
                    paddingLeft: "5.4pt",
                    paddingBottom: "0pt",
                    paddingRight: "5.4pt",
                    width: "77.95pt",
                    verticalAlign: "middle",
                  }}
                  colspan={countSoLuong > 1 ? 1 : 2}
                >
                  <p
                    style={{
                      margin: "0pt",
                      minHeight: "1em",
                      marginTop: "2pt",
                      marginBottom: "2pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Time new roman",
                        color: "rgb(0, 0, 0)",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      {doAn.sinhVien1Info.diem.ketQua === 1 ? (
                        <span style={{ fontFamily: "Wingdings" }}></span>
                      ) : (
                        <span style={{ fontFamily: "Wingdings" }}></span>
                      )}
                    </span>

                    <span
                      style={{
                        fontFamily: "Time new roman",
                        color: "rgb(0, 0, 0)",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      Đạt
                    </span>
                  </p>
                  <p
                    style={{
                      margin: "0pt",
                      minHeight: "1em",
                      marginTop: "2pt",
                      marginBottom: "2pt",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Time new roman",
                        color: "rgb(0, 0, 0)",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      {doAn.sinhVien1Info.diem.ketQua === 2 ? (
                        <span style={{ fontFamily: "Wingdings" }}></span>
                      ) : (
                        <span style={{ fontFamily: "Wingdings" }}></span>
                      )}
                    </span>
                    <span
                      style={{
                        fontFamily: "Time new roman",
                        color: "rgb(0, 0, 0)",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      Không đạt
                    </span>
                  </p>
                </td>
                {countSoLuong > 1 && (
                  <td
                    style={{
                      borderTop: "0.5pt solid black",
                      borderLeft: "0.5pt solid black",
                      borderBottom: "0.5pt solid black",
                      borderRight: "0.5pt solid black",
                      paddingTop: "0pt",
                      paddingLeft: "5.4pt",
                      paddingBottom: "0pt",
                      paddingRight: "5.4pt",
                      width: "78pt",
                      verticalAlign: "middle",
                    }}
                  >
                    <p
                      style={{
                        margin: "0pt",
                        minHeight: "1em",
                        marginTop: "2pt",
                        marginBottom: "2pt",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Time new roman",
                          color: "rgb(0, 0, 0)",
                          minHeight: "12pt",
                          fontSize: "12pt",
                        }}
                      >
                        {doAn.sinhVien2Info.diem.ketQua === 1 ? (
                          <span style={{ fontFamily: "Wingdings" }}></span>
                        ) : (
                          <span style={{ fontFamily: "Wingdings" }}></span>
                        )}
                      </span>
                      <span
                        style={{
                          fontFamily: "Time new roman",
                          color: "rgb(0, 0, 0)",
                          minHeight: "12pt",
                          fontSize: "12pt",
                        }}
                      >
                        Đạt
                      </span>
                    </p>
                    <p
                      style={{
                        margin: "0pt",
                        minHeight: "1em",
                        marginTop: "2pt",
                        marginBottom: "2pt",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Time new roman",
                          color: "rgb(0, 0, 0)",
                          minHeight: "12pt",
                          fontSize: "12pt",
                        }}
                      >
                        {doAn.sinhVien2Info.diem.ketQua === 2 ? (
                          <span style={{ fontFamily: "Wingdings" }}></span>
                        ) : (
                          <span style={{ fontFamily: "Wingdings" }}></span>
                        )}{" "}
                      </span>
                      <span
                        style={{
                          fontFamily: "Time new roman",
                          color: "rgb(0, 0, 0)",
                          minHeight: "12pt",
                          fontSize: "12pt",
                        }}
                      >
                        Không đạt
                      </span>
                    </p>
                  </td>
                )}
                <td
                  style={{
                    borderTop: "0.5pt solid black",
                    borderLeft: "0.5pt solid black",
                    borderBottom: "0.5pt solid black",
                    borderRight: "0.5pt solid black",
                    paddingTop: "0pt",
                    paddingLeft: "5.4pt",
                    paddingBottom: "0pt",
                    paddingRight: "5.4pt",
                    width: "95.95pt",
                    verticalAlign: "middle",
                  }}
                >
                  <p
                    style={{
                      margin: "0pt",
                      minHeight: "1em",
                      marginTop: "2pt",
                      marginBottom: "2pt",
                      textAlign: "center",
                    }}
                  ></p>
                </td>
              </tr>
            </table>
            <p
              style={{
                margin: "0pt",
                minHeight: "1em",
                marginBottom: "0pt",
                lineHeight: "1",
                marginLeft: "5.65pt",
              }}
            >
              <span
                style={{
                  fontFamily: " var(--docx-majorHAnsi-font)",
                  color: "rgb(0, 0, 0)",
                  minHeight: "12pt",
                  fontSize: "12pt",
                }}
              >
                &nbsp;
              </span>
              <span
                style={{
                  fontFamily: " var(--docx-majorHAnsi-font)",
                  color: "rgb(0, 0, 0)",
                  minHeight: "12pt",
                  fontSize: "12pt",
                }}
              >
                <span className="docx-tab-stop"> </span>&nbsp;
              </span>
            </p>
            <p
              style={{
                margin: "0pt",
                minHeight: "1em",
                marginTop: "3pt",
                marginBottom: "3pt",
              }}
            >
              <span
                style={{
                  fontFamily: "Time new roman",
                  minHeight: "12pt",
                  fontSize: "12pt",
                }}
              >
                Nhận xét khác:
              </span>
              <span
                style={{
                  fontFamily: "Time new roman",
                  minHeight: "12pt",
                  fontSize: "12pt",
                }}
              >
                <span className="docx-tab-stop"> </span>
              </span>
            </p>
            <p
              style={{
                margin: "0pt",
                minHeight: "1em",
                marginTop: "3pt",
                marginBottom: "3pt",
              }}
            >
              <span
                style={{
                  fontFamily: "Time new roman",
                  minHeight: "12pt",
                  fontSize: "12pt",
                }}
              >
                <span className="docx-tab-stop"> </span>
              </span>
            </p>
            <table
              className="first-row last-row first-col last-col"
              style={{
                width: "477pt",
                tableLayout: "auto",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <colgroup>
                <col style={{ width: "252pt" }} />
                <col style={{ width: "225pt" }} />
              </colgroup>
              <tr style={{ textAign: "center" }}>
                <td
                  style={{
                    backgroundColor: "inherit",
                  }}
                ></td>
                <td
                  style={{
                    width: "255pt",
                    backgroundColor: "inherit",
                  }}
                >
                  <p
                    style={{
                      margin: "0pt",
                      minHeight: "1em",
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      lineHeight: "1",
                      textAign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: " var(--docx-majorHAnsi-font)",
                        fontStyle: "italic",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      TP. HCM, ngày 24 tháng 5 năm 2023
                    </span>
                  </p>
                  <p
                    style={{
                      margin: "0pt",
                      minHeight: "1em",
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      lineHeight: "1",
                      marginLeft: "18pt",
                      textAign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Time new roman",
                        fontWeight: "bold",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      Người đánh giá
                    </span>
                  </p>
                  <p
                    style={{
                      margin: "0pt",
                      minHeight: "1em",
                      marginTop: "3pt",
                      marginBottom: "3pt",
                      lineHeight: "1",
                      marginLeft: "18pt",
                      textAign: "center",
                    }}
                  >
                    <span
                      sstyle={{
                        fontFamily: " var(--docx-majorHAnsi-font)",
                        fontStyle: "italic",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      (Ký và ghi rõ họ tên)
                    </span>
                  </p>
                </td>
              </tr>
            </table>
            <p></p>
          </article>
        </section>
      </div>
      <div className="text-end mr-3">
        <Button
          bgcolor="var(--bs-blue)"
          onClick={() =>
            Export2Doc(
              `${doAn.maDoAn}_${doAn.sinhVien1.hoTen
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/\s+/g, "")}${
                countSoLuong > 1
                  ? `_${doAn.sinhVien2.hoTen
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .replace(/\s+/g, "")}`
                  : ""
              }`
            )
          }
        >
          <span>
            <BsFileWordFill />
          </span>
          Xuất ra file word
        </Button>
      </div>
    </div>
  );
}
export default FileDiemHuongDan;
