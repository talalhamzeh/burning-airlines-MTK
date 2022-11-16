import React, { useState } from 'react';
import axios from 'axios';


const Search = (props) => {

    const [query, setQuery] = useState('');

    const handleFlightOrigin = (e) => {

        setQuery(e.target.value);
    }
    
    const handleFlightDestination = (e)=> {

        setQuery(e.target.value);
    
    }
       const _handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(query);
    };

    return (

        <div>
            <h1> Search Flights</h1>
            <form onSubmit={ _handleSubmit }>

                <input onChange={this.handleFlightOrigin} placeholder='From' />
                <input onChange={this.handleFlightDestination} placeholder='To' />
                
            </form>

            <div className='flightDisplay'>

                <div>
                    <h5>Date</h5>
                    {displayFlightDate}
                </div>
                <div>
                    <h5>Flight</h5>
                    {displayFlightNumber}
                </div>
                <div>
                    <h5>Origin</h5>
                    {displayFlightOrigin}
                </div>
                <div>
                    <h5>Destination</h5>
                    {displayFlightDestination}
                </div>
                <div>
                    <h5>Plane</h5>
                    {displayFlightPlane}
                </div>
            </div>
         </div>
    );
};
