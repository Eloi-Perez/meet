import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#ff0048', '#a200ff'];

const getData = (eventsSliced) => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS', 'Angular'];
    const data = genres.map((genre) => {
        const value = eventsSliced.filter(({ summary }) => summary.split(/[ ,.-]+/).includes(genre)).length;
        if (value === 0) {
            return { name: 'Others', value };
        } else {
            return { name: genre, value };
        }
    });
    return data;
};

const GenreVisualization = ({ eventsSliced }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(() => getData(eventsSliced));
    }, [eventsSliced]);

    return (
        <ResponsiveContainer height={400}>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

export default GenreVisualization;