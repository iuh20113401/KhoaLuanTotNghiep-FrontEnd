import Card from "../../../ui/Card";
import { StyledInput, StyledSelect } from "../../../ui/Input";
import { Col3, Col4, ColLg, StyledRow } from "../../../ui/Row";
import SortBy from "../../../ui/SortBy";

function FilterDoAn({ handleFilterDoAn }) {
  const handleInputChange = (e, field) => {
    handleFilterDoAn(field, e.target.value);
  };
  return (
    <>
      <Card.Header>
        <h6 className="mb-1">Tìm kiếm</h6>
        <StyledRow>
          <ColLg>
            <StyledInput
              width="90%"
              type="text"
              placeholder="Nhập tên đồ án cần tìm"
              onChange={(e) => handleInputChange(e, "doAn")}
            />
          </ColLg>
          <ColLg>
            <StyledInput
              width="90%"
              type="text"
              placeholder="Nhập tên sinh viên cần tìm"
              onChange={(e) => handleInputChange(e, "sinhVien")}
            />
          </ColLg>
          <ColLg style={{ display: "inline-flex", justifyContent: "end" }}>
            <SortBy
              label={"Sắp xếp đề tài"}
              options={[
                { value: "trangThai", label: "Trạng thái" },
                { value: "hoTen-asc", label: "Tên tăng dần" },
                { value: "hoTen-desc", label: "Tên giảm dần" },
                {
                  value: "maSo-asc",
                  label: "Mã số sinh viên tăng dần",
                },
                {
                  value: "maSo-desc",
                  label: "Mã số sinh viên giảm dần",
                },
                {
                  value: "maDoAn-asc",
                  label: "Mã đồ án tăng dần",
                },
                {
                  value: "maDoAn-desc",
                  label: "Mã đồ án giảm dần",
                },
              ]}
            />
          </ColLg>
        </StyledRow>
      </Card.Header>
    </>
  );
}

export default FilterDoAn;
