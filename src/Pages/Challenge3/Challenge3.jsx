import Challenge3Css from './styles/Challenge3.module.css';
import Hr from '../../Components/Hr/Hr';

function Challenge3() {
    return (
        <>
            <BGC_Container>
                <Container>
                    <IntroContent>
                        <h2>Responsive layouts don't have to be a struggle</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </IntroContent>
                    <Button>I want to learn</Button>
                </Container>
            </BGC_Container>
            <Hr subHr={true} />
            <BGC_Container fluid={true}>
                <Container fluid={true}>
                    <IntroContent>
                        <h2>Responsive layouts don't have to be a struggle</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </IntroContent>
                    <Button>I want to learn</Button>
                </Container>
            </BGC_Container>
        </>
    );
}

function BGC_Container({children, color, fluid}) {
    return (
        <div className={
            fluid ? Challenge3Css['bgc-container-fluid'] : Challenge3Css['bgc-container']} 
            style={color ? {'backgroundColor': color} : {}}
        >
            {children}
        </div>
    );
}

function Container({children, fluid}) {
    return (
        <div className={
            fluid ? Challenge3Css['container-fluid'] : Challenge3Css.container}>
            {children}
        </div>
    );
}

function IntroContent({children}) {
    return (
        <div className={Challenge3Css['intro-content']}>
            {children}
        </div>
    );
}

function Button({children}) {
    return (
        <button className={Challenge3Css.button}>
           {children} 
        </button>
    );
}

export default Challenge3;