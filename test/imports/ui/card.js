import { Ateliers } from '../api/Ateliers.js';
import './card.html';






Template.carte.events({

    'click .toggle-checked'(event) {
  
      const target = event.target;
       console.log(target);
      const suivanttarget = event.target.nextSibling;
     console.log(suivanttarget);
      
      // Set the checked property to the opposite of its current value
//  console.log('checkbox');
 console.log(this.checked);
      Ateliers.update(this._id, {
  
        $set: { checked: ! this.checked },
  
      });
      // console.log('updatedchecked');
      // console.log(this.checked);
    },
  
  });
  