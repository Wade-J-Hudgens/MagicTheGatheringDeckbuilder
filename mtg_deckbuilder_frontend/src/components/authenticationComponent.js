import { useSelector, useDispatch } from 'react-redux';
import {toggleAuth, toggleGuest, setUser} from "../redux/userData/userData"
import { useState, useEffect } from "react";
import { getUserData } from "../api/userData";

const AuthenticationComponent = (props) => {
    const dispatch = useDispatch();
    const isGuest = useSelector((state) => state.userData.isGuest);
    const isAuthenticated = useSelector((state) => state.userData.authenticated);
    const user = useSelector((state) => state.userData.user);

    useEffect(()=>{
        if (isAuthenticated) {
            return;
        }

        getUserData()
        .then((res) => {
            if (res.authenticated) {
                dispatch(toggleAuth(
                    true
                ))
                dispatch(setUser({
                    username: res.username,
                    email: res.email,
                    firstName: res.firstName,
                    lastName: res.lastName
                }))
            }
        })
    }, [])

    return <></>
}
export default AuthenticationComponent;