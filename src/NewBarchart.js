import styled from '@emotion/styled'
// import { useCallback, useRef } from 'react'
// import useData from './useData'
// import ControlSection from './ControlSection'
// import FullscreenTableSection from '@components/Module/fullscreen/TableSection'
// import useContainerHeight from '@hooks/useContainerHeight'
// import { OverviewCard } from '@components/OverviewCard'
import { Box, Container, Grid, Typography } from '@mui/material'
// import StyledCard from '@container/Dashboard/components/StyledCard'
// import StyledSelect from '@components/FormComponents/StyledSelect'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

// import PedalBikeIcon from '@mui/icons-material/PedalBike'
// import LocalShippingIcon from '@mui/icons-material/LocalShipping'
// import AgricultureIcon from '@mui/icons-material/Agriculture'
// import AirportShuttleIcon from '@mui/icons-material/AirportShuttle'
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
// import PieChart from '../../components/PieChart'
// import Bargraph from '../../components/Bargraph'

const NewBarchart = () => {
  const chartSetting = {
    // yAxis: [
    //   {
    //     label: 'rainfall (mm)',
    //   },
    // ],
    width: 500,
    height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
      },
    },
  };
  const dataset = [
    {
      Fatal: 59,
      GrievousInjury: 57,
      MinorInjured: 86,
      NonInjury: 21,
      month: '2023',
    },
    {
      Fatal: 42,
      GrievousInjury: 7,
      MinorInjured: 16,
      NonInjury: 5,
      month: '2022',
    },
    {
      Fatal: 12,
      GrievousInjury: 6,
      MinorInjured: 26,
      NonInjury: 15,
      month: '2021',
    },
  ];
  
