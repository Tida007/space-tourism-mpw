import { NavLink } from "react-router-dom";
// import styled, { css } from "styled-components";
import { breakpoints } from "../styles/GlobalStyles";
import styled, { css } from "styled-components";

/**
 * TabNav Component - Renders navigation tabs for different page types
 *
 * USAGE:
 * - type="named": Text-based tabs (e.g., Moon, Mars, Europa) - used in Destination page
 * - type="numbered": Circular numbered tabs (1, 2, 3) - used in Technology page
 * - type="dotted": Dot indicators - used in Crew page
 *
 * LAYOUT CONSIDERATIONS:
 * - For "named" tabs: Container alignment handled by parent (TopSectionContainer)
 * - Desktop alignment: justify-content changes from center to flex-start
 * - Mobile: Always centered regardless of type
 */
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

/**
 * NavContainer - Outer wrapper for tab navigation
 *
 * KEY ALIGNMENT NOTES:
 * - Does NOT set max-width/padding - relies on parent container (TopSectionContainer)
 * - For "named" tabs: Changes order on mobile vs desktop
 * - Mobile: order: -1 (tabs appear above content)
 * - Desktop: order: unset (tabs appear in normal flow)
 */
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

/**
 * NavLinks - Flex container for tab items
 *
 * CRITICAL ALIGNMENT FIX:
 * - Mobile: justify-content: center (all tab types)
 * - Desktop "named" tabs: justify-content: flex-start (aligns with content below)
 * - This ensures tabs align with MOON heading and description text
 *
 * PARENT DEPENDENCY:
 * - Relies on TopSectionContainer for max-width and padding constraints
 * - Do NOT add container constraints here to avoid double-constraint issues
 */
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
        justify-content: flex-start; /* KEY FIX: Aligns tabs with content below */
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

/**
 * TabNavItem - Individual tab styling
 *
 * DEFAULT (named tabs): Underline style with hover/active states
 * NUMBERED tabs: Circular buttons with background color changes
 *
 * RELATED COMPONENTS TO CHECK:
 * - TopSectionContainer.jsx: Parent container that provides layout constraints
 * - DestinationContents.jsx: Usage context for "named" tabs
 * - ContentsContainer.jsx: Grid layout that positions TabNav relative to content
 */
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
    props.type === "dotted" &&
    css`
      /* Dotted tabs: Circular dots for Crew page */
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: #ffffff40;
      border: none;
      padding: 0;
      text-indent: -9999px; /* Hide text content */
      overflow: hidden;

      &:hover {
        background-color: #ffffff73;
      }

      &.active {
        background-color: white;
      }
    `}

  ${(props) =>
    props.type === "numbered" &&
    css`
      /* Numbered tabs: Circular design for Technology page */
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
