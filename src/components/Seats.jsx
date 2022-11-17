import React from 'react'
import axios from 'axios'
import './Seats.css'
const seats=[]
const Seats =(props)=>{
    const getSeats = ()=>{
        const column =[ 'A', "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]
        for (let r = 0; r<props.plane.rows; r++){
            seats.push([])
            for (let c=0;c<props.plane.columns; c++){
                seats[r].push({name: `${column[c]}${r+1}`, status: "empty"})
            }
        }
        console.log(seats)
    }
    let reservedSeat = ""
    getSeats()
    const _handleReservation=(e)=>{
        e.preventDefault()
        let reservation = {
            seat: reservedSeat,
            flight_id: props.flight.id
        }
        console.log(reservation)
        axios.post('http://localhost:3000/reservations',reservation)
    }
    const _handleSeat = (e)=>{
        e.target.value="X"
        reservedSeat = `${reservedSeat} ${e.target.name}`
        console.log(reservedSeat)
    }

return(
    <div>
    {console.table(seats)}
    <h1 className="s">Seats</h1>

    <ul className="flightDisplay">
        <li> Date: {props.flight.date} </li>
        <li> Flight Number: {props.flight.number} </li>
        <li> Departure: {props.flight.departure} </li>
        <li> Destination: {props.flight.destination} </li>
    </ul>


    {/* {seats.map((s)=> (<input type="button" value={s} />))} */}
    <form onSubmit={_handleReservation}>
        {seats.map((r,i)=> (
            <div className="button" key={i}>
                {console.log("row", r,i)}
                {seats[i].map((s)=>{
                    {console.log("seat", s)}
                    return <input className="button input" type="button" name={s.name} value={s.name} status={s.status} key={s.name} onClick={_handleSeat}/>
                })}
            </div>
        ))}
    <input className="submit" type="Submit" />
    </form>

    </div>
)
}

export default Seats

