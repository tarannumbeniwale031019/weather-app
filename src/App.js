import {useState} from 'react'
const App=()=>{
    let[city,setCity]=useState("")
    let[data,setData]=useState("")
    let fun=(e)=>{
        setCity(e.target.value)
    }
    let gettemp=()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eedd52cc943dd9174f2c65178d154bdd`).then((res)=>res.json()).then((data)=>{
            console.log(data)
            setData(data)
        })
    }
    return(
        <div>
            <input type="text" onChange={fun} placeholder="enter city name"/>
            <button onClick={gettemp}>gettemp</button>
            {data!=="" && <div>
                <h1> City Name:{data.name}</h1>
                <h1> Country Name:{data.sys.country}</h1>
                <h1> Mintemp:{data.main.temp_min}</h1>
                <h1> Maxtemp:{data.main.temp_max}</h1>
                <h1> temp:{data.main.temp}</h1>
                </div>}
        </div>
    ) 
    }
export default App

 

 