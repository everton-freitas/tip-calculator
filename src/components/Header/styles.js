import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 330px;
    height: 100vh;
    background-color: darkblue;
    display: flex;
    padding: 10px;
    flex-direction: column;

    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 40px;
    }

`

export const Title = styled.h1`
    color: white;
    text-align: center;
`

export const Menu = styled.nav`
    display: flex;
    flex-direction: column;
    

    ul {
        list-style: none;
        margin-top: 120px;
    

        li {
            display: flex;
            align-items: center;
            margin: 26px;

           
        }

    }

    a {
        color: white;
        text-decoration: none;
        font-size: 22px;
        font-weight: 500;
        display: flex;
        align-items: center;

        
        &:hover {
            color:rgb(182, 205, 242);
        }

        &::before {
            content: "";
            margin-right: 10px;
        }
    }
`

export const StyledLink = styled(Link)`
    

    &:hover {
        color: rgb(182, 205, 242);
    }

    &::before {
            content: "";
            margin-right: 10px;
            width: 10px;
            background-color: red;
        }


    
`