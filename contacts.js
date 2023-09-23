const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(__dirname, "./db/contacts.json");

const getAll = async () => {
    try{
        const data = await fs.readFile(contactsPath, 'utf-8');
        const allContacts = JSON.parse(data);
        return allContacts;
    } catch (error){
        console.log(error.message)
    };
};

const getContactById = async (id) => {
    try{
        const contact = await getAll();
        const contactById = contact.find(item => item.id === id);
        return contactById || null;
    } catch (error){
        console.log(error.message);
    };
};

function removeContact(contactId) {
    // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
};
  
function addContact(name, email, phone) {
    // ...твій код. Повертає об'єкт доданого контакту. 
};


module.exports = {
    getAll,
    getContactById,
    removeContact,
    addContact,
};