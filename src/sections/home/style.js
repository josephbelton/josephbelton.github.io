import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin: 0;
    min-height: 100vh;
    background-color: #f7ece1;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem;
    border: 4px double black;
`;

export const Experience = styled.div`
    display: flex;
    flex-direction: row;
    align items: space-around;
    margin-top: 1rem;

    div {
        border: 2px dashed black;
        padding: 1rem;
        margin-left: 1rem;
        margin-right: 1rem;
    }
`