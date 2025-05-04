const express = require('express');
const router = express.Router();
const sendEmail = require('../emailService');

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;
    const subject = `הודעה חדשה מאת ${name}`;
    const fullMessage = `נשלח מכתובת: ${email}\n\n${message}`;

    try {
        await sendEmail(subject, fullMessage, name);
        res.status(200).json({ success: true, message: 'Email sent' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to send email' });
    }
});

module.exports = router;
