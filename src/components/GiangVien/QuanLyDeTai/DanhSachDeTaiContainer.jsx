import Card from "../../../ui/Card";
import StyledTable from "../../../ui/Table";
import ChiTietDeTai from "./ChiTietDeTai";

function DanhSachDeTaiContainer({
  danhSachDeTai,
  refetch,
  sortedDoAn,
  setIsEdit,
  isSinhVien,
}) {
  return (
    <div>
      <StyledTable className="overflow">
        <thead>
          <tr>
            <th style={{ width: "15%" }}>Tên đề tài</th>
            <th style={{ width: "25%" }}>Mô tả </th>
            <th style={{ width: "15%" }}>Kỹ năng cần có</th>
            <th style={{ width: "18%" }}>Kết quả cần đạt</th>
            {isSinhVien ? (
              <>
                {" "}
                <th style={{ width: "15%" }}>Mã số sinh viên</th>
                <th style={{ width: "15%" }}>Họ tên</th>
              </>
            ) : (
              <th style={{ width: "15%" }}>Trạng thái</th>
            )}
            <th style={{ width: "15% !important" }}></th>
          </tr>
        </thead>
        <tbody>
          {sortedDoAn.map((deTai) => (
            <ChiTietDeTai
              deTai={deTai}
              key={deTai._id}
              setIsEdit={setIsEdit}
              refetch={refetch}
              isSinhVien={isSinhVien}
            />
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
}

export default DanhSachDeTaiContainer;
