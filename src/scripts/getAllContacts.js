import { readContacts } from '../utils/readContacts';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(' contacts', contacts);
    return true;
  } catch (error) {
    console.error('Error reading files', error.message);
    return [];
  }
};

console.log(await getAllContacts());
