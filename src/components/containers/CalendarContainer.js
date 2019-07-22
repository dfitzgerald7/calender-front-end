import React, { Component } from 'react';
import CalendarComponent from '../stateless/CalendarComponent'

const monthLengthHash = {
    January: 31, February: 28, March: 31, April: 30, May:31, June: 30, July: 31, August: 31, September: 30, October: 31, November: 30, December: 31
}

class CalendarContainer extends Component {

    state = {
        month: 'January',
        num_days: 31,
        days: []
    }

    onChange = event => {
        event.preventDefault()
        this.setState({
            month: event.target.value,
            num_days: monthLengthHash[event.target.value]
        })
    }

    onSubmit = event => {
        event.preventDefault()
        this.setState({
            month: event.value
        })
    }

    render(){
        return (
            <>
                <CalendarComponent days={this.state.days} num_days={this.state.num_days}/>
                <br/>
                <form onSubmit={this.onSubmit} id='monthDropdown'>
                    <select value={this.state.month} onChange={this.onChange}>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March"> March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                </form>
            </>
        )
    }
}

export default CalendarContainer