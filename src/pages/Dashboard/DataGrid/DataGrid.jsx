import React, { useMemo } from 'react';
import css from './DataGrid.css'
import MaterialReactTable from 'material-react-table';
import { userData } from '../../../data';

import { createTheme, ThemeProvider } from '@mui/material/styles';
const DataGrid = () => {

    // if we dont use use memo it will cause performance issue and will cause infiniteloop , 
    // here in usememo when same input is sent multiple times it will not accept rather it will return memoized result out , no matter how many times the same input is sent it will run the functioin only once for a particular input
const columns = useMemo(()=>[
    {
        accessorKey: 'name.firstName',
        header: 'First Name',
    },
    {
        accessorKey: 'name.lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'address', 
        header: 'Address',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
])
// here in table inorder to avoid the re-rendering of the same component we use useMemo, useMemo memorizes the outputs and avoid runiing the function again and again and saves time.
const theme = useMemo(()=>
createTheme({
    palette:{
        mode:"dark"
    }
})
)
  return (
   <div className="table-container">
    <ThemeProvider theme={theme}>

    <MaterialReactTable columns={columns} data={userData}/>
    </ThemeProvider>
   </div>
  )
}

export default DataGrid