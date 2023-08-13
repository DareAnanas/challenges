import { styled } from "styled-components";
import { Link } from "react-router-dom";

const BGC_Container = styled.div`
    background: ${props => {
        if (props.$primary) return '#23424A';
        if (props.$secondary) return '#136C72';
        return 'white';
    }};
    color: ${props => (props.$primary || props.$secondary) ? 'white' : '#3A3A3A'};
    padding: 8em 0;
    text-align: ${props => props.$centered ? 'center' : 'initial'};
`;

const Container = styled.div`
    max-width: 1200px;
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
    margin: 0;
`;

const StyledLink = styled(Link)`
    display: inline-block;
    padding: 0.5em 2em;
    margin-top: 2em;
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

const Row = styled.div`
    display: flex;
    gap: ${props => props.$gap || '20px'};
`;

const Col = styled.div``;

const H3 = styled.h3`
    color: ${props => props.$primary ? '#87629A' : 'inherit'};
    font-family: Roboto;
    font-size: 2.25rem;
    margin-top: 0;
`;

function Challenge4() {
    return (
        <>
            <BGC_Container $primary>
                <Container>
                    <IntroContent>
                        <H2>Responsive layouts don't have to be a struggle</H2>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</P>
                        <StyledLink to="/challenge3">I want to learn</StyledLink>
                    </IntroContent>
                </Container>
            </BGC_Container>
            <BGC_Container $centered>
                <Container>
                    <Row>
                        <Col>
                            <H3 $primary>Cheap</H3>
                            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</P>
                        </Col>
                        <Col>
                            <H3 $primary>Quick</H3>
                            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</P>
                        </Col>
                        <Col>
                            <H3 $primary>Quality</H3>
                            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</P>
                        </Col>
                    </Row>
                </Container>
            </BGC_Container>
            <BGC_Container $secondary $centered>
                <Container>
                    <Row $gap='60px'>
                        <Col>
                            <H3>Cheap</H3>
                            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</P>
                        </Col>
                        <Col>
                            <H3>Quick</H3>
                            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</P>
                        </Col>
                    </Row>
                </Container>
            </BGC_Container>
        </>
    );
}

export default Challenge4