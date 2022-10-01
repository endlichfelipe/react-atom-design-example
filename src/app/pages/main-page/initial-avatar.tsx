import {Avatar, ListItemAvatar} from "@mui/material";
import React from "react";
import {IPerson} from "../../../setup/models";

interface IInitialAvatarProps {
  person: Partial<IPerson>,
}

export default function InitialAvatar(props: IInitialAvatarProps) {
  const { person } = props;
  const firstName = person.firstName || 'U';
  const lastName = person.lastName || 'N';
  const initial = firstName.charAt(0) + lastName.charAt(0);

  return (
    <ListItemAvatar>
      <Avatar>{initial}</Avatar>
    </ListItemAvatar>
  );
}
