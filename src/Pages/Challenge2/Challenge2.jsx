import Challenge2Css from './styles/Challenge2.module.css';
import Hr from '../../Components/Hr/Hr';

function BGC_Container({children, color}) {
    return (
        <div className={
            Challenge2Css['bgc-container']} 
            style={color?{'backgroundColor': color}:{}}
        >
            {children}
        </div>
    );
}

function Container({children}) {
    return (
        <div className={Challenge2Css.container}>
            {children}
        </div>
    );
}

function IntroContent({children}) {
    return (
        <div className={Challenge2Css['intro-content']}>
            {children}
        </div>
    );
}

function Challenge2() {

    const name = "Challenge 2";

    return (
    <>
        <Hr name={name}/>
        <BGC_Container>
            <Container>
                <IntroContent>
                    <h1>Lorem ipsum dolor sit.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aspernatur distinctio laudantium dolores. Nulla quibusdam reprehenderit eum sit minus aliquid!</p>
                </IntroContent>
            </Container>
        </BGC_Container>
        <Hr subHr={true}></Hr>
        <BGC_Container color='#325e6a'>
            <Container>
                <h2>more content D:</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, mollitia adipisci magnam voluptatibus repellendus fuga ut repellat exercitationem eaque amet, omnis aliquam fugiat laudantium id dicta at? Consectetur iure porro illum laudantium excepturi a laborum!</p>
                <p>Sit magni soluta porro fugit placeat eius itaque, accusamus quisquam voluptates reiciendis pariatur, vitae molestiae. Minima, quos reprehenderit autem animi, nisi necessitatibus eligendi quis modi, facilis ipsam nihil odit quaerat! Nisi doloribus harum culpa ipsam!</p>
                <p>Sint corporis animi repudiandae. Aliquid illum, tenetur magnam provident molestiae rem doloremque aspernatur quia reiciendis est facilis enim praesentium officia sequi qui debitis exercitationem quaerat hic quos recusandae. Architecto repudiandae aperiam tempora iste saepe error.</p>
                <p>Provident aut suscipit aspernatur doloribus illum assumenda cupiditate perferendis dolores! Obcaecati omnis magnam ipsam voluptas ipsa eos explicabo quisquam architecto similique, sunt repellendus animi a doloribus ab deserunt. Dicta neque nostrum modi, illum debitis dolorem.</p>
            </Container>
        </BGC_Container>
    </>
    );
}

export default Challenge2;