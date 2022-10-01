import {Divider, List, ListItem, ListItemText} from "@mui/material";
import React from "react";
import {IPerson} from "../../../setup/models";
import ContactListItem from "./contact-list-item";

export interface IContactListSectionProps {
  initial: string,
  people: Partial<IPerson>[],
  onClick: (person: Partial<IPerson>) => void
}
export default function ContactListSection(props: IContactListSectionProps) {
  const { initial, people, onClick } = props;
  return (
    <List>
      <ListItem>
        <ListItemText primary={initial}></ListItemText>
      </ListItem>
      {people.map((person, index) => (
        <React.Fragment key={`contact-list-item-${initial}-${index}`}>
          <Divider />
          <ContactListItem person={person} onClick={onClick} />
        </React.Fragment>
      ))}
    </List>
  );
}
