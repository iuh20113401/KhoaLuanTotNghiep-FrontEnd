import { HiChevronLeft } from "react-icons/hi2";
import FormThemDeTai from "../../components/GiangVien/QuanLyDeTai/FormThemDeTai";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import { StyledRow } from "../../ui/Row";

function ThemDetai({ setShow }) {
  return (
    <div>
      <h5>Quản lý đề tài {">"} Thêm đề tài</h5>
      <Card className="p-3 mt-3">
        <StyledRow gap={"0.8rem"}>
          <Button
            bgcolor="transparent"
            color="black"
            onClick={() => setShow(false)}
          >
            <HiChevronLeft />
          </Button>
          <h5>Thông tin đề tài</h5>
        </StyledRow>
        <FormThemDeTai />
      </Card>
    </div>
  );
}

export default ThemDetai;
