import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_8b8er9f'; 
const TEMPLATE_ID = 'template_7neh30n'; 
const PUBLIC_KEY = '2tXxWCbjkotB8iqOn';

export const sendProjectEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID, 
      TEMPLATE_ID, 
      formData, 
      PUBLIC_KEY
    );
    console.log('SUCCESS!', response.status, response.text);
    return { success: true, data: response };
  } catch (error) {
    console.error('FAILED...', error);
    return { success: false, error };
  }
};