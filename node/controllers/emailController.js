const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.resend.com",
    port: 587,
    auth: {
        user: "resend", 
        pass: "re_Cr9GP2CN_J7ZZZqGsUGMtPb5dUxtCKXgy"
    }
});

const sendEmail = async (req, res) => {
    console.log("I am in the sendEmail function")
    console.log(req.body)
    const { name, email, message, propertyId, phone, type, address, user } = req.body;
    console.log(name, email, message, propertyId, phone, type)
    const mailOptions = {
        from: "onboarding@resend.dev", 
        to: "g025871176@gmail.com", 
        subject: `הודעה מהאתר: ${type} - ${address?address:``} ${propertyId?`id: ${propertyId}`:``}`,
        text: `שם: ${name || user.name}\nאימייל: ${email || user.email} \nמס' פלאפון:${phone || user.phone}\n\n${message?message:""}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "המייל נשלח בהצלחה" });
    } catch (error) {
        console.error("שגיאה בשליחה:", error);
        res.status(500).json({ message: "שליחת המייל נכשלה" });
    }
}

module.exports = sendEmail;