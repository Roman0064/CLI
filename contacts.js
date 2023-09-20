const fs = require('fs/promises');

const listContacts = async () => {
    const data = await fs.readFile('./db/contacts.json', 'utf-8');
    return JSON.parse(data);
}

module.exports = {
    listContacts,
};