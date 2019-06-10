/* eslint-disable strict */
'usestrict';

const Item = (function(){
  function validateName(name){
<<<<<<< HEAD
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
  
=======
    if(typeof(name) === 'undefined' ){
      throw TypeError('name does not exist');
>>>>>>> 611f595830c78d5e9afd2d4a91c7043ff9c77145
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


 