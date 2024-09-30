import { useQuery } from "@tanstack/react-query";
import { debounce } from "lodash"; // Add lodash for debouncing
import { useEffect, useState, useCallback } from "react";

export const useDanhSachDoAn = ({ key, fn }) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: [key],
    queryFn: fn,
  });
  const DanhSachDoAn = data?.result.sort((a, b) => a.maDoAn - b.maDoAn);
  const [filterDoAn, setFilterDoAn] = useState(DanhSachDoAn);

  const handleFilterDoAn = useCallback(
    debounce((field, value) => {
      let filtered;
      if (field === "doAn") {
        filtered = filterDoAn.filter((da) => {
          return da.tenDoAn
            .toLowerCase()
            .replace(/ /g, "")
            .includes(value.toLowerCase().replace(/ /g, "").trim());
        });
      } else {
        filtered = filterDoAn.filter((sinhVien) => {
          return sinhVien.sinhVien.some((sv) => {
            return sv?.hoTen
              .toLowerCase()
              .replace(/ /g, "")
              .includes(value.toLowerCase().replace(/ /g, "").trim());
          });
        });
      }
      setFilterDoAn(filtered);
    }, 300),
    [DanhSachDoAn]
  );

  useEffect(() => {
    if (DanhSachDoAn?.length > 0) setFilterDoAn(DanhSachDoAn);
  }, [DanhSachDoAn]);

  return {
    DanhSachDoAn,
    filterDoAn,
    setFilterDoAn,
    isLoading,
    handleFilterDoAn,
    refetch,
  };
};
