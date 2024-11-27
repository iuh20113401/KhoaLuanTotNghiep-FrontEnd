import Card from "../../../../ui/Card";
import { StyledInput } from "../../../../ui/Input";
import { ColLg, StyledRow } from "../../../../ui/Row";
import SortBy from "../../../../ui/SortBy";

function FilterSinhVien({ handleFilterSinhVien }) {
  const handleInputChange = (e, field) => {
    handleFilterSinhVien(field, e.target.value);
  };
  return (
    <>
      <Card.Header>
        <StyledRow>
          <ColLg>
            <StyledInput
              width="90%"
              type="text"
              placeholder="Tên sinh viên"
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

export default FilterSinhVien;
