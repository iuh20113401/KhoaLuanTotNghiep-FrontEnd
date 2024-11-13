import StyledTable from "../../../ui/Table";

function ChiTietDiem({ diem }) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>LO</th>
          <th width="50%">Nội dung</th>
          <th width="10%">Điểm abet</th>
          <th width="15%">Điểm thang 10</th>
          <th width="20%">Ghi chú</th>
        </tr>
      </thead>
      <tbody>
        {diem?.map((d, index) => (
          <tr key={d.stt}>
            <td>{d.stt}</td>
            <td>{d.ten}</td>
            <td className="text-center">{d.diemAbet}</td>
            <td className="text-center">{d.diemThang10}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
      <tr>
        <td colSpan={2}>
          <h6 className="text-center pt-3">Tổng điểm</h6>
        </td>
        <td colSpan={3}>
          <h6 className="text-center pt-3">
            {diem.reduce((acc, d) => acc + d.diemThang10, 0) / diem.length}
          </h6>
        </td>
      </tr>
    </StyledTable>
  );
}

export default ChiTietDiem;
