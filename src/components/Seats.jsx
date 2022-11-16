import React from 'react'
const seats=[]
const Seats =(props)=>{
    const display=()=>{
        console.log(props)
    }
    display()
    const getSeats = ()=>{
        const column =[ 'A', "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]

        for (let c = 0; c < props.plane.columns ; c++) {
            for (let r = 0; r < props.plane.rows ; r++) {
                seats.push(`${column[c]}${r}`)
            }
        }
        console.log(seats)
    }
    getSeats()



 






    return(
<div>
<h1>seats</h1>

<ul>

    <li> {props.flight.date} </li>
    <li> {props.flight.number} </li>
    <li> {props.flight.departure} </li>
    <li> {props.flight.destination} </li>
  


</ul>

{seats.map((s)=> <input type="button" value={s} />)}





</div>



    )
}

export default Seats