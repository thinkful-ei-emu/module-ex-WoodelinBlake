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
      console.log(this.items.push(newItem));
    }



  };
}());

//store.items.push(Item(cereal, ))
