const {program} = require('commander');
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
            const newContact = await contacts.addContact({name, email, phone});
            console.log("Contact added:");
            console.table([newContact]);
            return newContact;

        case "updateContact":
            const updateContact = await contacts.updateContact(id, {name, email, phone});
            console.log("Contact updated:");
            console.table([updateContact]);
            return updateContact;

        case "removeContact":
            const removeContact = await contacts.removeContact(id);
            console.log("removed Contact:");
            console.table([removeContact]);
            return removeContact;

        default:
            console.warn("\x1B[31m Unknown action type!");
    };

};

program
    .option('-a, --action, <type>')
    .option('-i, --id, <type>')
    .option('-n, --name, <type>')
    .option('-e, --email, <type>')
    .option('-p, --phone, <type>')

program.parse();

const options = program.opts();
invokeAction(options);