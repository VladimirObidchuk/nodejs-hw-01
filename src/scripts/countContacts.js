import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contactsCount = await readContacts();
    return `Contacts count: ${contactsCount.length}`;
  } catch (error) {
    console.error('Error read contacts:', error.message);
  }
};

console.log(await countContacts());
