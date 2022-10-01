import React from 'react';
import {Box, Card, CardContent, Divider, IconButton, Input, InputAdornment, TextField, Typography} from "@mui/material";
import {IPerson} from "../../../../setup/models";
import InitialAvatar from "../initial-avatar";
import CancelIcon from "@mui/icons-material/Cancel";
import PersonIcon from '@mui/icons-material/Person';

export interface IEditCardProp {
  person: Partial<IPerson>,
  onCloseClick?: () => void
}
export default function EditCard(prop: IEditCardProp) {
  const { person, onCloseClick } = prop;

  return (
    <Card
      elevation={0}
      sx={{
        ml: '1rem',
        borderRadius: '10px',
        borderColor: 'primary.light',
        borderStyle: 'solid',
        borderWidth: '1px',
        backgroundColor: '#efefef'
      }}
    >
      <CardContent>
        <Box display={'flex'} gap={2} flexDirection={'column'}>
          <Box display={'flex'}>
            <Box flexGrow={1} display={'flex'} alignItems={'center'}>
              <InitialAvatar person={person} />
            </Box>
            <Box>
              <IconButton aria-label="delete" size="small" onClick={() => (onCloseClick && onCloseClick())}>
                <CancelIcon fontSize="inherit" />
              </IconButton>
            </Box>
          </Box>
          <Divider />
          <Box display={'flex'} flexDirection={'column'} gap={3}>
            <TextField
              label='First Name'
              size={'small'}
              InputProps={{
                startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>
              }}
            />

            <TextField
              label='Last Name'
              size={'small'}
              InputProps={{
                startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>
              }}
            />

            <TextField
              label='Company'
              size={'small'}
              InputProps={{
                startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>
              }}
            />

            <TextField
              label='Department'
              size={'small'}
              InputProps={{
                startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>
              }}
            />

            <TextField
              label='Job Title'
              size={'small'}
              InputProps={{
                startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>
              }}
            />

            <TextField
              label='Street'
              size={'small'}
              InputProps={{
                startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>
              }}
            />

            <TextField
              label='City'
              size={'small'}
              InputProps={{
                startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>
              }}
            />

            <TextField
              label='Country'
              size={'small'}
              InputProps={{
                startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>
              }}
            />

            <TextField
              label='Zip Code'
              size={'small'}
              InputProps={{
                startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>
              }}
            />

            <TextField
              label='Email'
              size={'small'}
              InputProps={{
                startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>
              }}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
