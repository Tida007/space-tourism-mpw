import { useParams, Navigate } from "react-router-dom";
import jsonData from "../assets/data.json";
import Heading from "../components/Heading";
import ContentsContainer from "../components/ContentsContainer";
import ImageContainer from "../components/ImageContainer";
import { breakpoints } from "../styles/GlobalStyles";
import TabNav from "../components/TabNav";
import styled from "styled-components";
import TopSectionContainer from "../components/TopSectionContainer";
import Hero from "../components/Hero";
import InfoText from "../components/InfoText";
import NotFound from "../components/NotFound";

function DestinationContents() {
  const destinations = jsonData.destination;
  const { name: destinationName } = useParams();
  const activeName = destinationName || destinations[0].name;
  const currentDest = destinations.find((des) => des.name.toLowerCase() === activeName.toLowerCase());

  if (!destinationName)
    return <Navigate to={`/destination/${destinations[0].name}`} replace />;
  if (!currentDest) return <NotFound />;

  return (
    <>
    <Heading index="01">Pick your destination</Heading>

    <ContentsContainer>
        <ImageContainer>
            <img src={currentDest.images?.webp || currentDest.image?.webp} alt={currentDest.name} />
        </ImageContainer>

        <TopSectionContainer>
            <TabNav type="named" contents={destinations} />

            <Hero>{currentDest.name}</Hero>
            <InfoText>{currentDest.description}</InfoText>
            <Details>
                <div>
                    <p>Avg. distance</p>
                    <p>{currentDest.distance}</p>
                </div>
                <div>
                    <p>Est. travel time</p>
                    <p>{currentDest.travel}</p>
                </div>
            </Details>
        </TopSectionContainer>
    </ContentsContainer>
    </>
  );
}

export default DestinationContents;

const Details = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    position: relative;
    padding-top: 2rem;
    margin-top: 2rem;
    gap: 2rem;

    @media screen and (min-width: ${breakpoints.md}) {
        text-align: left;
        grid-template-columns: 1fr 1fr; /* keep two columns for tablet and desktop */
    }

    @media screen and (max-width: ${breakpoints.sm}) {
        grid-template-columns: 1fr; /* Switch to one column for mobile */
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #ffffff7b;
        margin-top: -2.5rem;
    }

    > div {
        :first-child {
            text-transform: uppercase;
            opacity: 0.8;
            }

            :last-child {
                font-family:  "Bellefair", sans-serif;
                font-size: 2rem;
                
            }
    }
`;
