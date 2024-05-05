import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';



function PoliceStationNames() {

    const dataset = [
       
            {
                Fatal: 59,
                GrievousInjury: 57,
                MinorInjured: 86,
                NonInjury: 21,
                Year: '2023',
            },
            {
                Fatal: 42,
                GrievousInjury: 7,
                MinorInjured: 16,
                NonInjury: 5,
                Year: '2022',
            },
            {
                Fatal: 12,
                GrievousInjury: 6,
                MinorInjured: 26,
                NonInjury: 15,
                Year: '2021',
            },
        ];

      
    
  const valueFormatter = (value) => `${value}mm`;

    return (
        <>

            <h1>Police Station Chart</h1>
            <BarChart
             dataset={dataset}
             xAxis={[{ scaleType: 'band', dataKey: 'Year' }]}
             series={[
                 { dataKey: 'Fatal', label: 'Fatal', valueFormatter },
                 { dataKey: 'GrievousInjury', label: 'Grievous Injury', valueFormatter },
                 { dataKey: 'MinorInjured', label: 'Minor Injured', valueFormatter },
                 { dataKey: 'NonInjury', label: 'Non Injury', valueFormatter },
             ]}
            //  {...chartSetting}


             layout="vertical"
             grid={{ horizontal: true }}
             categoryGapRatio='1'

         />

        </>
    )
}
export default PoliceStationNames;