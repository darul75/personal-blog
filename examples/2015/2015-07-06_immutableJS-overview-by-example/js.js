var value = {
 name: julien,
 aka: darul75
};
var myMap = Immutable.Map({});
myMap.set('myMapKey', value);

// we gonna update 'aka' attribute
/*var newMyMap = myMap.update('myMapKey', (myMapValue) => {
  myMapValue.aka = 'darul';
  //  todo = todo.set(key, updates[key]);
  return myMapValue;
});
*/
console.log(newMyMap.get('myMapKey'));