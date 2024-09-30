import { useState, useMemo, useContext } from "react";
import Button from "../../../ui/Button";
import { StyledSelect } from "../../../ui/Input";
import { Col3, Col9, StyledRow } from "../../../ui/Row";
import toast from "react-hot-toast";
import { PhanCongHoiDongContext } from "../../../pages/ChuNhiemBoMon/PhanCongGiangVienHoiDong";

function LapHoiDongContainer({ DanhSachGiangVien }) {
  const context = useContext(PhanCongHoiDongContext);
  const {
    hoiDongs,
    posterHoiDongs,
    isConfirmed,
    handleChangeHoiDong,
    handleChangePosterHoiDong,
    handleConfirm,
    getAvailableGiangVien,
    themHoiDong,
    themPosterHoiDong,
    xoaHoiDong,
    xoaPosterHoiDong,
  } = context;
  return (
    <div>
      <h5>Lập danh sách hội đồng</h5>
      <h6 className="mt-2">Danh sách hội đồng </h6>

      {hoiDongs.map((hoiDong) => (
        <div key={hoiDong.id}>
          <p>
            <strong>Hội đồng {hoiDong.id}</strong>
          </p>
          <StyledRow className="mt-1">
            <Col3>Chủ tịch hội đồng</Col3>
            <Col9>
              {isConfirmed ? (
                <p>
                  {
                    DanhSachGiangVien.find((gv) => gv._id === hoiDong.chuTich)
                      ?.hoTen
                  }
                </p>
              ) : (
                <StyledSelect
                  value={hoiDong.chuTich}
                  onChange={(e) =>
                    handleChangeHoiDong(hoiDong.id, "chuTich", e.target.value)
                  }
                >
                  <option value={""}>Chọn chủ tịch hội đồng</option>
                  {getAvailableGiangVien(hoiDong.chuTich).map((gv) => (
                    <option value={gv._id} key={gv._id}>
                      {gv.hoTen}
                    </option>
                  ))}
                </StyledSelect>
              )}
            </Col9>
          </StyledRow>

          <StyledRow className="mt-1">
            <Col3>Thư ký hội đồng</Col3>
            <Col9>
              {isConfirmed ? (
                <p>
                  {
                    DanhSachGiangVien.find((gv) => gv._id === hoiDong.thuKy)
                      ?.hoTen
                  }
                </p>
              ) : (
                <StyledSelect
                  value={hoiDong.thuKy}
                  onChange={(e) =>
                    handleChangeHoiDong(hoiDong.id, "thuKy", e.target.value)
                  }
                >
                  <option value={""}>Chọn thư ký hội đồng</option>
                  {getAvailableGiangVien(hoiDong.thuKy).map((gv) => (
                    <option value={gv._id} key={gv._id}>
                      {gv.hoTen}
                    </option>
                  ))}
                </StyledSelect>
              )}
            </Col9>
          </StyledRow>

          <StyledRow className="mt-1">
            <Col3>Ủy viên hội đồng</Col3>
            <Col9>
              {isConfirmed ? (
                <p>
                  {
                    DanhSachGiangVien.find((gv) => gv._id === hoiDong.uyVien)
                      ?.hoTen
                  }
                </p>
              ) : (
                <StyledSelect
                  value={hoiDong.uyVien}
                  onChange={(e) =>
                    handleChangeHoiDong(hoiDong.id, "uyVien", e.target.value)
                  }
                >
                  <option value={""}>Chọn ủy viên hội đồng</option>
                  {getAvailableGiangVien(hoiDong.uyVien).map((gv) => (
                    <option value={gv._id} key={gv._id}>
                      {gv.hoTen}
                    </option>
                  ))}
                </StyledSelect>
              )}
            </Col9>
          </StyledRow>
          {hoiDong.id > 1 && (
            <div>
              <Button onClick={() => xoaHoiDong(hoiDong.id)} className="mt-1">
                Xóa hội đồng {hoiDong.id}
              </Button>
            </div>
          )}
        </div>
      ))}

      {!isConfirmed && (
        <Button onClick={themHoiDong} className="mt-1">
          Thêm hội đồng
        </Button>
      )}

      <h6 className="mt-2">Danh sách hội đồng poster</h6>

      {posterHoiDongs.map((posterHoiDong) => (
        <div key={posterHoiDong.id}>
          <p>
            <strong>Hội đồng poster {posterHoiDong.id}</strong>
          </p>
          <StyledRow className="mt-1">
            <Col3>Giảng viên 1</Col3>
            <Col9>
              {isConfirmed ? (
                <p>
                  {
                    DanhSachGiangVien.find((gv) => gv._id === posterHoiDong.gv1)
                      ?.hoTen
                  }
                </p>
              ) : (
                <StyledSelect
                  value={posterHoiDong.gv1}
                  onChange={(e) =>
                    handleChangePosterHoiDong(
                      posterHoiDong.id,
                      "gv1",
                      e.target.value
                    )
                  }
                >
                  <option value={""}>Chọn giảng viên 1</option>
                  {getAvailableGiangVien(posterHoiDong.gv1).map((gv) => (
                    <option value={gv._id} key={gv._id}>
                      {gv.hoTen}
                    </option>
                  ))}
                </StyledSelect>
              )}
            </Col9>
          </StyledRow>

          <StyledRow className="mt-1">
            <Col3>Giảng viên 2</Col3>
            <Col9>
              {isConfirmed ? (
                <p>
                  {
                    DanhSachGiangVien.find((gv) => gv._id === posterHoiDong.gv2)
                      ?.hoTen
                  }
                </p>
              ) : (
                <StyledSelect
                  value={posterHoiDong.gv2}
                  onChange={(e) =>
                    handleChangePosterHoiDong(
                      posterHoiDong.id,
                      "gv2",
                      e.target.value
                    )
                  }
                >
                  <option value={""}>Chọn giảng viên 2</option>
                  {getAvailableGiangVien(posterHoiDong.gv2).map((gv) => (
                    <option value={gv._id} key={gv._id}>
                      {gv.hoTen}
                    </option>
                  ))}
                </StyledSelect>
              )}
            </Col9>
          </StyledRow>
          {posterHoiDong.id > 1 && (
            <div>
              <Button
                onClick={() => xoaPosterHoiDong(posterHoiDong.id)}
                className="mt-1"
              >
                Xóa hội đồng poster {posterHoiDong.id}
              </Button>
            </div>
          )}
        </div>
      ))}

      {!isConfirmed && (
        <Button onClick={themPosterHoiDong} className="mt-1">
          Thêm hội đồng poster
        </Button>
      )}

      <div className="text-end">
        {!isConfirmed && (
          <Button className="mt-2" onClick={handleConfirm}>
            Xác nhận
          </Button>
        )}
      </div>
    </div>
  );
}

export default LapHoiDongContainer;
