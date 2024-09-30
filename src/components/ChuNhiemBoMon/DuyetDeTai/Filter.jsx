import Card from "../../../ui/Card";
import { StyledInput, StyledSelect } from "../../../ui/Input";
import { Col3, ColLg, StyledRow } from "../../../ui/Row";
function Filter() {
  return (
    <>
      <Card.Header>
        <h5 class="card-title">Bộ lọc</h5>
        <StyledRow gap="3.2rem">
          <Col3>
            <StyledSelect>
              <option value="">Chọn giảng viên</option>
            </StyledSelect>
          </Col3>
          <Col3>
            <StyledSelect>
              <option value="">Chọn loại đề tài</option>
            </StyledSelect>
          </Col3>
        </StyledRow>
      </Card.Header>
      <Card.Header>
        <StyledRow>
          <ColLg>
            <StyledInput
              width="70%"
              type="text"
              placeholder="Nhập tên đề tài cần tìm"
            />
          </ColLg>
          <ColLg style={{ display: "inline-flex", justifyContent: "end" }}>
            <StyledSelect width="50%">
              <option>Sắp xếp đề tài</option>
            </StyledSelect>
          </ColLg>
        </StyledRow>
      </Card.Header>
    </>
  );
}

export default Filter;
