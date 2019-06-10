'use strict';




const store = (function(){

 
  return {
    items: [
      { id: cuid(), name: 'apples', checked: false },
      { id: cuid(), name: 'oranges', checked: false },
      { id: cuid(), name: 'milk', checked: true },
      { id: cuid(), name: 'bread', checked: false }
    ],
    hideCheckedItems: false,
    searchTerm: '',
    findByID: function(id){
        return this.items.find(object =>  object.id === id);
    },

    addItem: function(name){
      const newItem = Item.create(name);
      this.items.push(newItem);  
    },

    findAndToggleChecked: function(id){
      this.findByID();
      
    },

    findAndUpdateName: function(id,newName){
      try{ 
        Item.validateName(findByID(id));
        const object = this.findByID(id);
        object.name = newName;
      } 
      catch(error){console.log('Cannot update name:{error.message}')}
    },

    findAndDelete: function(id){
      
      // newItem = this.items.filter(object => object.id = id) 
      delete this.items.indexOf(object => object.id = id);
    }

  };
}());

//store.items.push(Item(cereal, ))
