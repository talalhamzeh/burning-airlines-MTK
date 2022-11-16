
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Seats from '../components/Seats'
import { useParams } from "react-router-dom";


const Reservations = ()=>{
    const {flight_id }= useParams()
    let FLIGHTS_URL = `http://localhost:3000/flights/${flight_id}.json`
    console.log(flight_id)
    const [flight, setFlight] = useState({})
    const [plane, setPlane] = useState({})
        useEffect(()=>{
            axios(FLIGHTS_URL).then((response)=>{
                setFlight(response.data)
            }).then(()=>{
                let airplane_URL = `http://localhost:3000/airplanes/${plane.id}.json`
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