import { useState } from "react";
import { StyledInput, StyledSelect } from "../../../ui/Input";
import { Col1, Col3, Col4, Col9, ColLg, StyledRow } from "../../../ui/Row";
import Card from "../../../ui/Card";
import SortBy from "../../../ui/SortBy";
import { FilterSelect } from "../../../ui/Filter";
import styled from "styled-components";
import Button from "../../../ui/Button";
import { HiTable, HiViewList } from "react-icons/hi";
const StyleTrangThai = {
  0: {
    ten: "Chờ duyệt",
  },
  1: {
    ten: "Đã duyệt",
  },
  2: {
    ten: "Chỉnh sửa",
  },
};
function Filter({
  DanhSachDeTai,
  handleFilterDeTai,
  isShowTable,
  setIsShowTable,
}) {
  const trangThaiSet = new Set(
    DanhSachDeTai.map((dt) => (dt.trangThai === 0 ? (dt?.ghiChu ? 2 : 0) : 1))
  );
  const danhMucSet = new Set(DanhSachDeTai.map((dt) => dt.danhMuc));
  const soLuongDoAnSet = new Set(DanhSachDeTai.map((dt) => dt.soLuongDoAn));
  const uniqueTrangThai = Array.from(trangThaiSet).map((tt) => ({
    value: tt,
    label: StyleTrangThai[tt].ten,
  }));
  const uniqueDanhMuc = Array.from(danhMucSet);
  const uniqueSoLuongDoAn = Array.from(soLuongDoAnSet);
  const handleInputChange = (e, field) => {
    handleFilterDeTai(field, e.target.value);
  };
  return (
    <>
      <Card.Header>
        <h5 className="card-title">Bộ lọc</h5>
        <StyledRow gap="1.2rem">
          <ColLg>
            <FilterSelect
              label="Trạng thái"
              filterField="trangThai"
              options={uniqueTrangThai.map((tt) => ({
                value: tt.value,
                label: tt.label,
              }))}
              onChange={(e) => handleInputChange(e, "trangThai")}
            />
          </ColLg>
          <ColLg>
            <FilterSelect
              label="Danh mục"
              filterField="danhMuc"
              options={uniqueDanhMuc.map((tt) => ({
                value: tt,
                label: tt,
              }))}
              onChange={(e) => handleInputChange(e, "danhMuc")}
            />
          </ColLg>

          <ColLg>
            <FilterSelect
              label="Số lượng sinh viên"
              filterField="soLuongDoAn"
              options={uniqueSoLuongDoAn.map((sl) => ({
                value: sl,
                label: sl,
              }))}
              onChange={(e) => handleInputChange(e, "soLuong")}
            />
          </ColLg>
        </StyledRow>
      </Card.Header>
      <Card.Header>
        <StyledRow gap="1.2rem">
          <ColLg>
            <StyledInput
              width="100%"
              type="text"
              placeholder="Nhập tên đề tài cần tìm"
              onChange={(e) => handleInputChange(e, "tenDeTai")}
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
                  label: "Số lượng khóa luận giảm dần",
                },
                {
                  value: "slda-desc",
                  label: "Số lượng khóa luận tăng dần",
                },
              ]}
              values={uniqueTrangThai}
            />
          </ColLg>
          <ColLg>
            <StyledRow gap=".2rem">
              <Button
                variation="icon"
                bgcolor={
                  isShowTable === true ? "var(--bs-primary)" : "var(--bs-white)"
                }
                color={isShowTable === true ? "white" : "secondary-900"}
                onClick={(e) => setIsShowTable(true)}
              >
                <HiTable size={"1.4rem"} />
              </Button>
              <Button
                variation="icon"
                bgcolor={isShowTable === false ? "bg-primary-600" : "bg-white"}
                color={isShowTable === false ? "white" : "secondary-900"}
                onClick={(e) => setIsShowTable(false)}
              >
                <HiViewList size={"1.4rem"} />
              </Button>
            </StyledRow>
          </ColLg>
        </StyledRow>
      </Card.Header>
    </>
  );
}

export default Filter;
