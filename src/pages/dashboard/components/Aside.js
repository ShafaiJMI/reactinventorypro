import React from "react";
import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import {MessageSquareIcon} from "lucide-react";
import data from "../../../data/dummy_data.json";

const BChart = () => {
    const data = [
        {
            pv: 2400,
        },
        {
            pv: 1398,
        },
        {
            pv: 9800,
        },
        {
            pv: 3908,
        },
        {
            pv: 4800,
        },
        {
            pv: 3800,
        },
        {
            pv: 4300,
        },
    ];
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
                <Bar dataKey="pv" fill="#65a30d" />
            </BarChart>
        </ResponsiveContainer>
    )
}

const PChart = () => {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    return (
        <PieChart width={400} height={400}>
            <Pie
                data={data}
                cx={200}
                cy={250}
                startAngle={180}
                endAngle={0}
                innerRadius={120}
                outerRadius={160}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
    )
}

const Activity = ({props}) => {
  return (
      <div className="flex gap-4 p-2 mb-2 h-12 items-center bg-white/70 shadow-sm border rounded-md">
          <div className="bg-yellow-200 rounded-full p-2"><MessageSquareIcon size={16}/></div>
          <div><p className="text-xs">{props.description}</p></div>
          <div></div>
      </div>
  )
}

function Aside() {
    return (
        <aside className="col-span-1 sm:p-2">

            <div className="flex rounded-3xl bg-white h-60 dark:bg-gray-800 mb-4 p-4">
               <BChart />
            </div>

            <div className="flex rounded-3xl justify-center items-center bg-white h-60 dark:bg-gray-800 mb-4">

               <PChart />
            </div>
            <div className="rounded-3xl bg-white h-auto dark:bg-gray-800 mb-4">
                <h4 className="px-4 pt-2">Activities</h4>
                <div className="p-4 flex flex-col">
                    {data.activityLogs.map((activity, index) => (
                        <Activity key={index} props={activity} />
                    ))}

                </div>
            </div>
        </aside>
    )
}
export default Aside;