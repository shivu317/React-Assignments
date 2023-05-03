import React, { useState } from 'react';

export function GenerateOtp() {
  const [mobile, setMobile] = useState('');
  const [otpStatus, setOtpStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the mobile number
    if (mobile.length !== 10 || isNaN(mobile)) {
      setOtpStatus('Invalid mobile number');
      return;
    }

    // Call the API to generate the OTP
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mobile })
    };
    fetch('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP', requestOptions)
      .then(response => response.json())
      .then(data => {
        // OTP successfully generated
        setOtpStatus(`OTP sent to ${mobile}`);
        setMobile('');
      })
      .catch(error => {
        // Error occurred while calling the API
        setOtpStatus('Error generating OTP');
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Mobile number:
          <input type="tel" pattern="[0-9]{10}" value={mobile} onChange={(e) => setMobile(e.target.value)} />&nbsp;&nbsp;
        </label>
        <button type="submit">Generate OTP</button>
      </form>
      {otpStatus && <p>{otpStatus}</p>}
    </div>
  );
}

export default GenerateOtp;
