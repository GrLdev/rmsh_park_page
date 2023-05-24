import { Client } from '@sendgrid/client';
import { SENDGRID_API_KEY } from '$env/static/private';

const sendGridClient = new Client();
sendGridClient.setApiKey(SENDGRID_API_KEY);

/**
 *  @param {{ toString: () => string; }} email
 */
export async function addContact(email) {
  const data = {
    contacts: [
      {
        email: email,
      },
    ],
  };

  const request = {
    url: '/v3/marketing/contacts',
    body: data,
  };

  try {
    const [response, body] = await sendGridClient.request(request);
    console.log(response.statusCode);
    console.log(response.body);
  } catch (error) {
    console.error(error);
  }
}
