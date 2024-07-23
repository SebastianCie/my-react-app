import React, {useState} from "react";

function Change()
{
const [vorname,setVorname]=useState("Spongebob");
const [anzahl,setAnzahl]=useState(10);
const [kommentar,setKommentar]=useState("");
const [zahlungsart,setZahlungsart]=useState("");
const [versand,setVersand]=useState("Lieferung");

function handleNameChange(event)
{
setVorname(event.target.value);
} 

function handleAnzahlChange(event)
{
setAnzahl(event.target.value);
}
function handleKommentarChange(event)
{
    setKommentar(event.target.value);
}
function handleZahlungsartChange(event)
{
    setZahlungsart(event.target.value);
}
function handleVersandChange(event)
{
    setVersand(event.target.value);
}
return(
    <div className="change-container">
        <label>Vorname</label><br/>
        <input value={vorname} onChange={handleNameChange}></input>
        <p>Name: {vorname}</p>
        <label>Anzahl</label><br/>
        <input value={anzahl} onChange={handleAnzahlChange} type="number"/>
        <p>Quantity: {anzahl}</p>
        <label>Kommentar</label><br/>
        <textarea value={kommentar} onChange={handleKommentarChange} placeholder="Lieferanweisungen einfügen."></textarea>
        <p>Anweisung:{kommentar}</p>
        <select value={zahlungsart} onChange={handleZahlungsartChange}> 
            <option value="">Wählen sie eine Zahlungsart aus.</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Paypal">Paypal</option>
        </select>
        <p>Zahlungsart:{zahlungsart}</p>
        <label className="radio-lable">
            <input type="radio" value="Abholung"
            checked={versand ==="Abholung"}
            onChange={handleVersandChange}/>
            Abholung</label><br></br>
        <label className="radio-lable">
        <input  type="radio" value="Lieferung"
        checked={versand ==="Lieferung"}
        onChange={handleVersandChange}/>
            Lieferung</label>
            <p>Versandart: {versand}</p>
    </div>
)
}
export default Change