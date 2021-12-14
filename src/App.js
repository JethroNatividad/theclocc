import React, { useEffect, useState } from 'react';
import './App.css';
import Clock from './Clock';
import Sidebar from './Sidebar';
import axios from 'axios';
import moment from 'moment'

function App() {
  const [datetime, setDatetime] = useState(null)
  const [timezone, setTimeZone] = useState(null)
  const [utcOffset, setUtcOffset] = useState('')
  const [abbreviation, setAbbreviation] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function main() {
      try {
        const response = await axios.get('http://worldtimeapi.org/api/ip');
        const { data } = response;
        setDatetime(data.datetime)
        setTimeZone(data.timezone)
        setUtcOffset(data.utc_offset)
        setAbbreviation(data.abbreviation)
        setLoading(false)

      } catch (error) {
        console.log(error);
      }

    }
    main()
  }, [])

  useEffect(() => {
    if (!loading) {
      const interval = setInterval(() => {
        setDatetime(moment(datetime).add(1, 's').format())
        console.log('run')
      }, 1000)
      return () => clearInterval(interval)
    }
  })

  const changeTimezone = async (timezone) => {
    try {
      setLoading(true)
      const response = await axios.get(`http://worldtimeapi.org/api/timezone/${timezone}`);
      const { data } = response;
      setDatetime(data.datetime)
      setTimeZone(data.timezone)
      setUtcOffset(data.utc_offset)
      setAbbreviation(data.abbreviation)
      setLoading(false)

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <div className="Main">
        <div className="Main-title">the.CLOCC</div>
        <div className="Main-clock">
          <Clock timezone={timezone} datetime={datetime} utc_offset={utcOffset} />
        </div>
      </div>
      <div className="Sidebar">
        <Sidebar changeTimezone={changeTimezone} timezone={timezone} />
      </div>
    </div>
  );
}

export default App;
