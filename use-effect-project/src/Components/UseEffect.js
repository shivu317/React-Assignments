import React, { useState, useEffect, useRef } from 'react';


export function ImageChanger() {
  const [imageUrl, setImageUrl] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    
    loadImage();
  }, []);

  const loadImage = () => {
    
    
    setImageUrl('https://preview.redd.it/prompts-ultra-realistic-nature-forest-nature-river-small-v0-8dql958gafna1.png?width=640&crop=smart&auto=webp&s=63db22d390c48d05fb146b6a3a507d22b0f4feac');
  };

  const handleButtonClick = () => {
    
    fileInputRef.current.click();
  
};

  const handleFileChange = (event) => {
    
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  };

  return (
    <div>
      <img src={imageUrl}  alt='Image'/>
      <input type="file" style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileChange} />
      <button onClick={handleButtonClick}>Change Image</button>
    </div>
  );
}
