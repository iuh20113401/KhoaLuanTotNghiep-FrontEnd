export const sortDoAnList = (list, sortBy) => {
  if (!list || !sortBy) return list;

  const field = sortBy.split("-")[0]; // e.g., "hoTen" or "maSo"
  const direction = sortBy.split("-")[1] === "asc" ? 1 : -1;
  return list.sort((a, b) => {
    if (field === "hoTen") {
      return a.sinhVien[0].hoTen.localeCompare(b.sinhVien[0].hoTen) * direction;
    } else if (field === "maSo") {
      return (a.sinhVien[0].maSo - b.sinhVien[0].maSo) * direction;
    } else if (field === "maDoAn") {
      return (a.maDoAn - b.maDoAn) * direction;
    } else if (field === "slda") {
      return (a.soLuongDoAn - b.soLuongDoAn) * direction;
    } else if (field === "tenDeTai") {
      return a.tenDeTai.localeCompare(b.tenDeTai) * direction;
    }
    return 0;
  });
};
