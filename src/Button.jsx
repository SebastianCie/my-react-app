
function Button(){
    const styles={
            backgroundColor: "hsl(200, 100%, 50%)",
            color: "aliceblue",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "x-large",
            padding: "10px 20px",
            borderRadius: "5%",
            border:"none",
            minWidth: "250px",
            height: "150px",
            cursor: "pointer",
    }
    return(
        <button style={styles}>Click me</button>
    );
}
export default Button