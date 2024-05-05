import * as React from 'react';
// import { PieChart } from '@mui/x-charts/PieChart';

const data = [
    { id: 0, value: 10, label: 'series A' },
    { id: 1, value: 15, label: 'series B' },
    { id: 2, value: 20, label: 'series C' },
];
function PieChart() {
    return (
        <>
            <PieChart
                series={[
                    {
                        data :{data},
                    },
                ]}
                height={200}
            />

        </>
    )

}
export default PieChart