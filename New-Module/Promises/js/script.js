const friend = {
    status: 'failure',
};

const request = new Promise((resolve, reject) => {
    if (friend.status === 'success') {
        friend.time = '12.00';
        resolve(friend);
    } else {
        friend.xato = 'Errror';
        reject(friend);
    }
});

request
    .then((data) => {
        data.place = 'Humo';
        return data;
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('Warning 3!');
    });

const logger = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
};

Promise.all([logger(1000), logger(2000)]).then(() => {
    console.log('All promise was resolved!');
});

Promise.race([logger(1000), logger(2000)]).then(() => {
    console.log('All promise has resolved!');
});

logger(1000).then(() => {
    console.log('1000 ms');
});
logger(2000).then(() => {
    console.log('2000 ms');
});
