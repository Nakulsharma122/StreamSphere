import {createSlice} from "@reduxjs/toolkit";
const userSlice = createSlice({
    name :"user",
    intialState: null,
    reducers : {
        addUser :(State, action) =>{
            State.user = action.payload;
        },
        removeUser:(State , action) =>{
            State.user = null;
        }
    }
});

export const {addUser, removeUser} = userSlice.actions;
export default userSlice.reducers;