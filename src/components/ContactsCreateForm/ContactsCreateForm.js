import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@material-ui/core';
import { Form, useStyles } from './StyledComponents';
import { addItem, editItem } from 'redux/contacts/contacts-operation';
import { getEditItem } from 'redux/selectors/editItem-selector';
import { addItemEdit } from 'redux/contacts/contacts-action';
import { getLoadingValue } from 'redux/selectors/spinner-selector';
import Spinner from '../Spinner';

export default function ContactsCreateForm() {
  const itemEdit = useSelector(getEditItem);
  const { control, handleSubmit, reset, setValue } = useForm();
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoadingValue);

  useEffect(() => {
    if (itemEdit) {
      setValue('name', itemEdit.name);
      setValue('number', itemEdit.number);
    }
  }, [itemEdit]);

  const createContact = data => {
    if (itemEdit) {
      const itemEditData = {
        ...data,
        id: itemEdit.id,
      };
      reset();
      dispatch(addItemEdit(null));
      dispatch(editItem(itemEditData));

      return;
    }
    reset();
    dispatch(addItem(data));
  };

  const buttonText = itemEdit ? 'edit' : 'create';
  return (
    <Form onSubmit={handleSubmit(createContact)}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <TextField
            onChange={onChange}
            className={classes.inputText}
            value={value}
            type="text"
            id="standard-basic"
            label="Contact name"
            required
          />
        )}
      />

      <Controller
        name="number"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <TextField
            onChange={onChange}
            className={classes.inputText}
            value={value}
            type="text"
            id="standard-basic"
            label="Contact number"
            required
          />
        )}
      />

      <Button
        className={classes.buttonSubmit}
        type="submit"
        variant="contained"
        color="primary"
      >
        {isLoading ? <Spinner /> : buttonText}
      </Button>
    </Form>
  );
}
