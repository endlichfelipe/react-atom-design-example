import React from 'react';
import { AdminLayoutTemplate } from "../../templates/admin-layout-template";
import Sidebar from "../../organisms/sidebar";
import Navbar from "../../organisms/navbar";
import {useLocation} from "react-router-dom";
import { Box } from "@mui/material";
import ContactList from "./contact-list";
import {IPerson} from "../../../setup/models";
import ContactListTemplate from "../../templates/contact-list-template";
import DetailCard from "./detail-card";
import EditCard from "./edit-card";



export default function Index() {
  const location =  useLocation();

  const [detail, setDetail] = React.useState<JSX.Element | undefined>(undefined);

  const handlePersonClick = (person: Partial<IPerson>) => {
    setDetail(
      <DetailCard
        person={person}
        onCloseClick={handleClose}
        onDeleteClick={handleDeletePersonDetailCardClick}
        onEditClick={handleEditPersonDetailCardClick}
      />);
  };

  const handleClose = () => {
    setDetail(undefined);
  };

  const handleEditPersonDetailCardClick = (person: Partial<IPerson>) => {
    setDetail(<EditCard person={person} onCloseClick={handleClose} />);
  }

  const handleDeletePersonDetailCardClick = (person: Partial<IPerson>) => {
    console.log('handleDeletePersonDetailCardClick', person);
  }

  const people: Partial<IPerson>[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      job: {
        company: 'Google',
        department: 'IT',
        jobTitle: 'Software Engineer'
      },
      address: {
        city: 'Vila Velha',
        country: 'Brazil',
        state: 'ES',
        street: 'Rua 1',
        zipCode: '29100-000'
      },
      emails: [
        {
          address: 'work@mail.com',
          type: 'work'
        },
        {
          address: 'personal@mail.com',
          type: 'personal'
        },
      ],
      phones: [
        {
          number: '5527997771815',
          type: 'work',
          isWhatsapp: true
        },
        {
          number: '5527997594928',
          type: 'work',
          isWhatsapp: false
        }
      ]
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Frank',
      phones: [
        {
          number: '123456789',
          type: 'work',
          isWhatsapp: true
        }
      ]
    }
  ];

  return (
    <AdminLayoutTemplate
      sidebar={<Sidebar currentPath={location.pathname} />}
      navbar={<Navbar />}
    >
      <Box pt={3}>
        <ContactListTemplate
          contactList={<ContactList people={people} onItemClick={handlePersonClick} />}
          detail={detail}
        />
        {/*<ContactList*/}
        {/*  people={people}*/}
        {/*  editCard={editCardOpen}*/}
        {/*  selectedPerson={selectedPerson}*/}
        {/*  handleCloseDetailCard={handleCloseDetailCard}*/}
        {/*  handlePersonClick={handlePersonClick}*/}
        {/*  handleEditPersonDetailCardClick={handleEditPersonDetailCardClick}*/}
        {/*  handleDeletePersonDetailCardClick={handleDeletePersonDetailCardClick}*/}
        {/*/>*/}
      </Box>
    </AdminLayoutTemplate>
  );
}
