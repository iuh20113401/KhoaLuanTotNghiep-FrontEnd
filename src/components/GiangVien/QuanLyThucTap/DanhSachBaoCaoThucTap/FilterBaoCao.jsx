import Card from "../../../../ui/Card";
import { StyledInput, StyledSelect } from "../../../../ui/Input";
import { Col3, Col4, ColLg, StyledRow } from "../../../../ui/Row";
import SortBy from "../../../../ui/SortBy";

function FilterBaoCao({ handleFilterBaoCao }) {
  const handleInputChange = (e, field) => {
    handleFilterBaoCao(field, e.target.value);
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
              placeholder="Nhập tên công ty cần tìm"
              onChange={(e) => handleInputChange(e, "congTy")}
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
                  value: "tenCongTy-asc",
                  label: "Tên công ty tăng dần",
                },
                {
                  value: "tenCongTy-desc",
                  label: "Tên công ty giảm dần",
                },
              ]}
            />
          </ColLg>
        </StyledRow>
      </Card.Header>
    </>
  );
}

export default FilterBaoCao;
