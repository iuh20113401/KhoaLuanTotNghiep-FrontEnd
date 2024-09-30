export const sortBaoCaoList = (list, sortBy) => {
  if (!list || !sortBy) return list;

  const field = sortBy.split("-")[0]; // e.g., "hoTen" or "maSo"
  const direction = sortBy.split("-")[1] === "asc" ? 1 : -1;
  return list.sort((a, b) => {
    if (field === "hoTen") {
      return a.userInfo.hoTen.localeCompare(b.userInfo.hoTen) * direction;
    } else if (field === "maSo") {
      return (a.userInfo.maSo - b.userInfo.maSo) * direction;
    } else if (field === "tenCongTy") {
      return a.tenCongTy.localeCompare(b.tenCongTy) * direction;
    }
    return 0;
  });
};
