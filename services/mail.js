var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');
const path = require('path')
module.exports = {
    sendEmail: async (taskTitle, name, email, message) => {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ketanvaghela2230@gmail.com',
                pass: 'bpnqfviozcxpptid'
            },
        });

        const handlebarOptions = {
            viewEngine: {
                extName: ".handlebars",
                partialsDir: path.resolve('./templates'),
                defaultLayout: false,
            },
            viewPath: path.resolve('./templates'),
            extName: ".handlebars",
        }

        transporter.use('compile', hbs(handlebarOptions));

        var mailOptions = {
            from: 'ketanvaghela2230@gmail.com',
            to: email,
            subject: 'Email Send Successfully',
            template: 'email',
            context: {
                name: name,
                taskTitle: taskTitle,
                message: message
            }
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                return false
            } else {
                console.log('Email sent Successfully: ' + info.response);
                return true
            }
        });
    }
}