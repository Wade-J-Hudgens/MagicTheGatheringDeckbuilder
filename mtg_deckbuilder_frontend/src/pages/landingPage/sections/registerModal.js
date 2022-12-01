import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    Spinner,
    Input,
    Button,

    useToast
  } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { debounce } from "debounce";

import { registerUser, checkUserExists, checkEmailExists } from '../../../api/register';

import errorCodes from "../../../api/codes.json";

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

`
const StyledTextInput = styled(Text)`
  margin-bottom: 5px;
`
const StyledInputFieldContainer = styled.div`
  display: flex;
`
const StyledInputField = styled(Input)`

`
const RegisterInput = (props) => {
    return <StyledInputContainer>
        <StyledTextInput>{props.label}<em style={{color:"LightCoral",fontSize:"smaller"}}> {props.errorMessages&&props.error?props.errorMessages.join(" | "):""}</em></StyledTextInput>
        <StyledInputFieldContainer>
            <StyledInputField value={props.value} onChange={(e)=>{props.change(e.target.value)}} type={props.password?"password":"text"} style={props.error?{border:"1px solid lightcoral"}:{}}/>
        </StyledInputFieldContainer>
    </StyledInputContainer>
}


const SpinnerContainer = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const RegisterModal = (props) => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");

    const [validEmail, setValidEmail] = useState(true);
    const [emailsMatch, setEmailsMatch] = useState(true);
    const [emailExists, setEmailExists] = useState(false);
    const [validPassword, setValidPassword] = useState(true);
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [usernameExists, setUsernameExists] = useState(false);

    const [registerDisabled, setRegisterDisabled] = useState(false);

    const [emailErrors, setEmailErrors] = useState([]);
    const [passwordErrors, setPasswordErrors] = useState([]);
    const [usernameErrors, setUsernameErrors] = useState([]);

    const toast = useToast();

    const debounced_checkEmail = debounce(async ()=>{
        const reponse = await checkEmailExists(email);
        setEmailExists(reponse.exists);
    }, 800);
    const debounced_checkUsername = debounce(async ()=>{
        const response = await checkUserExists(username);
        setUsernameExists(response.exists);
    }, 800)
    
    const getEmailErrors = () => {
        const rv = [];
        if (!validEmail) {
            rv.push("Email not valid")
        }
        if (!emailsMatch) {
            rv.push("Emails do not match")
        }
        if (emailExists) {
            rv.push("Email already exists")
        }
        return rv;
    }
    const getUsernameErrors = () => {
        const rv = [];
        if (usernameExists) {
            rv.push("Username already exists")
        }
        return rv;
    }
    const getPasswordErrors = () => {
        const rv = [];
        if (!validPassword) {
            rv.push("Password not long enough")
        }
        if (!passwordsMatch) {
            rv.push("Passwords do not match")
        }
        return rv;
    }
    const clear = () => {
        setEmail("")
        setConfirmEmail("")
        setPassword("")
        setConfirmPassword("")
        setFirstName("")
        setLastName("")
        setUsername("")
    }
    const registerOnClick = () => {
        setLoading(true);
        registerUser(email, username, firstName, lastName, password).then((res) => {
            if (res.success) {
                setLoading(false);
                toast({
                    position: 'top',
                    status: 'success',
                    title: 'Registration Successfull'
                })
                clear();
                props.closeModal();
            }
            else {
                setLoading(false);
                toast({
                    position: 'top',
                    status: 'error',
                    title: errorCodes.register.error[res.error.toString()]
                })
            }
        })
    }

    const validateEmail = (email) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
            return (true)
        }
        return (false)

    }
    
    useEffect(()=>{
        setEmailsMatch(email === confirmEmail);
        setValidEmail((validateEmail(email)||email===""));
        debounced_checkEmail();
    }, [email, confirmEmail])
    useEffect(()=>{
        setEmailErrors(getEmailErrors());
    }, [validEmail, emailsMatch, emailExists])

    useEffect(()=>{
        setPasswordsMatch(password === confirmPassword);
        setValidPassword(password.length >= 8||password==="");
    }, [password, confirmPassword])
    useEffect(()=>{
        setPasswordErrors(getPasswordErrors())
    }, [validPassword, passwordsMatch])

    useEffect(()=>{
        debounced_checkUsername()
    }, [username])
    useEffect(() => {
        setUsernameErrors(getUsernameErrors())
    }, [usernameExists])

    useEffect(()=>{
        const isValid = validEmail&&emailsMatch&&validPassword&&passwordsMatch&&!usernameExists&&!emailExists;
        const notEmpty = email&&password&&firstName&&lastName&&username;
        setRegisterDisabled(!isValid || !notEmpty)
    }, [validEmail, emailsMatch, validPassword, passwordsMatch, usernameExists, emailExists])

    return (
        <Modal isOpen={props.isOpen} onClose={props.closeModal}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Register</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {loading?
                        <>
                            <SpinnerContainer>
                                <Spinner size="xl" />
                            </SpinnerContainer>
                        </>:
                        <>
                            <RegisterInput label={"Email"} value={email} change={setEmail} error={!validEmail||!emailsMatch||emailExists} errorMessages={emailErrors}/>
                            <RegisterInput label={"Confirm Email"} value={confirmEmail} change={setConfirmEmail} error={!validEmail||!emailsMatch||emailExists} errorMessages={emailErrors}/>
                            <RegisterInput label={"Password (Min Length: 8 characters)"} value={password} change={setPassword} password error={!validPassword||!passwordsMatch} errorMessages={passwordErrors}/>
                            <RegisterInput label={"Confirm Password"} value={confirmPassword} change={setConfirmPassword} password error={!validPassword||!passwordsMatch} errorMessages={passwordErrors}/>
                            <RegisterInput label={"First Name"} value={firstName} change={setFirstName}/>
                            <RegisterInput label={"Last Name"} value={lastName} change={setLastName}/>
                            <RegisterInput label={"Username"} value={username} error={usernameExists} errorMessages={usernameErrors} change={setUsername}/>
                        </>
                    }
                </ModalBody>
                <ModalFooter>
                    <Button onClick={registerOnClick} disabled={registerDisabled}>Register</Button>
                    <Button onClick={clear} style={{marginLeft:"10px"}} colorScheme={"red"}>Clear</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}