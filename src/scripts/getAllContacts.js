import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();

    return contacts;
  } catch (error) {
    console.error('Error reading files', error.message);
    return [];
  }
};

console.log(await getAllContacts());
