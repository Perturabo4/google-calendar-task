const getFreeBusy = require('./googleApi');
const startTime = new Date(2021, 5, 7);
const endTime = new Date(2021, 5, 9);


getFreeBusy('perturabo40@gmail.com', startTime, endTime)
    .then(arrBusy => console.log(arrBusy));

