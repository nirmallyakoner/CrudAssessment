import { createSlice } from "@reduxjs/toolkit";

export const CrudSlice = createSlice({
  name: "Crud",
  initialState: {
    employeeData: [
      {
        name: "Demo Person 1 ",
        email: "2@gmail.com",
        address: "Kolkata",
        phone: "9999999999",
      },
      {
        name: "Demo Person 2 ",
        email: "p2@gmail.com",
        address: "Kolkata",
        phone: "8888888888",
      },
    ],
  },
  reducers: {
    Add_Employee: (state, action) => {
      state.employeeData.push(action.payload);
    },
      Remove_Employee: (state, action) => {
         let indexToRemove = action.payload
          state.employeeData.splice(indexToRemove, 1)
    }
  },
});
export const { Add_Employee, Remove_Employee } = CrudSlice.actions;
