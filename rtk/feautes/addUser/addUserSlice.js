import { createSlice } from "@reduxjs/toolkit";




const GetParam=()=>{
  const uniqueParam = new Date().getTime();
  return uniqueParam;
}

const UserData = {
  access:"",
  email : "",
  first_name : "",
  id : "",
  isAdmin :  "",
  is_driver :  "",
  is_vendor : "",
  last_name :  "",
  phone_number: "",
  refresh: "",
  token: "",
  username: "",  
};

const addUserSlices = createSlice({
  name: "User",
  initialState: UserData,
  reducers: {
    addUser: (state, action) => {
     
      state.access = action.payload.access;
      state.email = action.payload.email;
      state.first_name = action.payload.first_name;
      state.id = action.payload.id;
      state.isAdmin = action.payload.isAdmin;
      state.is_driver = action.payload.is_driver;
      state.is_vendor = action.payload.is_vendor;
      state.last_name = action.payload.last_name;
      state.phone_number = action.payload.phone_number;
      state.refresh = action.payload.refresh;
      state.token = action.payload.token;
      state.username = action.payload.username;
    },
    removeUser: (state, action) => {
      state.access = ""
      state.email = ""
      state.first_name = ""
      state.id = ""
      state.isAdmin = ""
      state.is_driver = ""
      state.is_vendor = ""
      state.last_name = ""
      state.phone_number = ""
      state.refresh = ""
      state.token = ""
      state.username = ""
    },
    
  },
});

export default addUserSlices.reducer;
export const addUserActions = addUserSlices.actions;
