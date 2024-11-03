const express = require('express');
const fetch = require('node-fetch'); // Jika menggunakan fetch, install dulu dengan `npm install node-fetch`
const app = express();
const PORT = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Endpoint untuk menerima permintaan dari aplikasi
app.post('/send-telegram', async (req, res) => {
    const { message } = req.body;
    
    // Ganti dengan token bot dan chat ID yang sesuai
    const botToken ';
    const chatId = '';
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
        const response = await fetch(telegramUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text: message })
        });
        const data = await response.json();
        res.status(200).send({ success: true, data });
    } catch (error) {
        console.error("Error sending message:", error);
        res.status(500).send({ success: false, error: error.message });
    }
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
