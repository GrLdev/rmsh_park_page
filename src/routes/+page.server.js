
import sgMail from '@sendgrid/mail';

import { SENDGRID_API_KEY } from '$env/static/private'

sgMail.setApiKey(SENDGRID_API_KEY)

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email');
        console.log(email + " - email retrieved via POST");

        const msg = {
            to: email?.toString(),
            from: 'info@ratemystudenthome.com',
            subject: 'Test Subject',
            text: 'Test Text',
            html: '<strong>test html</strong>',
        };

        sgMail
            .send(msg)
            .then(() => {
                console.log('Email sent')
            })
            .catch((error) => {
                console.error(error)
            })
    },
};
