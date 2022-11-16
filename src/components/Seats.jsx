import React from 'react'
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
<h1>seats</h1>

<ul>
    <li> {props.flight.date} </li>
    <li> {props.flight.number} </li>
    <li> {props.flight.departure} </li>
    <li> {props.flight.destination} </li>
</ul>


{/* {seats.map((s)=> (<input type="button" value={s} />))} */}
{seats.map((r,i)=> (
    <div key={i}>
        {console.log("row", r,i)}
        {seats[i].map((s)=>{
            {console.log("seat", s)}
            return <input type="button" value={s.name} key={s.name} />
        })}
    </div>
))}




</div>



    )
}

export default Seats