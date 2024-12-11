import { useState } from "react";
import Button from "../../ui/Button";
import ThemDetai from "./ThemDetai";
import { layDanhSachDeTai } from "../../services/DeTaiApi";
import SuaDeTai from "./SuaDeTai";
import { useDanhSachDeTai } from "../../hooks/useDanhSachDeTai";

import { Col3, ColLg, StyledRow } from "../../ui/Row";
import DanhSachDeTaiGiangVien from "../../components/GiangVien/QuanLyDeTai/DanhSachDeTaiGiangVien";
import QuanLyDeTaiHeader from "../../components/ChuNhiemBoMon/TaoThongBao/QuanLyDeTaiHeader";
import DanhSachDeTaiSinhVien from "../../components/GiangVien/QuanLyDeTai/DanhSachDeTaiSinhVien";
import LoadingSpinner from "../../ui/Spinner";

function QuanLyDeTai() {
  const [isAdd, setIsAdd] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isShowTable, setIsShowTable] = useState(true);
  const [active, setActive] = useState(0);

  const { DanhSachDeTai, filterDeTai, refetch, handleFilterDeTai, isLoading } =
    useDanhSachDeTai({
      key: "DanhSachDeTai",
      fn: layDanhSachDeTai,
    });
  const TabArr = [
    {
      header: "Danh sách đề tài ",
      content: (
        <DanhSachDeTaiGiangVien
          DanhSachDeTai={DanhSachDeTai}
          filterDeTai={filterDeTai}
          handleFilterDeTai={handleFilterDeTai}
          isLoading={isLoading}
          refetch={refetch}
          isShowTable={isShowTable}
          setIsShowTable={setIsShowTable}
          setIsEdit={setIsEdit}
        />
      ),
    },
    {
      header: "Danh sách đề tài sinh viên yêu cầu",
      content: (
        <DanhSachDeTaiSinhVien
          DanhSachDeTai={DanhSachDeTai.filter((dt) => +dt.trangThai === 4)}
          isLoading={isLoading}
          refetch={refetch}
          isShowTable={isShowTable}
          setIsShowTable={setIsShowTable}
          setIsEdit={setIsEdit}
        />
      ),
    },
  ];
  if (isLoading) return <LoadingSpinner />;
  return (
    <div>
      {!isAdd && !isEdit && (
        <>
          <StyledRow className="align-center">
            <ColLg>
              <h5>Quản lý đề tài</h5>
            </ColLg>

            <Col3>
              <Button size="block" onClick={() => setIsAdd((isAdd) => !isAdd)}>
                Thêm đề tài
              </Button>
            </Col3>
          </StyledRow>
          <div className="mt-3">
            <QuanLyDeTaiHeader
              content={TabArr}
              active={active}
              setActive={setActive}
            />
          </div>
          <div className="mt-1">{TabArr[active].content}</div>
        </>
      )}
      {isAdd && <ThemDetai setShow={setIsAdd} refetch={refetch} />}
      {isEdit && (
        <SuaDeTai setShow={setIsEdit} deTai={isEdit} refetch={refetch} />
      )}
    </div>
  );
}

export default QuanLyDeTai;
