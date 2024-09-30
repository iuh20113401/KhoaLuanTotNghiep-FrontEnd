import Card from "../../../ui/Card";
import StyledTable from "../../../ui/Table";
import ChiTietDeTai from "./ChiTietDeTai";

function DanhSachDeTai({ danhSachDeTai }) {
  return (
    <div>
      <Card>
        <StyledTable>
          <thead>
            <tr>
              <td style={{ width: "15%" }}>Tên đề tài</td>
              <td style={{ width: "25%" }}>Mô tả </td>
              <td style={{ width: "15%" }}>Kỹ năng cần có</td>
              <td style={{ width: "18%" }}>Kết quả cần đạt</td>
              <td style={{ width: "15%" }}>Giảng viên</td>
              <td style={{ width: "15% !important" }}></td>
            </tr>
          </thead>
          <tbody>
            {danhSachDeTai.map((deTai) => (
              <ChiTietDeTai deTai={deTai} />
            ))}
          </tbody>
        </StyledTable>
      </Card>
    </div>
  );
}

export default DanhSachDeTai;
