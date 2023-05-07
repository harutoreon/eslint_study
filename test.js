function hello(name) {
  if (!name) {
    return 'hello';
  } else {
    document.body.textContent = 'Hello, ' + name + '!';
  }
}

hello('World');  // Hello, World!