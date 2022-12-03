import styled, {keyframes} from "styled-components";
import {Heading, Input, Text, Button, Checkbox, Link, useColorMode, useColorModeValue, Image, useToast} from "@chakra-ui/react";
import {SlArrowDown} from "react-icons/sl";
import { useEffect, useState } from "react";
import {login} from "../../../api/login"
import errorCodes from "../../../api/codes.json";

import BlurredLiliana from "../assets/BlurredLillianaBackground.png";
import BlurredGideon from "../assets/BlurredGideonBackground.png";
import { registerUser } from "../../../api/register";
import {getUserData} from "../../../api/userData";

import { RegisterModal } from "./registerModal";

const Container = styled.div`
    position: relative;
    width: 100vw;
    max-width:100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const BackgroundImage = styled(Image)`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
    object-position: center;
`
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    max-width: 100%;
    backdrop-filter: blur(40px);
    padding: 20px;

    box-shadow: 0px 0px 50px white;

`
const Title = styled(Heading)`
    margin-bottom: 20px;
    color: white
`  
const LogRegInputsContainer = styled.div`
    width: 400px;
    max-width: 90%;
    display: flex;
    justify-content: center;
    gap: 15px;
    @media (max-width: 300px) {
        flex-direction: column;
        gap: 0px;
    }
`
const LoginInputsContainer = styled.div`
    display: flex;
    width: 500px;
    max-width: 90%;
    @media (max-width: 300px) {
        flex-direction: column;
    }
`
const LogRegInContainer = styled.div`
    display: flex;
    align-items:center;
    flex: 1;
`
const EmailPassTextbox = styled(Input)`
    margin: 2px;
    &::placeholder {
        text-align: center;
    }
    @media (max-width: 300px) {
        width: 100%;
    }
`
const RememberMeCheckboxContainer = styled.div`
    max-width: 90%;
    flex: 1;
    display: flex;
    flex-direction: row;
`
const RememberMeCheckbox = styled(Checkbox)`
    color: white
`
const LoginRegisterButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-top: 10px;
    margin-bottom: 15px;
    @media (max-width: 300px) {
        width: 100%;
    }

`
const LoginRegisterButton = styled(Button)`
    height: 50px;
    margin: 2px;
`
const GuestLink = styled(Button)`
color: white;
margin-top: 20px;
`



const ScrollDownContainer = styled.div`
    position: absolute;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ScrollDownLabel = styled(Text)`
    font-size: 20px;
`
const ScrollIconContainer = styled.div`
    
`
const ScrollDownIconAnimation = keyframes`
    0% {bottom: 0px}
    50% {bottom: 30px}
    100% {bottom: 0px}
`
const ScrollDownIcon = styled(SlArrowDown)`
    position: relative;
    animation-name: ${ScrollDownIconAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    font-size: 60px;
    bottom: 0px;
    color: white;
`
export default function LoginRegister(props) {
    const {colorMode, toggleColorMode} = useColorMode();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const [registerModal, setRegisterModal] = useState(false);

    const [loading, setLoading] = useState(false);

    const toast = useToast();

    const loginOnClick = () => {
        setLoading(true);
        login(email, password, rememberMe).then((response) => {
            return response;
        })
        .then((res) => {
            if (res.success) {
                window.localStorage.setItem('authenticationString', res.authenticationString);
                setLoading(false);
                return true;
            }
            else {
                toast({
                    position: 'top',
                    status: 'error',
                    title: errorCodes.login.error[res.error.toString()]
                });
                setLoading(false);
                return false;
            }
        })
        .then((res) => {
            if (res) {
                console.log("made")
                return getUserData();
            }
            return false;
        })
        .then((res) => {
            if (res !== false) {
                console.log(res);
            }
        })
    }
    const registerOnClick = () => {
        setRegisterModal(true);
    }

    const TextColor=useColorModeValue('white', 'white')
    
    return (
        <Container>
            <BackgroundImage src={colorMode==='light'?BlurredGideon:BlurredLiliana} />
            <RegisterModal isOpen={registerModal} closeModal={()=>{setRegisterModal(false)}}/>
            <ContentContainer>
            <Title>MTG Toolkit</Title>
            <LoginInputsContainer>
                <LogRegInContainer key={"emailInputFieldInputContainer"}>
                    <EmailPassTextbox disabled={loading} key={"emailInputFieldLogin"} value={email} onChange={e => setEmail(e.target.value)} variant={"flushed"} color={TextColor} placeholder="Email" aria-label="Email"></EmailPassTextbox>
                </LogRegInContainer>
                <LogRegInContainer>
                    <EmailPassTextbox disabled={loading} key={"passwordInputFieldLogin"} value={password} onChange={(e)=>{setPassword(e.target.value)}} variant={"flushed"} color={TextColor} placeholder="Password" type="password" aria-label="Password"></EmailPassTextbox>
                </LogRegInContainer>
            </LoginInputsContainer>
            
            <LogRegInputsContainer>
                <LoginRegisterButtonsContainer>
                    <LoginRegisterButton disabled={loading} color={TextColor} variant='outline' onClick={loginOnClick}>Login</LoginRegisterButton>
                    <LoginRegisterButton disabled={loading} color={TextColor} variant='outline' onClick={registerOnClick}>Register</LoginRegisterButton>
                </LoginRegisterButtonsContainer>
                <RememberMeCheckboxContainer>
                    <RememberMeCheckbox disabled={loading} value={rememberMe} onChange={(e)=>{setRememberMe(!rememberMe)}}>
                        Remember Me
                    </RememberMeCheckbox>
                </RememberMeCheckboxContainer>
            </LogRegInputsContainer>

            <GuestLink disabled={loading} variant={'ghost'} color={`${TextColor}`} href="google.com">
                Continue as guest
            </GuestLink>
            
            </ContentContainer>
            <ScrollDownContainer>
                <ScrollIconContainer>
                    <ScrollDownIcon />
                </ScrollIconContainer>
                <ScrollDownLabel color={TextColor}>Scroll down for more info!</ScrollDownLabel>
            </ScrollDownContainer>
        </Container>
    )
}