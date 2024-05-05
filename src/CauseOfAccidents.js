import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';



function CauseOfAccidents() {

    const dataset = [
        { year : 1999, label: 'Drunken' },
        { year : 1920, label: 'Drowsing of Driver' },
        { year : 1921, label: 'OverSpeeding' },
        { year : 2022, label: 'Vehicle Out of Control' },
        { year : 2023, label: 'Fault of Driver (Motor Vehicle/Other Vehicle/Cyclist/Pedestrian/Passenger)'},
        { year : 2024, label: 'Defect in Mechanical Condition of Motor Vehicle/Road Condition' },
      
    ]
  const valueFormatter = (year) => `${year}mm`;

    return (
        <>

            <h1>Cause Of Accidents</h1>
            <BarChart
            dataset={dataset}
                xAxis={[{ scaleType: 'band',  dataKey: 'year' ,categoryGapRatio: 0.5,
                barGapRatio: 1.5}]} 
                series={[
                    { data: [1, 6, 2, 5, 4, 3], dataKey: 'Drunken', label: 'Drunken', valueFormatter },
                    { data: [4, 3, 3, 1, 3, 1], dataKey: 'Drowsing of Driver', label: 'Drowsing of Driver', valueFormatter },
                    { data: [4, 2, 5, 4, 1, 5], dataKey: 'OverSpeeding', label: 'OverSpeeding', valueFormatter },
                    { data: [2, 4, 1, 3, 1, 7], dataKey: 'Vehicle Out of Control', label: 'Vehicle Out of Control', valueFormatter },
                    { data: [3, 6, 5, 2, 6, 1], dataKey: 'Fault of Driver (Motor Vehicle/Other Vehicle/Cyclist/Pedestrian/Passenger)', label: 'Fault of Driver (Motor Vehicle/Other Vehicle/Cyclist/Pedestrian/Passenger)', valueFormatter },
                    { data: [4, 2, 5, 4, 1, 5], dataKey: 'Defect in Mechanical Condition of Motor Vehicle/Road Condition', label: 'Defect in Mechanical Condition of Motor Vehicle/Road Condition', valueFormatter },

                  ]}
                margin={{ top: 150, bottom: 30, left: 40, right: 10 }}

                
                width={700}
                height={450}
                layout="vertical"
                grid={{ horizontal: true }}
                categoryGapRatio = '1'
    //   {...chartSetting}

            />

        </>
    )
}
export default CauseOfAccidents;