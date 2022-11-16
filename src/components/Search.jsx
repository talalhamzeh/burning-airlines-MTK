import React, { Component } from 'react';
import axios from 'axios';
import { ReactDOM } from 'react';
import { Link} from 'react-router-dom'

const FLIGHTS_URL = 'http://localhost:3000/flights.json';


class Search extends Component{

    constructor(props) {

        super(props);
        this.state = {
            searchResult: [],
        
            searchDeparture: '',
            searchDestination: ''
        };
        this._handleFlightOrigin = this._handleFlightOrigin.bind(this);
        this._handleFlightDestination = this._handleFlightDestination.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

        _handleFlightOrigin (e) {
            this.setState({ searchDeparture: e.target.value });
        }
    
        _handleFlightDestination (e) {
             this.setState({ searchDestination: e.target.value });
        }
    
        _handleSubmit (e) {
            e.preventDefault()

            const matches= this.props.flights.filter( (f) => { 
                return f.departure === this.state.searchDeparture && f.destination === this.state.searchDestination;


            });
            this.setState ({ 
                searchResult : matches 
            })
        }


    render () {
    
   
    const displayFlightDate = this.state.searchResult.map((s) => <p key={ s.id }>{ s.date }</p>)
    const displayFlightNumber = this.state.searchResult.map((s) => <Link to={"/reservations/" + s }  key={ s.id }>{ s.number }</Link>)
    const displayFlightOrigin = this.state.searchResult.map((s) => <p key={ s.id }>{ s.departure }</p>)
    const displayFlightDestination = this.state.searchResult.map((s) => <p key={ s.id }>{ s.destination }</p>)
    





    return (
       
        <div>
            
            <h1> Search Flights</h1>

            <form onSubmit={ this._handleSubmit }>

                <input onChange={this._handleFlightOrigin}  value={this.state.searchDeparture} placeholder='From' />
                <input onChange={this._handleFlightDestination} value={this.state.searchDestination} placeholder='To' />
                <input type="submit" value="search" />
            </form>

            <div className='flightDisplay'>

                <div>
                    <h5>Date</h5>
                    {displayFlightDate}

                    
                </div>
                <div>
                    <h5>Flight Number </h5>
                    {displayFlightNumber}
                   
                </div>
                <div>
                    <h5>Origin</h5>
                    {displayFlightOrigin}
                    
                </div>
                <div>
                    <h5>Destination</h5>
                    {displayFlightDestination}
                    
                </div>
                
            </div>
         </div>
    );
    }
}
export default Search ; 
