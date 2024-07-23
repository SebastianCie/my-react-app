import style from './Button.module.css'
function Button(){

    const handleClick =()=> console.log("OUTCH!");
    const handleClick2 = (userName) => console.log(`${userName} stop clicking me!`);
    return(
        <button onClick={() =>handleClick2("Sebastian")} className={style.button}>Click me 1</button>
    );
}
export default Button