import { createSlice } from '@reduxjs/toolkit';
import { userList } from '../Data/UserList';

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const { id, firstName, middleName, lastName, email, mobileNo } = action.payload;
            const userIndex = state.find(user => user.id == id);
            if (userIndex) {
                userIndex.firstName = firstName;
                userIndex.middleName = middleName;
                userIndex.lastName = lastName;
                userIndex.email = email;
                userIndex.mobileNo = mobileNo;
            }
        },
        deleteUser: (state, action) => {
            const { id } = action.payload;
            const userIndex = state.find(user => user.id == id);
            if (userIndex) {
                return state.filter(user => user.id !== id);
            }
        }
    }
})


export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;