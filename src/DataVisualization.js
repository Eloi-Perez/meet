import React, { PureComponent } from 'react';
import { ScatterChart, ZAxis, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter, ResponsiveContainer } from 'recharts';

class DataVisualization extends PureComponent {

    render() {
        const { events } = this.props;

        return (
            <ResponsiveContainer>
                <h4>Events in each city</h4>

                <ScatterChart
                    width={400}
                    height={400}
                    margin={{
                        top: 20, right: 20, bottom: 20, left: 20,
                    }}
                >
                    <CartesianGrid />
                    <XAxis type="number" dataKey="x" name="stature" unit="cm" />
                    <YAxis type="number" dataKey="y" name="weight" unit="kg" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter name="A school" data={data} fill="#8884d8" />
                </ScatterChart>      
            </ResponsiveContainer >
        );
    }
}

export default DataVisualization;