export const sortDoAnList = (list, sortBy) => {
  if (!list || !sortBy) return list;
  const field = sortBy.split("-")[0];
  const direction = sortBy.split("-")[1] === "asc" ? 1 : -1;
  return list.sort((a, b) => {
    if (field === "hoTen") {
      return a.sinhVien1.hoTen.localeCompare(b.sinhVien1.hoTen) * direction;
    } else if (field === "maSo") {
      return (a.sinhVien1.maSo - b.sinhVien1.maSo) * direction;
    } else if (field === "maDoAn") {
      return (a.maDoAn - b.maDoAn) * direction;
    } else if (field === "slda") {
      return (a.soLuongDoAn - b.soLuongDoAn) * direction;
    } else if (field === "tenDeTai") {
      return a.tenDeTai.localeCompare(b.tenDeTai) * direction;
    }
    return;
  });
};
