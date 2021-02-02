import { useRef, useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from 'redux/contacts/contacts-operation';
import { addItemEdit } from 'redux/contacts/contacts-action';
import { itemsArray } from 'redux/selectors/contactList-selector';
import { filterValue } from 'redux/selectors/filter-selector';
import { List, useStyles } from './StyledComponents';

import { getDeleteLoading } from '../../redux/selectors/spinner-selector';

import { fetchImage } from 'service/fetchApi';
import Spinner from 'components/Spinner';

export default function ContactList() {
  const dummy = useRef();
  const contactsArray = useSelector(itemsArray);
  const filter = useSelector(filterValue);
  const classes = useStyles();
  const dispatch = useDispatch();

  const isDeleteLoading = useSelector(getDeleteLoading);

  const [imageRef, setImageRef] = useState([]);

  const generateRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const getImage = async () => {
    const data = await fetchImage('landscape');
    const imageUrlArr = await data.hits.map(item => item.webformatURL);
    setImageRef(imageUrlArr);
  };

  useEffect(() => {
    getImage();
  }, []);

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
              className={classes.image}
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={
                imageRef && imageRef[generateRandomInt(0, imageRef.length - 1)]
              }
              title="Contemplative Reptile"
            />

            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.textName}
              >
                {item.name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.textNumber}
              >
                {item.number}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {isDeleteLoading ? (
              <Spinner />
            ) : (
              <>
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
              </>
            )}
          </CardActions>
        </Card>
      ))}

      <span ref={dummy}></span>
    </List>
  );
}
