const makeMatrix = (cols, rows) => {
    var arr = new Array(cols);
    for (var i = 0; i< arr.length; i++) {
        arr[i] = new Array(rows)
    }
    for (var i = 0; i< arr.length; i++) {
        arr[i].fill(0);
    }
    
    return arr;
}

const horner = (polinomio1 = [], polinomio2 = []) => {
    finalGrade = polinomio1.length-polinomio2.length;

    /*Definimos variables, 
    las vaiables columns y answer usamos en la primera forma de resolver el problema.
    Pero las variables rows answer y matrix usamos en la segunda forma*/
    answer = [];
    columns = [];
    rows = [];
    matrix = makeMatrix((polinomio1.length-(polinomio2.length-1)), polinomio1.length);
    console.log(matrix)

    /*SEGUNDA FORMA DE RESOLVER*/
    /*Primero generamos la matriz de ceros*/
    // for(let i = 1; i<=polinomio1.length; i++){
    //     rows.push(0);
    // }
    // for(let i = 1; i<=(polinomio1.length-(polinomio2.length-1)); i++){
    //     matrix.push(rows);
    // }
    // console.log(matrix);
    /*Así se deberí ver mi matriz al final*/
    // matrix = [
    //     [polinomio1[0], answer[0]*(-polinomio2[1]), answer[0]*(-polinomio2[2]), 0                         ,        0                    ,      0],
    //     [0            , polinomio1[1]             , answer[1]*(-polinomio2[1]), answer[1]*(-polinomio2[2]),        0,                   ,      0],
    //     [0            , 0                         , polinomio1[2]             , answer[2]*(-polinomio2[1]), answer[2]*(-polinomio2[2])  ,      0],
    //     [0            , 0                         , 0                         , polinomio1[3]             , answer[3]*(-polinomio2[1])  , answer[3]*(-polinomio2[2])]
    // ]

    /*Ahora procedemos a resolver todo*/
    for(let i = 0; i<(polinomio1.length-(polinomio2.length-1)); i++){
        console.log("Ciclo " + i);
        /*Este ciclo opera para sumar cada columna de la matriz, y actualizar el dato del polinomio 1*/
        for(let j = 0; j<(polinomio1.length-(polinomio2.length-1)); j++){
            polinomio1[i] = polinomio1[i] + matrix[j][i]
        }
        /*
        matrix = [
            [ 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0 ]
        ]
        */
        
        answer[i] = polinomio1[i]/polinomio2[0];
        matrix[i][i] = polinomio1[i];
        k=i+1
        for(let j = 1; j<=(polinomio2.length-1); j++){ 
            matrix[i][k] = answer[i]*(-polinomio2[j])
            k++
        }
        console.log(polinomio1)
        console.log(matrix)
        // console.log(matrix);
        // /*Pruebas raras*/ç
        // polinomio1[0] = polinomio1[0] + matrix[0][0]
        // polinomio1[0] = polinomio1[0] + matrix[1][0]
        // polinomio1[0] = polinomio1[0] + matrix[2][0]
        // polinomio1[0] = polinomio1[0] + matrix[3][0]
        // answer[0] = polinomio1[0]/polinomio2[0];
        // matrix[0][0] = polinomio1[0]
        // matrix[0][1] = answer[0]*(-polinomio2[1])
        // matrix[0][2] = answer[0]*(-polinomio2[2])


        // polinomio1[1] = polinomio1[1] + matrix[0][1]
        // polinomio1[1] = polinomio1[1] + matrix[1][1]
        // polinomio1[1] = polinomio1[1] + matrix[2][1]
        // polinomio1[1] = polinomio1[1] + matrix[3][1]
        // answer[1] = polinomio1[1]/polinomio2[0];
        // matrix[1][1] = polinomio1[1]
        // matrix[1][2] = answer[1]*(-polinomio2[1])
        // matrix[1][3] = answer[1]*(-polinomio2[2])


        // polinomio1[2] = polinomio1[2] + matrix[0][2]
        // polinomio1[2] = polinomio1[2] + matrix[1][2]
        // polinomio1[2] = polinomio1[2] + matrix[2][2]
        // polinomio1[2] = polinomio1[2] + matrix[3][2]
        // answer[2] = polinomio1[2]/polinomio2[0];
        // matrix[2][2] = polinomio1[2]
        // matrix[2][3] = answer[2]*(-polinomio2[1])
        // matrix[2][4] = answer[2]*(-polinomio2[2])

        // polinomio1[3] = polinomio1[3] + matrix[0][3]
        // polinomio1[3] = polinomio1[3] + matrix[1][3]
        // polinomio1[3] = polinomio1[3] + matrix[2][3]
        // polinomio1[3] = polinomio1[3] + matrix[3][3]
        // answer[3] = polinomio1[3]/polinomio2[0];
        // matrix[3][3] = polinomio1[3]
        // matrix[3][4] = answer[3]*(-polinomio2[1])
        // matrix[3][5] = answer[3]*(-polinomio2[2])

        // answer[4] = polinomio1[4] + matrix[-1][-2] + matrix[-2][-2]
        // answer[5] = polinomio1[5] + matrix[-1][-1]
    }

    res = [];
    // for (let i = 0 ; i <= polinomio1.length-(polinomio2.length); i++) {
    //     res[i] = matrix[i][4] 
    // }
    for (let i = polinomio1.length-(polinomio2.length-1); i<=polinomio1.length-1; i++){
        for (let j = 0 ; j < polinomio1.length-(polinomio2.length-1); j++){
            polinomio1[i] = polinomio1[i] + matrix[j][i]
        }
        res.push(polinomio1[i])
    }
    console.log(answer)
    console.log(res)
    //PRIMERA FORMA DE RESOLVER EL PROBLEMA, ESTA FORMA ES INEFICIENTE
    // answer[0] = polinomio1[0]/polinomio2[0]
    // columns = [
    //     [polinomio1[0], answer[0]*(-polinomio2[1]), answer[0]*(-polinomio2[2])]
    // ] 
    // polinomio1[1] = polinomio1[1] + columns[0][1];

    // answer[1] = polinomio1[1]/polinomio2[0];
    // columns = [
    //     [polinomio1[0], answer[0]*(-polinomio2[1]), answer[0]*(-polinomio2[2])],
    //     [polinomio1[1], answer[1]*(-polinomio2[1]), answer[1]*(-polinomio2[2])]
    // ];
    // polinomio1[2] = polinomio1[2] + columns[0][2] + columns[1][1];

    // answer[2] = polinomio1[2]/polinomio2[0];
    // columns = [
    //     [polinomio1[0], answer[0]*(-polinomio2[1]), answer[0]*(-polinomio2[2])],
    //     [polinomio1[1], answer[1]*(-polinomio2[1]), answer[1]*(-polinomio2[2])],
    //     [polinomio1[2], answer[2]*(-polinomio2[1]), answer[2]*(-polinomio2[2])]
    // ];
    // polinomio1[3] = polinomio1[3] + columns[1][2] + columns[2][2];

    // answer[3] = polinomio1[3]/polinomio2[0];
    // columns = [
    //     [polinomio1[0], answer[0]*(-polinomio2[1]), answer[0]*(-polinomio2[2])],
    //     [polinomio1[1], answer[1]*(-polinomio2[1]), answer[1]*(-polinomio2[2])],
    //     [polinomio1[2], answer[2]*(-polinomio2[1]), answer[2]*(-polinomio2[2])],
    //     [polinomio1[3], answer[3]*(-polinomio2[1]), answer[3]*(-polinomio2[2])]
    // ];
    // polinomio1[4] = polinomio1[4] + columns[2][2] + columns[3][1];

    // answer[4] = polinomio1[4]
    // answer[5] = polinomio1[5] + columns[3][2]; 

    // console.log(answer);
}


const run = () => {
    numeratorCoef = [];
    denominatorCoef = [];
    numeratorGrade = prompt("Ingrese el grado del numerador");
    for(let i=1; i<=numeratorGrade; i++) {
        numeratorCoef.push(prompt("Ingrese el coeficiente " + i + ": "));
    }
    denominatorGrade = prompt("Ingrese el grado del denominador");
    for(let i=1; i<=denominatorGrade; i++) {
        denominatorCoef.push(prompt("Ingrese el coeficiente " + i + ": "));
    }
    console.log("Numerador: " + numeratorCoef);
    console.log("Denominador: " + denominatorCoef);
}


// run();
// horner([4, -16, 17, 3, -12, 4],[2, -3, 1]);
// horner([3, 4, 2, -10, 7], [3, -5, 2]);
horner([38, -65, 0, 0, 27], [2, -5, 3]);