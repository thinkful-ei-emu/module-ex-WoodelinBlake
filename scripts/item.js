/* eslint-disable strict */
'usestrict';

const Item = (function(){
  function validateName(name){
    if(typeof(name) === 'undefined' ){
      throw TypeError('name does not exist');
    }
   }
    function create(name){
    return {
        id: cuid(), name(name)
  
    }
  }
  
  let item = function newItem(name, checked){
    validateName(name);
    return {id: cuid(), name, checked};
  }
  return item;

  
}());


 