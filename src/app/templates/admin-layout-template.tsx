import React from 'react'
import {Box, Container} from "@mui/material";

interface AdminTemplateProps {
  children: React.ReactNode,
  sidebar: React.ReactNode,
  navbar: React.ReactNode
}

export function AdminLayoutTemplate(props: AdminTemplateProps) {
  const { sidebar, navbar, children } = props;
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateAreas: `"header header"  
                            "sidebar main"`,
        gridTemplateColumns: 'auto 1fr',
        gridTemplateRows: 'auto 1fr',
        height: '100vh',
      }}
    >
      <Box sx={{ gridArea: 'header' }}>{navbar}</Box>
      <Box
        sx={{
          gridArea: 'main',
          bgcolor: 'primary.light',
          borderRadius: '10px'
        }}
      >
        <Container>
          {children}
        </Container>
      </Box>
      <Box sx={{ gridArea: 'sidebar' }}>{sidebar}</Box>
    </Box>
  )
}
