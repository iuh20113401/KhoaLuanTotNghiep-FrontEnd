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
        {diem.diemAbet.map((d, index) => (
          <tr key={d.stt}>
            <td>{d.stt}</td>
            <td>{d.ten}</td>
            <td className="text-center">{d.diem}</td>
            <td className="text-center">{diem.diemThang10[index]}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default ChiTietDiem;
