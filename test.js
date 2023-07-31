function namesss(stringthing) {
  return function () {
    return "hello " + stringthing;
  };
}

const mything = namesss("Sugat").call();

console.log(mything);
