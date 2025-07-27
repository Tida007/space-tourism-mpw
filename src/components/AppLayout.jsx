import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import styled from "styled-components";
import { breakpoints } from "../styles/GlobalStyles";

function AppLayout() {
  const location = useLocation();
  const pageLocation = location.pathname.split("/")[1];

  return (
    <StyledAppLayout pageLocation={pageLocation}>
      <NavBar />
      <MainContent>
        <Outlet />
      </MainContent>
    </StyledAppLayout>
  );
}

const StyledAppLayout = styled.div.withConfig({
  shouldForwardProp: (prop) => "pageLocation" !== prop,
})`
  background-image: ${(props) =>
    `url("/images/${props.pageLocation}/background-${props.pageLocation}-mobile.jpg")` };

    @media screen and (min-width: 768px) {
    background-image: ${(props) =>
      `url("/images/${props.pageLocation}/background-${props.pageLocation}-tablet.jpg")` };
  }

  @media screen and (min-width: 1024px) {
    background-image: ${(props) =>
      `url("/images/${props.pageLocation}/background-${props.pageLocation}-desktop.jpg")` };
  }

  background-size: cover; // 1920px
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;

const MainContent = styled.main`
  max-width: 1200px; // 1920px
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  @media screen and (min-width: ${breakpoints.sm}) { // 1280px
    margin: 3rem auto;
  }

  @media screen and (min-width: ${breakpoints.md}) { // 1600px
    margin: 4rem auto;
    align-items: flex-start;
  }
  `;

export default AppLayout;
