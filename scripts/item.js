/* eslint-disable strict */
'usestrict';

const Item = (function(){
  function validateName(name){
    if(name === 'undefined' ){
      throw ('name does not exist');
   }
    }
    try {
      validateName('undefined');
    }
    catch(e){
      console.log(e);
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


 