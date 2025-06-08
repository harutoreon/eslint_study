function hello(name) {
  if (name !== '') {
    console.log('Hello, ' + name);
  } else {
    console.error('引数がありません。');
  }
}

hello('World');
hello('');

const user = {
  name: 'Alice',
  age: 30
};

console.log(user);

class Person {}
const person = new Person();
console.log(person);

const array = [];
console.log(array);

function area(width, height) {
  return width * height;
}

console.log(area(0.5, 2.0));

// コメント
/* コメント */
