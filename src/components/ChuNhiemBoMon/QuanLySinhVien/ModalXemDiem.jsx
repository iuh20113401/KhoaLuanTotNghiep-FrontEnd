import Button from "../../../ui/Button";
import StyledForm from "../../../ui/Form";
import { RadioContainer, StyledInput, StyledTextarea } from "../../../ui/Input";
import Modal from "../../../ui/Modal";
import StyledTable from "../../../ui/Table";

function ModalXemDiem({ doAn, setShowModal }) {
  const countSoLuong = doAn.sinhvien.length;
  return (
    <Modal size="xl">
      <Modal.Header>
        <h5>Xem điểm sinh viên</h5>
        <Button
          onClick={() => setShowModal(false)}
          className="btn-close"
          variation="icon"
        >
          X
        </Button>
      </Modal.Header>
      <Modal.Body className="p-0 m-0">
        {doAn.sinhvien.map((sv, index) => (
          <p>
            <strong>Sinh viên {index + 1}: </strong>
            {sv.ten}
          </p>
        ))}
        <StyledForm className="mt-2">
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
              </tr>{" "}
              {doAn.sinhvien[1] && (
                <tr>
                  <th width="%" className="text-center">
                    {doAn.sinhvien[0].ten}
                  </th>
                  <th width="%" className="text-center">
                    {doAn.sinhvien[1].ten}
                  </th>
                </tr>
              )}
            </thead>
            <tbody>
              {doAn.sinhvien[0].diem.diemHuongDan.diemAbet.map((d, index) => (
                <tr key={d.stt}>
                  <td>{d.stt}</td>
                  <td>{d.ten}</td>
                  <td className="text-center">
                    <StyledInput
                      type="number"
                      className="text-center"
                      value={d.diem}
                      readOnly
                    />
                  </td>
                  {doAn.sinhvien[1] && (
                    <td>
                      <StyledInput
                        type="number"
                        className="text-center"
                        value={
                          doAn.sinhvien[1].diem.diemHuongDan.diemAbet[index]
                            .diem
                        }
                        readOnly
                      />
                    </td>
                  )}
                  <td>
                    <StyledInput type="text" placeholder="Nhập ghi chú" />
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={2} className="text-center">
                  <h6>
                    <strong>Thang điểm 10</strong>
                  </h6>{" "}
                </td>
                <td>
                  <StyledInput
                    type="number"
                    className="text-center"
                    value={doAn.sinhvien[0].diem.diemHuongDan.diemTong}
                    readOnly
                  />
                </td>{" "}
                {doAn.sinhvien[1] ? (
                  <td>
                    <StyledInput
                      type="number"
                      className="text-center"
                      value={doAn.sinhvien[1].diem.diemHuongDan.diemTong}
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
                  </h4>{" "}
                </td>
                <td>
                  <RadioContainer
                    name="sinhvien1"
                    checked={doAn.sinhvien[0].diem.ketQua === 1}
                    label={"Đạt"}
                    readOnly
                  />
                  <RadioContainer
                    name="sinhvien1"
                    checked={doAn.sinhvien[0].diem.ketQua === 0}
                    label={"Không đạt"}
                    readOnly
                  />
                </td>
                {doAn.sinhvien[1] ? (
                  <td>
                    <RadioContainer
                      name="sinhvien2"
                      checked={doAn.sinhvien[1].diem.ketQua === 1}
                      label={"Đạt"}
                      readOnly
                    />
                    <RadioContainer
                      name="sinhvien2"
                      checked={doAn.sinhvien[1].diem.ketQua === 0}
                      label={"Không đạt"}
                      readOnly
                    />
                  </td>
                ) : (
                  <td></td>
                )}
              </tr>
            </tbody>
          </StyledTable>
          <h6>Nhận xét: </h6>
          <StyledTextarea placeholder="Nhận nhận xét...." />
        </StyledForm>
      </Modal.Body>
    </Modal>
  );
}

export default ModalXemDiem;
