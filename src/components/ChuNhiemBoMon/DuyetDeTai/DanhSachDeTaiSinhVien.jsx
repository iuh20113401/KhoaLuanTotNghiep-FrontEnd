import Card from "../../../ui/Card";
import ChiTietDeTaiSinhVien from "./ChiTietDeTaiSinhVien";
function DanhSachDeTaiSinhVien({ danhSachDeTai, refetch }) {
  return (
    <div>
      <Card>
        <div>
          {danhSachDeTai.map((deTai) => (
            <ChiTietDeTaiSinhVien
              refetch={refetch}
              deTai={deTai}
              key={deTai._id}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}

export default DanhSachDeTaiSinhVien;
