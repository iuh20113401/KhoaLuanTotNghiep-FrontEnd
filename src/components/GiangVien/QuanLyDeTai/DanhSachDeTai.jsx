import Card from "../../../ui/Card";
import StyledTable from "../../../ui/Table";
import ChiTietDeTai from "./ChiTietDeTai";

function DanhSachDeTai({ danhSachDeTai, setIsEdit }) {
  return (
    <div>
      <Card>
        <StyledTable>
          <thead>
            <tr>
              <th style={{ width: "15%" }}>Tên đề tài</th>
              <th style={{ width: "25%" }}>Mô tả </th>
              <th style={{ width: "15%" }}>Kỹ năng cần có</th>
              <th style={{ width: "18%" }}>Kết quả cần đạt</th>
              <th style={{ width: "15%" }}>Trạng thái</th>
              <th style={{ width: "15% !important" }}></th>
            </tr>
          </thead>
          <tbody>
            {danhSachDeTai.map((deTai) => (
              <ChiTietDeTai
                deTai={deTai}
                key={deTai._id}
                setIsEdit={setIsEdit}
              />
            ))}
          </tbody>
        </StyledTable>
      </Card>
    </div>
  );
}

export default DanhSachDeTai;
