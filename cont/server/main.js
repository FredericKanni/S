import { Meteor } from 'meteor/meteor';


import '../imports/api/Temps.js';


// desactive creation de compte au niveau client
AccountsTemplates.configure({ 
    forbidClientAccountCreation : true 
}) 




Meteor.startup(() => {
  // code to run on server at startup
});
