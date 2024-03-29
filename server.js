const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');

const path = require('path');
// server used to send emails
const app = express();
app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.json({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

app.use('/', router);

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) { res.sendFile(path.join(__dirname, 'build', 'index.html')); }); 
// go to project root and run node server to check if server is running 
app.listen(3000, () => console.log('Server Running'));




// email address messages sent to 
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "bcourt95@gmail.com",
        // gmail uses two factor authentication so you cant verify your password here. go to gmail account security and create application password to use here
        pass: "izdh izwl ippb vspo"
    },
});

// verify if contact email is running
contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

// create post request with API url to send data
router.post('/contact', (req, res) => {
    // what I will receive in the email
    const name = req.body.firstName + " " + req.body.lastName;
    const email = " " + req.body.email;
    const message = " " + req.body.message;
    const phone = " " + req.body.phone;
    const mail = {
        // how it will display to me in my email
        from: name,
        to: 'bcourt95@gmail.com',
        subject: 'Contact Form Submission - Portfolio',
        html: `<p>Name: ${name}</p>
               <p>Email:${email}</p>
               <p>Phone:${phone}</p>
               <p>Message:${message}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
        // if theres an error
        if (error) {
            // send error message
            res.json(error);
        } else {
            // otherwise send success message
            res.json({ code: 200, status: "Message Sent" });
        }
    });
});