import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';

export default function DateSeciton() {

  const getCurrentTime = () => moment().format('HH:mm:ss')

  const [time, setTime] = useState(getCurrentTime());
  const [date, setData] = useState('');
  
  setInterval(() => {
    setTime(getCurrentTime())
  }, 1000)
  
  useEffect(() => {
    setData(moment().format('dddd, DD-MM-YYYY'))
  }, [])

  return (
    <div className="container_date">
      <h1>{time}</h1>
      <h2>{date}</h2>
    </div>
  )
}
