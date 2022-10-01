import React from "react";
import {Container, List, ListItemButton, ListItemIcon, ListItemText, Paper, Typography} from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import {Link} from "react-router-dom";

interface SidebarLinkProps {
  icon: React.ReactNode,
  text: string,
  to: string,
  highlighted?: boolean
}
SidebarLink.defaultProps = {
  highlighted: true
};
export function SidebarLink(props: SidebarLinkProps) {
  const { icon, text, to, highlighted } = props;

  const highlightedStyle = { bgcolor: 'secondary.light' };

  return (
    <ListItemButton
      component={Link}
      to={to}
      sx={{
        borderRadius: '10px',
        ...(highlighted && highlightedStyle)
      }}
    >
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
}

interface SidebarLinkSectionProps {
  title: string,
  links: SidebarLinkProps[]
}
export function SidebarLinkSection(props: SidebarLinkSectionProps) {
  const { title, links } = props;
  return (
    <List>
      <Typography variant={'subtitle1'}>{title}</Typography>
      {links.map((link, index) => (<SidebarLink key={`sidebar-link-${title}-${index}`} {...link} />))}
    </List>
  );
}

interface SidebarProps {
  currentPath: string
}
export default function Sidebar(props: SidebarProps) {
  const { currentPath } = props;
  const highlighted = (route: string) => route === currentPath;
  const sections: SidebarLinkSectionProps[] = [
    {
      title: 'Dashboard',
      links: [
        {
          icon: <PeopleIcon />,
          text: 'Contacts',
          to: '/',
        }
      ]
    }
  ];
  sections.forEach((section) => section.links.forEach((link) => link.highlighted = highlighted(link.to)));


  return (
    <Container>
      <Paper sx={{ height: '100%' }} square elevation={0}>
        {sections.map((section, index) => (<SidebarLinkSection key={`sidebar-link-section-${index}`} {...section} />))}
      </Paper>
    </Container>
  );
}
