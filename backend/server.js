const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Allow cross-origin requests
const app = express();
const PORT = 5009;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Route to test the server is running
app.get('/', (req, res) => {
    res.send('Backend Server is Running');
});

// API route to handle chat messages
app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.message; // Get the message from frontend
    console.log("Received message from user:", userMessage); // Log user message

    try {
        // Make a request to the Hugging Face API
        const response = await axios.post(
            'https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', // Model URL
            { inputs: userMessage }, // Send the user input to the model
            {
                headers: {
                    'Authorization': `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
// Replace with your Hugging Face API Key
                },
            }
        );

        // Log the response from Hugging Face for debugging
        console.log("Response from Hugging Face API:", response.data);

        // Extract and send the response message from Hugging Face
        const generatedMessage = response.data[0]?.generated_text || "Sorry, I couldn't understand that.";
        res.json({ message: generatedMessage });

    } catch (error) {
        console.error('Error fetching from Hugging Face API:', error);
        res.status(500).json({ error: 'Failed to fetch response from Hugging Face API' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

