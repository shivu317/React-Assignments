import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    async function fetchDogImage() {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      setDogImage(response.data.message);
    }
    fetchDogImage();
  }, []);

  return (
    <div>
      <img src={dogImage} alt="Dog" />
    </div>
  );
}

export default App;
