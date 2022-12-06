import {createSlice} from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
        authenticated: false,
        isGuest: false,
        user: {
            username: "",
            email: "",
            firstName: "",
            lastName: "",
        }
    },
    reducers: {
        toggleAuth: (state) => {
            state.authenticated = !state.authenticated
        },
        toggleGuest: (state) => {
            state.isGuest = !state.isGuest
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
})

export const {toggleAuth, toggleGuest, setUser} = userDataSlice.actions;
export default userDataSlice.reducer;