import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teacherOne: {
    OLevel: [],
    ALevel: [],
  },
  teacherTwo: {
    OLevel: [],
    ALevel: [],
  },
};

const teacherSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      const { teacher, level, student } = action.payload;
      state[teacher][level].push(student);
    },
    updateStudent: (state, action) => {
      const { teacher, level, studentId, updatedStudent } = action.payload;
      const studentIndex = state[teacher][level].findIndex(
        (student) => student.id === studentId
      );
      if (studentIndex >= 0) {
        state[teacher][level][studentIndex] = updatedStudent;
      }
    },
  },
});

export const { addStudent, updateStudent } = teacherSlice.actions;
export default teacherSlice.reducer;
