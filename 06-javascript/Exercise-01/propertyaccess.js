
const user = {
  name: 'Alice',
  address: {
    city: 'Seattle',
    zip: '98101'
  }
};

function getProperty(obj, path) {
  const keys = path.split('.');
  let current = obj;

  for (let key of keys) {
    if (current && key in current) {
      current = current[key];
    } else {
      return undefined;
    }
  }

  return current;
}

console.log(getProperty(user, 'name'));             // 'Alice'
console.log(getProperty(user, 'address.city'));     // 'Seattle'
console.log(getProperty(user, 'address.country'));  // undefined
console.log(getProperty(user, 'phone.number'));     // undefined
