import styled, { css } from "styled-components";
import { breakpoints } from "../styles/GlobalStyles";

/**
 * TopSectionContainer - Main content wrapper for page sections
 *
 * PURPOSE: Provides consistent layout constraints for content areas
 *
 * DESKTOP LAYOUT (min-width: 992px):
 * - max-width: 68rem - Controls content width to prevent text from stretching too wide
 * - padding-inline: 1rem - Adds horizontal padding for better text spacing
 *
 * CHILD COMPONENTS THAT DEPEND ON THESE CONSTRAINTS:
 * - TabNav.jsx: Relies on this container for alignment (does NOT set own max-width)
 * - Hero.jsx: Heading text alignment
 * - InfoText.jsx: Description text alignment
 * - Any content that needs to align with tabs
 *
 * USAGE CONTEXTS:
 * - DestinationContents.jsx: Contains TabNav + content
 * - Technology page: Special reverse layout handling
 *
 * ALIGNMENT RULE: Child components should NOT duplicate these constraints
 */
const TopSectionContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => "type" !== prop,
})`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 25rem;
    padding-inline: 1rem;

    ${(prop) =>
        prop.type ===  "technology" &&
    css`
        flex-direction: column;
        flex-direction: column-reverse;

        gap: 2rem;

        @media screen and (min-width: ${breakpoints.md}) {
            flex-direction: row;
            flex-direction: row-reverse;
            max-width: auto;
        }
    `}

    /* CRITICAL: These constraints control alignment for all child components */
    @media screen and (min-width: ${breakpoints.md}) {
        max-width: 68rem;
        padding-inline:1rem ;
    }
`;

export default TopSectionContainer;