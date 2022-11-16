import React, {Component} from 'react'
import axios from 'axios';

import Search from '../components/Search' ;

const FLIGHTS_URL = "http://localhost:3000/flights.json"
class Flights extends Component{
    constructor (){
        super();
        this.state = {
            flights: [],
            

        }
    }
    componentDidMount(){
        const fetchFlights =()=>{
            axios(FLIGHTS_URL).then((response)=>{
                console.log(response.data)
                this.setState( {
                    flights : response.data 
                
                } )
            })
        }
        fetchFlights()
    }

    render (){
        return(
            <div>
                <Search flights={this.state.flights} />

          
            <h1>Flights</h1>

            </div>
        );
    }
};

export default Flights