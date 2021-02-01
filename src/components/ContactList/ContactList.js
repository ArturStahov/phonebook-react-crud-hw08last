import { useRef, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from 'redux/contacts/contacts-operation';
import { addItemEdit } from 'redux/contacts/contacts-action';
import { itemsArray } from 'redux/selectors/contactList-selector';
import { filterValue } from 'redux/selectors/filter-selector';

import { List, useStyles } from './StyledComponents';

export default function ContactList() {
  const dummy = useRef();
  const contactsArray = useSelector(itemsArray);
  const filter = useSelector(filterValue);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }, [contactsArray]);

  const filterContacts = items => {
    return items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const arrFilters = filterContacts(contactsArray);
  return (
    <List>
      {arrFilters.map(item => (
        <Card className={classes.root} key={item.id}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.number}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => dispatch(deleteItem(item))}
            >
              delete
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => dispatch(addItemEdit(item))}
            >
              edit
            </Button>
          </CardActions>
        </Card>

        // <TaskItem key={item.id}>
        //   <TaskItemElements>{item.nameValue} :</TaskItemElements>
        //   <TaskItemElements>{item.numberValue}</TaskItemElements>
        //   <Button type="button" onClick={() => dispatch(deleteItem(item))}>
        //     Delete
        //   </Button>
        // </TaskItem>
      ))}

      <span ref={dummy}></span>
    </List>
  );
}
