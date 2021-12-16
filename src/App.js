import React, { useEffect, useState } from 'react';
import './App.css';
import Clock from './Clock';
import Sidebar from './Sidebar';
import axios from 'axios';
import moment from 'moment'
import searchIcon from './icons/search.svg'

function App() {
  const [datetime, setDatetime] = useState(null)
  const [timezone, setTimeZone] = useState(null)
  const [utcOffset, setUtcOffset] = useState('')
  const [abbreviation, setAbbreviation] = useState('')
  const [timezoneList, setTimezoneList] = useState([])
  const [loadingTimezones, setLoadingTimezones] = useState(true)
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // get current timezone based on ip address
  useEffect(() => {
    async function main() {
      try {
        const response = await axios.get('https://worldtimeapi.org/api/ip');
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

  // get all timezones
  useEffect(() => {
    async function main() {
      try {
        const response = await axios.get('https://worldtimeapi.org/api/timezone');
        const { data } = response;
        const mappedTimezones = data.map(timezone => {
          const x = timezone.lastIndexOf('/')
          return { query: timezone, text: timezone.substring(x + 1) }
        })
        setTimezoneList(mappedTimezones)
        setLoadingTimezones(false)

      } catch (error) {
        console.log(error);
      }

    }
    main()
  }, [])


  useEffect(() => {
    if (!loading && !loadingTimezones) {
      const interval = setInterval(() => {
        setDatetime(moment(datetime).add(1, 's').format())
        console.log('run')
      }, 1000)
      return () => clearInterval(interval)
    }
  })

  const checkIfDayOrNight = () => {
    const hour = moment(datetime).hours()
    if (hour > 6 && hour < 18) {
      return 'day'
    } else {
      return 'night'
    }
  }

  const changeTimezone = async (timezone) => {
    try {
      setLoading(true)
      const response = await axios.get(`https://worldtimeapi.org/api/timezone/${timezone}`);
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

  const toggleSidebar = (e, bool) => {
    console.log(bool)
    if (bool) {
      setSidebarOpen(bool)
    } else {
      setSidebarOpen(!sidebarOpen)
    }
  }

  return (
    <div className={`App ${checkIfDayOrNight()}`}>
      <div className={`Main ${sidebarOpen ? 'hidden' : 'max-width'}`}>
        <div className="top">
          <p className="Main-title">the.CLOCC</p>
          <div className="search-button-main" onClick={toggleSidebar}>
            <img src={searchIcon} alt="search" className="search-icon" />
          </div>
        </div>
        <div className="Main-clock">
          <Clock timezone={timezone} datetime={datetime} utc_offset={utcOffset} />
        </div>
      </div>
      <div className={`Sidebar ${sidebarOpen ? 'max-width' : 'hidden'}`}>
        <Sidebar toggleSidebar={toggleSidebar} changeTimezone={changeTimezone} timezone={timezone} timezoneList={timezoneList} />
      </div>
    </div>
  );
}

export default App;
