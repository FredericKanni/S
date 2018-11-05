import './template.js';
import './card.js';
import './navbar.js';
import './jumbotron.js';
import './carousel.js';
import './footer.js';
import './atelier.js';
import './body.html';
import { Ateliers } from '../api/Ateliers.js';
import { Reserves } from '../api/Reserves.js';



Template.carte.events({
  'click .delres': function() {
  Reserves.remove(this._id);
},


});





Template.body.helpers({
    ateliers: function(){
        // return Ateliers.find().fetch(); 
        return Ateliers.find({ownerId: Meteor.userId()}).fetch(); 
    },

    ateliersparticulier: function(){
      // return Ateliers.find().fetch(); 
      return Ateliers.find({ownerId}).fetch(); 
  },


  ct() {

    // return Ateliers.find( ownerId).count();
    // return Ateliers.find({ ownerId: Meteor.userId(), checked: { $ne: true } }).count();
    //renvoir le nbr  datelier desactive
    // return Ateliers.find( {  checked: { $ne: true } }).count();
     //renvoir le nbr  datelier active
    return Ateliers.find( {  checked: { $ne: false } }).count();
  },

  });

  Template.cartereservation.helpers({
    reser: function(){
        return Reserves.find().fetch(); 
    }
  });


  Template.body.helpers({
    reserves: function(){
        return Reserves.find().fetch(); 
    }
  });

Template.body.events({

    'submit .new-atelier'(event) {
  
      // Prevent default browser form submit
      event.preventDefault();
  
      // Get value from form element
      const target = event.target;
      const title= target.title.value;
      const text = target.text.value;
      const date = target.date.value;
      const duree = target.duree.value;
      const horaire = target.horaire.value;
      const dispo = target.dispo.value;
      const prix = target.prix.value;
      const image = target.image.value;
   
      // Insert a task into the collection

      $('#exampleModal').modal('hide')

      Ateliers.insert({
        
        title,
        text,
        date,
        horaire,
        duree,
        dispo,
        prix,
        image,
        checked:true,//fait que le checkbox de l atelier soit cocher 
        ownerId:Meteor.userId(),

        createdAt: new Date(), // current time

        
  
      });

      // Clear form
      target.title.value = '';
      target.text.value = '';
      target.date.value = '';
      target.horaire.value = '';
      target.duree.value = '';
      target.dispo.value = '';
      target.prix.value = '';
      target.image.value = '';
    },

    /************************/

    'submit .new-reserve'(event) {
  
      // Prevent default browser form submit
      event.preventDefault();

      const hidden = document.querySelector('#edit-id');
      idAtelier=hidden.value;
      // Get value from form element
      const target = event.target;
      const Name= target.Name.value;
      const Prenom = target.Prenom.value;
      const Tel = target.Tel.value;
      const Email = target.Email.value;
      const Place = target.Place.value;



      console.log(target);
      console.log(Name);

      console.log(Prenom);
      console.log(Tel);
     
      console.log(Email);
      console.log(Place);
      console.log(idAtelier);
      // Insert a task into the collection

      Reserves.insert({
        
        Name,
        Prenom,
        Tel,
        Email,
        Place,
        idAtelier,
        createdAt: new Date(), // current time
  
      });

      // Clear form
      target.Name.value = '';
      target.Prenom.value = '';
      target.Tel.value = '';
      target.Email.value = '';
      target.Place.value = ''; 
      
    },

    /********************* */

     //Update
     'submit .save'(event){
        event.preventDefault();

        //Récupère valeur dans l'élément form (formulaire)
        const target = event.target;
        const Etitle = target.Etitle.value;
        const Etext = target.Etext.value;
        const Edate = target.Edate.value;
        const Ehoraire = target.Ehoraire.value;
        const Eduree = target.Eduree.value;
        const Edispo = target.Edispo.value;
        const Eprix = target.Eprix.value;
        const Eimage = target.Eimage.value
        const id = target.editId.value;
        
        //Mise à jour de la collection
        Ateliers.update(id, {
          $set:{title: Etitle, text: Etext, horaire: Ehoraire, duree: Eduree, date: Edate, dispo: Edispo, prix: Eprix, image: Eimage}
          });

          $('#exampleModal2').modal('hide')
    },
  
  });

  //Permet d'effacer element: db
  Template.carte.events({
    'click .delete': function() {
    Ateliers.remove(this._id);
  }

});

Template.modal2.events({
    'click .edit': function(event) {
      
      //Récupère l'identifiant de la valeur
      const target = event.target;
      const idAtelier = target.getAttribute('data-id');
      const atelier = Ateliers.findOne({_id:idAtelier});
      
      //Selectionnne l'id de la cellule
      const one = document.querySelector('#editTitle');
      const two = document.querySelector('#editText');
      const three = document.querySelector('#editDate');
      const four = document.querySelector('#editHoraire');
      const five = document.querySelector('#editDuree');
      const six = document.querySelector('#editDispo');
      const eight = document.querySelector('#editPrix');
      const nime = document.querySelector('#editImage');
      const id = document.querySelector('#edit-id');
  
      //Insert les valeurs de la collection dans la cellule
      one.value = atelier.title; 
      two.value = atelier.text;
      three.value = atelier.date;
      four.value = atelier.horaire;
      five.value = atelier.duree;
      six.value = atelier.dispo;
      eight.value = atelier.prix;
      nime.value = atelier.image;
      id.value = idAtelier;

    }
  });


  Template.accueil.events({

    'click .js-logout'(event,instance) {
    Meteor.logout();

    },
  });




//QUAND ON CLICK SUR LE BTN RESERVE DE LA CARTE RECUPERE L ID DE LA CARTE ET LA STOCK
  Template.carte.events({
    'click .res': function(event) {
    // Reserves.remove(this._id);
    const target = event.target;
    console.log(target);
    console.log(this._id);

    const hidden = document.querySelector('#edit-id');
    hidden.value =this._id;
  },
  
  
  });
