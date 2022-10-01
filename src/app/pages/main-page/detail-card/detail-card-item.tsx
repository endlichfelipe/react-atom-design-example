import {Badge, Box, ListItem, ListItemText, Typography} from "@mui/material";
import DetailCardIcon from "./detail-card-icon";

export interface ILinkDetailCardItemProps {
  value: string,
  link?: string,
}

export interface IDetailCardItemProps {
  icon: JSX.Element,
  text: string[] | ILinkDetailCardItemProps[],
  variant?: 'link' | 'mailto'
}

function DefaultCardItem(props: IDetailCardItemProps) {
  const { icon } = props;
  let { text } = props;
  text = text as string[];

  const textItems = text.map((item, index) => (
    <Typography
      key={`detail-card-item-${index}`}
      sx={{
        fontSize: '0.875rem',
        color: 'rgba(0, 0, 0, 0.6)'
      }}
    >
      {item}
    </Typography>))
  const alignItems = textItems.length == 1 ? 'center' : 'flex-start';

  return (
    <ListItem alignItems={alignItems}>
      <DetailCardIcon children={icon} />
      <Box>
        {textItems}
      </Box>
    </ListItem>
  );
}

function LinkCardItem(props: IDetailCardItemProps) {
  const { icon } = props;
  let { text } = props;
  text = text as ILinkDetailCardItemProps[];
  const target = props.variant === 'mailto' ? '_self' : '_blank';
  const textItems = text.map((item, index) => (
    <Typography
      key={`detail-card-item-${index}`}
      sx={{
        fontSize: '0.875rem',
        color: 'rgba(0, 0, 0, 0.6)'
      }}
    >
      <a href={item.link} target={target}>{item.value}</a>
    </Typography>
  ))
  const alignItems = textItems.length == 1 ? 'center' : 'flex-start';

  return (
    <ListItem alignItems={alignItems}>
      <DetailCardIcon children={icon} />
      <Box>
        {textItems}
      </Box>
    </ListItem>
  );
}

export default function DetailCardItem(props: IDetailCardItemProps) {
  const { variant } = props;
  switch (variant) {
    case 'link':
    case 'mailto':
      return <LinkCardItem {...props} />;
    default:
      return <DefaultCardItem {...props} />;
  }
}
