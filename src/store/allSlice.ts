import { createSlice } from "@reduxjs/toolkit";

const allSlice = createSlice({
  name: "auth",
  initialState: { signIn: true,sidebar:false,loading:true,user:'',probs:false,userId:'' },
  reducers: {
    setSignIn(state,action) {
      state.signIn = action.payload;
    },
    setSidebar(state,action) {
      state.sidebar = action.payload;
    },
    setloading(state,action) {
      state.loading = action.payload;
    },
    setuser(state,action) {
      state.user = action.payload;
    },
    setProbs(state,action) {
      state.signIn = action.payload;
    },
    
    setuserID(state,action) {
      state.userId = action.payload;
    },
    
  },
});

export const allActions = allSlice.actions;

export default allSlice;
