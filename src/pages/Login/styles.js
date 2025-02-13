import styled from "styled-components";

        
export const LoginContainer = styled.div`
    background-color: white;
    width: 400px;
    height: 280px;
    border-radius: 10px;
    padding: 20px;
    display: flex
;
    flex-direction: column;
    align-items: center;
` 

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: darkblue;
    width: 100vw;
    height: 100vh;
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

export const Text = styled.a`
    font-size: 14px;
    color: gray;

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