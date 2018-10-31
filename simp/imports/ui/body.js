


import { Template } from 'meteor/templating';
import { Tasks } from '../api/Templates.js';
import './template.js';
import './body.html';






Template.body.helpers({










    tasks() {

        // Show newest tasks at the top
    
        return Tasks.find({}, { sort: { createdAt: -1 } });
    
      },

      bbb() {


        
        
                const instance = Template.instance();
            
                if (instance.state.get('hideCompleted')) {
            
                  // If hide completed is checked, filter tasks
            
                  return Tasks.find({ checked: { $ne: false } }, { sort: { createdAt: -1 } });
            
                }
            
                // Otherwise, return all of the tasks
            
                return Tasks.find({}, { sort: { createdAt: -1 } });
            
              },







      arc() {


//RECUPRE L OBJET DANS LA COLLECTION AVEC L ID  DE LA CARTE QU ON VIENT DE RECUPERER
// const perso = Tasks.findOne({_id:idMembre});



        const instance = Template.instance();
    
        if (instance.state.get('hideCompleted')) {
    
          // If hide completed is checked, filter tasks
    
          return Tasks.find({ checked: { $ne: false } }, { sort: { createdAt: -1 } });
    
        }
    
        // Otherwise, return all of the tasks
    
        return Tasks.find({}, { sort: { createdAt: -1 } });
    
      },







  
  });


  Template.body.events({


    // 'click .ac'() {
    //   console.log("active");
    //       // Tasks.remove(this._id);


    //       Tasks.update(this._id, {

    //         $set: { checked: "active" },
      
    //       });
      
    //     },
      
      
        




        
    //   'click .desac'() {
    //     console.log("desactive");
    //     // Tasks.remove(this._id);


    //     Tasks.update(this._id, {

    //       $set: { checked: ! this.checked },
    
    //     });
    
    //   },
    

















    'click .activation'(event) {
  
      // Prevent default browser form submit

      event.preventDefault();
      console.log('desactivé');


    },


    'submit .new-task'(event) {
  
      // Prevent default browser form submit
  
      event.preventDefault();
  
   
  
      // Get value from form element
  
      const target = event.target;
  
      const text = target.text.value;
  
   
  //condition pour deus btn alternant if checked.vavule = true ou false alors le faire qu il devienne lautre valeur 
      // Insert a task into the collection
  
      Tasks.insert({
  
        text,

        checked:  true  ,
        //PERMET DE CRER LA CHECKBOX DEJA COCHER TRUE
  
        createdAt: new Date(), // current time
  
      });
  
   
  
      // Clear form
  
      target.text.value = '';
  
    },
  
  });