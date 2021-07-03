import React, { PureComponent  } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';

class LocationVisualization extends PureComponent  {

    getData = () => {
        const { eventsSliced, locations } = this.props;
        const data = locations.map((location) => {
            const number = eventsSliced.filter((event) => event.location === location).length
            const city = location.split(', ').shift()
            return { city, number };
        })
        return data;
    };

    render() {
        return (
            <ResponsiveContainer height={400} >
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <CartesianGrid />
                    <XAxis type="category" dataKey="city" name="city" />
                    <YAxis
                        allowDecimals={false}
                        type="number"
                        dataKey="number"
                        name="number of events"
                    />
                    <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                    <Scatter data={this.getData()} fill="#8884d8" />
                </ScatterChart>
            </ResponsiveContainer>
        );
    }
}

export default LocationVisualization;