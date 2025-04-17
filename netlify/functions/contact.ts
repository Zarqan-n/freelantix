const axios = require('axios');

// Retrieve the bot token from environment variables
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN; // This retrieves the token from Netlify's environment variables
const CHAT_ID = '7855526177'; // Replace with your actual chat ID

// The function that sends the message to your Telegram
async function sendMessageToTelegram(messageText) {
  try {
    const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: messageText,
      parse_mode: 'Markdown', // Optional: to format the message with markdown
    });
    console.log('Message sent to Telegram:', response.data);
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
  }
}

// Netlify function handler
exports.handler = async function(event, context) {
  if (event.httpMethod === 'POST') {
    const { name, email, subject, message } = JSON.parse(event.body);

    const messageText = `
      *New Contact Form Submission*\n
      *Name:* ${name}\n
      *Email:* ${email}\n
      *Subject:* ${subject}\n
      *Message:* ${message}
    `;

    // Send message to Telegram
    await sendMessageToTelegram(messageText);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message sent successfully' }),
    };
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }
};