//   const valueFormatter = (value) => `${value}mm`;

  return (
    <Box
      component="main"
      sx={{
        // flexGrow: 1,
        // py: 2,
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'stretch',
        // ml: 2,
        // mr: 6,
        // height: '100%',
        // overflow: 'auto',
      }}>
      <Container maxWidth="xl">
        {/* <Grid container spacing={3} flexDirection="column"> */}
          {/* <Grid xs={12} md={12} lg={12} item spacing={3} bgColor="inherit">
            <StyledCard>
              <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h5">Road Accident Dashboard</Typography>
              </Box>
            </StyledCard>
          </Grid> */}
          {/* <Grid container spacing={3} direction="row" item> */}
            {/* <Grid container spacing={3} direction="column" xs={3} md={3} lg={3} item>
              <Box style={{ display: 'flex', margin: '20px', flexDirection: 'column', textAlign: 'center', gap: '8px' }}>
                <StyledCard style={{ backgroundColor: '#f2b72472' }}>
                  <Typography variant="body1">Current Year</Typography>
                  <FormControl fullWidth style={{ mt: '5px' }}>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={2024} label="">
                      <MenuItem value={2024}>2024</MenuItem>
                      <MenuItem value={2023}>2023</MenuItem>
                      <MenuItem value={2022}>2022</MenuItem>
                    </Select>
                  </FormControl>
                </StyledCard>
                <StyledCard style={{ backgroundColor: '#f2b72472' }}>
                  <Typography variant="body1">Previous Year</Typography>
                  <FormControl fullWidth style={{ mt: '5px' }}>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={2023} label="">
                      <MenuItem value={2024}>2024</MenuItem>
                      <MenuItem value={2023}>2023</MenuItem>
                      <MenuItem value={2022}>2022</MenuItem>
                    </Select>
                  </FormControl>
                </StyledCard>
                <StyledCard style={{ backgroundColor: '#f2b72472' }}>
                  <Typography variant="body1">Select Accident Severity</Typography>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={2024} label="">
                      <MenuItem value={2024}>Fatal</MenuItem>
                      <MenuItem value={2023}>Severe</MenuItem>
                    </Select>
                  </FormControl>
                </StyledCard>
              </Box>
            </Grid> */}
            {/* <Grid container spacing={3} direction="column" xs={9} md={9} lg={9} item> */}

            <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'Fatal', label: 'Fatal',  },
        { dataKey: 'GrievousInjury', label: 'Grievous Injury',  },
        { dataKey: 'MinorInjured', label: 'Minor Injured',  },
        { dataKey: 'NonInjury', label: 'Non Injury',  },
      ]}
      {...chartSetting}

      
    />
             
            {/* </Grid> */}
            {/* <Grid container spacing={3} direction="column" xs={12} md={6} lg={3} item>
              <Box sx={{ display: 'flex', gap: '10px', padding: '6px 4px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                <OverviewCard difference={11.45} chart sx={{ height: 'auto' }} value="123,244" text="Total Accidents" />
                <OverviewCard difference={12.13} chart sx={{ height: 'auto' }} value="211,224" text="Total Casualties" />
                <OverviewCard difference={10.4} chart sx={{ height: 'auto' }} value="435,223" text="Fatal Casualties" />
                <OverviewCard difference={12.6} chart sx={{ height: 'auto' }} value="24,445" text="Serious Casualties" />
                <OverviewCard difference={12.4} chart sx={{ height: 'auto' }} value="24,789" text="Slight Casualties" />
              </Box>
            </Grid>

            <Grid container spacing={3} direction="row" xs={12} md={6} lg={9} item>
              <Grid xs={12} md={6} lg={12} item>
                <Box sx={{ bgcolor: '#1d2a34', padding: '6px 8px', borderRadius: '5px', border: '0.5px solid #ffffff30' }}>
                  <Typography variant="body1">Fatal Casualties By Vehicle Type</Typography>
                  <Box sx={{ display: 'flex', gap: '10px', padding: '6px 4px', justifyContent: 'space-around' }}>
                    <OverviewCard difference={2} sx={{ height: 'auto' }} value="24" icon={<PedalBikeIcon style={{ color: '#ffa726' }} />} />
                    <OverviewCard difference={1} positive sx={{ height: 'auto' }} value="14" icon={<LocalShippingIcon style={{ color: '#ffa726' }} />} />
                    <OverviewCard difference={1} sx={{ height: 'auto' }} value="33" icon={<AirportShuttleIcon style={{ color: '#ffa726' }} />} />
                    <OverviewCard difference={2} positive sx={{ height: 'auto' }} value="62" icon={<AgricultureIcon style={{ color: '#ffa726' }} />} />
                    <OverviewCard difference={2} positive sx={{ height: 'auto' }} value="20" icon={<PedalBikeIcon style={{ color: '#ffa726' }} />} />
                    <OverviewCard difference={2} positive sx={{ height: 'auto' }} value="14" icon={<MoreHorizIcon style={{ color: '#ffa726' }} />} />
                  </Box>
                </Box>
              </Grid>
              <Grid xs={12} md={6} lg={6} item>
                <PieChart
                  title="Fatal Casualties by Weather"
                  chart={{
                    series: [
                      { label: 'Rain', value: 4344 },
                      { label: 'Fine', value: 5435 },
                      { label: 'Snow/Fog', value: 1443 },
                      { label: 'Others', value: 4443 },
                    ],
                  }}
                />
              </Grid>
              <Grid xs={12} md={6} lg={6} item>
                <PieChart
                  title="Fatal Casualties by Road Surface"
                  chart={{
                    series: [
                      { label: 'Wet', value: 4344 },
                      { label: 'Dry', value: 5435 },
                      { label: 'Snow/Fog', value: 1443 },
                    ],
                  }}
                />
              </Grid>
              <Grid xs={12} md={6} lg={12} item>
                <Bargraph
                  title="Fatal Casualties by Road Surface"
                  subheader="(+43%) than previous year"
                  chart={{
                    series: [
                      { label: 'Single Carriageway', value: 2017 },
                      { label: 'Dual Carriageway', value: 690 },
                      { label: 'Roundabout', value: 25 },
                      { label: 'Slip Road', value: 16 },
                      { label: 'One Way Street', value: 14 },
                    ],
                  }}
                />
              </Grid>
              <Grid xs={12} md={6} lg={12} item>
                <OverviewCard difference={12} positive sx={{ height: 'auto' }} value="24k" />
              </Grid>
            </Grid> */}
          {/* </Grid> */}
        {/* </Grid> */}
      </Container>
    </Box >
  )
}

export default NewBarchart


const Main = styled.main`
//   display: flex;
//   flex-direction: column;
//   align-items: stretch;
//   margin-left: 2px;
//   margin-right: 6px;
//   margin-bottom: 8px;
//   height: 100%;
`


