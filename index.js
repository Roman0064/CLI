const contacts = require('./contacts');

const invokeAction = async ({ action, id, name, email, phone }) => {

    switch(action){
        case "list":
            const allContacts = await contacts.getAll();
            console.log("List of Contacts:");
            console.table(allContacts);
            return allContacts;

        case "getById":
            const contact = await contacts.getContactById(id);
            console.log("Contact Details:");
            console.table([contact]);
            return contact;

        case "addContact":
            const newContact = await contacts.addContact(name, email, phone);
            console.log("Removed Contact:");
            console.log([newContact]);
            return newContact;

        case "removeContact":
            const removedContact = await contacts.removeContact(id);
            console.log("New Contact:");
            console.log([removedContact]);
            return removedContact;
    };

};

// invokeAction({action: 'list'});
// invokeAction({action: 'getById', id: "05olLMgyVQdWRwgKfg5J6"});
// invokeAction({action: 'removeContact', id: "05olLMgyVQdWRwgKfg5J6"});
// invokeAction({action: 'addContacts', id: "05olLMgyVQdWRwgKfg5J6"});