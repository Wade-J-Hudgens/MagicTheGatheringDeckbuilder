import styled from "styled-components";
import {useColorMode, useColorModeValue, Switch, Text} from "@chakra-ui/react";

export default function Navbar(props) {
    const {colorMode, toggleColorMode} = useColorMode();
    const TextColor=useColorModeValue('white', 'white')
    const Container = styled.div`
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        width: 100vw;
        height: 100px;
        max-width:100%;
        background: darkgray;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 40px;
    `

    const ColorModeSwitchContainer = styled.div`
        display: flex;
        align-items:center;
    `
    const ColorModeSwitchLabel = styled(Text)`
        margin-left: 10px;
    `

    return (
        <Container>
            <div></div>
            <ColorModeSwitchContainer>
                <Switch size={"lg"} isChecked={colorMode==="light"} onChange={toggleColorMode} />
                <ColorModeSwitchLabel>{colorMode==="light"?"Light Mode":"Dark Mode"}</ColorModeSwitchLabel>
            </ColorModeSwitchContainer>
        </Container>
    )
}