import nodemailer from 'nodemailer';
import config from '../config';

export const sendMail = (hotelData: any) => {
    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
        host: 'genustravels.com', // Replace with your actual mail server
        port: 465, // Use 465 if using SSL
        secure: true,
        auth: {
            user: config.mail, // replace with your Gmail
            pass: config.mail_pass, // use App Password if 2FA is enabled
        },
    });

    // Mail options
    const mailOptions: nodemailer.SendMailOptions = {
        from: config.mail,
        to: 'info@genustravels.com',
        subject: `(List Your Hotel) New information update from ${hotelData['Hotel Name']}`,
        text: `Information update from ${hotelData['Hotel Name']}`,
        html: `
                <h2>${hotelData['Hotel Name']}</h2>
                <p><strong>Address:</strong> ${hotelData.Address}</p>
                <p><strong>Website:</strong> <a href="http://${hotelData.Website}">${hotelData.Website}</a></p>
                <p><strong>Email:</strong> <a href="mailto:${hotelData.Email}">${hotelData.Email}</a></p>
                <p><strong>Phone:</strong> ${hotelData['Phone  ']}</p>
                <p><strong>Contact Person:</strong> ${hotelData['Contact Name * ']}</p>


                <h3>Check-in / Check-out</h3>
                <p><strong>Check-in Time:</strong> ${hotelData['Check-in Time']}</p>
                <p><strong>Check-out Time:</strong> ${hotelData['Check-out Time']}</p>

                <h3>Cancellation Policy</h3>
                <p>${hotelData['Cancellation Policy ']}</p>
                
        `,
    };

    // Send mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};
