const product = {
  id: 101,
  name: 'Laptop',
  price: 999,
  specs: {
    ram: '16GB',
    storage: '512GB SSD'
  }
};

const { name } = product;
const { price } = product;
const { specs: { ram } } = product;

console.log(name);  
console.log(price);  
console.log(ram);   
