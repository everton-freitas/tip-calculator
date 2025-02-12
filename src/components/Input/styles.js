import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    height: 44px;
    border: 1px solid darkblue;
    border-radius: 25px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    background-color: white;

    input {
        flex: 1;
        border: none;
        outline: none;
        color: gray;
        font-size: 16px;
        background-color: transparent;
    }
`;
