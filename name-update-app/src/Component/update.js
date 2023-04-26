import React, { useState } from "react";

function NameUpdater() {
  const [name, setName] = useState("");
  const [updatedName, setUpdatedName] = useState("****");

  const handleSubmit = (event) => {
    event.preventDefault();
    setUpdatedName(name);
    setName("");
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Hello, {updatedName}!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NameUpdater;
