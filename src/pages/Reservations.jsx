import React, {Component, useState} from 'react'
import axios from 'axios'
import Seats from '../components/Seats'
let FLIGHTS_URL = "http://localhost:3000/flights/3.json"
class Reservations extends Component{
    constructor (){
        super();
        this.state = {
            flight: {},
            plane: {}
        }
    }

    componentDidMount(){
        const fetchFlight =()=>{
            axios(FLIGHTS_URL).then((response)=>{
                this.setState({flight: response.data}) 
                let airplane = fetchAirplane(response.data.airplane_id)
            })
        }
        fetchFlight()
        const fetchAirplane =(airplane_id)=>{
            let airplane_URL = `http://localhost:3000/airplanes/${airplane_id}.json`
            axios(airplane_URL).then((response)=>{
                this.setState({plane: response.data}) 
            })
        }
        fetchAirplane()
    }
    render(){
        return(
            <div>
                <h1>Reservations</h1>
                <Seats flight={this.state.flight} plane={this.state.plane}/>
            </div>

        )
    }

}
export default Reservations;