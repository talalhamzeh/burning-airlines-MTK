import React from 'react'
import axios from 'axios'
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
            flight_id: props.flight.id,
            name: e.target[0].value
        }
        console.log(reservation)
        axios.post('http://localhost:3000/reservations',reservation)
    }
    const _handleSeat = (e)=>{
        e.target.value="X"
        reservedSeat = e.target.name
        console.log(reservedSeat)
    }

return(
    <div>
    {console.table(seats)}
    <h1>seats</h1>

    <ul>
        <li> {props.flight.date} </li>
        <li> {props.flight.number} </li>
        <li> {props.flight.departure} </li>
        <li> {props.flight.destination} </li>
    </ul>


    {/* {seats.map((s)=> (<input type="button" value={s} />))} */}
    <form onSubmit={_handleReservation}>
        <p>Name:</p>
        <input type="text" name="name" />
        {seats.map((r,i)=> (
            <div key={i}>
                {console.log("row", r,i)}
                {seats[i].map((s)=>{
                    {console.log("seat", s)}
                    return <input type="button" name={s.name} value={s.name} status={s.status} key={s.name} onClick={_handleSeat}/>
                })}
            </div>
        ))}
    <input type="submit" />
    </form>

    </div>
)
}

export default Seats

