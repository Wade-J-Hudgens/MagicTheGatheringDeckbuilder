import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({})
  useEffect(()=>{
    fetch("http://localhost:4000/api/registerUser", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({email:"test@gmail.com",firstName:"wade",lastName:"hudgens",username:"wadehudgens",password:"6516565@SDFsvsfvbs"})
    }).then((res) => {
      return res.json()
    })
    .then((res) => {
      setData(res);
    })
  }, [])
  return (
    <div className="App">
      SUCC: {data.success.toString()}
      <br />
      ERR: {data.error}
    </div>
  );
}

export default App;
