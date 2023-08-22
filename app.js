const schedule = require('node-schedule');

const someDate = new Date('9-08-2023 07:30:00');

schedule.scheduleJob(someDate, () => {
    console.log(`Job ran at ${someDate}`);
});