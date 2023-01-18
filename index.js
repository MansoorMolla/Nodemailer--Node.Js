
const nodemailer = require('nodemailer');


let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'example@gmail.com',
        pass: 'xxxxxxxxx'
    }
});

let mailDetails = {
    from: 'from@gmail.com',
    to: 'to@gmail.com',
    subject: 'Thank you for shopping at us',
    text: 'Hi user , we are sorry for inconvinence caused , thanks for reaching out , we are looking into isssue , will get back to you once it resolved'
};

mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
});

