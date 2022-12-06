import { Avatar, Button, Text } from "@chakra-ui/react";
import styled from "styled-components";

const AvatarComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`
const AvatarComponentRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const AvatarComponent = (props) => {
    return (
        <AvatarComponentContainer>
            <AvatarComponentRow style={{gap: "5px"}}>
                <Avatar name={`${props.user.firstName} ${props.user.lastName}`} size={props.size?props.size:"md"}/>
                <Text>{props.user.username}</Text>
            </AvatarComponentRow>
            <AvatarComponentRow>
                <Button colorScheme={"red"} size="xs" variant={"outline"}>Report User</Button>
            </AvatarComponentRow>
        </AvatarComponentContainer>
    )
}

export default AvatarComponent