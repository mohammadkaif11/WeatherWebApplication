import React, { useEffect, useState } from 'react'
import Item from './Item';

function Homeitem(props) {
    const [data, setdata] = useState([]);
    const [render, setrender] = useState(false);
    //eslint-disable-next-line
    const getData = async () => {
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=84bf2d0571371f782f6464a4c9b89aec`
        const response = await fetch(url);
        const res = await response.json();
        if (res.message === "city not found") {
            setrender(false);
        } else {
            setdata(res);
            setrender(true);
        }
    }
    //  eslint-disable-next-line
    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="container my-2">
            {
                render ? <Item data={data} /> : <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }
        </div>
    )
}

export default Homeitem
