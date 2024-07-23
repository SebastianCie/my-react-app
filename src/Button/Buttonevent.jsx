import style from './Button.module.css'
function Button(){

    const handleClick =(e)=> e.target.textContent="OUCH!!!"; //console.log(e);
    const handleClickd =(e)=> e.target.textContent="Doppel OUCH!!!";
    return(
        <button onClick={(e) =>handleClick(e)} 
                onDoubleClick={(e) =>handleClickd(e)} 
                className={style.button}>Click me event
        </button>
    );
}
export default Button