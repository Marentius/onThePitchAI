const CHATBASE_API_URL = 'https://www.chatbase.co/api/v1/chat';
const CHATBASE_API_KEY = 'c6a26dfd-c794-40e9-aeab-e73240224173'; // Din API-nøkkel
const CHATBOT_ID = 'KXuGraOSA00cBH8VsZ6z4'; // Din chatbot ID

export const sendMessageToChatbase = async (message) => {
    console.log('Sending message to Chatbase:', message);
  
    try {
      const response = await fetch(CHATBASE_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${CHATBASE_API_KEY}`,
        },
        body: JSON.stringify({
          chatbotId: CHATBOT_ID,
          messages: [{ content: message, role: 'user' }],
          stream: false,
          temperature: 0.5,
          model: 'gpt-4o',
        }),
      });
  
      const responseData = await response.json();
      console.log('Chatbase API response:', responseData);
      if (!response.ok) {
        throw new Error(`API error: ${responseData.message || 'Unknown error'}`);
      }
      return responseData;
    } catch (error) {
      console.error('Error in API call:', error);
      throw error;
    }
  };
  