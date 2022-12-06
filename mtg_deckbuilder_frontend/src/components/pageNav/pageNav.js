import { Container, Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

const PageNav = (props) => {

    const elements = props.items.map((item)=>{
        return <Button marginTop={"10px"} backdropFilter={"blur(20px)"} onClick={()=>{
            item.ref.current.scrollIntoView({behavior: 'smooth', block: 'center'});
        }}>{item.label}</Button>
    })
    return <ButtonGroup 
                    width={"100%"} 
                    position={"sticky"} 
                    top={"100px"} 
                    zIndex={99}
                    variant={"outline"}
                    colorScheme={"gray"}
                    justifyContent={"center"}
                    size={"xs"}
                    flexWrap={"wrap"}>
        {elements}
    </ButtonGroup>
}

export default PageNav