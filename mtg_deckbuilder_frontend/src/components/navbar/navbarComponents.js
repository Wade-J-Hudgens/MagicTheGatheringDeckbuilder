import styled from "styled-components";
import { Container, Button, Avatar, Text, Switch } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import {AiFillHome, AiFillAppstore} from "react-icons/ai"

export const NavbarContainer = styled.div`
    position: sticky;
    top: 0px;
    width: 100%;
    height: 100px;
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: row;
`

export const CompanyLogo = styled.img`
    width: 230px;
    height: 100%;

    @media (max-width: 600px) {
        display: none;
    }
`

export const LinksContainer = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
`

export const NavLink = styled(Button)`
    flex: 1;
    max-width: 120px;
    height: 100px;
`
export const NavLinkMobile = styled(Button)`
    flex: 1;
    max-width: 120px;
    height: 100px;

    @media (max-width: 600px) {
        display: none;
        color: red;
    }
`

export const AvatarThemeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 15px;
    gap: 10px;
`
export const AuthContainer = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const AvatarDataContainer = styled.div`
    display: flex;
    width: 200px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
    @media (max-width: 470px) {
        width: 50px;
        padding: 0px;
        padding-bottom: 5px;
    }
`
const AvatarLabel = styled(Text)`
    @media (max-width: 600px) {
        display: none
    }
`
export const AvatarData = (props) => {
    return (
        <AvatarDataContainer>
            <Avatar name={`${props.user.firstName} ${props.user.lastName}`}/>
            <AvatarLabel>{props.user.username}</AvatarLabel>
        </AvatarDataContainer>
    )
}

export const ThemeSwitchContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50px;
`
export const ThemeSwitch = styled(Button)`
    width: 100%;
`

export const ThemeLabel = styled(Text)`

`