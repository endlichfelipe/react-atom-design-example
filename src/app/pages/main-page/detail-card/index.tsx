import {
  Box, Button, Card,
  CardContent,
  Divider, Grid,
  IconButton,
  List,
  Typography
} from "@mui/material";
import {IPerson} from "../../../../setup/models";
import InitialAvatar from "../initial-avatar";
import DetailCardItem from "./detail-card-item";

import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {DetailCardItemBuilder} from "./DetailCardItemBuilder";

export interface IDetailCardProp {
  person: Partial<IPerson>,
  onCloseClick?: () => void,
  onEditClick?: (person: Partial<IPerson>) => void,
  onDeleteClick?: (person: Partial<IPerson>) => void,
}
export default function DetailCard(prop: IDetailCardProp) {
  const { person, onCloseClick, onDeleteClick, onEditClick } = prop;

  const builder = new DetailCardItemBuilder(person);
  const detailCardItems = builder.build();

  let fullName = person.firstName;
  if (person.lastName)
    fullName += ' ' + person.lastName;

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
              <Typography variant={'subtitle1'}>{fullName}</Typography>
            </Box>
            <Box>
              <IconButton aria-label="delete" size="small" onClick={() => (onCloseClick && onCloseClick())}>
                <CancelIcon fontSize="inherit" />
              </IconButton>
            </Box>
          </Box>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Button
                variant={'outlined'}
                sx={{ width: '100%' }}
                startIcon={<EditIcon />}
                onClick={() => (onEditClick && onEditClick(person))}
              >
                Edit
              </Button>
            </Grid>

            <Grid item xs={6}>
              <Button
                variant={'outlined'}
                sx={{ width: '100%' }}
                color={'error'}
                startIcon={<DeleteIcon />}
                onClick={() => (onDeleteClick && onDeleteClick(person))}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
          <Divider />
          <List>
            {detailCardItems.map((item, index) => (<DetailCardItem key={`detail-card-item-${index}`} {...item} />))}
          </List>
        </Box>
      </CardContent>
    </Card>
  );
}
