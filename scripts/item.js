/* eslint-disable strict */
'usestrict';

const Item = (function(){
  let item = function newItem(name, checked){
    return {id: cuid(), name, checked};
  }
  return item;
}());

 