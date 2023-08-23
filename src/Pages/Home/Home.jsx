import { css, styled } from "styled-components";

const FlexDiv = styled.div`display: flex; align-items: baseline; gap: .5em;`;
const Main = styled.main`margin-left: clamp(1rem, 1vw, 2rem);`;

function Home() {
    return (
        <Main>
            <h1>This is main page</h1>
            <h2>And it is made for testing things like this shoooot</h2>
            <section>Test</section>
            <section>Test</section>
            <section>Test</section>
            <section>Test</section>
            <section>Test</section>
            <section>Test</section>
            <section>Test</section>
            <section>Test</section>
            <section>Test</section>
            <section>Test</section>
            <section>Test</section>
            <FlexDiv>
                <h2>And yeah this is made by using Shift + Alt + arrow down/up in vs code</h2><sub>thanks to Kewin Powell</sub>
            </FlexDiv>
            <h2></h2>
        </Main>
    );
}

export default Home;