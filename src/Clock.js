import moment from 'moment-timezone'
import React from 'react'
import './Clock.css'

const Clock = ({ timezone, datetime, utc_offset }) => {

    return (
        <div className="Main-clock">
            <p className="time">{moment.tz(datetime, timezone).format('HH:mm:ss')}</p>
            <div className="timezone-container">
                <p className="timezone">{timezone}</p>
                <p>{utc_offset} - {moment.tz(datetime, timezone).format('dddd, MMMM D')}</p>

            </div>
        </div>
    )
}

export default Clock
