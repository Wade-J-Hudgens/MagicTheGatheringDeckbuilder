import React from "react";
import styled from "styled-components";
import DeckPreviewCard from "../../../components/deckPreviewCard";
import { Text, Heading, Button } from "@chakra-ui/react";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`
const Header = styled(Heading)`

`

const DeckContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    @media (max-width: 600px) {
        & > *:nth-child(n+5) {
            display: none;
        }
    }
`

const YourDecks = (props) => (
    <Container ref={props.innerRef}>
        <Header>Your Decks</Header>
        <DeckContainer>
            <DeckPreviewCard deck={{name: "UW Control", format:"modern", colors:["w","u"], cards: [{amount:4, name:"Sphinx's Revelation"},{amount:2, name: "Counterspell"}], description:"sdfjonf weof fcefv epwfpoefw powef popefwpoefw oppof powfe po powefpo ewpf opefw "}}/>
            <DeckPreviewCard deck={{name: "UW Control", format:"modern", colors:["b", "g", "r"], cards: [{amount:4, name:"Sphinx's Revelation"},{amount:2, name: "Counterspell"}], description:"sdfjonf weof fcefv epwfpoefw powef popefwpoefw oppof powfe po powefpo ewpf opefw "}}/> 
            <DeckPreviewCard deck={{name: "UW Control", format:"modern", colors:["g", "w", "r"], cards: [{amount:4, name:"Sphinx's Revelation"},{amount:2, name: "Counterspell"}], description:"sdfjonf weof fcefv epwfpoefw powef popefwpoefw oppof powfe po powefpo ewpf opefw "}}/>
            <DeckPreviewCard deck={{name: "UW Control", format:"modern", colors:["w", "u"], cards: [{amount:4, name:"Sphinx's Revelation"},{amount:2, name: "Counterspell"}], description:"sdfjonf weof fcefv epwfpoefw powef popefwpoefw oppof powfe po powefpo ewpf opefw "}}/> 
            <DeckPreviewCard deck={{name: "UW Control", format:"modern", colors:["w","u"], cards: [{amount:4, name:"Sphinx's Revelation"},{amount:2, name: "Counterspell"}], description:"sdfjonf weof fcefv epwfpoefw powef popefwpoefw oppof powfe po powefpo ewpf opefw "}}/>
            <DeckPreviewCard deck={{name: "UW Control", format:"modern", colors:["b", "g", "r"], cards: [{amount:4, name:"Sphinx's Revelation"},{amount:2, name: "Counterspell"}], description:"sdfjonf weof fcefv epwfpoefw powef popefwpoefw oppof powfe po powefpo ewpf opefw "}}/> 
            <DeckPreviewCard deck={{name: "UW Control", format:"modern", colors:["g", "w", "r"], cards: [{amount:4, name:"Sphinx's Revelation"},{amount:2, name: "Counterspell"}], description:"sdfjonf weof fcefv epwfpoefw powef popefwpoefw oppof powfe po powefpo ewpf opefw "}}/>
            <DeckPreviewCard deck={{name: "UW Control", format:"modern", colors:["w", "u"], cards: [{amount:4, name:"Sphinx's Revelation"},{amount:2, name: "Counterspell"}], description:"sdfjonf weof fcefv epwfpoefw powef popefwpoefw oppof powfe po powefpo ewpf opefw "}}/> 
            <DeckPreviewCard deck={{name: "UW Control", format:"modern", colors:["w","u"], cards: [{amount:4, name:"Sphinx's Revelation"},{amount:2, name: "Counterspell"}], description:"sdfjonf weof fcefv epwfpoefw powef popefwpoefw oppof powfe po powefpo ewpf opefw "}}/>
            <DeckPreviewCard deck={{name: "UW Control", format:"modern", colors:["b", "g", "r"], cards: [{amount:4, name:"Sphinx's Revelation"},{amount:2, name: "Counterspell"}], description:"sdfjonf weof fcefv epwfpoefw powef popefwpoefw oppof powfe po powefpo ewpf opefw "}}/> 
            <DeckPreviewCard deck={{name: "UW Control", format:"modern", colors:["g", "w", "r"], cards: [{amount:4, name:"Sphinx's Revelation"},{amount:2, name: "Counterspell"}], description:"sdfjonf weof fcefv epwfpoefw powef popefwpoefw oppof powfe po powefpo ewpf opefw "}}/>
            <DeckPreviewCard deck={{name: "UW Control", format:"modern", colors:["w", "u"], cards: [{amount:4, name:"Sphinx's Revelation"},{amount:2, name: "Counterspell"}], description:"sdfjonf weof fcefv epwfpoefw powef popefwpoefw oppof powfe po powefpo ewpf opefw "}}/> 
        </DeckContainer>

        <Button>See All...</Button>
    </Container>
)

export default YourDecks;