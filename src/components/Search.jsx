import React, { useState } from 'react';
import axios from 'axios';


const Search = (props) => {

    const [destination, setDestination] = useState('');
    const [origin, setOrigin] = useState('');
    
    const _handleFlightOrigin = (e) => {
        setDestination(e.target.value);
        console.log(e.target.value)
    }
    
    const _handleFlightDestination = (e)=> {
        setOrigin(e.target.value);
        console.log(e.target.value)
    }
    // const _handleSubmit = (e) => {
    //     e.preventDefault();
    //     props.onSubmit(query);
    // };

    return (

        <div>
            <h1> Search Flights</h1>
            <form>
                <input onChange={_handleFlightOrigin} placeholder='From' />
                <input onChange={_handleFlightDestination} placeholder='To'/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Search;
