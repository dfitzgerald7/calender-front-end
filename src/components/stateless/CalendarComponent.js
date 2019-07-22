import React from 'react';

const CalendarComponent = props => {

    const calendarArr = []

    

    for (let i=1; i<=30; i++){
        calendarArr.push( 
            <div className='cell'>       
                <h5>{i}</h5>
                <li className='events'>
                    To-do
                </li>
            </div>
        )
    }

    return (
        <div className='calendarComponent'>
            {calendarArr}
        </div>
    )
}

export default CalendarComponent