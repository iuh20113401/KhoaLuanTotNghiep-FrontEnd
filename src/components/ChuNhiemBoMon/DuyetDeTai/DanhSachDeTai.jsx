import Card from "../../../ui/Card";
import StyledTable from "../../../ui/Table";
import ChiTietDeTai from "./ChiTietDeTai";

function DanhSachDeTai({ danhSachDeTai, refetch }) {
  return (
    <div>
      <Card>
        <StyledTable>
          <thead>
            <tr>
              <td style={{ width: "15%" }}>Tên đề tài</td>
              <td style={{ width: "25%" }}>Mô tả </td>
              <td style={{ width: "20%" }}>Kỹ năng cần có</td>
              <td style={{ width: "15%" }}>Kết quả cần đạt</td>
              <td style={{ width: "15%" }}>Giảng viên</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {danhSachDeTai.map((deTai) => (
              <ChiTietDeTai refetch={refetch} deTai={deTai} key={deTai._id} />
            ))}
          </tbody>
        </StyledTable>
      </Card>
    </div>
  );
}

export default DanhSachDeTai;
