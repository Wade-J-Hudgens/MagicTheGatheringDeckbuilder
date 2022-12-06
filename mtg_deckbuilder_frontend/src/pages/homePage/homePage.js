import {Button} from "@chakra-ui/react";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {toggleAuth, toggleGuest, setUser} from "../../redux/userData/userData"
import Navbar from "../../components/navbar/navbar";
import { getUserData } from "../../api/userData";
import DeckPreviewCard from "../../components/deckPreviewCard";
import FeaturedDecks from "./sections/featuredDecks";
import NewestDecks from "./sections/newestDecks";
import YourDecks from "./sections/yourDecks";
import PageNav from "../../components/pageNav/pageNav";
import TrendingArticles from "./sections/trendingArticles";
import Footer from "../../components/pageFooter/footer";

export const HomePage = (props) => {
    const dispatch = useDispatch();
    const isGuest = useSelector((state) => state.userData.isGuest);
    const isAuthenticated = useSelector((state) => state.userData.authenticated);
    const user = useSelector((state) => state.userData.user);

    const featureRef = useRef();
    const newestRef = useRef();
    const yourDecksRef = useRef();
    const trendingArticlesRef = useRef();
    return (
        <>
        <Navbar />
        <PageNav items={
            [
                {label: "Featured Decks", ref: featureRef},
                {label: "Newest Decks", ref: newestRef},
                {label: "Your Decks", ref: yourDecksRef},
                {label: "Trending Articles", ref: trendingArticlesRef}
            ]} />
        <FeaturedDecks innerRef={featureRef}/>
        <NewestDecks innerRef={newestRef}/>
        <YourDecks innerRef={yourDecksRef}/>
        <TrendingArticles innerRef={trendingArticlesRef}/>
        <Footer />
        </>
    )
}

export default HomePage;