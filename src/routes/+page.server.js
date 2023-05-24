
const sgMail = require('@sendgrid/mail')

import { SENDGRID_API_KEY } from '$env/static/private'

sgMail.setApiKey(SENDGRID_API_KEY)

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request}) => {
        // TODO: Verify email
        const data = await request.formData();
        const email = data.get('email')
        console.log(email + " - email submitted")

    }
};