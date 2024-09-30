import Card from "../../ui/Card";
import StyledTable from "../../ui/Table";
import DiemDanhButton from "./DiemDanh/DiemDanhButton";

function DiemDanhContainer() {
  return (
    <div>
      <h5>Điểm danh</h5>
      <Card className="p-2">
        <DiemDanhButton />
        <StyledTable>
          <thead>
            <tr>
              <td>STT</td>
              <td>Mã sinh viên</td>
              <td>Tên sinh viên</td>
              <td>Sô buổi điểm danh</td>
            </tr>
          </thead>
        </StyledTable>
      </Card>
    </div>
  );
}

export default DiemDanhContainer;
