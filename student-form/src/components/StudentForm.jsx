import React, { useState } from 'react';
import "./StudentForm.css";
const StudentForm = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    rollNumber: '',
    grade: '',
    section: '',
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData((prevSubmittedData) => [...prevSubmittedData, studentData]);
    setStudentData({
      name: '',
      rollNumber: '',
      grade: '',
      section: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={studentData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Roll Number:
          <input
            type="text"
            name="rollNumber"
            value={studentData.rollNumber}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Grade:
          <input
            type="text"
            name="grade"
            value={studentData.grade}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Section:
          <input
            type="text"
            name="section"
            value={studentData.section}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      {submittedData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll Number</th>
              <th>Grade</th>
              <th>Section</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.rollNumber}</td>
                <td>{data.grade}</td>
                <td>{data.section}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentForm;
