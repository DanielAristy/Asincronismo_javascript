const getMessage = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            setTimeout(() => {
                resolve('true')
            }, 3000);
        }else{
            let error = new Error('Error de mensaje!')
            reject(error);
        }
    })
}

getMessage()
    .then(response => console.log(response))
    .catch(err => console.error(err));