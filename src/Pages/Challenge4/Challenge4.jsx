import { styled } from "styled-components";
import { Link } from "react-router-dom";

const BGC_Container = styled.div`
    background: #23424A;
    color: white;
    padding: 4em 0;
`;

const Container = styled.div`
    max-width: 1000px;
    width: 80%;
    margin: auto;
`;

const IntroContent = styled.div`
    width: 60%;
`;

const H2 = styled.h2`
    font-family: Roboto;
    font-size: 3rem;
    font-weight: 900;
    line-height: 56px;
    text-align: left;
    margin-top: 0;
`;

const P = styled.p`
    font-family: Roboto;
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 31px;
    text-align: left;
`;

const StyledLink = styled(Link)`
    display: inline-block;
    padding: 0.5em 2em;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
    font-family: Roboto;
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0.05em;
    text-align: left;
    background: #38CFD9;
    border: none;
    border-radius: 32px;
    transition: 300ms;
    &:hover {
        opacity: 0.75;
    }
`;

function Challenge4() {
    return (
        <>
            <BGC_Container>
                <Container>
                    <IntroContent>
                        <H2>Responsive layouts don't have to be a struggle</H2>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</P>
                        <StyledLink to="/challenge3">I want to learn</StyledLink>
                    </IntroContent>
                </Container>
            </BGC_Container>
        </>
    );
}

export default Challenge4