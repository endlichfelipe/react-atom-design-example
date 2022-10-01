import {ListItemIcon} from "@mui/material";

export default function DetailCardIcon(props: { children: JSX.Element }) {
  const { children } = props;
  const iconWidth = '2rem';
  return (
    <ListItemIcon sx={{ minWidth: iconWidth }}>
      {children}
    </ListItemIcon>
  );
}
