import { createSelector } from '@reduxjs/toolkit';
import { filterValue } from './filter-selector';
export const itemsArray = state => state.contacts.items;

export const filterContacts = createSelector(
  [itemsArray, filterValue],
  (items, filter) => {
    return items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
