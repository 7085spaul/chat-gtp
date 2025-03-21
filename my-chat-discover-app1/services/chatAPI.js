import axios from 'axios';

export const getChatResponse = async (userMessage) => {
  try {
    const response = await axios.post('https://api-inference.huggingface.co/models/YOUR_MODEL_NAME', {
      inputs: userMessage,
    });
    return response.data.generated_text;
  } catch (error) {
    console.error('Error fetching chat response', error);
  }
};
