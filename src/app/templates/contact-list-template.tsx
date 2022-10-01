import React from "react";
import {Box, Card, CardContent, CardHeader, Divider} from "@mui/material";

export interface IContactListProps {
  detail?: JSX.Element
  header?: JSX.Element
  contactList: JSX.Element
}
export default function ContactListTemplate(props: IContactListProps) {
  const { detail, header, contactList } = props;

  return (
    <Card elevation={0} sx={{ border: '1px solid',  borderColor: 'primary.main' }}>
      <CardHeader title={'Contact List'} />
      <Divider />
      <CardContent>
        <Box display={'flex'} flexDirection={'column'}>
          {header && <div>{header}</div>}
          <Box display={'flex'} flexDirection={'row'}>
            <Box flex={4}>{contactList}</Box>
            {detail && (<Box flex={2}>{detail}</Box>)}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
