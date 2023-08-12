import HrCss from './styles/Hr.module.css';

function Hr({name, subHr}) {
    return (
        <>
            <p className={`${HrCss.p} ${subHr?HrCss.subHr:''}`} >{name}</p>
        </>
    );
}

export default Hr;