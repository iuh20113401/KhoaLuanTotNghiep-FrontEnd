import { BsFileWord } from "react-icons/bs";
import Button from "../../../ui/Button";
import Modal from "../../../ui/Modal";
import { ColLg, StyledRow } from "../../../ui/Row";
import { RadioContainer, StyledInput, StyledTextarea } from "../../../ui/Input";
import StyledTable from "../../../ui/Table";
import { useState } from "react";
import FileDiemHuongDan from "./HTMLToWord/DiemHuongDan";

function ModalXemDiemHuongDan({ doAn, setShowModal, loai }) {
  const [showFile, setShowFIle] = useState(false);
  return (
    <Modal size="xl">
      (
      <>
        <Modal.Header onClick={() => setShowModal((showModal) => !showModal)}>
          {!showFile && (
            <>
              <h5>{doAn.tenDoAn}</h5>
            </>
          )}
        </Modal.Header>
        <Modal.Body>
          {showFile ? (
            <FileDiemHuongDan
              doAn={doAn}
              loai={loai}
              setShowModal={setShowModal}
            />
          ) : (
            <>
              <StyledRow className="align-center">
                <h6 className="text-primary">Điểm hướng dãn</h6>
                <ColLg className="text-end">
                  <Button onClick={() => setShowFIle(true)}>
                    <span>
                      <BsFileWord />
                    </span>
                    Xuất ra file word
                  </Button>
                </ColLg>
              </StyledRow>
              <ChiTietDiem doAn={doAn} loai={loai} />
            </>
          )}
        </Modal.Body>
      </>
      )
    </Modal>
  );
}

function ChiTietDiem({ doAn, loai }) {
  const isSinhVien2 =
    doAn.sinhVien2 &&
    doAn.sinhVien2 !== null &&
    Object.values(doAn.sinhVien2).length > 0;
  const countSoLuong = isSinhVien2 ? 2 : 1;
  let newLoai = loai;
  if (loai === "diemPhanBien")
    newLoai =
      +doAn?.giangVienPhanBien === 1
        ? "diemPhanBien.diemPhanBien1"
        : "diemPhanBien.diemPhanBien2";
  const getNestedValue = (obj, path) => {
    return path.split(".").reduce((acc, part) => acc && acc[part], obj);
  };

  const diem = getNestedValue(doAn.sinhVien1Info.diem, newLoai)?.diemAbet;
  const diem2 = isSinhVien2
    ? getNestedValue(doAn.sinhVien1Info.diem, newLoai)?.diemAbet
    : [];
  const sinhVien1DiemTong = getNestedValue(
    doAn.sinhVien1Info.diem,
    newLoai
  )?.diemTong;
  const sinhVien2DiemTong = isSinhVien2
    ? getNestedValue(doAn.sinhVien1Info.diem, newLoai)?.diemTong
    : "";
  return (
    <>
      <p>
        <strong>Sinh viên 1: </strong>
        {doAn.sinhVien1.hoTen}
      </p>
      {isSinhVien2 && (
        <p>
          <strong>Sinh viên 2: </strong>
          {doAn.sinhVien2.hoTen}
        </p>
      )}
      <StyledTable headvariation="dark">
        <thead>
          <tr>
            <th rowSpan={countSoLuong}>STT</th>
            <th rowSpan={countSoLuong} width="40%">
              LO
            </th>
            <th colSpan={countSoLuong} className="text-center" width="40%">
              Kết quả
            </th>
            <th rowSpan={countSoLuong} width="20%">
              Ghi chú
            </th>
          </tr>
          {isSinhVien2 && (
            <tr>
              <th width="%" className="text-center">
                {doAn.sinhVien1.hoTen}
              </th>
              <th width="%" className="text-center">
                {doAn.sinhVien2.hoTen}
              </th>
            </tr>
          )}
        </thead>
        <tbody>
          {diem.map((d, index) => {
            return (
              <tr key={d.stt}>
                <td>{d.stt}</td>
                <td>{d.ten}</td>
                <td className="text-center">
                  <StyledInput
                    type="number"
                    className="text-center"
                    min={0}
                    max={10}
                    step={1}
                    defaultValue={d.diem}
                    readOnly
                  />
                </td>
                {isSinhVien2 === true && (
                  <td>
                    <StyledInput
                      type="number"
                      min={0}
                      max={10}
                      step={1}
                      className="text-center"
                      value={diem2[index].diem}
                      readOnly
                    />
                  </td>
                )}
                <td>
                  <StyledInput
                    type="text"
                    placeholder="Nhập ghi chú"
                    value={diem[index].ghiChu || ""}
                    readOnly
                  />
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={2} className="text-center">
              <h6>
                <strong>Thang điểm 10</strong>
              </h6>
            </td>
            <td>
              <StyledInput
                type="number"
                placeholder="Thang điểm 10"
                min={0}
                max={10}
                step={1}
                className="text-center"
                value={sinhVien1DiemTong}
                readOnly
              />
            </td>
            {isSinhVien2 ? (
              <td>
                <StyledInput
                  type="number"
                  placeholder="Thang điểm 10"
                  min={0}
                  max={10}
                  step={1}
                  className="text-center"
                  value={sinhVien2DiemTong}
                  readOnly
                />
              </td>
            ) : (
              <td></td>
            )}
          </tr>
          <tr>
            <td colSpan={2} className="text-center">
              <h4>
                <strong>Kết quả</strong>
              </h4>
            </td>
            <td>
              <RadioContainer
                name="sv1_ketQua"
                label={"Đạt"}
                value="1"
                checked={doAn.sinhVien1Info.diem.ketQua === 1}
              />
              <RadioContainer
                name="sv1_ketQua"
                label={"Không đạt"}
                value="2"
                checked={doAn.sinhVien1Info.diem.ketQua === 2}
              />
            </td>
            {isSinhVien2 ? (
              <td>
                <RadioContainer
                  label={"Đạt"}
                  value="1"
                  checked={doAn.sinhVien2Info.diem.ketQua === 1}
                />
                <RadioContainer
                  label={"Không đạt"}
                  value="2"
                  checked={doAn.sinhVien2Info.diem.ketQua === 2}
                />
              </td>
            ) : (
              <td></td>
            )}
          </tr>
        </tbody>
      </StyledTable>
      <h6>Nhận xét: </h6>
      <StyledTextarea
        value={doAn.sinhVien1Info?.diem.diemHuongDan.nhanXet}
        placeholder="Nhận nhận xét...."
      />
    </>
  );
}
export default ModalXemDiemHuongDan;
