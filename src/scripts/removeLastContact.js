import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    const removContact = contacts.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2));
    console.log('Remove contact: ', removContact);
    return true;
  } catch (error) {
    console.error('Error delete contact:', error.message);
  }
};

removeLastContact();
