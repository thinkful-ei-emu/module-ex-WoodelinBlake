/* eslint-disable strict */
'usestrict';

const Item = (function(){
  function validateName(name){
    if(typeof(name) === 'undefined' ){
      throw TypeError('name does not exist');
    }
  }
 
  function create(name){
    validateName(name);
    return {id: cuid(), name, checked: false}
  }
  
  return {
    validateName: validateName(),
    create: create()
  };
}());


 