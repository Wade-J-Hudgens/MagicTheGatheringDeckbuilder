import React from "react";
import styled from "styled-components";
import DeckPreviewCard from "../../../components/deckPreviewCard";
import ArticlePreviewCard from "../../../components/articlePreviewCard";
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


const testd = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo duis ut diam quam nulla porttitor massa id. Magna ac placerat vestibulum lectus mauris ultrices eros. Leo duis ut diam quam. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Risus feugiat in ante metus dictum at tempor. Cras fermentum odio eu feugiat. Cras adipiscing enim eu turpis egestas pretium aenean. Mollis nunc sed id semper risus. Massa tincidunt dui ut ornare lectus sit amet est. Pretium fusce id velit ut tortor pretium.
`
const TrendingArticles = (props) => (
    <Container ref={props.innerRef}>
        <Header>Trending Articles</Header>
        <DeckContainer>
            <ArticlePreviewCard card={{title: "Is UW control too dominant?", description: testd}}/>
            <ArticlePreviewCard card={{title: "Is UW control too dominant?", description: testd}}/>
            <ArticlePreviewCard card={{title: "Is UW control too dominant?", description: testd}}/>
            <ArticlePreviewCard card={{title: "Is UW control too dominant?", description: testd}}/>
            <ArticlePreviewCard card={{title: "Is UW control too dominant?", description: testd}}/>
            <ArticlePreviewCard card={{title: "Is UW control too dominant?", description: testd}}/>
        </DeckContainer>

        <Button>See All...</Button>
    </Container>
)

export default TrendingArticles;