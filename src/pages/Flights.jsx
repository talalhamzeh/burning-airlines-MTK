import React, {Component} from 'react'
import axios from 'axios';
const FLIGHTS_URL = "http://localhost:3000/flights.json"
class Flights extends Component{
    constructor (){
        super();
        this.state = {
            flights: []
        }
    }
    componentDidMount(){
        const fetchFlights =()=>{
            axios(FLIGHTS_URL).then((response)=>{
                console.log(response.data)
            })
        }
        fetchFlights()
    }

    render (){
        return(
            <h1>Flights</h1>
        );
    }
};

export default Flights