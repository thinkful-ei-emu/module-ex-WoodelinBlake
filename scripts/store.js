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
      const obj = this.findByID(id);
      obj.checked = !obj.checked;
    },

    findAndUpdateName: function(id, newName){
      Item.validateName(this.findByID(id));
      const object = this.findByID(id);
      object.name = newName;
      console.log('name updated');
    },

    findAndDelete: function(id){
      this.items = this.items.filter(obj => obj.id !== id);
    }

  };
}());

//store.items.push(Item(cereal, ))
