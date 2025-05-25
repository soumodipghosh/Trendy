const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/news', async (req, res) => {
  const { q } = req.query;

  try {
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q,
        apiKey: process.env.NEWS_API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
