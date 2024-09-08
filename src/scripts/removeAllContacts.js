import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('All contacts have been deleted!');
  } catch (error) {
    console.error(error);
  }
};

removeAllContacts();
