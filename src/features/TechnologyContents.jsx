import { useParams, Navigate } from "react-router-dom";
import jsonData from "../assets/data.json";
import Heading from "../components/Heading";
import ContentsContainer from "../components/ContentsContainer";
import ImageContainer from "../components/ImageContainer";
import TopSectionContainer from "../components/TopSectionContainer";
import TabNav from "../components/TabNav";
import styled from "styled-components";
import Hero from "../components/Hero";
import InfoText from "../components/InfoText";
import NotFound from "../components/NotFound";

function TechnologyContents() {
    const technologies = jsonData.technology;
    const { name: technologyName } = useParams();
    const activeName = technologyName || technologies[0].name;
    const currentTech = technologies.find((des) => des.name.toLowerCase() === activeName.toLowerCase());

    if (!technologyName) return <Navigate to={`/technology/${technologies[0].name}`} replace />;
    if (!currentTech) return <NotFound />;

    return (
        <>
        <Heading index="03">Space launch 101</Heading>
        <ContentsContainer>
            <ImageContainer>
                <img src={currentTech.images?.portrait || currentTech.images?.landscape} alt={currentTech.name} />
            </ImageContainer>

            <TopSectionContainer type="technology">
                <TechnologyInfo>
                    <SubHeading>The Terminology...</SubHeading>
                    <Hero size="small">{currentTech.name}</Hero>
                    <InfoText>{currentTech.description}</InfoText>
                </TechnologyInfo>
                <TabNav type="numbered" contents={technologies} />
            </TopSectionContainer>
        </ContentsContainer>
        </>
    );
}

export default TechnologyContents;

const SubHeading = styled.p`
    text-transform: uppercase;
    opacity: 0.8;
    font-size: 1.3rem;
    font-family: "Bellefair", serif;
`;

const TechnologyInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;