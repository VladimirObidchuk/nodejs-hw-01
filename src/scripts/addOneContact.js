import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newContacts = createFakeContact();
    console.log('newContacts', newContacts);

    contacts.push(newContacts);
    await writeContacts(contacts);

    return contacts;
  } catch (error) {
    console.error(error.message);
  }
};

addOneContact();
