import { useState } from "react";
import QuanLyTieuChiDoAnContainer from "../../components/ChuNhiemBoMon/QuanLyTieuChi/QuanLyTieuChiDoAnContainer";
import Card from "../../ui/Card";
import FormThemTieuChi from "../../components/ChuNhiemBoMon/QuanLyTieuChi/FormThemTieuChi";
import { useQuery } from "@tanstack/react-query";
import { layTieuChiDoAn } from "../../services/TieuChi";

function QuanLyTieuChi() {
  const [isThem, setIsThem] = useState(null);
  const { data, isLoading } = useQuery({
    queryKey: ["TieuChiDoAn"],
    queryFn: layTieuChiDoAn,
  });
  const TieuChiDoAn = data?.result;
  return (
    <div>
      <h5>Quản lý tiêu chí đánh giá</h5>
      {!isThem && (
        <div>
          {!isLoading && (
            <Card className="mt-3 p-2">
              <h5>Tiêu chí chấm điểm khóa luận</h5>
              <div className="mt-2">
                <QuanLyTieuChiDoAnContainer
                  TieuChi={TieuChiDoAn}
                  setIsThem={setIsThem}
                />
              </div>
            </Card>
          )}
          <Card className="mt-3 p-2">
            <h5>Tiêu chí chấm điểm thực tập cho doanh nghiệp</h5>
            <div className="mt-2">
              <QuanLyTieuChiDoAnContainer />
            </div>
          </Card>
          <Card className="mt-3 p-2">
            <h5>Tiêu chí chấm điểm thực tập cho giảng viên</h5>
            <div className="mt-2">
              <QuanLyTieuChiDoAnContainer />
            </div>
          </Card>
        </div>
      )}
      {isThem && (
        <div>
          <Card className="mt-3 p-2">
            <FormThemTieuChi />
          </Card>
        </div>
      )}
    </div>
  );
}

export default QuanLyTieuChi;
