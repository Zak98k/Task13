function isObject(val) {
  const type = typeof val
  return val != null && (type === 'object' || type === 'function')
}

module.exports = (array, property) => {
  let shifter=0;

  return array.map(function func(item) {
    item=item[property.split('.')[shifter]];
    if(!isObject(item)){
      shifter=0
    }else{
      shifter++;
      return func(item)
    }
    return item
  });
}




