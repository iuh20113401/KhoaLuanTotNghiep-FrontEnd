import StyledTable from "../../../ui/Table";

function ChiTietDiem({ diem }) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>LO</th>
          <th width="50%">Nội dung</th>
          <th width="10%">Điểm abet</th>
          <th width="20%">Ghi chú</th>
          <th>Thang điểm 10</th>
        </tr>
      </thead>
      <tbody>
        {diem?.diemAbet?.map((d, index) => (
          <tr key={d.stt}>
            <td>{d.stt}</td>
            <td>{d.ten}</td>
            <td className="text-center">{d.diem}</td>
            <td></td>
            {index === 0 ? (
              <td rowSpan={diem.diemAbet.length} className="text-center">
                {diem.diemTong}
              </td>
            ) : (
              <td></td>
            )}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default ChiTietDiem;
