





import { Template } from 'meteor/templating';

 

import { Tasks } from '../api/Templates';

import './template.html';



 

Template.task.events({

  'click .toggle-checked'() {

    // Set the checked property to the opposite of its current value
// console.log(this.checked);
    Tasks.update(this._id, {

      $set: { checked: ! this.checked },

    });

  },

  'click .delete'() {

    Tasks.remove(this._id);

  },

});

