import { Card, CardHeader, CardBody, CardFooter, Text, Button, Container, useColorMode } from '@chakra-ui/react';
import AvatarComponent from './avatar/avatar';
import { useSelector, useDispatch } from 'react-redux';
import {BiUpvote, BiDownvote} from "react-icons/bi"
import styled from 'styled-components';


const DeckColor = (props) => {
    return <div style={{width:"15px",height:"15px",backgroundColor:props.color,borderRadius:"50%", margin: "2px",border:"1px solid black"}}/>
}
const UpvoteContainer = styled(Container)`
    flex-direction: row;

    @media (max-width: 450px) {
        flex-direction: row;
    }
`
const DeckPreviewCard = (props) => {
    const user = useSelector((state) => state.userData.user);
    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <Card size={"lg"} width={"400px"} maxW={"100%"} margin={"10px"} cursor={"pointer"} outline={`1px solid ${colorMode==='light'?'black':'white'}`}>
            <CardBody display={"flex"} flexDir={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"}>
                <AvatarComponent user={user} />
                <Container display={"flex"} flexDir={"column"} flex={1}>
                    <Text flex={1} textAlign={"center"} fontSize={"md"} flexWrap={"wrap"} wordBreak={"break-word"}>{props.deck.name}</Text>
                    <Text flex={1} textAlign={"center"} fontSize={"sm"}>{props.deck.format}</Text>
                    <Container display={"flex"} flexDir={"row"} justifyContent={"center"}>
                        {props.deck.colors.includes("w")?<DeckColor color={"white"} />:<></>}
                        {props.deck.colors.includes("u")?<DeckColor color={"blue"} />:<></>}
                        {props.deck.colors.includes("b")?<DeckColor color={"black"} />:<></>}
                        {props.deck.colors.includes("r")?<DeckColor color={"red"} />:<></>}
                        {props.deck.colors.includes("g")?<DeckColor color={"green"} />:<></>}
                    </Container>
                    <UpvoteContainer display={"flex"} alignItems={"center"} justifyContent={"center"} marginTop={"10px"}>
                        <BiUpvote fontSize={"30px"} />
                        <Text>{"0"}</Text>
                        <BiDownvote fontSize={"30px"} />
                    </UpvoteContainer>
                </Container>
                
            </CardBody>
        </Card>
    )
}

export default DeckPreviewCard;