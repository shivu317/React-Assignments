import React, { useRef } from 'react';

export function FilePicker() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <input type="file" style={{ display: 'none' }} ref={fileInputRef} />
      <button onClick={handleButtonClick}>Pick a File</button>
    </div>
  );
}