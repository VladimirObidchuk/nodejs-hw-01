import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    await fs.access(PATH_DB);
    const fileData = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    return JSON.parse(fileData);
  } catch (error) {
    console.error('Error reading files', error.message);
    return [];
  }
};
