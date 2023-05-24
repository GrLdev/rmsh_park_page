import sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY } from '$env/static/private';

sgMail.setApiKey(SENDGRID_API_KEY);

/**
 * @param {{ toString: () => any; }} email
 */
export async function sendEmail(email) {
    const msg = {
      to: email?.toString(),
      from: 'toby@ratemystudenthome.com',
      subject: 'Test Subject',
      text: 'Test Text',
      html: '<strong>test html</strong>',
    };
  
    try {
      await sgMail.send(msg);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
  