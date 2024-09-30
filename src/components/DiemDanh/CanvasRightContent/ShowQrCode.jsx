function ShowQrCode({ qrCode }) {
  return (
    <div
      className="text-center align-center justify-center flex "
      style={{ width: "100%", height: "100%", flexDirection: "column" }}
    >
      <h3>QR Code</h3>
      <img src={qrCode} alt="QR Code" width="30%" />
      <h6>Sinh viên có thể quét mã này để điểm danh trên hệ thống</h6>
    </div>
  );
}

export default ShowQrCode;
