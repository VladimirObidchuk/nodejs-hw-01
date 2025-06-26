import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const generateContacts = async (number) => {
  try {
    const newContacts = faker.helpers.multiple(createFakeContact, {
      count: number,
    });
    console.log(' newContacts', newContacts);
    const contacts = await readContacts();
    contacts.push(...newContacts);
    writeContacts(contacts);
    return contacts;
  } catch (error) {
    console.error(error.message);
  }
};
