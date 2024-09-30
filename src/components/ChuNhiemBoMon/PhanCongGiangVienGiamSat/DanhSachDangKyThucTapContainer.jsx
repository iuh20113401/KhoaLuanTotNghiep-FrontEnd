import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import Button from "../../../ui/Button";
import StyledTable from "../../../ui/Table";
import ChiTietDangKyThucTap from "./ChiTietDangKyThucTap";
import { layDanhSachToanBoGiangVien } from "../../../services/User";
import toast from "react-hot-toast";
import { themGiangVienGiamSat } from "../../../services/ThucTap";

function DanhSachDangKyThucTapContainer({ DanhSachThucTap }) {
  const { data, isLoading } = useQuery({
    queryKey: ["DanhSachGiangVien"],
    queryFn: layDanhSachToanBoGiangVien,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: themGiangVienGiamSat,
    onSuccess: () => {
      toast.success("Phân công giảng viên thành công");
    },
  });

  const DanhSachGiangVien = data?.danhSachGiangVien || [];

  const [updatedThucTap, setUpdatedThucTap] = useState(
    DanhSachThucTap.map((tt) => ({
      ...tt,
      giangVien: tt.giangVien || "",
    }))
  );

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const getInitialGiangVienCount = () => {
    const count = {};
    DanhSachGiangVien.forEach((gv) => {
      count[gv._id] = 0;
    });
    return count;
  };

  const [giangVienCount, setGiangVienCount] = useState(
    getInitialGiangVienCount()
  );

  const handleChangeGiangVien = (thucTapId, value) => {
    setUpdatedThucTap((prevThucTapList) =>
      prevThucTapList.map((thucTap) =>
        thucTap._id === thucTapId ? { ...thucTap, giangVien: value } : thucTap
      )
    );
  };

  const handlePhanCongNgauNhien = () => {
    const danhSachThucTap = updatedThucTap.map((thucTap) => ({
      ...thucTap,
      giangVien: thucTap.giangVien || "",
    }));

    const newGiangVienCount = { ...giangVienCount };

    danhSachThucTap.forEach((thucTap) => {
      const shuffledGiangVien = shuffleArray(DanhSachGiangVien);
      shuffledGiangVien.sort(
        (a, b) => newGiangVienCount[a._id] - newGiangVienCount[b._id]
      );

      const assignedGiangVien = shuffledGiangVien[0];

      thucTap.giangVien = assignedGiangVien._id;
      newGiangVienCount[assignedGiangVien._id]++;
    });

    setUpdatedThucTap([...danhSachThucTap]);
    setGiangVienCount(newGiangVienCount);
  };

  function handleXacNhan() {
    const data = updatedThucTap.map((tt) => ({
      _id: tt._id,
      giangVien: tt.giangVien,
    }));
    mutate(data);
  }

  return (
    <div>
      <div className="p-2 text-end">
        <Button onClick={handlePhanCongNgauNhien} disabled={isPending}>
          Phân công ngẫu nhiên
        </Button>
      </div>
      {!isLoading && (
        <StyledTable>
          <thead>
            <tr>
              <th>STT</th>
              <th width="15%">Tên công ty</th>
              <th width="19%">Địa chỉ công ty</th>
              <th width="13%">Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Trạng thái</th>
              <th width="20%">Giảng viên</th>
            </tr>
          </thead>
          <tbody>
            {updatedThucTap.map((tt, index) => (
              <ChiTietDangKyThucTap
                key={tt._id}
                DanhSachGiangVien={DanhSachGiangVien}
                thucTap={tt}
                index={index}
                handleChangeGiangVien={handleChangeGiangVien}
              />
            ))}
          </tbody>
        </StyledTable>
      )}
      <div className="text-end mr-2 mb-2">
        <Button onClick={handleXacNhan} disabled={isPending}>
          Xác nhận
        </Button>
      </div>
    </div>
  );
}

export default DanhSachDangKyThucTapContainer;
