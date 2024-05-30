import React from "react";

const StudentTable = ({ students, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>
              <button onClick={() => onEdit(student)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
