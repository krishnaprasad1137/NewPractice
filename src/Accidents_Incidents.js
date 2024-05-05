import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';



function Accidents_Incidents() {

    // const chartSetting = {
    //     xAxis: [
    //       {
    //         label: 'rainfall (mm)',
    //       },
    //     ],
    //     width: 800,
    //     height: 400,
    //     sx: {
    //       [`.${axisClasses.left} .${axisClasses.label}`]: {
    //         transform: 'translate(-20px, 0)',
    //       },
    //     },
    //   };
   

    const dataset = [
        { year : 1997,  value: 1, label: 'Overturning' },
        { year : 1998,  value: 2, label: 'Head-on Collision' },
        { year : 1999,  value: 3, label: 'Rear End Collision' },
        { year : 2000,  value: 4, label: 'Collision Brush/Side Wipe' },
        { year : 2021,  value: 5, label: 'Right Turn Collision' },
        { year : 2022,  value: 6, label: 'Skidding' },
        { year : 2023,  value: 7, label: 'Left Turn Collision' },
        { year : 2024,  value: 8, label: 'Others (Pl. Specify)' },
    ]
  const valueFormatter = (year) => `${year}mm`;

    return (
        <>
            <h1>Accidents_Incidents</h1>
            <BarChart
            dataset={dataset}
                // xAxis={[{ scaleType: 'band', data: ['Overturning', 'Head-on Collision', 'Rear End Collision', 'Collision Brush/Side Wipe', 'Right Turn Collision', 'Skidding', 'Left Turn Collision', 'Others (Pl. Specify)'] }]}
                xAxis={[{ scaleType: 'band',  dataKey: 'year' ,categoryGapRatio: 0.3,
                barGapRatio: 1.9}]} 
                series={[
                    { data: [3, 5, 1, 6, 2, 5, 4, 3], dataKey: 'Overturning', label: 'Overturning', valueFormatter },
                    { data: [4, 3, 1, 5, 3, 1, 3, 1], dataKey: 'Head-on Collision', label: 'Head-on Collision', valueFormatter },
                    { data: [4, 2, 5, 4, 1, 4, 1, 5], dataKey: 'Rear End Collision', label: 'Rear End Collision', valueFormatter },
                    { data: [2, 4, 1, 3, 1, 7, 6, 5], dataKey: 'Collision Brush/Side Wipe', label: 'Collision Brush/Side Wipe', valueFormatter },
                    { data: [7, 6, 5, 4, 5, 2, 6, 5], dataKey: 'Right Turn Collision', label: 'Right Turn Collision', valueFormatter },
                    { data: [4, 2, 5, 4, 1, 5, 6, 1], dataKey: 'Skidding', label: 'Skidding', valueFormatter },
                    { data: [2, 4, 1, 3, 1, 5, 2, 4], dataKey: 'Left Turn Collision', label: 'Left Turn Collision', valueFormatter },
                    { data: [2, 6, 5, 5, 5, 2, 5, 4], dataKey: 'Others (Pl. Specify)', label: 'Others (Pl. Specify)', valueFormatter },

                  ]}
                  margin={{ top: 100, bottom: 30, left: 50, right: 10 }}

                
                width={700}
                height={400}
                layout="vertical"
                grid={{ horizontal: true }}
                categoryGapRatio = '1'
    //   {...chartSetting}

            />

        </>
    )
}
export default Accidents_Incidents;