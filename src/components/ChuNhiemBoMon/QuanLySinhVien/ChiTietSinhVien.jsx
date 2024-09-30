import Badges from "../../../ui/Badges";

const TRANG_THAI_STYLED = {
  0: { ten: "Không", bgcolor: "var(--bs-danger)" },
  1: { ten: "Có", bgcolor: "var(--bs-success)" },
};
function ChiTietSinhVien({ sinhvien, index }) {
  return (
    <tr>
      <td>
        <p>{index + 1}</p>
      </td>
      <td>
        <p>{sinhvien?.maSo}</p>
      </td>
      <td>
        <p>{sinhvien?.ten}</p>
      </td>
      <td>
        <p>{sinhvien?.email}</p>
      </td>
      <td>
        <p>{sinhvien?.soDienThoai}</p>
      </td>
      <td>
        {
          <Badges
            content={TRANG_THAI_STYLED[sinhvien?.doAn ? 1 : 0].ten}
            bgcolor={TRANG_THAI_STYLED[sinhvien?.doAn ? 1 : 0].bgcolor}
          />
        }
      </td>
      <td>
        <Badges
          content={TRANG_THAI_STYLED[sinhvien?.thucTap ? 1 : 0].ten}
          bgcolor={TRANG_THAI_STYLED[sinhvien?.thucTap ? 1 : 0].bgcolor}
        />
      </td>
      <td>
        <Badges
          content={TRANG_THAI_STYLED[sinhvien?.pretest === "Đạt" ? 1 : 0].ten}
          bgcolor={
            TRANG_THAI_STYLED[sinhvien?.pretest === "Đạt" ? 1 : 0].bgcolor
          }
        />
      </td>
    </tr>
  );
}

export default ChiTietSinhVien;
