import styled from 'styled-components';

export const ascii = styled.div`
    font-family: monospace;
    white-space: pre;
`

export const OuterContainer = styled.div`
    height: 100vh;
    margin: 0;
    background-color: #f7ece1;
    display: flex;
    flex-direction: column;
    
    > p {
        text-align:center;
    }
`;

export const Title = styled.div`
    display: flex;
    padding: 1vh 5vh;
    border-bottom: 1px solid black;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-weight: normal;
        font-size: 1em;
    }
`

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    text-align: center;
`;

export const Experience = styled.div`
    width: 20vw;
    margin-top: ${props => props?.randomPosition}vh;
`;