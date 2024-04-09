
import NodeMailer from "nodemailer";
import path from "path";
import hbs from "nodemailer-express-handlebars";

const sendEmail = async (email) => {
    var transporter = NodeMailer.createTransport({
        service: "yandex",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const handlebarOptions = {
      viewEngine: {
        extName: ".handlebars",
        partialsDir: path.resolve('./email'),
        defaultLayout: false,
      },
      viewPath: path.resolve('./email'),
      extName: ".handlebars",
    }
    transporter.use('compile', hbs(handlebarOptions));

    var mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "You’ve been granted Early Access to User Metrics!",
        template: "index",
        context: {
            email: email,
        },
        attachments: [
            {
                filename: 'logo.png',
                path: path.resolve("./email/logo.png"),
                cid: "logo"
            },
            {
                filename: 'banner.png',
                path: path.resolve("./email/HandsPhone.png"),
                cid: "handsPhone"
            },
            {
                filename: 'linkedinImg.png',
                path: path.resolve("./email/linkedin.png"),
                cid: "linkedin"
            },
            {
                filename: 'twitterImg.png',
                path: path.resolve("./email/twitter.png"),
                cid: "twitter"
            },
        ]
    }

    await transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
}


export default sendEmail;
