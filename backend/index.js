const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config(); // if using .env for the API key

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const NEWS_API_KEY = process.env.NEWS_API_KEY || 'deead443f0014fa3bd4301636136f0f8';

app.get('/api/news', async (req, res) => {
  const { q } = req.query;

  try {
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: { q, apiKey: NEWS_API_KEY },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
