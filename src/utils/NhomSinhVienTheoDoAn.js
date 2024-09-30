const nhomSinhVienTheoDoAn = (danhSachSinhVien) => {
  const groupedStudents = {};

  danhSachSinhVien.forEach((sinhVien) => {
    const doAnId = sinhVien.doAnInfo.maDoAn;

    // Check if the group for this `doAnInfo._id` already exists
    if (!groupedStudents[doAnId]) {
      groupedStudents[doAnId] = {
        maDoAn: doAnId,
        tenDoAn: sinhVien.doAnInfo.tenDoAn,
        sinhVien: [],
      };
    }

    // Add the student's `Info` object to the group
    groupedStudents[doAnId].sinhVien.push(sinhVien.Info);
  });

  // Convert the object into an array
  const resultArray = Object.values(groupedStudents);

  return resultArray;
};

export default nhomSinhVienTheoDoAn;
