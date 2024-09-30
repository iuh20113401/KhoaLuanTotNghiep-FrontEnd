import React, { useState } from "react";
import QrScanner from "react-qr-scanner";

function QrCodeScanner() {
  const [scanResult, setScanResult] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setScanResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div>
      <h3>QR Code Scanner</h3>
      <QrScanner
        delay={300}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      {scanResult && (
        <div>
          <h4>Scanned QR Code:</h4>
          <p>{scanResult}</p>
        </div>
      )}
    </div>
  );
}

export default QrCodeScanner;
