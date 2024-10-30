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
              <th style={{ width: "15%" }}>Tên đề tài</th>
              <th style={{ width: "25%" }}>Mô tả </th>
              <th style={{ width: "20%" }}>Kỹ năng cần có</th>
              <th style={{ width: "15%" }}>Kết quả cần đạt</th>
              <th style={{ width: "15%" }}>Giảng viên</th>
              <th></th>
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
