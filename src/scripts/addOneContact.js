import { readContacts } from '../utils/readContacts.js';
import { generateContacts } from './generateContacts.js';

export const addOneContact = async () => {
  try {
    generateContacts(1);
    const contacts = readContacts();
    return contacts;
  } catch (error) {
    console.error('Error reading files', error.message);
    return [];
  }
};

addOneContact(1);
