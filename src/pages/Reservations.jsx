
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Seats from '../components/Seats'
import { useParams } from "react-router-dom";


const Reservations = ()=>{
    const {flight_id }= useParams()
    const [flight, setFlight] = useState({})
    const [plane, setPlane] = useState({})
    useEffect(()=>{            
        let FLIGHTS_URL = `http://localhost:3000/flights/${flight_id}.json`
        axios(FLIGHTS_URL).then((response)=>{
            setFlight(response.data)
            return response.data
        }).then((flight)=>{
            let airplane_URL = `http://localhost:3000/airplanes/${flight.airplane_id}.json`
            axios(airplane_URL).then((response)=>{
            setPlane(response.data)
        })
    })
    },[])



    return(
        <div>
            <h1>Reservations</h1>
            <Seats flight={flight} plane={plane}/>
        </div>
    )
    

}
export default Reservations;