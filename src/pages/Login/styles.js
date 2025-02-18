import styled from "styled-components";

        
export const LoginContainer = styled.div`
    background-color: white;
    width: 400px;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width:  768px) {

    }
` 

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: darkblue;
    width: 100vw;
    height: 100vh;

    @media screen and (max-width:768px ) {
        align-items: flex-start;
        padding-top: 20px;
}
`

export const Title = styled.h1`
    color: darkblue;
    font-size: 35px;
    margin-bottom: 20px;
    text-align: start;
    width: 90%;
`

export const ContentText = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-bottom: 15px;
`

export const TextA = styled.a`
    font-size: 15px;
    color: gray;
    margin-top: 3px;

    &:hover {
        color: black;
        text-decoration: underline;
    }
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`