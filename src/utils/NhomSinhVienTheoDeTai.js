const nhomSinhVienTheoDeTai = (danhSachSinhVien) => {
  const groupedStudents = [];

  const tempGroups = {};

  danhSachSinhVien.forEach((sinhVien) => {
    const deTaiId = sinhVien.deTaiInfo._id;
    const infoId = sinhVien.Info._id;
    const doAnId = sinhVien.doAnInfo.maDoAn;

    // Check if the group for this `deTai._id` already exists
    if (!tempGroups[deTaiId]) {
      tempGroups[deTaiId] = {
        deTaiId,
        deTai: sinhVien.deTaiInfo.tenDeTai,
        sinhVienIds: [],
        doAnIds: new Set(), // Use a Set to store unique doAnIds
        soLuongSinhVien: 0, // Counter for students
        soLuongDoAn: 0, // Counter for doAn
      };
    }

    // Add the student's `Info._id` to the group
    tempGroups[deTaiId].sinhVienIds.push(infoId);

    // Increment the student count
    tempGroups[deTaiId].soLuongSinhVien++;

    // Add the doAnId to the set (unique values only)
    tempGroups[deTaiId].doAnIds.add(doAnId);
  });

  // Convert grouped object into an array and calculate `soLuongDoAn`
  Object.keys(tempGroups).forEach((deTaiId) => {
    groupedStudents.push({
      deTaiId: tempGroups[deTaiId].deTaiId,
      tenDeTai: tempGroups[deTaiId].deTai,
      sinhVienIds: tempGroups[deTaiId].sinhVienIds,
      soLuongSinhVien: tempGroups[deTaiId].soLuongSinhVien,
      soLuongDoAn: tempGroups[deTaiId].doAnIds.size, // Count unique doAn
    });
  });

  return groupedStudents;
};

export default nhomSinhVienTheoDeTai;
