import Challenge1Css from './styles/Challenge1.module.css';
import Hr from '../../Components/Hr/Hr';

function Container({children}) {
    return (
        <div className={Challenge1Css.container}>
            {children}
        </div>
    );
}

function IntroContent({children}) {
    return (
        <div className={Challenge1Css['intro-content']}>
            {children}
        </div>
    );
}

function Challenge1() {

    const name = "Challenge 1";

    return (
        <>
            <Hr name={name}/>
            <Container>
                <IntroContent>
                    <h1>Lorem ipsum dolor sit.</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod unde rerum, deleniti ea obcaecati sint hic
                        odit dicta tenetur qui ut dolorum provident sit, atque, reprehenderit nulla voluptate! Officiis,
                        consectetur?</p>
                    <p>Iste ipsa enim delectus porro, ullam repellendus maiores quis rem debitis cum, necessitatibus architecto
                        dolor? Velit, ad quaerat blanditiis veritatis expedita totam vel voluptatem officiis officia ab modi
                        voluptatibus obcaecati.</p>
                    <p>Accusantium minima iusto nobis fuga hic explicabo unde illum, perferendis et animi aperiam quaerat, eaque
                        deleniti alias blanditiis exercitationem commodi repudiandae ullam consequatur incidunt reiciendis
                        repellat officia laboriosam. Esse, modi.</p>
                    <p>Expedita cupiditate iure odit, delectus placeat optio magnam assumenda mollitia aspernatur at saepe nisi
                        commodi natus excepturi voluptate. Recusandae nisi dolorem, necessitatibus optio aliquam repellat.
                        Adipisci, incidunt. Consequuntur, natus nulla.</p>
                </IntroContent>
            </Container>
        </>
    );
}

export default Challenge1;