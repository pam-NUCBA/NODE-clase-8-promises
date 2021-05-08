//* vamos a emprolijar ese infierno:
//* por empezar, no necesitamos ese callback, sino que dividimos su función entre resolve y reject:
const doMath = (i, j) => {
  return new Promise((resolve, reject) => {
    j === 0 && reject(new Error("estás dividiendo por 0!"));
    resolve(i / j);
  });
};

const promise = doMath(100, 2);

promise
  .then((result1) => {
    console.log(result1);
    return doMath(result1, 2); //* esto es lo que el siguiente then va a agarrar!
  })
  .then((result2) => {
    console.log(result2);
    return doMath(result2, 2);
  })
  .then((result3) => {
    console.log(result3);
    return doMath(result3, 2);
  })
  //*el catch pasa a ser para todos!
  .catch((err) => console.log(err));
