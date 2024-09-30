import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import './chart.css';

const data = [
    { time: '10 AM', value: 30000 },
    { time: '1 PM', value: 32000 },
    { time: '4 PM', value: 29000 },
    { time: '7 PM', value: 24530.08, change: -192 },
    { time: '10 PM', value: 27500 },
    { time: '1 AM', value: 28000 },
    { time: '4 AM', value: 29000 },
    { time: '7 AM', value: 30000 },
    { time: '10 AM', value: 31000 }
];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">Time: {label}</p>
                <p>Value: ₹{payload[0].value.toFixed(2)}</p>
                {payload[0].payload.change && (
                    <p>Change: ₹{payload[0].payload.change}</p>
                )}
            </div>
        );
    }

    return null;
};

const Chart = () => {
    return (
        <div className="portfolio-container">
            {/* Navigation Tabs */}
            <div className="nav-tabs">
                <div className="tab active">Portfolio Performance</div>
                <div className="tab">Statistics</div>
                <div className="tab">Transaction</div>
            </div>
            
            {/* Timeframe Buttons */}
            <div className="timeframe-buttons">
                <button className="timeframe active">24H</button>
                <button className="timeframe">1W</button>
                <button className="timeframe">1M</button>
                <button className="timeframe">1Y</button>
                <button className="timeframe">All</button>
            </div>
            
            {/* Line Chart */}
            <LineChart className='linechart'
                width={900}
                height={300}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="time" tick={{ fill: "#000000" }} /> {/* Black text for X-axis */}
                <YAxis tick={{ fill: "#000000" }} /> {/* Black text for Y-axis */}
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="value" stroke="#8884d8" dot={{ r: 6 }} />
            </LineChart>
        </div>
    );
};

export default Chart;
