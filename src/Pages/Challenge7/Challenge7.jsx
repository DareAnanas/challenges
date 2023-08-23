import { styled } from "styled-components";
import landscape1 from '../../Assets/landscape-01.jpg';
import landscape2 from '../../Assets/landscape-02.jpg';

const colors = {
    light: '#F3EED9',
    brown: '#824936',
    dark: '#222C2A',
    black: '#000000',
    white: '#FFFFFF',
};

const colorProvider = (props, type) => {
    for (const colorName in colors) {
        if (props.hasOwnProperty(`$${colorName}`)) {
            return `
                ${type}: ${colors[colorName]};
            `
        }
    }
}

const Header = styled.header`
    background: ${colors.light};
    display: flex;
    min-height: 660px;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

const IntroContent = styled.div`
    max-width: 800px;
    text-align: center;
`;

const H2 = styled.h2`
    font-family: 'Playfair Display';
    font-weight: 900;
    font-size: 3.75rem;
    color: ${colors.brown};
    margin: 0;
`;

const H6 = styled.h6`
    font-family: Roboto;
    font-weight: 300;
    font-size: 1.125rem;
    color: ${colors.black};
    text-transform: uppercase;
    letter-spacing: 1em;
    margin: 0;
`;

const Background = styled.section`
    background: ${colors.white};
    ${props => colorProvider(props, 'background')};
`;

const Container = styled.div`
    width: 90%;
    max-width: 1128px;
    margin: 0 auto;
`;

const Content = styled.div`
    padding: 5em 0;
    text-align: center;
`;

const FlexContent = styled.div`
    padding: 5em 0;
    display: flex;
    gap: 4em;
    & > div {
        width: 50%;
    }
`;

const TextContainer = styled.div``;

const H3 = styled.h3`
    font-family: 'Playfair Display';
    font-weight: 900;
    font-size: 2.25rem;
    color: ${colors.brown};
    margin: 0 0 1em 0;
    ${props => colorProvider(props, 'color')};
`;

const ParagraphContainer = styled.div`
    display: flex;
    gap: 4em;
    & > p{
        width: 50%
    }
`;

const P = styled.p`
    font-family: Roboto;
    font-weight: 400;
    font-size: 1.3125rem;
    line-height: 1.5;
    color: ${colors.dark};
    margin: 0;
    ${props => colorProvider(props, 'color')};
`;

const Img = styled.img.attrs({alt: 'beautiful landscape'})`
    width: 100%;
`;

function Challenge7() {
    return (
        <>
            <Header>
                <IntroContent>
                    <H6>Lorem ipsum sit</H6>
                    <H2>Responsive layouts don't have to be a struggle</H2>
                </IntroContent>
            </Header>
            <Background>
                <Container>
                    <Content>
                        <H3>Quality Designs</H3>
                        <ParagraphContainer>
                            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut tristique. Arcu dui vivamus arcu felis. Sociis natoque penatibus et magnis dis.</P>
                            <P>Felis donec et odio pellentesque diam volutpat. Aliquam purus sit amet luctus venenatis. Turpis in eu mi bibendum neque egestas congue quisque egestas. Pellentesque sit amet porttitor eget dolor morbi non.</P>
                        </ParagraphContainer>
                    </Content>
                </Container>
            </Background>
            <Background $dark>
                <Container>
                    <FlexContent>
                        <TextContainer>
                            <H3 $white>Made custom for you</H3>
                            <P $white>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</P>
                        </TextContainer>
                        <div>
                            <Img src={landscape1} />
                        </div>
                    </FlexContent>
                </Container>
            </Background>
            <Background $brown>
                <Container>
                    <FlexContent style={{'flexDirection': 'row-reverse'}}>
                        <TextContainer>
                            <H3 $white>Created with care</H3>
                            <P $white>Felis donec et odio pellentesque diam volutpat. Aliquam purus sit amet luctus venenatis. Turpis in eu mi bibendum neque egestas congue quisque egestas. Pellentesque sit amet porttitor eget dolor morbi non.</P>
                        </TextContainer>
                        <div>
                            <Img src={landscape2} />
                        </div>
                    </FlexContent>
                </Container>
            </Background>
        </>
    );
}
export default Challenge7;