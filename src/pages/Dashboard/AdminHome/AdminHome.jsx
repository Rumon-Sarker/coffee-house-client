import { useQuery } from "@tanstack/react-query";
import useAxionSecure from "../../../hocks/useAxionSecure";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';

const colors = ['orange', 'green', '#black', 'red', 'pink'];

const data = [
    {
        name: 'Reguler',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Green',
        uv: 3500,
        pv: 2400,
        amt: 2400,
    },

    {
        name: 'Black-Coffee',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Offer',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    }
];
const data2 = [
    { name: 'Reguler', value: 400 },
    { name: 'Green', value: 300 },
    { name: 'Black', value: 300 },
    { name: 'Offer', value: 200 },
];
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const AdminHome = () => {
    const axiosSecure = useAxionSecure();

    const { data: revenew = [] } = useQuery({
        queryKey: ["adminState"],
        queryFn: async () => {
            const res = await axiosSecure.get("/adminState")
            return res.data
        }


    })
    return (
        <div className="mx-auto p-4">

            <h1 className="text-3xl text-center font-bold shadow-2xl mt-4">Admin Home</h1>

            <div className="stats stats-vertical text-2xl bg-orange-100 ml-5 mt-8 gap-2 lg:stats-horizontal shadow">

                <div className="stat gap-2">
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">${revenew.total}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Users</div>
                    <div className="stat-value">{revenew.users}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat ">
                    <div className="stat-title">Order</div>
                    <div className="stat-value">{revenew.order}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div className="stat gap-2">
                    <div className="stat-title">Items</div>
                    <div className="stat-value">{revenew.menuItems}</div>
                    <div className="stat-desc">↗︎ 60 (58%)</div>

                </div>

            </div>
            <div className="lg:flex sm:flex-row">
                <div className="mt-12">
                    <BarChart
                        width={400}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: "top" }}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div>

                    <PieChart width={400} height={400}>
                        <Pie
                            data={data2}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data2.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>

                </div>
            </div>
        </div>
    );
};

export default AdminHome;