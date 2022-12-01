import {Button} from "@chakra-ui/react";
import styled from "styled-components";

import LoginRegister from "./sections/loginRegister";
import Navbar from "./sections/navbar";

export default function LandingPage(props) {
    const Container = styled.div`
        width: 100vw;
        display: flex;
        flex-direction: column;
        max-width:100%;
    `
    return (
        <Container>
            <LoginRegister/>
            <Navbar />
            <div style={{height:"1000px"}}></div>
        </Container>
    )
}