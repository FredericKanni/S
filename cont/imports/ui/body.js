

 import '../api/Temps.js';
 import './temp.js';
 import './body.html';
import { Notes } from '../api/Temps.js';


Template.form_new_note.events({

    'submit .js-new-note'(event,instance) {
  
      // Prevent default browser form submit
  
      event.preventDefault();
      const titleVal = event.target.title.value;
      const textVal = event.target.text.value;

      console.log(titleVal);
      console.log(textVal);

Notes.insert({
title:titleVal,
text:textVal,
ownerId:Meteor.userId(),
createdAt: new Date(),
});

event.target.title.value ='';
event.target.text.value = '';

    },
  });


   
 Template.list_note.helpers({
     notes(){

        return Notes.find({ownerId:Meteor.userId()}).fetch();
//  return Notes.find().fetch();
// va chercher dans la list des note ceux qui ont on owner id  qui correspont a Meteor.userId()
     },
    
    
  });


 
Template.single_note.events({

    'click .js-edit-note'(event,instance) {
        // 
      
        event.preventDefault();
    console.log("kkk");
    console.log(instance.data);
   




    Notes.remove(instance.data._id);






    },
  });

   
Template.accueil.events({

    'click .js-logout'(event,instance) {
      Meteor.logout();


    },
});