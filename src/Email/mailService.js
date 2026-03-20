import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_blri8bn'; 
const TEMPLATE_ID = 'template_5com29t'; 
const PUBLIC_KEY = 'YCgm5qH1LTsH1RH5j';

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