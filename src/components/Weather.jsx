import React from 'react';

const Weather = ({result}) => {

    const { name, main } = result;

    // if not data return null
    if(!name) return null;

    // Kelvin
    const kelvin = 273.15;

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>The weather from {name} is:</h2>
                <p className="temperature">
                    { parseFloat(main.temp-kelvin, 10).toFixed(2) } 
                    <span> &#x2103; </span>
                </p>
                <p>
                    Max Temp: { parseFloat(main.temp_max-kelvin, 10).toFixed(2) } 
                    <span> &#x2103; </span>
                </p>
                <p>
                    Min Temp: { parseFloat(main.temp_min-kelvin, 10).toFixed(2) } 
                    <span> &#x2103; </span>
                </p>
            </div>
        </div>
    );
}
 
export default Weather;