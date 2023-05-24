
import { sendEmail } from './emailSender.js';


export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email');
        console.log(email + ' - email retrieved via POST');
        if (email != null) {
            await sendEmail(email.toString());
        }
    },
};  
