import { NavLink } from "react-router-dom";
// import styled, { css } from "styled-components";
import { breakpoints } from "../styles/GlobalStyles";
import styled, { css } from "styled-components";

function TabNav({ type, contents }) {
  return (
    <NavContainer type={type}>
      <NavLinks type={type}>
        {contents.map((cont, i) => (
          <li key={cont.name}>
            <TabNavItem type={type} to={cont.name}>
              {type === "named" && cont.name}
              {type === "numbered" && i + 1}
            </TabNavItem>
          </li>
        ))}
      </NavLinks>
    </NavContainer>
  );
}

export default TabNav;

const NavContainer = styled.nav.withConfig({
  shouldForwardProp: (prop) => "type" !== prop,
})`
  ${(props) =>
    props.type === "named" &&
    css`
      order: -1;
      margin-top: 0;

      @media screen and (min-width: ${breakpoints.md}) {
        order: unset;
        margin-top: 4rem;
      }
    `}
`;

const NavLinks = styled.ul.withConfig({
  shouldForwardProp: (prop) => "type" !== prop,
})`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

  ${(props) =>
    props.type === "named" &&
    css`
      @media screen and (min-width: ${breakpoints.md}) {
        justify-content: flex-start;
      }
    `}

  ${(props) =>
    props.type === "dotted" &&
    css`
      gap: 1rem;
      margin-bottom: 0;
    `}

  ${(props) =>
    props.type === "numbered" &&
    css`
      flex-direction: row;
      gap: 1rem;
      order: 2;
      margin-bottom: 0;

      @media screen and (min-width: ${breakpoints.md}) {
        flex-direction: column;
      }
    `}
`;

const TabNavItem = styled(NavLink)`
  padding: 2rem 1.5rem;
  border-bottom: 3px solid transparent;
  display: inline-block;

  &:hover {
    border-bottom-color: #ffffff73;
  }

  &.active {
    border-bottom-color: white;
  }

  ${(props) =>
    props.type === "numbered" &&
    css`
      /* Add styles specific to numbered tabs */
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #ffffff73;
      height: 3.5rem;
      width: 3.5rem;
      border-radius: 50%;
      font-size: 1.3rem;

      &:hover {
        background-color: #ffffffb0;
        color:black;
        }

        &.active {
        background-color: white;
        color: black;
        }
    `}
`;
