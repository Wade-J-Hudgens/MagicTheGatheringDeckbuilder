import { Box, Container, Text, Heading, useColorMode } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {GrReddit, GrTools} from "react-icons/gr"
import {CiFacebook, CiInstagram, CiTwitter, CiYoutube, CiLinkedin, CiSearch} from "react-icons/ci"
import {SlSocialReddit}from "react-icons/sl"
import {TbBrandSnapchat} from "react-icons/tb"
import {MdPeopleOutline} from "react-icons/md"
import {GiTabletopPlayers, GiCardPlay, GiPerspectiveDiceSixFacesRandom, GiCardRandom} from "react-icons/gi"
import {BiCollection} from "react-icons/bi"
import {AiOutlineHeart} from "react-icons/ai"
import { IconContext } from "react-icons/lib";

const FooterSection = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
`
const FooterSectionLink = styled(Link)`
    display: flex;
    justify-content: center;
`

const IC = (props) => {
    const iconSize = "30px";
    const iconMargin = "10px";
    const iconStyle = {backgroundColor: "white", borderRadius: "7px"}
    return (
        <IconContext.Provider
            value={{ color: 'black', size: iconSize }}
        >
            <Box display={"flex"} width={"150px"} height={"40px"} alignItems={"center"}>
                <props.Icon style={iconStyle}>

                </props.Icon>
                <Text marginLeft={"2px"}>{props.label}</Text>
            </Box>
        </IconContext.Provider>
        
    )
}
const Footer = () => {
    const iconSize = "30px";
    const iconMargin = "10px";
    const iconStyle = {backgroundColor: "white", borderRadius: "7px"}
    const {colorMode, setColorMode} = useColorMode();
    return (
        <Box width={"100%"} backgroundColor={`${colorMode==='light'?'darkgray':'rgb(20,20,20)'}`} display={"flex"} flexDirection={"row"} flexWrap={"wrap"} justifyContent={"center"} padding={"10px"}>
            <FooterSection>
                <Heading size={"md"}>Apps</Heading>
                <Box display={"flex"} flexWrap={"wrap"} width={"350px"} gap={"15px"} alignItems={"center"} justifyContent={"center"}>
                    <IC Icon={GrTools} label={"Deckbuilder"}/>
                    <IC Icon={GiCardPlay} label={"Playtester"}/>
                    <IC Icon={GiTabletopPlayers} label={"Online Playtester"}/>
                    <IC Icon={AiOutlineHeart} label={"Lifecounter"}/>
                    <IC Icon={GiPerspectiveDiceSixFacesRandom} label={"Planechase"}/>
                    <IC Icon={BiCollection} label={"Collection Tracker"}/>
                    <IC Icon={GiCardRandom} label={"Limited Simulator"}/>
                    <IC Icon={CiSearch} label={"Card Search"}/>
                </Box>
            </FooterSection>
            <FooterSection>
                <Heading size={"md"}>Apps</Heading>
                <Box display={"flex"} flexWrap={"wrap"} width={"350px"} gap={"15px"} alignItems={"center"} justifyContent={"center"}>
                    <IC Icon={GrTools} label={"Deckbuilder"}/>
                    <IC Icon={GrTools} label={"Deckbuilder"}/>
                    <IC Icon={GrTools} label={"Deckbuilder"}/>
                    <IC Icon={GrTools} label={"Deckbuilder"}/>
                    <IC Icon={GrTools} label={"Deckbuilder"}/>
                    <IC Icon={GrTools} label={"Deckbuilder"}/>
                    <IC Icon={GrTools} label={"Deckbuilder"}/>
                    <IC Icon={GrTools} label={"Deckbuilder"}/>
                </Box>
            </FooterSection>
            <FooterSection>
                <Heading size={"md"}>Social Media</Heading>
                <Box display={"flex"} flexWrap={"wrap"} width={"350px"} gap={"15px"} alignItems={"center"} justifyContent={"center"}>
                    <IC Icon={CiFacebook} label={"Facebook"}/>
                    <IC Icon={CiTwitter} label={"Twitter"}/>
                    <IC Icon={CiLinkedin} label={"LinkedIn"}/>
                    <IC Icon={CiInstagram} label={"Instagram"}/>
                    <IC Icon={TbBrandSnapchat} label={"Snapchat"}/>
                    <IC Icon={CiYoutube} label={"Youtube"}/>
                    <IC Icon={SlSocialReddit} label={"Reddit"}/>
                </Box>
            </FooterSection>
        </Box>
    )
}

export default Footer;