import { useRef } from "react";

export default function TestHTML3() {
  const contentRef = useRef();

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
    <div>
      {" "}
      <button onClick={() => Export2Doc("document")}>Print</button>
      <div class="docx-wrapper" ref={contentRef}>
        <section
          class="docx"
          style={{
            padding: "72pt",
            width: "612pt",
            minHeight: "792pt",
            margin: "0",
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
              <span style={{ fontWeight: "bold" }}>16</span>
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
                - Số sinh viên đạt:{" "}
              </span>
              <span style={{ fontWeight: "bold" }}>56</span>
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
                - Số sinh viên không đạt:{" "}
              </span>
              <span style={{ fontWeight: "bold" }}>02</span>
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
                - Số sinh viên bỏ thi cuối kỳ:{" "}
              </span>
              <span style={{ fontWeight: "bold" }}>--</span>
            </p>

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
                <strong>Chuẩn đầu ra 3:</strong> Thiết kế một hệ thống thông
                tin/đưa ra giải pháp đáp ứng được yêu cầu bài toán/hệ thống.
              </span>
            </p>
            <p
              style={{
                marginBottom: "0pt",
                lineHeight: 1,
                marginLeft: "36pt",
                textAlign: "justify",
              }}
            ></p>
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
                    189
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>17</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>8.99%</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>31</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>16.40%</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>97</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>51.32%</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>44</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>23.28%</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>134</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>0</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>0.00%</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>13</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>9.70%</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>87</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>64.93%</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>34</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>25.37%</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>323</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>17</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>5.26%</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>44</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>13.62%</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>184</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>56.97%</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>78</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>24.15%</span>
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
                <td
                  style={{
                    width: "47.45pt",
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
                <td
                  style={{
                    width: "48.55pt",
                    borderWidth: "initial",
                    borderStyle: "none",
                    borderColor: "initial",
                    backgroundColor: "inherit",
                    verticalAlign: "middle",
                  }}
                ></td>
                <td
                  style={{
                    width: "47.45pt",
                    borderWidth: "initial",
                    borderStyle: "none",
                    borderColor: "initial",
                    backgroundColor: "inherit",
                    verticalAlign: "middle",
                  }}
                ></td>
                <td
                  style={{
                    width: "48.55pt",
                    borderWidth: "initial",
                    borderStyle: "none",
                    borderColor: "initial",
                    backgroundColor: "inherit",
                    verticalAlign: "middle",
                  }}
                ></td>
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
                      3
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
                        color: "rgb(0, 0, 0)",
                        minHeight: "12pt",
                        fontSize: "12pt",
                      }}
                    >
                      323
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>262</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>81.11%</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>61</span>
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
                  <p
                    style={{
                      marginBottom: "0pt",
                      lineHeight: 1,
                      textAlign: "right",
                    }}
                  >
                    <span>18.89%</span>
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
                Tỉ lệ đạt của LO này là 81.11%. Sinh viên yếu trong việc vẽ các
                sơ đồ thiết kế hệ thống (sequence…) dẫn đến điểm không cao mặc
                dù sv đưa ra giải pháp phù hợp -&gt; củng cố kiến thức trong môn
                PTTKHT{" "}
              </span>
            </p>

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
