import React, { useState, useEffect } from "react";

const StudentForm = ({ onSubmit, initialData }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setAge(initialData.age);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: initialData ? initialData.id : Date.now(), name, age });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <button type="submit">{initialData ? "Update" : "Submit"}</button>
    </form>
  );
};

export default StudentForm;
