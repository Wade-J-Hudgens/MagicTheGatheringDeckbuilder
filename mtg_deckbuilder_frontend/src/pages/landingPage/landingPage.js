import {Button} from "@chakra-ui/react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {toggleAuth, toggleGuest, setUser} from "../../redux/userData/userData"

import LoginRegister from "./sections/loginRegister";
import Navbar from "./sections/navbar";
import { getUserData } from "../../api/userData";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function LandingPage(props) {
    const Container = styled.div`
        width: 100vw;
        display: flex;
        flex-direction: column;
        max-width:100%;
    `
    const [initialLoading, setInitialLoading] = useState(true);
    const dispatch = useDispatch();
    const isGuest = useSelector((state) => state.userData.isGuest);
    const isAuthenticated = useSelector((state) => state.userData.authenticated);
    const user = useSelector((state) => state.userData.user);
    const navigate = useNavigate();

    useEffect(()=>{
        const authString = window.localStorage.getItem("authenticationString");
        if (authString === null || isGuest || isAuthenticated) {
            setInitialLoading(false);
            return;
        }

        getUserData()
        .then((res) => {
            if (res.authenticated) {
                dispatch(toggleAuth());
                dispatch(setUser({
                    username: res.username,
                    email: res.email,
                    firstName: res.firstName,
                    lastName: res.lastName
                }));
            }
            else {
                setInitialLoading(false)
            }
        })
    }, [])

    useEffect(()=>{
        if (user.username !== "" &&
            user.email !== "" &&
            user.firstName !== "" &&
            user.lastName !== ""
        ) {
            navigate("/home")
        }
    }, [user])

    const style = {}
    if (initialLoading) {
        style.overflow = "hidden";
    }
    return (
        <Container style={style}>
            <LoginRegister loading={initialLoading}/>
            <Navbar />
        </Container>
    )
}