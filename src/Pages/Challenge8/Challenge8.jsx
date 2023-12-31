import { useState } from "react";
import { createGlobalStyle, styled } from "styled-components";

const Body = styled.div`
    font-family: "Roboto";
    font-size: 1.3rem;
`;

const GlobalStyles = createGlobalStyle`
    img {
        max-width: 100%;
    }

    h1 {
        font-size: 3rem;
        margin-top: 0;
    }

    header {
        background: #136c72;
        padding: 1em 0;
        text-align: center;
    }
`;

const Container = styled.div`
    width: 80%;
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
`;

const Row = styled.div`
    @media (min-width: 800px) {
        display: flex;
        justify-content: space-between;
    }
`;

const NavToggle = styled.button.attrs({
    'aria-label': 'open navigation'
})`
    cursor: pointer;
    border: 0;
    width: 3rem;
    height: 3rem;
    padding: 0em;
    border-radius: 50%;
    background: #072a2d;
    color: white;
    transition: opacity 250ms ease;

    position: absolute;
    left: 0;
    &:focus,
    &:hover {
        opacity: 0.75;
    }
    @media (min-width: 800px) {
        display: none;
    }
`;

const Hamburger = styled.span`
    width: 50%;
    position: relative;
    &, &::before, &::after {
        display: block;
        margin: 0 auto;
        height: 3px;
        background: white;
    }
    &::before, &::after {
        content: "";
        width: 100%;
    }
    &::before {
        transform: translateY(-6px);
    }
    &::after {
        transform: translateY(3px);
    }
`;

const Logo = styled.a.attrs({href: '#'})`
    height: 30px;
`;

const LogoSvg = <svg 
    width="55" 
    height="30" 
    viewBox="0 0 55 30" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11.4621 11.9515C11.4224 12.15 11.343 13.4992 11.343 13.777C11.6208 13.8167 12.0574 13.8167 12.5336 13.8167C13.8034 13.8167 15.4702 13.7373 17.0575 13.6183C17.256 12.8643 17.2956 11.3563 17.3353 10.5229C17.4941 9.17367 17.4544 6.83231 17.4941 5.80052C17.4941 3.73696 17.256 2.50675 15.9861 1.59402C15.0337 0.959074 14.0019 0.641602 12.9304 0.641602C10.9065 0.641602 8.80326 1.67339 7.49369 2.70517C4.75549 4.96716 2.57287 7.66567 1.14425 11.0785C0.231516 13.2214 0.191832 17.0311 0.231516 18.6978C0.310884 20.2058 0.866461 21.9519 1.77919 23.2218C2.81098 24.6504 3.88245 25.6425 5.39044 26.5949C6.73969 27.4283 8.24769 28.1426 9.79536 28.222C11.5018 28.341 13.486 27.7458 14.8749 27.0315C16.6607 26.1584 17.6528 25.3647 18.6846 24.2933C17.7719 22.4678 16.1051 20.0074 15.3908 19.0947C14.2797 20.1661 13.2876 20.9598 12.0177 21.436C11.3827 21.6344 10.6287 21.7932 9.91442 21.7138C8.68421 21.6344 7.53338 20.563 6.9778 19.5709C6.58096 18.8169 6.46191 17.7454 6.46191 16.8724C6.46191 16.1581 6.54127 15.4834 6.58096 15.166C6.81906 13.777 7.29527 11.9119 8.00958 10.642C8.80326 9.41177 10.589 7.78473 11.5018 7.30852C11.5018 7.30852 11.6208 8.06251 11.6208 9.3324C11.6208 10.0467 11.5811 10.9198 11.4621 11.9515Z" 
    fill="white" />
    <path d="M35.4793 21.3963C34.9634 20.682 33.6538 18.301 33.257 17.666C35.4396 15.9199 36.4317 14.8088 37.4635 12.9833C37.9794 12.1897 38.1381 11.3563 38.1381 10.5626C38.1381 8.89588 37.2254 7.42757 36.5904 6.63389C35.8761 5.68147 35.3206 4.64969 31.5903 2.74485C29.6061 1.75275 27.5028 1.23686 24.8043 1.15749C24.1297 1.15749 22.9391 1.15749 22.4233 1.15749C21.2327 1.15749 21.3121 1.19718 19.8835 1.23686C19.566 3.49885 19.6057 5.64179 19.6454 7.74504C19.6454 7.74504 20.5978 7.62599 21.074 7.74504C21.2327 9.61019 21.0343 17.2295 21.0343 19.0947C21.1137 20.4042 20.7168 26.6743 20.7962 27.3489C22.9788 27.3886 25.2805 27.3886 27.3838 27.2299C27.3838 25.2854 27.3441 22.9043 27.3441 20.8408C28.2568 22.3488 29.5267 24.8489 30.9156 26.714C31.3125 27.2696 32.0268 28.4204 32.8205 29.1744C33.8522 28.6982 36.1936 26.9124 38.2175 24.8092C37.4635 24.0155 36.1936 22.3488 35.4793 21.3963ZM27.1456 14.6104C26.9869 12.3881 27.1456 9.72924 27.1456 7.70536C27.4631 7.74504 27.7012 7.78473 27.8996 7.82441C29.2886 8.06251 30.3601 8.89588 31.3125 9.84829C33.0586 11.6738 28.5743 14.2532 27.1456 14.6104Z" 
    fill="white" />
    <path d="M53.7302 19.8487C52.2222 20.1661 50.7539 20.6027 49.2459 20.8408C48.2935 20.9995 47.3411 21.2376 46.4284 21.3963C46.4284 16.2771 46.5474 11.396 46.9442 6.47515C47.103 4.76874 47.3014 3.06233 47.3808 1.35591C45.0394 1.3956 42.2615 1.75275 41.071 1.91149C40.952 5.04653 40.6345 7.90378 40.6345 10.761C40.6345 14.7294 40.3964 18.6581 40.3964 22.5869C40.3964 24.5314 40.2773 26.3172 40.4361 28.222C41.3091 28.1823 42.1822 28.1029 43.0949 28.0236C44.087 27.9442 45.0394 27.8252 46.0712 27.7061C48.0157 27.468 49.8809 27.0315 51.7857 26.714C52.8175 26.5553 53.9683 26.4362 55.0001 26.1584C54.6826 23.0234 54.0477 20.8408 53.7302 19.8487Z" 
    fill="white" />
