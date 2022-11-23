import React from 'react'
import { OuterContainer, Container, Title, Experience } from './home.styles';
import { planet, xwing } from './ascii';

function HomeSection() {
    const randomPosition = () => Math.ceil(Math.random() * 30) * (Math.round(Math.random()) ? 1 : -1);

    return (
        <OuterContainer>
            <Title>
                <div dangerouslySetInnerHTML={{ __html: xwing }} />
                <div>
                    <p>👋  Connect with me at: <a href="https://www.linkedin.com/in/joebelton">https://www.linkedin.com/in/joebelton</a></p>
                    <p>🖥  See what I'm up to at: <a href="https://github.com/josephbelton">https://github.com/josephbelton</a></p>
                </div>
            </Title>
            <p>Hover over a job to learn more!</p>
            <Container>
                <Experience randomPosition={randomPosition()}>
                    <div dangerouslySetInnerHTML={{ __html: planet }} />
                    <p><i>Sky</i></p>
                    <p>Apprentice Software Developer</p>
                    <p>Aug 2019 - Jan 2021</p>
                </Experience>
                <Experience randomPosition={randomPosition()}>
                    <div dangerouslySetInnerHTML={{ __html: planet }} />
                    <p><i>Now TV</i></p>
                    <p>Associate Software Developer</p>
                    <p>Jan 2021 - Jan 2022</p>
                </Experience>
                <Experience randomPosition={randomPosition()}>
                    <div dangerouslySetInnerHTML={{ __html: planet }} />
                    <p><i>Now TV</i></p>
                    <p>Software Developer</p>
                    <p>Jan 2022 - Present</p>
                </Experience>
                <Experience randomPosition={randomPosition()}>
                    <div dangerouslySetInnerHTML={{ __html: planet }} />
                    <p><i>Top Secret Project</i></p>
                    <p>Currently In Development</p>
                    <p>August 2021 - Present</p>
                </Experience>
            </Container>
        </OuterContainer>
    )
}

export default HomeSection;
