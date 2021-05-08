//* por qué paso callback acá? callback es una función per sé. Estoy pasando una función como parámetro. No necesita llamarse así, muchas veces por convención se lo llama cb.

const doMath = (i, j, callback) => {
    //*llamo al callback para pasarle el error:
    j === 0 && callback(new Error("estás dividiendo por 0!"));
    //*si funciona: null porque no hay error, y luego la operación. Con esto tambien tendria el manejo de errores ya mas o menos armado! un patrón interesante es usar como primer parametro el error, y si no falla se pasa el null
    callback(null, i / j);
};

//* aca vemos que se pasa en el mismo orden, error, success
// doMath(5, 0, (error, result) => {
//   if (error) throw error;
//   console.log(result);
// });

//* ahora, anidemos que vaya haciendo operaciones que no fallen:
doMath(100, 2, (error, result1) => {
    if (error) throw error;
    console.log(result1);
    doMath(result1, 2, (error, result2) => {
        if (error) throw error;
        console.log(result2);
        doMath(result2, 4, (error, result3) => {
            if (error) throw error;
            console.log(result3);
            doMath(result3, 2, (error, result4) => {
                if (error) throw error;
                console.log(result4);
            });
        });
    });
});

//* ahí empezamos a entender por qué es un infierno, no?
