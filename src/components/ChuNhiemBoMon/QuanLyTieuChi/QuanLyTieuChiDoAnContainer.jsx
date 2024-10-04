import Button from "../../../ui/Button";
import StyledTable from "../../../ui/Table";
import ChiTietTieuChiDoAn from "./ChiTietTieuChiDoAn";

function QuanLyTieuChiDoAnContainer({ TieuChi, setIsThem }) {
  return (
    <div>
      <div className="">
        <Button
          variation="outline"
          color="var(--bs-primary)"
          onClick={() => setIsThem(true)}
        >
          Tạo mới tiêu chí
        </Button>
      </div>
      {TieuChi && (
        <div className="mt-1">
          <StyledTable>
            <thead>
              <tr>
                <th>STT</th>
                <th width="50%">Tên tiêu chí</th>
                <th className="text-center">Hướng dân</th>
                <th className="text-center">Phản biện</th>
                <th className="text-center">Hội đồng</th>
              </tr>
            </thead>
            <tbody>
              {TieuChi.LO.map((tc, i) => (
                <ChiTietTieuChiDoAn key={tc.ten} tieuChi={tc} index={i + 1} />
              ))}
            </tbody>
          </StyledTable>
        </div>
      )}
    </div>
  );
}

export default QuanLyTieuChiDoAnContainer;
