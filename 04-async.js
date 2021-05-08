const users = [
  {
    id: 1,
    name: "Roberto",
    address: "Av Corrientes 4585",
  },
  {
    id: 2,
    name: "Natalia",
    address: "Av La Plata 1542",
  },
  {
    id: 3,
    name: "Ernesto",
    address: "Encalada 482",
  },
];

//*ver los datos de forma sincrónica:
// const getUsers = () => users;

// console.log(getUsers());

//* y si fuera asincrónica? por ejemplo, estamos llamando nuestra api:
//* cuando trabajamos datos mock, es una buena idea usar un setTimeput para probarla lo más cerca posible de la realidad

//*si lo queremos correr directamente así va a dar indefinido!
// const getUsers = () => {
//   setTimeout(() => {
//     return users

//   // }, 500);
//   //* podemos también hacer que el timeout sea un poco más random, para mayor realismo. Este nos daría un random entre 3s y 300ms:
//    }, Math.round(Math.random() * (3000 - 500)) + 500)
// };

// console.log(getUsers());

//* podemos aplicar lo que vimos de promises, o hacer un async:
//*promise:
// const getUsers = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(users);
//       reject(new Error("whoops"));
//     }, Math.round(Math.random() * (3000 - 500)) + 500);
//   });
// };

//* version con error custom:
const getUsers = () => {
  return new Promise((resolve, reject) => {
    if(users.length === 0 ) {
      reject(new Error("whoops"));
    }
    
    setTimeout(() => {
      resolve(users);
      
    }, Math.round(Math.random() * (3000 - 500)) + 500);
  });
};

//*si la pedimos así, queda eternamente en pending! devuelve un objeto promise
// // console.log(getUsers());
//*así es como se ejecuta:
// getUsers()
//   .then((users) => console.log(users))
//   .catch((err) => console.log(err));

//*y ahora con async:  getUsers tal como estaba, pero el fetch lo envolvemos con el async:

const getList = async () => {
  try {
    const usersGroup = await getUsers();
    console.log(usersGroup);
  } catch (error) {
    console.log(error);
  }
};
getList();
