import { useMutation, useQuery } from "@tanstack/react-query";
import {
  layDanhSachDoAnDat,
  themNhieuGiangVienPhanBien,
} from "../../../../services/DoAn";
import { useEffect, useState } from "react";
import { layDanhSachToanBoGiangVien } from "../../../../services/User";
import StyledTable from "../../../../ui/Table";
import ChiTietDoAnPhanBien from "../ChiTietDoAnPhanBien";
import toast from "react-hot-toast";
import Button from "../../../../ui/Button";
import DanhSachGiangVienPhanBienTable from "../TableSoLuongDoAn";
import LoadingSpinner from "../../../../ui/Spinner";
import { useDanhSachDoAn } from "../../../../hooks/useDanhSachDoAn";

function DanhSachChoPhanCong() {
  const {
    DanhSachDoAn,
    isLoading: doAnLoading,
    refetch,
  } = useDanhSachDoAn({
    key: "DanhSachDoAnDat",
    fn: layDanhSachDoAnDat,
  });

  const { data: giangVienData, isLoading: giangVienLoading } = useQuery({
    queryKey: ["DanhSachGiangVien"],
    queryFn: layDanhSachToanBoGiangVien,
  });
  let DanhSachGiangVien = giangVienData?.danhSachGiangVien || [];
  const isLoading = doAnLoading && giangVienLoading;
  const [updatedDoAn, setUpdatedDoAn] = useState([]);

  const [giangVienCount, setGiangVienCount] = useState([]);
  useEffect(() => {
    setUpdatedDoAn(
      DanhSachDoAn?.filter(
        (da) => !da.giangVienPhanBien1 && !da.giangVienPhanBien2
      ).map((da) => ({
        ...da,
        giangVienPhanBien: [
          da.giangVienPhanBien1 || "",
          da.giangVienPhanBien2 || "",
        ],
      })) || []
    );
  }, [DanhSachDoAn]);
  useEffect(() => {
    if (giangVienData?.danhSachGiangVien)
      setGiangVienCount(() => {
        const count = {};
        giangVienData?.danhSachGiangVien.forEach((gv) => {
          count[gv._id] = 0;
        });
        return count;
      });
  }, [giangVienData]);
  const { mutate, isPending } = useMutation({
    mutationFn: themNhieuGiangVienPhanBien,
    onSuccess: () => {
      toast.success("Phân công giảng viên phản biện thành công");
      refetch();
    },
  });
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleChangePhanBien = (doAnId, reviewerIndex, value) => {
    setUpdatedDoAn((prevDoAnList) =>
      prevDoAnList.map((doAn) =>
        doAn._id === doAnId
          ? {
              ...doAn,
              giangVienPhanBien: doAn.giangVienPhanBien.map((gv, idx) =>
                idx === reviewerIndex ? value : gv
              ),
            }
          : doAn
      )
    );
  };

  const handlePhanCongNgauNhien = () => {
    const danhSachPhanBien = updatedDoAn.map((doAn) => ({
      ...doAn,
      giangVienPhanBien: [...(doAn.giangVienPhanBien || [])],
    }));
    const count = {};
    giangVienData?.danhSachGiangVien.forEach((gv) => {
      count[gv._id] = 0;
    });
    const newGiangVienCount = { ...count };
    danhSachPhanBien.forEach((doAn) => {
      const giangVienHuongDan = doAn.giangVien._id;

      const giangVienPhanBien = DanhSachGiangVien.filter(
        (gv) => gv._id !== giangVienHuongDan
      );

      const shuffledGiangVien = shuffleArray(giangVienPhanBien);

      shuffledGiangVien.sort(
        (a, b) => newGiangVienCount[a._id] - newGiangVienCount[b._id]
      );

      // Assign giangVienPhanBien1 and giangVienPhanBien2 if not already assigned
      doAn.giangVienPhanBien[0] = shuffledGiangVien[0]._id;
      newGiangVienCount[shuffledGiangVien[0]._id]++;

      doAn.giangVienPhanBien[1] = shuffledGiangVien[1]._id;
      newGiangVienCount[shuffledGiangVien[1]._id]++;
    });

    setUpdatedDoAn([...danhSachPhanBien]);
    setGiangVienCount(newGiangVienCount);
  };

  function handleXacNhan() {
    const data = updatedDoAn.map((da) => ({
      _id: da._id,
      giangVienPhanBien1: da.giangVienPhanBien[0],
      giangVienPhanBien2: da.giangVienPhanBien[1],
    }));
    mutate(data);
  }

  const doAnWithGiangVienPhanBien =
    DanhSachDoAn?.filter(
      (da) => da.giangVienPhanBien1 && da.giangVienPhanBien2
    ).map((da) => ({
      ...da,
      giangVienPhanBien: [
        da.giangVienPhanBien1 || "",
        da.giangVienPhanBien2 || "",
      ],
    })) || [];
  if (isLoading)
    return (
      <div className="p-5">
        <LoadingSpinner />
      </div>
    );
  return (
    <div>
      <div className="p-2 text-end">
        <Button onClick={handlePhanCongNgauNhien} disabled={isPending}>
          Phân công ngẫu nhiên
        </Button>
      </div>

      <div className="pl-3 pr-3">
        <div className=" ">
          <DanhSachGiangVienPhanBienTable
            DanhSachGiangVien={DanhSachGiangVien}
            updatedDoAn={[...updatedDoAn, ...doAnWithGiangVienPhanBien]}
          />
        </div>

        <h5 className="mt-3">Khóa luận chưa có giảng viên phản biện:</h5>
        {updatedDoAn?.length > 0 ? (
          <StyledTable>
            <thead>
              <tr>
                <th>STT</th>
                <th width="12%">Mã khóa luận</th>
                <th width="19%">Tên khóa luận</th>
                <th width="13%">Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Giảng viên</th>
                <th width="25%">Giảng viên phản biện</th>
              </tr>
            </thead>
            <tbody>
              {updatedDoAn &&
                updatedDoAn.map((da, index) => (
                  <ChiTietDoAnPhanBien
                    key={da._id}
                    DanhSachGiangVien={DanhSachGiangVien}
                    doAn={da}
                    index={index}
                    handleChangePhanBien={handleChangePhanBien}
                    isAssign={true}
                  />
                ))}
            </tbody>
          </StyledTable>
        ) : (
          <div className="p-3">
            <p>Hiện chưa có khóa luận cần phân công</p>
          </div>
        )}
        {doAnWithGiangVienPhanBien && (
          <>
            <h5>Khóa luận đã có giảng viên phản biện:</h5>
            {doAnWithGiangVienPhanBien.length ? (
              <StyledTable>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th width="12%">Mã khóa luận</th>
                    <th width="19%">Tên khóa luận</th>
                    <th width="13%">Mã sinh viên</th>
                    <th>Tên sinh viên</th>
                    <th>Giảng viên</th>
                    <th width="25%">Giảng viên phản biện</th>
                  </tr>
                </thead>
                <tbody>
                  {doAnWithGiangVienPhanBien.map((da, index) => (
                    <ChiTietDoAnPhanBien
                      key={da._id}
                      DanhSachGiangVien={DanhSachGiangVien}
                      doAn={da}
                      index={index}
                      handleChangePhanBien={handleChangePhanBien}
                      isAssign={false}
                    />
                  ))}
                </tbody>
              </StyledTable>
            ) : (
              <div className="p-3">
                <p>Hiện chưa có khóa luận đã được phân công</p>
              </div>
            )}
          </>
        )}
      </div>
      <div className="text-end mr-2 mb-2">
        <Button
          onClick={handleXacNhan}
          disabled={isPending || updatedDoAn?.length <= 0}
          state={isPending || updatedDoAn.length <= 0 ? "disabled" : ""}
        >
          Xác nhận
        </Button>
      </div>
    </div>
  );
}

export default DanhSachChoPhanCong;
