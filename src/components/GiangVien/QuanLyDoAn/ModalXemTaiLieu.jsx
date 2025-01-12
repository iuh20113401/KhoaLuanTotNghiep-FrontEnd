import { Link } from "react-router-dom";
import Modal from "../../../ui/Modal";
import StyledTable from "../../../ui/Table";
import Button from "../../../ui/Button";
import { HiDownload } from "react-icons/hi";
const SERVER = import.meta.env.PROD
  ? import.meta.env.VITE_SERVER_URL
  : import.meta.env.VITE_SERVER_URL_LOCAL;
function ModalXemTaiLieu({ doAn, setShowModal, loai }) {
  console.log(loai);
  const TaiLieu = doAn[loai];
  return (
    <Modal size="xl">
      <>
        <Modal.Header onClick={() => setShowModal((showModal) => !showModal)}>
          <div>
            <h5>{doAn.tenDoAn}</h5>
            <h6>
              <b>{`${doAn.sinhVien1.maSo} / ${doAn.sinhVien1.hoTen}`}</b>
            </h6>
            {doAn.sinhVien2 && (
              <h6>{`${doAn.sinhVien2.maSo} / ${doAn.sinhVien2.hoTen}`}</h6>
            )}
          </div>
        </Modal.Header>
        <Modal.Body>
          <h6 className="text-primary">Danh sách tài liệu</h6>
          <div>
            <StyledTable>
              <thead>
                <tr>
                  <th>Tên</th>
                  <th>Ngày đăng</th>
                  <th>Dung lượng</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {TaiLieu.map((tl) => (
                  <tr>
                    <td>{tl.tenTaiLieu}</td>
                    <td>{tl.ngayDang}</td>
                    <td>{tl.dungLuong}</td>
                    <td>
                      <Link to={`${SERVER}${tl.duongDan}`} target="blank">
                        <Button variation="icon">
                          <HiDownload />
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </div>
        </Modal.Body>
      </>
      )
    </Modal>
  );
}

export default ModalXemTaiLieu;
