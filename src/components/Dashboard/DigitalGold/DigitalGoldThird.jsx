import React from 'react'
import DigitalGoldThirdByCharts from './DigitalGoldThirdByCharts'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
const DigitalGoldThird = () => {
  return (
    <main className='main-container'>
    <div className='main-title'>
        <h3>Today</h3>
    </div>

    <div className='main-cards'>
        <div className='card'>
            <div className='card-inner'>
                <h3> Investment </h3>
                <BsFillArchiveFill className='card_icon'/>
            </div>
            <h1>300</h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3> Sell</h3>
                <BsFillGrid3X3GapFill className='card_icon'/>
            </div>
            <h1>12</h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3> GST</h3>
                <BsPeopleFill className='card_icon'/>
            </div>
            <h1>33</h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>Total Admin Commission</h3>
                <BsFillBellFill className='card_icon'/>
            </div>
            <h1>42</h1>
        </div>
    </div>

<DigitalGoldThirdByCharts/>

</main>
  )
}

export default DigitalGoldThird
