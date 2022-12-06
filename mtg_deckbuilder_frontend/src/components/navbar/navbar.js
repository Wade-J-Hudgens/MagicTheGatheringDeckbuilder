import {Button, Container, Box, ButtonGroup, color} from "@chakra-ui/react";
import styled, { withTheme } from "styled-components";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {toggleAuth, toggleGuest, setUser} from "../../redux/userData/userData"
import { getUserData } from "../../api/userData";
import * as Components from "./navbarComponents"
import MenuOptions from "./menuOptions.json";
import { useNavigate } from "react-router-dom";
import AuthenticationComponent from "../authenticationComponent";
import {useColorMode, useColorModeValue, Switch, Text} from "@chakra-ui/react";

const Navbar = (props) => {
    const dispatch = useDispatch();
    const isGuest = useSelector((state) => state.userData.isGuest);
    const isAuthenticated = useSelector((state) => state.userData.authenticated);
    const user = useSelector((state) => state.userData.user);
    const navigate = useNavigate();
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <>
        <AuthenticationComponent />
        <Components.NavbarContainer style={{borderBottom: `1px solid ${colorMode==='light'?'black':'white'}`, zIndex: "10"}}>
            <Components.CompanyLogo/>
            <Components.LinksContainer>
                <ButtonGroup size={"md"} height={"100%"} variant={"ghost"}>
                    {MenuOptions.map((option) => {
                        return <Components.NavLink height={"100%"} onClick={()=>{navigate(option.href)}}>{option.label}</Components.NavLink>
                    })}
                </ButtonGroup>
                
            </Components.LinksContainer>

            <Components.AvatarThemeContainer>
                {isAuthenticated?<Components.AvatarData user={user}/>:<Button colorScheme={"blue"}>Sign In</Button>}
                <Components.ThemeSwitchContainer>
                    <Components.ThemeSwitch onClick={toggleColorMode} size={"xs"}>{colorMode==="light"?"Light":"Dark"}</Components.ThemeSwitch>
                </Components.ThemeSwitchContainer>
            </Components.AvatarThemeContainer>
        </Components.NavbarContainer>
        </>
    )
}

export default Navbar;