const { google } = require('googleapis');
const { OAuth2 } = google.auth;
const oAuth2Client = new OAuth2(
    '999212619681-d2k6udrfcfonqohi796ndlic79qtcs4e.apps.googleusercontent.com',
    '65v6EOyqkD4PKBua7inLBFmW'
);
oAuth2Client.setCredentials({
    refresh_token: '1//04i_dzo3MvQe8CgYIARAAGAQSNwF-L9Irc4475Rrli0N9c0KeOKGLdb4Z-9grUtOFqFX7aEsmuVSxOKgY-p7aZjKZORfUV2NjSa0'
})
const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

function getFreeBusy(calendarId, startTime, endTime) {
    return new Promise((resolve, reject) => {
        calendar.freebusy.query({
            requestBody: {
                timeMin: startTime,
                timeMax: endTime,
                timeZone: 'Europe/Kiev',
                items: [
                    {
                        id: calendarId
                    }
                ]
            }
        }, (err, res) => {
            if (err) reject(err);

            const eventArr = res.data.calendars[calendarId].busy;

            resolve(eventArr);
        });
    });

}


module.exports = getFreeBusy;