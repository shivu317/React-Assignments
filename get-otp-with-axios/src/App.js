import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpResponse, setOtpResponse] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate mobile number
    if (mobileNumber.length !== 10 || !/^\d+$/.test(mobileNumber)) {
      setErrorMsg('Please enter a valid 10 digit Indian mobile number');
      return;
    }

    // Send POST request to API with mobile number in the body
    axios.post('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP', {
      mobile: parseInt(mobileNumber)
    })
    .then((response) => {
      setOtpResponse(response.data);
      setErrorMsg('');
      setMobileNumber('');
    })
    .catch((error) => {
      setErrorMsg(error.message);
      setOtpResponse('');
    });
  }

  return (
    <div>
      <h1>Generate OTP</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          value={mobileNumber}
          onChange={(event) => setMobileNumber(event.target.value)}
        />
        <button type="submit">Generate OTP</button>
      </form>
      {otpResponse && <p>OTP Generated: {otpResponse}</p>}
      {errorMsg && <p>{errorMsg}</p>}
    </div>
  );
}

export default App;

