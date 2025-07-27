import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function NotFound() {
    const navigate = useNavigate();

    return (
        <styledNotFound>
            <span>404: Not found! </span>
            <DoBackBtn onClick={() => navigate(-1)}>&#10094; Go back</DoBackBtn>
        </styledNotFound>
    );
}

export default NotFound;

const StyleNotFound = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

const GoBackBtn = styled.button`
    padding: 0.3rem 1rem;
    border: 2px solid #42414d;
    back-ground-color: #42414d;
    border-radius: 5px;

    &:hover {
        background-color: #2b2a33;
    }
    
`;