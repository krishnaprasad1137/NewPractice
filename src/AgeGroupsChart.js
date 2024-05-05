import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const dataset = [
    {value :1, Age : '0-18', label: '0-18 Years' },
    {value :2, Age : '19-25', label: '19-25 Years' },
    {value :3, Age : '26-40', label: '26-40 Years' },
    {value :4, Age : '41-60', label: '41-60 Years' },
    {value :5, Age : '61-80', label: '61-80 Years'},
];

const valueFormatter = (Age) => `${Age}mm`;

export default function AgeGroupsChart() {
  return (
    <>
    <h1>Age Groups Chart</h1>
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'Age' }]}
      series={[
        { data: [1, 2, 5, 4, 3], dataKey: '0-18 Years', label: '0-18 Years', valueFormatter },
        { data: [1, 3, 1, 3, 1], dataKey: '19-25 Years', label: '19-25 Years', valueFormatter },
        { data: [3, 2, 4, 1, 5], dataKey: '26-40 Years', label: '26-40 Years', valueFormatter },
        { data: [5, 4, 3, 1, 7], dataKey: '41-60 Years', label: '41-60 Years', valueFormatter },
        { data: [3, 6, 5, 2, 1], dataKey: '61-80 Years', label: '61-80 Years', valueFormatter },
      ]}
      margin={{ top: 100, bottom: 30, left: 50, right: 10 }}
      width={600}
      height={400}
      layout="vertical"
      grid={{ horizontal: true }}
      categoryGapRatio = '1'
    />
    </>
  );
}
