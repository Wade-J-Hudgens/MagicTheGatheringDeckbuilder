import styled from "styled-components";
import { Card, CardHeader, CardBody, CardFooter, Text, Heading } from "@chakra-ui/react";
import AvatarComponent from "./avatar/avatar";
import { useSelector, useDispatch } from 'react-redux';

const ArticlePreviewCard = (props) => {
    const user = useSelector((state) => state.userData.user);
    return (
        <Card width={"400px"} height={"650px"} maxWidth={"100%"} margin={"10px"}>
            <CardHeader display={"flex"} justifyContent={"center"}>
                <Heading size={"lg"}>{props.card.title}</Heading>
            </CardHeader>

            <CardBody flex={1} overflow={"hidden"} textOverflow={"ellipsis"}>
                {props.card.description}
            </CardBody>

            <CardFooter alignItems={"center"} justifyContent={"space-around"}>
                <Text>Author: </Text>
                <AvatarComponent user={user} />
            </CardFooter>
        </Card>
    )
}

export default ArticlePreviewCard;