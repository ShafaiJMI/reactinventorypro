import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AChart = () => {
    const data = [
        {
            amt: 2400,
        },
        {
            amt: 2210,
        },
        {
            amt: 2290,
        },
        {
            amt: 2000,
        },
        {
            amt: 2181,
        },
        {
            amt: 2500,
        },
        {
            amt: 2100,
        },
    ];
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 30,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
            >
            <Area type="monotone" dataKey="amt" stroke="#65a30d" fill="#65a30d" />
            </AreaChart>
        </ResponsiveContainer>
    );
}

const StatsCard = ({title,data}) => (
    <div className="items-center justify-center h-48 bg-gray-50 dark:bg-gray-800">
        <h4>{title}</h4>
        <AChart />
    </div>
)

export default StatsCard;
