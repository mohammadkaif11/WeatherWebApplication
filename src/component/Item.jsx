import React from 'react'
function Item(props) {
    const converttemp = (data) => {
        return Math.floor(data - 273.15)
    }
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title">{props.data.name}</h1>
                    <h5 className="card-title">Temprature  {converttemp(props.data.main.temp)}°C</h5>
                    <h5 className="card-title">MIN Temprature  {converttemp(props.data.main.temp_max)}°C</h5>
                    <h5 className="card-title">Max Temprature  {converttemp(props.data.main.temp_min)}°C</h5>
                </div>
            </div>
        </div>
    )
}

export default Item
