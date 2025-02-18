import styled from "styled-components";

export const ContentDashboard = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`