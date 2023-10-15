import React from 'react'
import BarChart from '../components/BarChart'
import { Box } from '@mui/material'

const data = [65, 59, 80, 81, 56, 55];
export const Grafos = () => {
  return (
    <Box sx={{width:500}}>
        <BarChart data={data}/>
    </Box>
  )
}

export default Grafos