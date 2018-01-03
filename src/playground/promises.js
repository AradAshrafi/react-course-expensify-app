const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is my data');
        reject('request failed');
    }, 3500);
});

promise
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log('error : ', error);
    });
