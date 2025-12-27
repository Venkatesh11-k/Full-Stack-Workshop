// 1 Problem
const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  pages: 310,
  isRead: true,

  getSummary: function () {
    return this.title + " by " + this.author + ", " + this.pages + " pages";
  }
};

 
console.log(book.title);        
console.log(book.getSummary()); 


// 2 Problem
const calc = {
  result: 0,

  add: function (n) {
    this.result += n;
    return this;
  },

  subtract: function (n) {
    this.result -= n;
    return this;
  },

  multiply: function (n) {
    this.result *= n;
    return this;
  },

  divide: function (n) {
    this.result /= n;
    return this;
  },

  getResult: function () {
    return this.result;
  },

  reset: function () {
    this.result = 0;
    return this;
  }
};

const result = calc
  .reset()
  .add(10)
  .subtract(2)
  .multiply(3)
  .divide(4)
  .getResult();

console.log(result); 

// 3 Problem
const counter = {
  count: 0,

  increment: function () {
    this.count++;
  },

  decrement: function () {
    this.count--;
  },

  reset: function () {
    this.count = 0;
  },

  getCount: function () {
    return this.count;
  }
};

counter.increment();
counter.increment();
console.log(counter.getCount()); 
counter.decrement();
console.log(counter.getCount()); 
counter.reset();
console.log(counter.getCount()); 

// 4 Problem
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

// 5 Problem
const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'admin' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'editor' }
];

function formatUser({ name, email, role = 'user' }) {
    return `${name} (${role}): ${email}`;
}

users.forEach(user => console.log(formatUser(user)));

// 6 Problem
const defaults = { theme: 'light', notifications: true, language: 'en' };
const userPrefs = { theme: 'dark', fontSize: 16 };

const finalSettings = { ...defaults, ...userPrefs, timestamp: new Date() };

console.log(finalSettings);

// 7 Problem
const students = [
    { id: 1, name: 'Alice', scores: [85, 90, 78] },
    { id: 2, name: 'Bob', scores: [70, 75, 80] },
    { id: 3, name: 'Charlie', scores: [90, 95, 88] }
];

function transformStudents(students) {
    const result = {};
    students.forEach(({ name, scores }) => {
        const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
        result[name] = parseFloat(avg.toFixed(2));
    });
    return result;
}

console.log(transformStudents(students));

//8
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

console.log(getProperty(user, 'name'));             
console.log(getProperty(user, 'address.city'));     
console.log(getProperty(user, 'address.country')); 
console.log(getProperty(user, 'phone.number'));  

// 9 Problem
const config = {
    theme: 'dark',
    fontSize: 14
};

const { theme: colorTheme, fontSize, language = 'en', debugMode = false } = config;

console.log(colorTheme); 
console.log(fontSize);   
console.log(language);   
console.log(debugMode); 