import React, { useState } from 'react';

const TableGenerator = () => {
  const [number, setNumber] = useState('');
  
  const handleInputChange = (e) => {
    setNumber(e.target.value);
  };
  
  const generateTable = () => {
    const table = [];
    
    for (let i = 1; i <= number; i++) {
      table.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{i * number}</td>
        </tr>
      );
    }
    
    return table;
  };
  
  return (
    <div className="container">
      <input className="input-field" type="number" value={number} onChange={handleInputChange} />
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {generateTable()}
        </tbody>
      </table>
    </div>
  );
};

export default TableGenerator;
