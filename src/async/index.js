const getFunctionAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Funcion Asincrona'), 3000)
        : reject(new Error('Test Error'))
    })
}

const executeFunctionAsync = async () => {
    try {
        const functionAsync = await getFunctionAsync();
        console.log(functionAsync);
    } catch (error) {
        console.error(error);
    }
}

console.log('Antes');
executeFunctionAsync();
console.log('Despues');