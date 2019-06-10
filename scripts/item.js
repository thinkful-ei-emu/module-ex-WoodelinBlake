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
    validateName(name);
    return {id: cuid(), name, checked: false}
  }
  
  return {
    validateName: validateName(),
    create: create()
  };
}());


 