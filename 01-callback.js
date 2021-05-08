//* esta forma de pasar los callback es bastante util para controlar la asincronia.

const hello = (cb) => {
  const text = "hola";
  cb(text);
};

//*de esta forma puedo pasar en hello solo el texto y poner que haga el console.log cuando ejecuto

hello((message) => console.log(message));
