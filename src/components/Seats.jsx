import React from 'react'
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
    getSeats()

return(
<div>
{console.table(seats)}

<h1 className ='s'>Seats</h1>

<ul class='flightDisplay'>


    <h5> Date: {props.flight.date} </h5>
    <h5> Flight Number: {props.flight.number} </h5>
    <h5> Departure: {props.flight.departure} </h5>
    <h5> Destination: {props.flight.destination} </h5>



</ul>


{/* {seats.map((s)=> (<input type="button" value={s} />))} */}
{seats.map((r,i)=> (
    <div className ='button' key={i}>
        {console.log("row", r,i)}
        {seats[i].map((s)=>{
            {console.log("seat", s)}
            return <input type='button' value={s.name} key={s.name} />
        })}
    </div>
))}




</div>



    )
}

export default Seats

