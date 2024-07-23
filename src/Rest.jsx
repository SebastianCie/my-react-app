import { useState ,useEffect} from "react";
import JsonData from './it.json'

export default function Rest()
{
const [data,setData]=useState(null);
useEffect(() => {
  fetch//('')
  ('https://api.restful-api.dev/objects')
    .then(response => response.json())
    .then(json => setData(json))
    .catch(error => console.error(error));
}, []);

const itemList=(`${JSON.stringify(data, null, 2)}`);
//var obj = JSON.parse({JSON.stringify(data, null, 2)});
console.log(itemList);
console.log(JsonData);
const DisplayData=JsonData.map(
  (info)=>{
      return(
          <tr>
              <td>{info.name}</td>
              
          </tr>
      )
  }
)

return (

<div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Sr.NO</th>
                    <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>

   
);
}


/*{ <>
<div>
{data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
</div>
</> }*/