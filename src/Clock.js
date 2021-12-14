import React from 'react'
import './Clock.css'
const Clock = () => {
    return (
        <div className="Main-clock">
            <p className="time">12:00:00</p>
            <div className="timezone-container">
                <p className="timezone">Asia/Manila</p>
                <p>+08:00 - Sunday, 6 Dec 10</p>
            </div>
        </div>
    )
}

export default Clock
