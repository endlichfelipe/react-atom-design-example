import {ListItem, ListItemText} from "@mui/material";
import React from "react";
import {IPerson} from "../../../setup/models";
import InitialAvatar from "./initial-avatar";

interface IContactListItemProps {
  person: Partial<IPerson>,
  onClick: (person: Partial<IPerson>) => void
}
export default function ContactListItem(props: IContactListItemProps) {
  const { person, onClick } = props;
  const primary = person.firstName + ' ' + person.lastName;
  const secondary = person.job?.jobTitle + ' at ' + person.job?.company;
  return (
    <ListItem
      sx={{
        cursor: 'pointer',
      }}
      onClick={() => onClick(person)}
    >
      <InitialAvatar person={person} />
      <ListItemText primary={primary} secondary={secondary} />
    </ListItem>
  );
}
