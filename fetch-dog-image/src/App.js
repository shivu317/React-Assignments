import { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState("");

  useEffect(() => {
    async function fetchDogImage() {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message);
    }
    fetchDogImage();
  }, []);

  return (
    <div>
      <img src={dogImage} alt="dog" />
    </div>
  );
}

export default App;
