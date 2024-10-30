import Card from "../../../ui/Card";
import { StyledInput, StyledSelect } from "../../../ui/Input";
import { ColLg, StyledRow } from "../../../ui/Row";
import SortBy from "../../../ui/SortBy";

function FilterDoAn({ handleFilterDoAn, hocKy, namHoc }) {
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
              placeholder="Tên đồ án"
              onChange={(e) => handleInputChange(e, "doAn")}
            />
          </ColLg>
          <ColLg>
            <StyledInput
              width="90%"
              type="text"
              placeholder="Tên sinh viên"
              onChange={(e) => handleInputChange(e, "sinhVien")}
            />
          </ColLg>
          <ColLg>
            <StyledSelect
              width="90%"
              placeholder="Chọn học kỳ"
              defaultValue={hocKy}
              onChange={(e) => handleInputChange(e, "hocKy")}
            >
              <option value="">Chọn học kỳ</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </StyledSelect>
          </ColLg>
          <ColLg>
            <StyledInput
              width="90%"
              type="text"
              defaultValue={namHoc}
              placeholder="Năm học (2023-2024)"
              onChange={(e) => handleInputChange(e, "namHoc")}
              pattern="^\d{4}-\d{4}$"
              title="Năm học phải có định dạng YYYY-YYYY"
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
