import { useState } from "react";
import Badges from "../../../ui/Badges";
import StyledTable from "../../../ui/Table";

const TRANG_THAI_STYLED = {
  false: { ten: "Không", bgcolor: "var(--bs-danger)" },
  true: { ten: "Có", bgcolor: "var(--bs-success)" },
};
function ChiTietTieuChiDoAn({ tieuChi, index }) {
  const [chiTiet, setChiTiet] = useState(false);
  return (
    <>
      <tr
        onClick={() => setChiTiet((chiTiet) => !chiTiet)}
        style={{ cursor: "pointer" }}
      >
        <td>{index}</td>
        <td>{tieuChi.ten}</td>
        <td className="text-center">
          <Badges
            bgcolor={TRANG_THAI_STYLED[tieuChi.isHuongDan || "false"].bgcolor}
          >
            {TRANG_THAI_STYLED[tieuChi.isHuongDan || "false"].ten}
          </Badges>
        </td>
        <td className="text-center">
          <Badges
            bgcolor={TRANG_THAI_STYLED[tieuChi.isPhanBien || "false"].bgcolor}
          >
            {TRANG_THAI_STYLED[tieuChi.isPhanBien || "false"].ten}
          </Badges>
        </td>
        <td className="text-center">
          <Badges
            bgcolor={TRANG_THAI_STYLED[tieuChi.isHoiDong || "false"].bgcolor}
          >
            {TRANG_THAI_STYLED[tieuChi.isHoiDong || "false"].ten}
          </Badges>
        </td>
      </tr>
      {chiTiet && (
        <tr>
          <td colSpan={5}>
            <StyledTable>
              <tr>
                <th width="25%">Điểm 1</th>
                <th width="25%">Điểm 2</th>
                <th width="25%">Điểm 3</th>
                <th width="25%">Điểm 4</th>
              </tr>
              <tr>
                {tieuChi.thangDiem.map((d) => (
                  <th>{`${d.diemNhoNhat} - ${d.diemLonNhat}`}</th>
                ))}
              </tr>
              <tr className="">
                {tieuChi.thangDiem.map((d) => (
                  <td
                    dangerouslySetInnerHTML={{
                      __html: d.noiDung.split("-").join("<br />-"),
                    }}
                  ></td>
                ))}
              </tr>
            </StyledTable>
          </td>
        </tr>
      )}
    </>
  );
}

export default ChiTietTieuChiDoAn;
