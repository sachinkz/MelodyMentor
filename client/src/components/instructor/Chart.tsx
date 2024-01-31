
import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


const Chart = () => {

    const data = [
        { name: 'week 1', purchases: 10, pv: 2400, amt: 2400 },
        { name: 'week 2', purchases: 20, pv: 2400, amt: 2400 },
        { name: 'week 3', purchases: 34, pv: 2400, amt: 2400 },
        { name: 'week 4', purchases: 46, pv: 2400, amt: 2400 },
        { name: 'week 5', purchases: 55, pv: 2400, amt: 2400 },
        { name: 'this week', purchases: 74, pv: 2400, amt: 2400 },
        { name: 'this week', purchases: 75, pv: 2400, amt: 2400 },
        { name: 'this week', purchases: 80, pv: 2400, amt: 2400 },
        { name: 'this week', purchases: 90, pv: 2400, amt: 2400 },
        { name: 'this week', purchases: 105, pv: 2400, amt: 2400 },
    ];

    return (
        <div className='bg-[#0c0c0c] rounded-lg'>
            <h3 className='text-center font-bold mt-5'>Past weeks Purchases</h3>
            <LineChart width={800} height={400} data={data} margin={{ top: 30, right: 40, bottom: 10, left: 0 }}>
                <Line type="monotone" dataKey="purchases" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    )
}

export default Chart