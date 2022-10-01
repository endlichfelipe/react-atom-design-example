import React from "react";
import {IPerson} from "../../../setup/models";
import ContactListSection, {IContactListSectionProps} from "./contact-list-section";

export interface IContactListProps {
  people: Partial<IPerson>[],
  onItemClick: (person: Partial<IPerson>) => void
}
export default function ContactList(props: IContactListProps) {
  const { people, onItemClick } = props;
  const initials = people.map(p => (p.firstName ?? "U")[0].toUpperCase()).filter((v, i, a) => a.indexOf(v) === i);

  const contacts: IContactListSectionProps[] = initials.map(i => ({
    initial: i,
    people: people.filter(p => (p.firstName ?? "U")[0].toUpperCase() === i),
    onClick: onItemClick
  }));

  return <>{contacts.map((contact, index) => (
    <ContactListSection key={`contact-list-section-${index}`} {...contact} />))}</>;
}