</svg>;

const Nav = styled.nav`
    width: 100%;
    visibility: hidden;
    height: 0;
    position: absolute;
    ${props => {
    if (props.$visible) return `
        visibility: visible;
        height: auto;
        position: relative;
    `;
    }}
    @media (min-width: 800px) {
        visibility: visible;
        height: auto;
        position: initial;
        display: flex;
    }
`;

const NavList = styled.ul`
    list-style-type: none;
    padding: 0;
    ${props => {
        if (props.$primary) return`
            margin-bottom: 2em;
        `;
    }}
    @media (min-width: 800px) {
        display: flex;
        gap: 1em;
        margin: 0;
        ${props => {
            if (props.$primary) return`
                margin: 0 auto;
            `;
        }}
    }
`; // $primary $secondary

const NavItem = styled.li`
    & + & {
        margin-top: 1.2em;
    }
    @media (min-width: 800px) {
        & + & {
            margin-top: 0;
        }
    }
`;

const NavLink = styled.a.attrs({href: '#'})`
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    ${props => {
        if (props.$button) {
            return `
                background: #fff;
                color: #136c72;
                padding: 0.25em 1em;
                border-radius: 10em;
            `;
        }
    }}
`; // href $button

const Hero = styled.section`
    padding: 100px 0;
    background-color: #23424a;
    color: #fff;
    p {
        margin-bottom: 3em;
    }
`;

const HeroText = styled.div`
    @media (min-width: 800px) {
        width: 62%;
    }
`;

const Btn = styled.a.attrs({href: '#'})`
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    color: #23424a;
    font-weight: 900;
    background-color: #38cfd9;
    padding: 0.75em 2em;
    border-radius: 100px;
    &:hover,
    &:focus {
        opacity: 0.75;
    }
`;

const HeroImg = styled.img.attrs({
    src: 'https://unsplash.it/400/300',
    alt: 'UX design sketches'
})`
    margin-top: 2em;
    @media (min-width: 800px) {
        width: 32%;
        align-self: flex-start;
        margin: 0;
    }
`;

const Main = styled.main`
    margin-top: 3em;
`;

const PrimaryContent = styled.section`
    @media (min-width: 800px) {
        width: 62%;
    }
`;

const SectionTitle = styled.h2`
    color: #87629a;
`;

const Sidebar = styled.aside`
    padding: 1em;
    text-align: center;
    color: #fff;
    background-color: #136c72;
    @media (min-width: 800px) {
        width: 32%;
    }
`;

const SidebarTitle = styled.h2``;

function NavController() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <Row style={{alignItems: 'center'}}>
            <NavToggle onClick={() => setIsVisible((prev) => !prev)}>
                <Hamburger></Hamburger>
            </NavToggle>
            <Logo>
                {LogoSvg}
            </Logo>
            <Nav $visible={isVisible}>
                <NavList $primary>
                    <NavItem><NavLink>Home</NavLink></NavItem>
                    <NavItem><NavLink>About</NavLink></NavItem>
                    <NavItem><NavLink>Contact</NavLink></NavItem>
                </NavList>
                <NavList $secondary>
                    <NavItem><NavLink>Sign In</NavLink></NavItem>
                    <NavItem><NavLink $button>Sign Up</NavLink></NavItem>
                </NavList>
            </Nav>
        </Row>
    );
}

function Challenge8() {
    return (
        <Body>
            <GlobalStyles />
            <header>
                <Container>
                    <NavController />
                </Container>
            </header>
            <Hero>
                <Container>
                    <Row>
                        <HeroText>
                            <h1>Responsive layouts don't have to be a struggle</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <Btn>I want to learn</Btn>
                        </HeroText>
                        <HeroImg />
                    </Row>
                </Container>
            </Hero>
            <Main>
                <Container>
                    <Row>
                        <PrimaryContent>
                            <SectionTitle>Quality designs made custom, on demand, just for you</SectionTitle>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </PrimaryContent>
                        <Sidebar>
                            <SidebarTitle>Cheap</SidebarTitle>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

                            <SidebarTitle>Quick</SidebarTitle>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

                            <SidebarTitle>Quality</SidebarTitle>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </Sidebar>
                    </Row>
                </Container>
            </Main>
        </Body>
    );
}

export default Challenge8;