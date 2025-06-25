import { generateContacts } from './generateContacts.js';

export const addOneContact = async () => {
  try {
    generateContacts(1);
    return true;
  } catch (error) {
    console.error('Error reading files', error.message);
    return [];
  }
};

addOneContact(1);
