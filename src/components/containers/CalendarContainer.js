import React, { Component } from 'react';
import CalendarComponent from '../stateless/CalendarComponent'

class CalendarContainer extends Component {

    state = {
        month: 'January',
        days: []
    }

    componentDidMount(){

    }

    onChange = event => {
        console.log(event.target.value)
        event.preventDefault()
        this.setState({
            month: event.target.value
        })
    }

    onSubmit = event => {
        console.log(event.value)
        event.preventDefault()
        this.setState({
            month: event.value
        })
    }

    render(){
        return (
            <>
                <form onSubmit={this.onSubmit}>
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
                <CalendarComponent days={this.state.days}/>
            </>
        )
    }
}

export default CalendarContainer