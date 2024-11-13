import Card from "../../../ui/Card";
import { FilterSelect } from "../../../ui/Filter";
import { StyledInput } from "../../../ui/Input";
import { ColLg, StyledRow } from "../../../ui/Row";
import SortBy from "../../../ui/SortBy";

function Filter({ DanhSachDeTai, handleFilterDeTai }) {
  const danhMucSet = new Set(DanhSachDeTai.map((dt) => dt.danhMuc));
  const soLuongDoAnSet = new Set(DanhSachDeTai.map((dt) => dt.soLuongDoAn));
  const giangVienSet = new Set(DanhSachDeTai.map((dt) => dt.giangVien.hoTen));
  const uniqueDanhMuc = Array.from(danhMucSet);
  const uniqueSoLuongDoAn = Array.from(soLuongDoAnSet);
  const uniqueGiangVien = Array.from(giangVienSet);
  const handleInputChange = (e, field) => {
    handleFilterDeTai(field, e.target.value);
  };
  return (
    <>
      <Card.Header>
        <h6 class="pb-1">Bộ lọc</h6>
        <StyledRow gap="1.2rem">
          <ColLg>
            <StyledInput
              width="100%"
              type="text"
              placeholder="Nhập tên đề tài cần tìm"
              onChange={(e) => handleInputChange(e, "tenDeTai")}
            />
          </ColLg>
          <ColLg>
            <FilterSelect
              label="Giảng viên"
              options={uniqueGiangVien.map((gv) => ({
                value: gv,
                label: gv,
              }))}
              onChange={(e) => handleInputChange(e, "giangVien")}
            />
          </ColLg>
          <ColLg>
            <FilterSelect
              label="Danh mục đề tài "
              options={uniqueDanhMuc.map((dm) => ({
                value: dm,
                label: dm,
              }))}
              onChange={(e) => handleInputChange(e, "danhMuc")}
            />
          </ColLg>
          <ColLg>
            <FilterSelect
              label="Số lượng sinh viên"
              options={uniqueSoLuongDoAn.map((sl) => ({
                value: sl,
                label: sl,
              }))}
              onChange={(e) => handleInputChange(e, "soLuong")}
            />
          </ColLg>
          <ColLg style={{ display: "inline-flex", justifyContent: "end" }}>
            <SortBy
              label={"Sắp xếp đề tài"}
              options={[
                { value: "trangThai", label: "Trạng thái" },
                { value: "tenDeTai-asc", label: "Tên tăng dần" },
                { value: "tenDeTai-desc", label: "Tên giảm dần" },
                {
                  value: "slda-asc",
                  label: "Số lượng đồ án giảm dần",
                },
                {
                  value: "slda-desc",
                  label: "Số lượng đồ án tăng dần",
                },
              ]}
            />
          </ColLg>
        </StyledRow>
      </Card.Header>
    </>
  );
}

export default Filter;
