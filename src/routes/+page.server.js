/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request}) => {
        // TODO: Verify email
        const data = await request.formData();
        const email = data.get('email')
        console.log(email)
    }
};