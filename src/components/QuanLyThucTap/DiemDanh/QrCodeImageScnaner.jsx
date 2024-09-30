import React, { useEffect, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import toast from "react-hot-toast";

function QrCodeImageScanner({ inputRef, mutate, location }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const html5QrCode = new Html5Qrcode("qr-code-full-region");

      html5QrCode
        .scanFile(file, /* showImage= */ true)
        .then((decodedText) => {
          mutate({ id: decodedText.replace(/"/g, ""), location });
        })
        .catch((err) => {
          console.log(err);
          toast.error("Quét ảnh không thành công");
        });
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        hidden="true"
      />{" "}
      <div hidden="true" id="qr-code-full-region"></div>;
    </div>
  );
}

export default QrCodeImageScanner;
