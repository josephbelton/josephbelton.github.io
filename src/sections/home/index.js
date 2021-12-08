import React from 'react'
import { Container, Box, Experience } from './style';

function HomeSection() {
    return (
        <Container>
            <Box>
                <span>Joseph Belton - Software Developer</span>
                <span>...</span>
                <span>👋 Connect with me at: <a href="https://www.linkedin.com/in/joebelton">https://www.linkedin.com/in/joebelton</a></span>
                <span>🖥 See what I'm up to at: <a href="https://github.com/josephbelton">https://github.com/josephbelton</a></span>
                <span>...</span>
                <div>
                    <p><i>Sky</i></p>
                    <p>Apprentice Software Developer</p>
                    <span>|</span>
                    <p><i>Now TV</i></p>
                    <p>Associate Software Developer</p>
                    <span>|</span>
                    <p><i>Now TV</i></p>
                    <p>Software Developer</p>
                </div>
            </Box>
        </Container>
    )
}

export default HomeSection;
