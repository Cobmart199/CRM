import { 
        addNewContact, 
        getContacts, 
        getContactwithID, 
        updateContact, deleteContact } from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
    .get((req, res,next) => {
        //midleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getContacts)
     

     //Post endpoint
     .post(addNewContact);

     app.route('/contact/:contactId')
     //get specific contact
     .get(getContactwithID)
     .put(updateContact)
 
      .delete(deleteContact);
 

}

export default routes;