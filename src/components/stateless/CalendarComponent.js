import React from 'react';

const CalendarComponent = props => {

    const calendarArr = []



    for (let i=1; i<=props.num_days; i++){
        calendarArr.push( 
            <div className='cell' key={'day'+i}>       
                <h5 className='cellDay'>{i}</h5>
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