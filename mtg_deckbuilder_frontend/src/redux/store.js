import {configureStore} from "@reduxjs/toolkit";
import userDataReducer from "./userData/userData";

export default configureStore({
    reducer: {
        userData: userDataReducer
    }
})