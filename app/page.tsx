'use client'

import { Button, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';


const page = () => {
  const theme = useTheme(); // Accede al tema actual
  return (
    <div>
      page
      <Button>Hello</Button>
      <Typography variant='h1'>Hello</Typography>

       <Button variant='contained' >Hello</Button>
      <Button sx={{ 

         
        }}>Hello</Button>

<Button
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.getContrastText(theme.palette.primary.main),
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
        },
      }}
    >
      Themed Button
    </Button>

    <Button variant='contained'  sx={{padding: '30px', borderRadius: '50px', backgroundColor: '#25d366', color: 'white',
      '&:hover': {
          backgroundColor: '#128c7e',
        },
    }}
    
    >This is a custom button</Button>
              
    </div>
  )
}

export default page
