import React, { useEffect, useState } from 'react';
import "./css/stylee.css"

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2bed10a78b8cd29d72ef8ff005a938d5`
            const response = await fetch(url);
            // console.log(response) ;
            const resJson = await response.json();
            console.log(resJson);
            // setCity(resJson);
            setCity(resJson.main);


        }
        fetchApi();
    }, [search])
    return (<>
        <div className="box">
            <div className="inputData">
                <input type="search" placeholder='Search Anything' className='inputfield' value={search}
                    onChange={(event) => {
                        setSearch(event.target.value)

                    }
                    }
                />

            </div>
            {!city ? (
                <p className='noError' >No Data Found</p>
            ) : (
                <>

                    <div className="info">
                        <h2 className="location">
                            <i className="fas fa-street-view"></i> <strong className='str' > {search}</strong>
                        </h2>
                        <h1 className='temp'> {city.temp}°Cel</h1>
                        <h3 className='tempmin_max'> {city.temp_min}°Cel | {city.temp_max}°Cel</h3>
                    </div>
                    <div className="wave -one"></div>
                    <div className="wave -two"></div>
                    <div className="wave -three"></div>
                </>
            )
            }
        </div>
    </>)
}




export default Tempapp;
