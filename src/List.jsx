function List(props)
{
const category =props.category;
    const itemList=props.items;
    //console.log(props);
//fruits.sort((a,b) => a.name.localeCompare(b.name)); //alphabetical
//fruits.sort((a,b) => b.name.localeCompare(a.name)); //reverse alphabetical
//fruits.sort((a,b) => a.calories-b.calories); //numberic
//fruits.sort((a,b) => b.calories-a.calories); //reverse numberic

const lowCalcFruits = itemList.filter(item => item.calories<100)
const highCalcFruits = itemList.filter(item => item.calories>=100)

const listItems = lowCalcFruits.map(fruits => <li key={fruits.id}>
                                                      {fruits.name}: &nbsp;
                                                   <b>{fruits.calories}</b></li>);

const listItems2 = highCalcFruits.map(fruits => <li key={fruits.id}>
                                                        {fruits.name}: &nbsp;
                                                     <b>{fruits.calories}</b></li>);

return (<><h3 className="list-category">{category}</h3>
        <h2>low calories</h2><ol className="list-items">{listItems}</ol>
        <br></br> 
        <h2>high calories</h2><ol className="list-items">{listItems2}</ol></>
       );
}
export default List