var nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars')
const path = require('path')

function mailer(tomail, bcc, cc, message) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nodemailertest10@gmail.com',
            pass: 'testmail@123'
        }
    });



    transporter.use('compile', hbs({
        viewEngine: 'express-handlebars',
        viewPath: `./`
    }))



    var mailOptions = {
        from: 'nodemailertest10@gmail.com',
        to: tomail, // if multiple   'demo1@gmail.com , demo2@gmail.com , demo3@gmail.com'
        cc: 'yagnesh@nimapinfotech.com',
        bcc: 'yagnesh@nimapinfotech.com',
        subject: 'Sending Email using Node.js',
        text: message,
        attachments: [
            { filename: 'git-essentials.pdf', path: '../public/git-essentials.pdf' }
        ],
        template: 'main'
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

mailer('mandeep@nimapinfotech.com', "MAil from NodeMailer")
    // console.log(path.join(__dirname, '../public/views/'))
module.exports = mailer;