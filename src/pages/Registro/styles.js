import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:hover {
        text-decoration: underline;
        color: black;
    }
`
export const Text = styled.p`
    font-size: 15px;
    color: gray;
    margin-top: 3px;
`