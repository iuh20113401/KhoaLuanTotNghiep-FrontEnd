import { useState } from "react";
import { StyledInput, StyledSelect } from "../../../ui/Input";
import { Col3, Col4, ColLg, StyledRow } from "../../../ui/Row";
import Card from "../../../ui/Card";
import SortBy from "../../../ui/SortBy";
import { FilterSelect } from "../../../ui/Filter";
import styled from "styled-components";
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
function Filter({ DanhSachDeTai }) {
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

  return (
    <>
      <Card.Header>
        <h5 className="card-title">Bộ lọc</h5>
        <StyledRow gap="3.2rem">
          <Col3>
            <FilterSelect
              label="Trạng thái"
              filterField="trangThai"
              options={uniqueTrangThai.map((tt) => ({
                value: tt.value,
                label: tt.label,
              }))}
            />
          </Col3>
          <Col3>
            <FilterSelect
              label="Danh mục đề tài"
              filterField="danhMuc"
              options={uniqueDanhMuc.map((dm) => ({
                value: dm,
                label: dm,
              }))}
            />
          </Col3>
          <Col4>
            <FilterSelect
              label="Số lượng sinh viên"
              filterField="soLuongDoAn"
              options={uniqueSoLuongDoAn.map((sl) => ({
                value: sl,
                label: sl,
              }))}
            />
          </Col4>
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
              values={uniqueTrangThai}
            />
          </ColLg>
        </StyledRow>
      </Card.Header>
    </>
  );
}

export default Filter;
