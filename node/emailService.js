const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'g025871176@gmail.com',
        pass: 'YOUR_APP_PASSWORD' // סיסמת אפליקציה מגוגל
    }
});

const sendEmail = async (subject, message, from = 'מערכת האתר') => {
    const mailOptions = {
        from: `"${from}" <YOUR_EMAIL@gmail.com>`,
        to: 'ADMIN_EMAIL@gmail.com',
        subject,
        text: message
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ', info.response);
    } catch (err) {
        console.error('Error sending email:', err);
    }
};

module.exports = sendEmail;
