//import logo from './logo.svg';
import "./App.css";
import axios from'axios';
import { useEffect, useState } from "react";

function App() {
  const [manufacturers, setManufacturers] = useState([])
  const [search,setSearch] = useState('');
  useEffect(() => {
    axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json")
      .then((val) => {
        setManufacturers(val.data.Results);
        console.log(val?.data?.Results);
      });
  }, []);
  const searchHandler=()=>{
    setManufacturers(search);
  }
  

  return (
    <div className="App">
      <center>
        <h1>Vehicle Manufacturers</h1>
      </center>
        <form>
          Search:<input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
          <button onClick={searchHandler}>Search</button>
        </form>
        <table>
        <tr>
          <th>Name</th>
          <th>Country</th>
        </tr>
        {manufacturers.length>0&&manufacturers.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.Mfr_Name}</td>
              <td>{val.Country}</td>
            </tr>
          )
        })}
      </table>
        
    </div>
  )
        }


export default App;
