import React, { useState } from 'react'
import Homeitem from './Homeitem';
import '../home.css'
function Home() {
    const [render, setrender] = useState(false)
    const [city, setcity] = useState('');
    const onChange =(e) => {
        setcity(e.target.value)
       setrender(false);
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setrender(true);
    }
 
    return (

            <div className="container my-2">
                <form className="d-flex" onSubmit={handleSubmit}>
                    <input className="form-control me-2" onChange={onChange} type="search" value={city} placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit" disabled={city.length==0}>Search</button>
                </form>
                {render?<Homeitem city={city}/>:<h1 className="container"> Enter City</h1>}
                
            </div>


    )
}

export default Home
