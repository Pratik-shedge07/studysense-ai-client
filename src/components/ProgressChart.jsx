import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ChartWrapper = styled.div`
  width: 100%;
  height: 300px;
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 10px;
`;

const sampleData = [
  { day: 'Mon', tasks: 2 },
  { day: 'Tue', tasks: 3 },
  { day: 'Wed', tasks: 1 },
  { day: 'Thu', tasks: 4 },
  { day: 'Fri', tasks: 2 },
  { day: 'Sat', tasks: 3 },
  { day: 'Sun', tasks: 5 },
];

const ProgressChart = () => {
  return (
    <ChartWrapper>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={sampleData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="tasks" stroke="#3f51b5" strokeWidth={3} dot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
};

export default ProgressChart;
