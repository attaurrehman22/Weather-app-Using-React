import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const apiKey = "f56f24967aaf51182d1d4df628297c6d";

  const [data,setData]=useState({})
  const[inputcity,setInputcity]=useState("");

  const getwetherdetails=(cityName)=>
  {
    if(!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=" + apiKey
    axios.get(apiURL).then((res)=>
    {
      console.log("response",res.data)
      setData(res.data)
    }).catch((err)=>
    {
      console.log("error",err)
    })
  }

  const handleinputchange=(e)=>
  {
    setInputcity(e.target.value)
  }

  const search=()=>
  {
    getwetherdetails(inputcity)
  }

  return (
    <div className="col-md-12">
      <div className="wetherBG">
        <h1 className="heading">Wheather APP</h1>
        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control" value={inputcity} onChange={handleinputchange}/>
          <button onClick={search} className="btn btn-primary" type="button">
            Search
          </button>
        </div>
      </div>
       <div className="col-md-12 text-center mt-5">
      <div className="shadow rounded wetherResultBox">
      <img className="wheaterIcon"
       src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"/>
       <h5 className="wetherCity">{data.name}</h5>
       <h6 className="wetherTemp">{data.main && data.main.temp ? ((data.main.temp) - 273.15).toFixed(2) : ''}</h6>
      </div>
      </div>
    </div>
  );
}

export default App;
