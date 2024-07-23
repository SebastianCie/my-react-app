
function Footer(){
    const currentyear=new Date().getFullYear();
return(
    <footer>
        <p>&copy; {new Date().getFullYear()} Meine Webseite {currentyear}</p>
    </footer>
); 
}

export default Footer 