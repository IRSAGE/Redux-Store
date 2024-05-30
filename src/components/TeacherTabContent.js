import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addStudent, updateStudent } from "../store/teacherSlice";
import StudentTable from "./StudentTable";
import StudentForm from "./StudentForm";
import { Button, Modal } from "@mui/material";

const TeacherTabContent = ({ teacher }) => {
  const dispatch = useDispatch();
  const teacherData = useSelector((state) => state.teachers[teacher]);
  const [modalOpen, setModalOpen] = useState(false);
  const [level, setLevel] = useState("");
  const [editingStudent, setEditingStudent] = useState(null);

  const handleAddStudent = (level) => {
    setLevel(level);
    setEditingStudent(null);
    setModalOpen(true);
  };

  const handleEditStudent = (student, level) => {
    setLevel(level);
    setEditingStudent(student);
    setModalOpen(true);
  };

  const handleSubmitStudent = (student) => {
    if (editingStudent) {
      dispatch(
        updateStudent({
          teacher,
          level,
          studentId: editingStudent.id,
          updatedStudent: student,
        })
      );
    } else {
      dispatch(addStudent({ teacher, level, student }));
    }
    setModalOpen(false);
  };

  return (
    <div>
      <h3>O-Level Students</h3>
      <Button onClick={() => handleAddStudent("OLevel")}>
        Add O-Level Student
      </Button>
      <StudentTable
        students={teacherData.OLevel}
        onEdit={(student) => handleEditStudent(student, "OLevel")}
      />

      <h3>A-Level Students</h3>
      <Button onClick={() => handleAddStudent("ALevel")}>
        Add A-Level Student
      </Button>
      <StudentTable
        students={teacherData.ALevel}
        onEdit={(student) => handleEditStudent(student, "ALevel")}
      />

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <StudentForm
          onSubmit={handleSubmitStudent}
          initialData={editingStudent}
        />
      </Modal>
    </div>
  );
};

export default TeacherTabContent;
